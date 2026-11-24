import { useState } from 'react';
import { Layout } from '../components/Layout';
import { Modal } from '../components/Modal';
import { Onboarding } from '../components/Onboarding';
import { StatusBadge } from '../components/StatusBadge';
import { docTypeDef } from '../data/docTypes';
import { daysUntil, formatFr, todayISO } from '../lib/dates';
import { href } from '../lib/router';
import { buildAlerts, docLines, nextDeadline, worstStatus } from '../lib/status';
import { useStore } from '../lib/store';

/** Accueil : uniquement ce qui est urgent dans la fenêtre du seuil (30 jours par défaut), trié par échéance. */
export function Accueil() {
  const { state, dispatch } = useStore();
  const threshold = state.settings.alertThresholdDays;
  const alerts = buildAlerts(state.subcontractors, threshold);
  const expired = alerts.filter((a) => a.status === 'expire').length;
  const missing = alerts.filter((a) => a.status === 'manquant').length;
  const soon = alerts.filter((a) => a.status === 'bientot').length;
  const activeDossiers = state.dossiers.filter((d) => d.statut === 'en_cours');
  const endingSoon = activeDossiers.filter((d) => daysUntil(d.dateFin) <= threshold).length;

  // Sous-traitants à traiter : ceux qui ont au moins une alerte, triés par échéance la plus proche.
  const toHandle = state.subcontractors
    .map((s) => ({ s, lines: docLines(s, threshold) }))
    .filter(({ lines }) => worstStatus(lines) !== 'valide')
    .sort((a, b) => {
      const ra = rankSub(a.lines), rb = rankSub(b.lines);
      return ra - rb;
    });

  const empty = state.subcontractors.length === 0;
  const [welcome, setWelcome] = useState(state.mode === 'vide' && !state.settings.welcomeSeen);

  return (
    <Layout title="Accueil" actions={<span className="muted small">{formatFr(todayISO())}</span>}>
      {welcome && (
        <Modal title="Bienvenue" onClose={() => { setWelcome(false); dispatch({ type: 'UPDATE_SETTINGS', patch: { welcomeSeen: true } }); }}>
          <p>Cet outil vous aide à ne rien oublier dans le suivi des documents de vos sous-traitants : attestation URSSAF, immatriculation, assurances.</p>
          <p>Trois gestes suffisent : <strong>ajouter un sous-traitant</strong>, <strong>ouvrir un dossier</strong> pour chaque chantier, <strong>enregistrer ses documents</strong> avec leur date de fin. L’accueil vous montre ensuite ce qui expire ou manque dans le mois.</p>
          <p className="hint">Il ne vérifie rien à votre place auprès de l’URSSAF : la vérification reste un geste que vous faites, et que l’outil consigne.</p>
          <div className="row">
            <button className="btn btn-primary" onClick={() => { setWelcome(false); dispatch({ type: 'UPDATE_SETTINGS', patch: { welcomeSeen: true } }); }}>Commencer</button>
          </div>
        </Modal>
      )}

      {state.mode === 'vide' && !state.settings.onboardingDismissed && <Onboarding />}

      {empty ? (
        <section className="card empty-state">
          <h2>Aucun sous-traitant pour l’instant</h2>
          <p className="muted">Commencez par ajouter un sous-traitant, puis ouvrez un dossier pour son chantier.</p>
          <a className="btn btn-primary" href={href.newSubcontractor()}>+ Ajouter un sous-traitant</a>
        </section>
      ) : (
        <>
          <section className="kpis">
            <a className={`kpi ${expired ? 'kpi-expire' : ''}`} href="#alertes"><span className="kpi-value">{expired}</span><span className="kpi-label">expiré{expired > 1 ? 's' : ''}</span></a>
            <a className={`kpi ${missing ? 'kpi-manquant' : ''}`} href="#alertes"><span className="kpi-value">{missing}</span><span className="kpi-label">manquant{missing > 1 ? 's' : ''}</span></a>
            <a className={`kpi ${soon ? 'kpi-bientot' : ''}`} href="#alertes"><span className="kpi-value">{soon}</span><span className="kpi-label">expirent sous {threshold} j</span></a>
            <a className="kpi" href={href.dossiers()}><span className="kpi-value">{activeDossiers.length}</span><span className="kpi-label">dossiers en cours{endingSoon ? ` · ${endingSoon} se termine${endingSoon > 1 ? 'nt' : ''} bientôt` : ''}</span></a>
          </section>

          <section className="card" id="alertes">
            <div className="card-head">
              <h2>À traiter dans les {threshold} prochains jours</h2>
              <label className="inline small">
                Seuil&nbsp;
                <input type="number" min={1} max={365} value={threshold} onChange={(e) => dispatch({ type: 'SET_THRESHOLD', days: Number(e.target.value) })} className="input-short" />
                &nbsp;jours
              </label>
            </div>
            {alerts.length === 0 ? (
              <p className="all-good">✓ Rien d’urgent : tous les documents attendus sont valides au-delà de {threshold} jours.</p>
            ) : (
              <div className="table-wrap"><table className="table">
                <thead>
                  <tr><th>Échéance</th><th>Sous-traitant</th><th>Document</th><th className="hide-mobile">Nature</th><th className="hide-mobile"></th></tr>
                </thead>
                <tbody>
                  {alerts.map((a) => (
                    <tr key={`${a.subId}-${a.type}`}>
                      <td><StatusBadge status={a.status} daysLeft={a.daysLeft} /></td>
                      <td className="strong"><a href={href.subcontractor(a.subId)}>{a.subName}</a></td>
                      <td>{docTypeDef(a.type).short}</td>
                      <td className="hide-mobile muted small">{a.legal ? 'Pièce légale' : 'Pratique'}</td>
                      <td className="ta-right hide-mobile"><a className="btn btn-small" href={href.subcontractor(a.subId)}>Traiter</a></td>
                    </tr>
                  ))}
                </tbody>
              </table></div>
            )}
            <p className="hint">Tri du plus urgent au moins urgent : expirés (les plus anciens d’abord), puis manquants, puis échéances proches. Statuts calculés à partir des dates saisies, sans contrôle automatique auprès d’un organisme.</p>
          </section>

          <section className="card">
            <div className="card-head">
              <h2>Sous-traitants à traiter</h2>
              <a className="btn btn-small" href={href.dossiers()}>Voir tous les dossiers</a>
            </div>
            {toHandle.length === 0 ? (
              <p className="all-good">✓ Tous les sous-traitants sont à jour.</p>
            ) : (
              <ul className="sub-list">
                {toHandle.map(({ s, lines }) => {
                  const nd = nextDeadline(lines);
                  return (
                    <li key={s.id}>
                      <a className="sub-row" href={href.subcontractor(s.id)}>
                        <span className="sub-avatar">{s.name[0]}</span>
                        <span className="sub-main">
                          <span className="sub-name">{s.name}</span>
                          <span className="small muted">{s.trade}</span>
                        </span>
                        <span className="sub-meta">
                          <StatusBadge status={worstStatus(lines)} />
                          <span className="small muted">{nd === null ? 'aucune date' : nd < 0 ? `échéance dépassée de ${-nd} j` : `prochaine échéance dans ${nd} j`}</span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        </>
      )}
    </Layout>
  );
}

function rankSub(lines: ReturnType<typeof docLines>): number {
  const exp = lines.filter((l) => l.status === 'expire').map((l) => l.daysLeft ?? 0);
  if (exp.length) return -10_000 + Math.min(...exp);
  if (lines.some((l) => l.status === 'manquant')) return -500;
  const soon = lines.filter((l) => l.status === 'bientot').map((l) => l.daysLeft ?? 999);
  return soon.length ? Math.min(...soon) : 9_999;
}
