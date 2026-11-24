import { Layout } from '../components/Layout';
import { StatusBadge } from '../components/StatusBadge';
import { Timeline } from '../components/Timeline';
import { docTypeDef } from '../data/docTypes';
import { formatFr, todayISO } from '../lib/dates';
import { href } from '../lib/router';
import { docLines } from '../lib/status';
import { useStore } from '../lib/store';

/** Historique / dossier de preuve d'un sous-traitant, imprimable (Ctrl+P → PDF). */
export function HistoryPage({ id }: { id: string }) {
  const { state } = useStore();
  const sub = state.subcontractors.find((s) => s.id === id);
  if (!sub) return <Layout title="Introuvable"><a href={href.dossiers()}>Retour</a></Layout>;
  const lines = docLines(sub, state.settings.alertThresholdDays);
  const dossiers = state.dossiers.filter((d) => d.subId === sub.id);

  return (
    <Layout>
      <div className="no-print row-between">
        <a href={href.subcontractor(sub.id)}>← Retour à la fiche</a>
        <button className="btn btn-primary" onClick={() => window.print()}>Imprimer / enregistrer en PDF</button>
      </div>

      <article className="print-doc card">
        <div className="print-head">
          {state.settings.logoDataUrl && <img className="print-logo" src={state.settings.logoDataUrl} alt="" />}
          <div>
            <div className="print-company">{state.settings.companyName}</div>
            <h1>Dossier de suivi — {sub.name}</h1>
            <p className="muted small">Édité le {formatFr(todayISO())} par {state.settings.userName}. Ce dossier retrace les actions enregistrées par l’utilisateur ; il ne constitue pas une attestation de conformité. Document de démonstration.</p>
          </div>
        </div>

        <h2>Identité</h2>
        <div className="table-wrap"><table className="table">
          <tbody>
            <tr><th>Raison sociale</th><td>{sub.name}</td></tr>
            <tr><th>Métier</th><td>{sub.trade || '—'}</td></tr>
            <tr><th>SIRET</th><td>{sub.siret || '—'}</td></tr>
            <tr><th>Contact</th><td>{[sub.contactName, sub.email, sub.phone].filter(Boolean).join(' · ') || '—'}</td></tr>
          </tbody>
        </table></div>

        <h2>Dossiers</h2>
        {dossiers.length === 0 ? <p className="muted">Aucun dossier.</p> : (
          <div className="table-wrap"><table className="table">
            <thead><tr><th>Chantier</th><th>Montant HT</th><th>Début</th><th>Fin</th><th>Statut</th></tr></thead>
            <tbody>{dossiers.map((d) => <tr key={d.id}><td>{d.chantier}</td><td>{d.montantHT.toLocaleString('fr-FR')} €</td><td>{formatFr(d.dateDebut)}</td><td>{formatFr(d.closedAt ?? d.dateFin)}</td><td>{d.statut === 'en_cours' ? 'En cours' : 'Terminé'}</td></tr>)}</tbody>
          </table></div>
        )}

        <h2>État des documents à ce jour</h2>
        <div className="table-wrap"><table className="table">
          <thead><tr><th>Document</th><th>Fichier</th><th>Reçu le</th><th>Valide jusqu’au</th><th>Statut</th><th>Vérification URSSAF (manuelle)</th></tr></thead>
          <tbody>
            {lines.map((l) => (
              <tr key={l.type}>
                <td>{docTypeDef(l.type).label}</td>
                <td>{l.doc?.fileName ?? '—'}</td>
                <td>{formatFr(l.doc?.receivedAt)}</td>
                <td>{formatFr(l.doc?.validUntil)}</td>
                <td><StatusBadge status={l.status} daysLeft={l.daysLeft} /></td>
                <td>{l.type !== 'urssaf' ? 'n/a' : l.doc?.verification ? `Vérifiée par ${l.doc.verification.by} le ${formatFr(l.doc.verification.date)}${l.doc.verification.comment ? ` — ${l.doc.verification.comment}` : ''}` : 'Non vérifiée'}</td>
              </tr>
            ))}
          </tbody>
        </table></div>

        <h2>Chronologie</h2>
        <Timeline events={sub.history} />
      </article>
    </Layout>
  );
}
