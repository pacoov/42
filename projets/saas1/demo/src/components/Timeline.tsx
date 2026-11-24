import type { HistoryEvent } from '../types';
import { formatFr } from '../lib/dates';

const KIND_LABEL: Record<HistoryEvent['kind'], string> = {
  document_recu: 'Document reçu',
  depot_lien: 'Dépôt via le lien',
  lien_envoye: 'Lien envoyé',
  relance: 'Relance',
  verification: 'Vérification manuelle',
  expiration: 'Expiration',
  dossier: 'Dossier',
  note: 'Note',
};

/** Chronologie, du plus récent au plus ancien. */
export function Timeline({ events }: { events: HistoryEvent[] }) {
  const sorted = [...events].sort((a, b) => b.date.localeCompare(a.date));
  if (sorted.length === 0) return <p className="muted">Aucun événement.</p>;
  return (
    <ol className="timeline">
      {sorted.map((e) => (
        <li key={e.id} className={`tl tl-${e.kind}`}>
          <div className="tl-date">{formatFr(e.date)}</div>
          <div className="tl-body">
            <span className="tl-kind">{KIND_LABEL[e.kind]}</span>
            <span>{e.label}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
