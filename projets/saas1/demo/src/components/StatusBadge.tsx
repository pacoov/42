import type { DocStatus } from '../types';

const LABELS: Record<DocStatus, string> = { valide: 'Valide', bientot: 'Expire bientôt', expire: 'Expiré', manquant: 'Manquant' };

export function StatusBadge({ status, daysLeft }: { status: DocStatus; daysLeft?: number | null }) {
  let detail = '';
  if (status === 'bientot' && daysLeft !== null && daysLeft !== undefined) detail = ` · ${daysLeft} j`;
  if (status === 'expire' && daysLeft !== null && daysLeft !== undefined) detail = ` · depuis ${Math.abs(daysLeft)} j`;
  return (
    <span className={`badge badge-${status}`}>
      <span className="dot" />
      {LABELS[status]}
      {detail}
    </span>
  );
}
