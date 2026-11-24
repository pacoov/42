# 00 — Contexte de référence (résumé de passation)

- **Date** : 13 novembre 2026
- **Avertissement** : le fichier `passation_projet_NEXORA.md` demandé comme référence **n'existe pas dans le dossier** (vérifié le 13/11/2026 : aucun fichier de ce nom dans `projets/saas1/` ni dans `/home/paco/jeez`). Ce résumé est donc construit à partir des seuls documents présents : MARKET_RESEARCH.md (phase 1, 12/11/2026), PHASE_1_AUDIT.md, COMPETITOR_ANALYSIS.md, INTERVIEW_GUIDE.md, PROSPECTING_KIT.md, PRICING_STRATEGY.md, VALIDATION_SCORECARD.md, PHASE_2_REPORT.md (phase 2, 12/11/2026) et du brief du fondateur du 13/11/2026. Si une passation distincte existe ailleurs, elle doit être ajoutée au dossier et ce résumé revu.

## 1. Le projet en une phrase

NEXORA (nom de travail) : un SaaS potentiel qui permettrait à une petite entreprise donneuse d'ordre de centraliser les documents de ses sous-traitants, suivre leurs dates de validité, obtenir les pièces manquantes et recevoir des alertes avant expiration. Problème visé : opérationnel (oublis, relances manuelles, dispersion). Le produit **ne doit jamais être présenté comme garantissant seul la conformité** d'une entreprise.

**Statut : non validé.** Phase de validation du problème, de la différenciation et de la volonté de payer. Aucun code.

## 2. Faits vérifiés (avec date et source)

| Fait | Source | Date de vérification |
|---|---|---|
| Le donneur d'ordre doit, pour tout contrat ≥ 5 000 € HT, obtenir à la conclusion puis tous les 6 mois l'attestation de vigilance URSSAF et un justificatif d'immatriculation, et vérifier l'authenticité de l'attestation | service-public.gouv.fr F31422 ; art. D8222-5 (texte reproduit par marche-public.fr) | 12/11/2026 |
| La liste des salariés étrangers soumis à autorisation de travail relève d'une obligation distincte, art. L8254-1 et D8254-2, même périodicité de 6 mois | code.travail.gouv.fr/code-du-travail/d8254-2 | 12/11/2026 |
| Il n'existe pas d'API publique ouverte aux entreprises privées pour vérifier une attestation de vigilance ; l'API Entreprise est réservée aux administrations | data.gouv.fr (fiche API Entreprise) | 12/11/2026 |
| Bilan URSSAF 2025 (publié le 20/02/2026) : 1 503 M€ de redressements pour travail dissimulé, dont 877 M€ dans le BTP ; 1 027 actions de solidarité financière (+85 % vs 2024) | LégiSocial (27/02/2026) et presse régionale relayant le bilan URSSAF — **source tierce relayant un document officiel** | 12/11/2026 |
| AddWorking propose une offre « Essentiel » à 0 €/mois pour les donneurs d'ordre : partenaires illimités, documents légaux vérifiés automatiquement, relances automatiques, indicateurs de conformité, API ; offre Business 49 €/licence/mois (39 € en annuel) | addworking.com/tarifs | 12/11/2026 |
| Othentis : « à partir de 59 € HT par mois », essai gratuit, forfait par nombre d'entreprises vérifiées | othentis.com/tarifs | 12/11/2026 |
| Quitus : 19,99 €/mois (1 utilisateur) et 29,99 €/mois (5 utilisateurs, « PME 3-15 personnes »), essai 14 jours, sans engagement | quitus-app.fr/tarifs | 12/11/2026 |
| Once For All, côté sous-traitant : 399 / 739 / 1 099 / 1 699 € HT/an + 39 € d'activation, engagement 12 mois ; côté donneur d'ordre : sur devis | onceforall.fr/solutions/conformite/sous-traitants/ | 12/11/2026 |
| Aprovall : 1 800 organisations clientes, 480 000 tiers, pas de prix public, pas de mention TPE/PME | aprovall.com | 12/11/2026 |
| INSEE Ésane 2023, construction : 561 504 micro-entreprises (< 10 salariés), 25 948 PME hors micro | insee.fr/fr/statistiques/2015246 | 12/11/2026 |
| Vercel « Hobby » : usage non commercial uniquement (contrainte pour un futur hébergement gratuit) | vercel.com/docs/plans/hobby-plan | 12/11/2026 |

