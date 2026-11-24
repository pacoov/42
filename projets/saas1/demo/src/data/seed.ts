import type { AppState, Document, Dossier, HistoryEvent, Settings, Subcontractor, DocType } from '../types';
import { addDays, todayISO } from '../lib/dates';
import { newId } from '../lib/ids';

/**
 * DONNÉES FICTIVES. Aucune entreprise réelle, aucun vrai SIRET (ils commencent tous par 000,
 * ce qu'aucun SIREN réel ne fait). Toutes les dates sont calculées par rapport à aujourd'hui.
 */

export const DEFAULT_SETTINGS: Settings = {
  alertThresholdDays: 30,
  userName: 'Vous',
  companyName: 'Votre entreprise',
  logoDataUrl: null,
  theme: 'clair',
  accent: 'ardoise',
  sidebarCollapsed: false,
  onboardingDismissed: false,
  welcomeSeen: false,
};

export function emptyState(settings: Settings = DEFAULT_SETTINGS): AppState {
  return { version: 2, mode: 'vide', seededAt: todayISO(), settings, subcontractors: [], dossiers: [] };
}

export function buildSeed(settings: Settings = DEFAULT_SETTINGS): AppState {
  const T = todayISO();

  const doc = (type: DocType, fileName: string, receivedOffset: number, validity: number | null, extra: Partial<Document> = {}): Document => ({
    id: newId('doc'),
    type,
    fileName,
    receivedAt: addDays(T, receivedOffset),
    validUntil: validity === null ? null : addDays(T, validity),
    source: 'interne',
    ...extra,
  });
  const ev = (offset: number, kind: HistoryEvent['kind'], label: string): HistoryEvent => ({ id: newId('ev'), date: addDays(T, offset), kind, label });
  const sub = (p: Omit<Subcontractor, 'id' | 'depositToken'>): Subcontractor => ({ id: newId('st'), depositToken: newId('lien'), ...p });
  const verif = (offset: number, comment = '') => ({ by: 'Vous', date: addDays(T, offset), comment });

  const s1 = sub({
    name: 'Maçonnerie Delorme',
    trade: 'Maçonnerie / gros œuvre',
    siret: '000 123 456 00017',
    contactName: 'Hélène Delorme',
    email: 'contact@maconnerie-delorme.example',
    phone: '06 00 00 00 01',
    documents: [
      doc('urssaf', 'attestation-vigilance.pdf', -45, 137, { verification: verif(-44, 'Code de sécurité vérifié sur urssaf.fr.') }),
      doc('immatriculation', 'kbis.pdf', -45, 137),
      doc('salaries_etrangers', 'attestation-honneur-neant.pdf', -45, 137),
      doc('rc_pro', 'rc-pro.pdf', -200, 165),
      doc('decennale', 'decennale.pdf', -200, 165),
    ],
    history: [ev(-45, 'document_recu', 'Dossier complet reçu par e-mail (5 pièces).'), ev(-44, 'verification', 'Attestation URSSAF vérifiée manuellement sur urssaf.fr.')],
  });
  const s2 = sub({
    name: 'Plomberie Vasseur-Lenoir',
    trade: 'Plomberie / chauffage',
    siret: '000 234 567 00025',
    contactName: 'Karim Vasseur',
    email: 'k.vasseur@plomberie-vl.example',
    phone: '06 00 00 00 02',
    lastReminderAt: addDays(T, -5),
    documents: [
      doc('urssaf', 'attestation-vigilance.pdf', -194, -12, { verification: verif(-190) }),
      doc('immatriculation', 'kbis.pdf', -194, 100),
      doc('salaries_etrangers', 'liste-salaries-etrangers.pdf', -194, -12),
      doc('rc_pro', 'rc-pro.pdf', -100, 265),
      doc('decennale', 'decennale.pdf', -100, 265),
    ],
    history: [
      ev(-194, 'document_recu', 'Dossier reçu (5 pièces).'),
      ev(-190, 'verification', 'Attestation URSSAF vérifiée manuellement sur urssaf.fr.'),
      ev(-12, 'expiration', 'Attestation URSSAF et liste des salariés étrangers arrivées à échéance (6 mois).'),
      ev(-5, 'relance', 'Relance envoyée par e-mail pour l’attestation URSSAF et la liste des salariés étrangers.'),
    ],
  });
  const s3 = sub({
    name: 'Élec Horizon Sud',
    trade: 'Électricité',
    siret: '000 345 678 00033',
    contactName: 'Sofia Benali',
    email: 'sofia@elec-horizon-sud.example',
    phone: '06 00 00 00 03',
    documents: [
      doc('urssaf', 'attestation-vigilance.pdf', -172, 10, { verification: verif(-170) }),
      doc('immatriculation', 'extrait-rne.pdf', -172, 10),
      doc('salaries_etrangers', 'attestation-honneur-neant.pdf', -172, 10),
      doc('rc_pro', 'rc-pro.pdf', -30, 335),
      doc('decennale', 'decennale.pdf', -30, 335),
    ],
    history: [ev(-172, 'document_recu', 'Dossier reçu (5 pièces).'), ev(-170, 'verification', 'Attestation URSSAF vérifiée manuellement sur urssaf.fr.')],
  });
  const s4 = sub({
    name: 'Peinture & Finitions Roussel',
    trade: 'Peinture / revêtements',
    siret: '000 456 789 00041',
    contactName: 'Julien Roussel',
    email: 'j.roussel@pf-roussel.example',
    phone: '06 00 00 00 04',
    documents: [
      doc('urssaf', 'attestation-vigilance.pdf', -20, 162, { verification: verif(-20) }),
      doc('salaries_etrangers', 'attestation-honneur-neant.pdf', -20, 162),
      doc('decennale', 'decennale.pdf', -20, 300),
    ],
    history: [ev(-20, 'document_recu', 'Reçu : attestation URSSAF, attestation sur l’honneur, décennale. Kbis et RC pro manquants.'), ev(-20, 'verification', 'Attestation URSSAF vérifiée manuellement sur urssaf.fr.')],
  });
  const s5 = sub({
    name: 'Couverture Bastide Frères',
    trade: 'Couverture / zinguerie',
    siret: '000 567 890 00058',
    contactName: 'Marc Bastide',
    email: 'bastide.freres@couverture.example',
    phone: '06 00 00 00 05',
    linkSentAt: addDays(T, -4),
    documents: [
      doc('urssaf', 'attestation-vigilance.pdf', -3, 179, { source: 'lien' }),
      doc('immatriculation', 'kbis.pdf', -3, 179, { source: 'lien' }),
      doc('salaries_etrangers', 'attestation-honneur-neant.pdf', -3, 179, { source: 'lien' }),
      doc('rc_pro', 'rc-pro.pdf', -3, 250, { source: 'lien' }),
      doc('decennale', 'decennale.pdf', -3, 250, { source: 'lien' }),
    ],
    history: [ev(-4, 'lien_envoye', 'Lien de dépôt envoyé par e-mail.'), ev(-3, 'depot_lien', 'Le sous-traitant a déposé 5 pièces via le lien.')],
  });
  const s6 = sub({
    name: 'Carrelage Nouri',
    trade: 'Carrelage / faïence (auto-entrepreneur)',
    siret: '000 678 901 00066',
    contactName: 'Yanis Nouri',
    email: 'yanis.nouri@carrelage.example',
    phone: '06 00 00 00 06',
    lastReminderAt: addDays(T, -20),
    documents: [
      doc('urssaf', 'attestation-vigilance.pdf', -60, 122, { verification: verif(-59) }),
      doc('immatriculation', 'extrait-rne.pdf', -60, 122),
      doc('rc_pro', 'rc-pro.pdf', -300, 65),
      doc('decennale', 'decennale.pdf', -405, -40),
    ],
    history: [
      ev(-60, 'document_recu', 'Reçu : URSSAF, extrait RNE, RC pro.'),
      ev(-59, 'verification', 'Attestation URSSAF vérifiée manuellement sur urssaf.fr.'),
      ev(-40, 'expiration', 'Attestation décennale arrivée à échéance.'),
      ev(-20, 'relance', 'Relance par SMS pour la décennale et l’attestation sur l’honneur.'),
    ],
  });
  const s7 = sub({
    name: 'Menuiserie Alu Verdier',
    trade: 'Menuiserie aluminium',
    siret: '000 789 012 00074',
    contactName: 'Claire Verdier',
    email: 'c.verdier@menuiserie-alu.example',
    phone: '06 00 00 00 07',
    linkSentAt: addDays(T, -1),
    documents: [],
    history: [ev(-2, 'note', 'Nouveau sous-traitant : devis signé pour un chantier de 11 000 € HT.'), ev(-1, 'lien_envoye', 'Lien de dépôt envoyé par e-mail (première demande de pièces).')],
  });
  const s8 = sub({
    name: 'Plâtrerie Costa',
    trade: 'Plâtrerie / isolation',
    siret: '000 890 123 00082',
    contactName: 'Ana Costa',
    email: 'ana@platrerie-costa.example',
    phone: '06 00 00 00 08',
    documents: [
      doc('urssaf', 'attestation-vigilance.pdf', -90, 92, { verification: verif(-88, 'RAS.') }),
      doc('immatriculation', 'kbis.pdf', -157, 25),
      doc('salaries_etrangers', 'liste-salaries-etrangers.pdf', -90, 92),
      doc('rc_pro', 'rc-pro.pdf', -60, 305),
      doc('decennale', 'decennale.pdf', -60, 305),
    ],
    history: [ev(-157, 'document_recu', 'Kbis reçu.'), ev(-90, 'document_recu', 'URSSAF et liste des salariés étrangers reçus.'), ev(-88, 'verification', 'Attestation URSSAF vérifiée manuellement sur urssaf.fr.'), ev(-60, 'document_recu', 'Attestations d’assurance reçues.')],
  });

  const subcontractors = [s1, s2, s3, s4, s5, s6, s7, s8];

  const dos = (subId: string, chantier: string, montantHT: number, debut: number, fin: number, statut: Dossier['statut'] = 'en_cours', closedAt?: number): Dossier => ({
    id: newId('dos'),
    subId,
    chantier,
    montantHT,
    dateDebut: addDays(T, debut),
    dateFin: addDays(T, fin),
    statut,
    closedAt: closedAt === undefined ? undefined : addDays(T, closedAt),
  });

  const dossiers: Dossier[] = [
    dos(s1.id, 'Extension maison — Les Tilleuls', 38_000, -45, 60),
    dos(s2.id, 'Résidence du Parc — lots plomberie', 24_500, -194, 40),
    dos(s3.id, 'Rénovation école Jules-Ferry — électricité', 19_800, -172, 15),
    dos(s4.id, 'Appartements Victor-Hugo — peinture', 9_200, -20, 70),
    dos(s5.id, 'Toiture entrepôt Sud — réfection', 52_000, -4, 120),
    dos(s6.id, 'Villa Bellevue — carrelage', 7_400, -60, 10),
    dos(s7.id, 'Maison Lefèvre — menuiseries', 11_000, -2, 90),
    dos(s8.id, 'Résidence du Parc — plâtrerie', 16_300, -157, 30),
    // Dossiers terminés (historique)
    dos(s1.id, 'Garage double — Chemin des Vignes', 12_500, -320, -200, 'termine', -198),
    dos(s3.id, 'Boutique centre-ville — mise aux normes', 6_900, -260, -190, 'termine', -189),
    dos(s8.id, 'Bureaux Zone Nord — cloisons', 21_000, -400, -170, 'termine', -168),
  ];

  // Événements de dossier dans l'historique (pour que la chronologie raconte quelque chose).
  for (const d of dossiers) {
    const s = subcontractors.find((x) => x.id === d.subId)!;
    s.history.push({ id: newId('ev'), date: d.dateDebut, kind: 'dossier', label: `Dossier ouvert : ${d.chantier} (${d.montantHT.toLocaleString('fr-FR')} € HT).`, dossierId: d.id });
    if (d.statut === 'termine' && d.closedAt) {
      s.history.push({ id: newId('ev'), date: d.closedAt, kind: 'dossier', label: `Dossier terminé : ${d.chantier}.`, dossierId: d.id });
    }
  }

  return {
    version: 2,
    mode: 'fictif',
    seededAt: T,
    settings: { ...settings, userName: settings.userName === DEFAULT_SETTINGS.userName ? 'Vous' : settings.userName, companyName: settings.companyName === DEFAULT_SETTINGS.companyName ? 'Rénovation Générale Martin' : settings.companyName },
    subcontractors,
    dossiers,
  };
}
