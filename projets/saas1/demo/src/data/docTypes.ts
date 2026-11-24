import type { DocType } from '../types';

/**
 * Définition des familles de documents suivies.
 * `legal: true` = pièce exigée par l'art. D8222-5 ou D8254-2 du Code du travail (contrats ≥ 5 000 € HT).
 * `legal: false` = pièce demandée par la pratique du bâtiment, pas par ces articles.
 * `defaultValidityDays` = durée proposée par défaut à l'ajout ; l'utilisateur peut la modifier.
 * Ces durées sont des conventions de la démo, pas des règles juridiques (sauf les 6 mois URSSAF).
 */
export interface DocTypeDef {
  id: DocType;
  label: string;
  short: string;
  legal: boolean;
  defaultValidityDays: number | null;
  help: string;
}

export const DOC_TYPES: DocTypeDef[] = [
  {
    id: 'urssaf',
    label: 'Attestation de vigilance URSSAF',
    short: 'URSSAF',
    legal: true,
    defaultValidityDays: 182,
    help: 'Pièce légale (art. D8222-5). À renouveler tous les 6 mois. Son authenticité se vérifie manuellement sur urssaf.fr avec le code de sécurité du document : la démo ne le fait pas à votre place.',
  },
  {
    id: 'immatriculation',
    label: 'Justificatif d’immatriculation (Kbis / RNE)',
    short: 'Kbis / RNE',
    legal: true,
    defaultValidityDays: 182,
    help: 'Pièce légale (art. D8222-5). Le texte n’impose pas de durée de validité ; la démo propose 6 mois par convention, modifiable.',
  },
  {
    id: 'salaries_etrangers',
    label: 'Liste des salariés étrangers (ou attestation sur l’honneur)',
    short: 'Salariés étrangers',
    legal: true,
    defaultValidityDays: 182,
    help: 'Obligation distincte (art. L8254-1 et D8254-2), tous les 6 mois. Si le sous-traitant n’emploie aucun salarié étranger, une attestation sur l’honneur « néant » est la pratique courante.',
  },
  {
    id: 'rc_pro',
    label: 'Attestation d’assurance RC professionnelle',
    short: 'RC pro',
    legal: false,
    defaultValidityDays: 365,
    help: 'Pratique du bâtiment, pas une pièce de l’art. D8222-5. Date de fin = échéance du contrat d’assurance.',
  },
  {
    id: 'decennale',
    label: 'Attestation d’assurance décennale',
    short: 'Décennale',
    legal: false,
    defaultValidityDays: 365,
    help: 'Pratique du bâtiment (obligation d’assurance distincte). Date de fin = échéance du contrat d’assurance.',
  },
];

export function docTypeDef(id: DocType): DocTypeDef {
  const def = DOC_TYPES.find((d) => d.id === id);
  if (!def) throw new Error(`Type de document inconnu : ${id}`);
  return def;
}