## 3. Hypothèses (non vérifiées)

- H1. Les entreprises du BTP de 3 à 20 salariés qui sous-traitent gèrent encore ce suivi à la main (tableur, mails, classeur) **malgré** l'existence d'outils gratuits ou bon marché.
- H2. Elles ne connaissent pas ces outils, ou les trouvent trop lourds, ou conçus pour des structures plus grandes.
- H3. Une version plus simple (dépôt par lien sans compte pour le sous-traitant, zéro paramétrage, dossier de preuve en un clic) aurait une valeur pour laquelle elles paieraient 20 à 40 € HT/mois.
- H4. Le temps passé est de l'ordre de plusieurs heures par mois pour une entreprise à 8 sous-traitants et plus (calcul : 2 renouvellements par sous-traitant et par an ; **aucune mesure terrain**).
- H5. Le sous-traitant (souvent auto-entrepreneur) accepte de déposer ses documents par lien, sans compte, sans payer.
- H6. Les contrôles en hausse rendent le sujet plus audible qu'il y a trois ans.
- H7. La cible initiale « BTP, 3 à 20 salariés, plusieurs sous-traitants réguliers » est la bonne. C'est une hypothèse, pas une décision.

## 4. Questions ouvertes

1. Qui, dans ces entreprises, collecte et vérifie les documents ? Combien de temps ? Que se passe-t-il quand c'est oublié ?
2. Pourquoi n'utilisent-elles pas AddWorking Essentiel (gratuit), Quitus, Othentis ou le module de leur ERP ?
3. Quelle part travaille pour des maîtres d'ouvrage ou entreprises générales qui imposent déjà leur plateforme (Once For All, Aprovall) ?
4. L'offre gratuite d'AddWorking couvre-t-elle réellement le besoin de bout en bout pour une TPE ? (À tester : docs/02-test-addworking.md.)
5. Que fait exactement chaque concurrent en matière de vérification de l'attestation URSSAF (authentification par code ou simple contrôle de date) ? Non établi sur les pages publiques.
6. Combien d'entreprises composent réellement la cible ? Les tables INSEE ne permettent pas d'isoler la tranche 3 à 20 salariés.
7. Que prévoira le décret d'application de la loi n° 2026-534 du 25 juin 2026 (obligation du maître d'ouvrage) ?

## 5. Recommandations issues des phases précédentes (à confirmer ou infirmer par les entretiens)

- Ne pas coder avant une décision Go / Repositionner / Arrêter prise sur la grille de docs/04-decisions.md.
- Tester personnellement AddWorking Essentiel avant le premier entretien.
- Mener 10 à 15 entretiens avec docs/03-entretiens/script.md ; point d'arrêt anticipé possible après 5 à 6 entretiens.
- Prix à tester si l'on arrive à cette question : 29 € HT/mois par entreprise, sans engagement (PRICING_STRATEGY.md), en sachant qu'un gratuit existe.
- Plans de repli identifiés : relances d'impayés indépendantes de l'outil de facturation ; secteurs hors BTP visés par la loi de juin 2026 ; version « côté sous-traitant ».

## 6. Ce que cette phase ne fait pas

Pas de code, pas de base de données, pas d'intégration (API URSSAF ou autre), pas d'IA, pas de fonctionnalité supplémentaire, pas de contact de prospects par Claude, pas de dépense.
