// Types partagés par toute la démo. Un seul endroit pour comprendre « de quoi on parle ».

/** Les familles de documents suivies dans la démo. */
export type DocType =
  | 'urssaf' // attestation de vigilance URSSAF (obligation légale, art. D8222-5)
  | 'immatriculation' // extrait Kbis / RNE (obligation légale, art. D8222-5)
  | 'salaries_etrangers' // liste des salariés étrangers ou attestation sur l'honneur (art. D8254-2)
  | 'rc_pro' // assurance responsabilité civile professionnelle (pratique, pas D8222-5)
  | 'decennale'; // assurance décennale (pratique, pas D8222-5)

/** Trace de la vérification MANUELLE faite par l'utilisateur (jamais automatique). */
export interface Verification {
  by: string;
  date: string; // ISO yyyy-mm-dd
  comment: string;
}

export interface Document {
  id: string;
  type: DocType;
  fileName: string; // nom du fichier seulement : aucun fichier n'est réellement stocké
  receivedAt: string; // ISO yyyy-mm-dd
  validUntil: string | null; // null = pas de date de fin connue
  source: 'interne' | 'lien'; // ajouté par l'entreprise, ou déposé via le lien de dépôt
  verification?: Verification; // uniquement pertinent pour l'attestation URSSAF
}

export type HistoryKind = 'document_recu' | 'depot_lien' | 'lien_envoye' | 'relance' | 'verification' | 'expiration' | 'dossier' | 'note';

export interface HistoryEvent {
  id: string;
  date: string; // ISO yyyy-mm-dd
  kind: HistoryKind;
  label: string;
  dossierId?: string; // si l'événement concerne un dossier précis
}

export interface Subcontractor {
  id: string;
  name: string;
  trade: string;
  siret: string; // FICTIF dans les données de démo
  contactName: string;
  email: string;
  phone: string;
  depositToken: string; // identifiant du lien de dépôt fictif
  documents: Document[];
  history: HistoryEvent[];
  lastReminderAt?: string;
  linkSentAt?: string;
}

/**
 * Un DOSSIER = un contrat de sous-traitance (un chantier, un montant, des dates).
 * C'est l'unité de l'obligation légale : au-delà de 5 000 € HT, les pièces sont à obtenir
 * à la signature puis tous les 6 mois jusqu'à la fin de l'exécution.
 * Les documents, eux, restent rattachés au sous-traitant (une attestation URSSAF vaut pour tous ses chantiers).
 */
export interface Dossier {
  id: string;
  subId: string;
  chantier: string;
  montantHT: number;
  dateDebut: string; // ISO
  dateFin: string; // ISO (prévisionnelle)
  statut: 'en_cours' | 'termine';
  closedAt?: string;
  note?: string;
}

export type ThemeMode = 'clair' | 'sombre' | 'systeme';
export type Accent = 'ardoise' | 'chantier' | 'sobre' | 'foret';

export interface Settings {
  alertThresholdDays: number; // seuil d'alerte « expire bientôt », 30 par défaut
  userName: string;
  companyName: string;
  logoDataUrl: string | null; // logo de l'entreprise utilisatrice, stocké dans le navigateur
  theme: ThemeMode;
  accent: Accent;
  sidebarCollapsed: boolean;
  onboardingDismissed: boolean;
  welcomeSeen: boolean;
}

/** Mode de la démo : données fictives pré-remplies, ou vide « comme à la réception ». */
export type DemoMode = 'fictif' | 'vide';

export interface AppState {
  version: 2;
  mode: DemoMode;
  seededAt: string; // date de génération des données fictives (ISO)
  settings: Settings;
  subcontractors: Subcontractor[];
  dossiers: Dossier[];
}

export type DocStatus = 'valide' | 'bientot' | 'expire' | 'manquant';
