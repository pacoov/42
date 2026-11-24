import { useState } from 'react';
import { Layout } from '../components/Layout';
import { StatusBadge } from '../components/StatusBadge';
import { Timeline } from '../components/Timeline';
import { daysUntil, formatFr } from '../lib/dates';
import { href } from '../lib/router';
import { countStatuses, docLines, nextDeadline, worstStatus } from '../lib/status';
import { useStore } from '../lib/store';
import { DOC_TYPES } from '../data/docTypes';

/** Dossiers : tout le détail. Dossiers en cours, tous les sous-traitants, historique des dossiers terminés. */
export function Dossiers() {
  const { state, dispatch } = useStore();
  const threshold = state.settings.alertThresholdDays;
  const subById = (id: string) => state.subcontractors.find((s) => s.id === id);
  const [tab, setTab] = useState<'encours' | 'soustraitants' | 'historique'>('encours');
  const [openHist, setOpenHist] = useState<string | null>(null);

  const enCours = state.dossiers
    .filter((d) => d.statut === 'en_cours')
    .map((d) => {
      const s = subById(d.subId)!;
      const lines = docLines(s, threshold);
      return { d, s, lines, nd: nextDeadline(lines), fin: daysUntil(d.dateFin) };
    })
    .sort((a, b) => urgency(a.lines, a.fin) - urgency(b.lines, b.fin));

  const termines = state.dossiers.filter((d) => d.statut === 'termine').sort((a, b) => (b.closedAt ?? b.dateFin).localeCompare(a.closedAt ?? a.dateFin));

  const subs = [...state.subcontractors]
    .map((s) => ({ s, lines: docLines(s, threshold) }))
    .sort((a, b) => urgency(a.lines, 9999) - urgency(b.lines, 9999));

  return (
    <Layout title="Dossiers" actions={<a className="btn btn-primary" href={href.newSubcontractor()}>+ Sous-traitant</a>}>
      <div className="tabs">
        <button className={tab === 'encours' ? 'active' : ''} onClick={() => setTab('encours')}>En cours <span className="tab-count">{enCours.length}</span></button>
        <button className={tab === 'soustraitants' ? 'active' : ''} onClick={() => setTab('soustraitants')}>Sous-traitants <span className="tab-count">{subs.length}</span></button>
        <button className={tab === 'historique' ? 'active' : ''} onClick={() => setTab('historique')}>Historique <span className="tab-count">{termines.length}</span></button>
      </div>

      {tab === 'encours' && (
        <section className="card">
          {enCours.length === 0 ? (
            <p className="muted">Aucun dossier en cours. Ouvrez-en un depuis la fiche d’un sous-traitant.</p>
          ) : (
            <div className="table-wrap"><table className="table">
              <thead><tr><th>Chantier</th><th>Sous-traitant</th><th className="hide-mobile">Montant HT</th><th className="hide-mobile">Fin prévue</th><th>Documents</th><th></th></tr></thead>
              <tbody>
                {enCours.map(({ d, s, lines, nd, fin }) => (
                  <tr key={d.id}>
                    <td className="strong">{d.chantier}<div className="small muted">depuis le {formatFr(d.dateDebut)}</div></td>
                    <td><a href={href.subcontractor(s.id)}>{s.name}</a></td>
                    <td className="hide-mobile">{d.montantHT.toLocaleString('fr-FR')} €</td>
                    <td className="hide-mobile">{formatFr(d.dateFin)}{fin <= threshold && fin >= 0 && <div className="small warn">dans {fin} j</div>}{fin < 0 && <div className="small bad">dépassée</div>}</td>
                    <td><StatusBadge status={worstStatus(lines)} /><div className="small muted">{nd === null ? '' : nd < 0 ? `échéance dépassée` : `prochaine échéance dans ${nd} j`}</div></td>
                    <td className="ta-right">
                      <a className="btn btn-small" href={href.subcontractor(s.id)}>Ouvrir</a>{' '}
                      <button className="btn btn-small btn-ghost" onClick={() => { if (window.confirm(`Terminer le dossier « ${d.chantier} » ? Il passera dans l’historique.`)) dispatch({ type: 'CLOSE_DOSSIER', dossierId: d.id }); }}>Terminer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          )}
        </section>
      )}

      {tab === 'soustraitants' && (
        <section className="card">
          {subs.length === 0 ? (
            <p className="muted">Aucun sous-traitant.</p>
          ) : (
            <div className="table-wrap"><table className="table">
              <thead><tr><th>Raison sociale</th><th className="hide-mobile">Métier</th><th>Documents</th><th className="hide-mobile">Dossiers en cours</th><th className="hide-mobile">Dernière relance</th><th></th></tr></thead>
              <tbody>
                {subs.map(({ s, lines }) => {
                  const c = countStatuses(lines);
                  const nd = nextDeadline(lines);
                  const active = state.dossiers.filter((d) => d.subId === s.id && d.statut === 'en_cours').length;
                  return (
                    <tr key={s.id}>
                      <td className="strong"><a href={href.subcontractor(s.id)}>{s.name}</a></td>
                      <td className="hide-mobile muted">{s.trade}</td>
                      <td><StatusBadge status={worstStatus(lines)} /><div className="small muted">{c.valide}/{DOC_TYPES.length} valides{nd !== null && nd >= 0 ? ` · prochaine échéance dans ${nd} j` : ''}</div></td>
                      <td className="hide-mobile">{active}</td>
                      <td className="hide-mobile">{s.lastReminderAt ? formatFr(s.lastReminderAt) : '—'}</td>
                      <td className="ta-right"><a className="btn btn-small" href={href.subcontractor(s.id)}>Fiche</a></td>
                    </tr>
                  );
                })}
              </tbody>
            </table></div>
          )}
        </section>
      )}

      {tab === 'historique' && (
        <section className="card">
          <p className="muted small">Dossiers terminés, classés du plus récent au plus ancien. Chaque dossier garde les événements enregistrés pendant sa durée.</p>
          {termines.length === 0 ? (
            <p className="muted">Aucun dossier terminé.</p>
          ) : (
            <ul className="hist-list">
              {termines.map((d) => {
                const s = subById(d.subId)!;
                const events = s.history.filter((e) => e.dossierId === d.id || (e.date >= d.dateDebut && e.date <= (d.closedAt ?? d.dateFin)));
                const open = openHist === d.id;
                return (
                  <li key={d.id} className="hist-item">
                    <button className="hist-head" onClick={() => setOpenHist(open ? null : d.id)} aria-expanded={open}>
                      <span className="strong">{d.chantier}</span>
                      <span className="muted">{s.name}</span>
                      <span className="small muted">{formatFr(d.dateDebut)} → {formatFr(d.closedAt ?? d.dateFin)} · {d.montantHT.toLocaleString('fr-FR')} € HT</span>
                      <span className="chevron">{open ? '▾' : '▸'}</span>
                    </button>
                    {open && (
                      <div className="hist-body">
                        <Timeline events={events} />
                        <div className="row"><a className="btn btn-small" href={href.history(s.id)}>Dossier de preuve complet du sous-traitant</a></div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      )}
    </Layout>
  );
}

/** Rang d'urgence : expirés (les plus anciens d'abord), puis manquants, puis échéances proches (documents ou fin de dossier). */
function urgency(lines: ReturnType<typeof docLines>, finDossier: number): number {
  const exp = lines.filter((l) => l.status === 'expire').map((l) => l.daysLeft ?? 0);
  if (exp.length) return -10_000 + Math.min(...exp);
  if (lines.some((l) => l.status === 'manquant')) return -500;
  const soon = lines.filter((l) => l.daysLeft !== null).map((l) => l.daysLeft as number);
  return Math.min(soon.length ? Math.min(...soon) : 9_999, finDossier);
}
