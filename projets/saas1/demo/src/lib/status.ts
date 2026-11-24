import type { DocStatus, DocType, Document, Dossier, Subcontractor } from '../types';
import { DOC_TYPES } from '../data/docTypes';
import { daysUntil } from './dates';

/**
 * Règle de calcul du statut d'un document, à partir de sa date de fin de validité
 * et du seuil d'alerte (en jours) choisi dans les réglages.
 */
export function docStatus(d: Document | undefined, thresholdDays: number): DocStatus {
  if (!d) return 'manquant';
  if (d.validUntil === null) return 'valide';
  const n = daysUntil(d.validUntil);
  if (n < 0) return 'expire';
  if (n <= thresholdDays) return 'bientot';
  return 'valide';
}

/** Pour une famille de documents, on retient le plus récent (date de fin la plus lointaine). */
export function currentDoc(sub: Subcontractor, type: DocType): Document | undefined {
  const docs = sub.documents.filter((d) => d.type === type);
  if (docs.length === 0) return undefined;
  return [...docs].sort((a, b) => (b.validUntil ?? '9999').localeCompare(a.validUntil ?? '9999'))[0];
}

export interface DocLine {
  type: DocType;
  doc: Document | undefined;
  status: DocStatus;
  daysLeft: number | null;
  legal: boolean;
}

export function docLines(sub: Subcontractor, thresholdDays: number): DocLine[] {
  return DOC_TYPES.map((def) => {
    const doc = currentDoc(sub, def.id);
    return { type: def.id, doc, status: docStatus(doc, thresholdDays), daysLeft: doc?.validUntil ? daysUntil(doc.validUntil) : null, legal: def.legal };
  });
}

export interface Counts { valide: number; bientot: number; expire: number; manquant: number }

export function countStatuses(lines: DocLine[]): Counts {
  const c: Counts = { valide: 0, bientot: 0, expire: 0, manquant: 0 };
  for (const l of lines) c[l.status] += 1;
  return c;
}

/** Statut global d'un sous-traitant = le pire statut de ses documents. */
export function worstStatus(lines: DocLine[]): DocStatus {
  const order: DocStatus[] = ['expire', 'manquant', 'bientot', 'valide'];
  for (const s of order) if (lines.some((l) => l.status === s)) return s;
  return 'valide';
}

/** Prochaine échéance (en jours) parmi les documents d'un sous-traitant ; null si rien n'est daté. */
export function nextDeadline(lines: DocLine[]): number | null {
  const ds = lines.filter((l) => l.daysLeft !== null).map((l) => l.daysLeft as number);
  if (ds.length === 0) return null;
  return Math.min(...ds);
}

export interface Alert {
  subId: string;
  subName: string;
  type: DocType;
  status: Exclude<DocStatus, 'valide'>;
  daysLeft: number | null;
  legal: boolean;
  rank: number; // plus petit = plus urgent
}

/**
 * Alertes triées par urgence dans le temps :
 * 1. expirés, du plus ancien au plus récent (pièce légale avant pièce de pratique) ;
 * 2. manquants (pièce légale d'abord) ;
 * 3. expirent bientôt, du plus proche au plus lointain.
 */
export function buildAlerts(subs: Subcontractor[], thresholdDays: number): Alert[] {
  const alerts: Alert[] = [];
  for (const sub of subs) {
    for (const line of docLines(sub, thresholdDays)) {
      if (line.status === 'valide') continue;
      let rank: number;
      if (line.status === 'expire') rank = -10_000 + (line.daysLeft ?? 0) - (line.legal ? 0.5 : 0);
      else if (line.status === 'manquant') rank = line.legal ? -500 : -400;
      else rank = (line.daysLeft ?? thresholdDays) + (line.legal ? 0 : 0.5);
      alerts.push({ subId: sub.id, subName: sub.name, type: line.type, status: line.status, daysLeft: line.daysLeft, legal: line.legal, rank });
    }
  }
  return alerts.sort((a, b) => a.rank - b.rank);
}

export function docsToRequest(sub: Subcontractor, thresholdDays: number): DocLine[] {
  return docLines(sub, thresholdDays).filter((l) => l.status !== 'valide');
}

/** Dossiers en cours d'un sous-traitant. */
export function activeDossiers(dossiers: Dossier[], subId: string): Dossier[] {
  return dossiers.filter((d) => d.subId === subId && d.statut === 'en_cours');
}

/** Un sous-traitant est « actif » s'il a au moins un dossier en cours. */
export function isActive(dossiers: Dossier[], subId: string): boolean {
  return activeDossiers(dossiers, subId).length > 0;
}
