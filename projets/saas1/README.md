# NEXORA (nom de travail)

SaaS **potentiel** de suivi documentaire des sous-traitants en France : centraliser les pièces des sous-traitants (attestation URSSAF, justificatif d'immatriculation, assurances), suivre leurs dates de validité, obtenir les documents manquants, alerter avant expiration. Le produit vise un problème **opérationnel** (oublis, relances manuelles, dispersion). Il ne sera jamais présenté comme garantissant seul la conformité d'une entreprise.

## État du projet (13 novembre 2026)

**Non validé. Phase de validation** (problème, différenciation, volonté de payer). Aucune base de données, aucune intégration, aucun backend. Le seul code est une démo cliquable jetable (`demo/`) servant de support d'entretien. Aucun entretien réalisé à ce jour ; aucun prospect contacté.

Fait structurant établi le 12/11/2026 : des concurrents existent déjà sur ce besoin, dont une offre **gratuite** pour donneurs d'ordre (AddWorking Essentiel) et des offres à 20–60 €/mois (Quitus, Othentis). La validation doit donc prouver qu'une raison concrète de payer existe malgré le gratuit, ou conclure à l'arrêt.

Signalé : le fichier `passation_projet_NEXORA.md` mentionné comme référence **n'existe pas** dans le dossier ; `docs/00-contexte.md` en tient lieu à partir des documents présents.

## Règles de cette phase

1. Aucun code applicatif (ni backend, ni frontend, ni base de données).
2. Rien d'inventé : ni prix, ni fonctionnalité concurrente, ni entretien, ni client, ni chiffre. Information absente des sources officielles = « non vérifié ».
3. Chaque fait concurrentiel porte une URL, une date de consultation et un statut (vérifié sur site officiel / source tierce / non vérifié).
4. Faits vérifiés, hypothèses, questions ouvertes et recommandations sont toujours séparés.
5. Esprit critique : si les preuves disent d'arrêter, on l'écrit.
6. Pas d'IA, pas d'intégration (API URSSAF ou autre), pas de fonctionnalité supplémentaire.
7. Budget 0 € : aucun service ou abonnement payant.

## Documents de la phase de validation (`docs/`)

| Fichier | Contenu |
|---|---|
| [docs/00-contexte.md](docs/00-contexte.md) | Résumé de passation : faits vérifiés, hypothèses, questions ouvertes, recommandations |
| [docs/01-concurrence.md](docs/01-concurrence.md) | Tableau comparatif daté (AddWorking, Quitus, Othentis, Once For All, Aprovall, Axiobat, Subclic) et lacunes à tester en entretien |
| [docs/02-test-addworking.md](docs/02-test-addworking.md) | Grille de test d'un compte AddWorking gratuit, à remplir par le fondateur |
| [docs/03-entretiens/script.md](docs/03-entretiens/script.md) | Guide d'entretien (16 questions, relances, question d'engagement) |
| [docs/03-entretiens/grille.md](docs/03-entretiens/grille.md) | Grille de notation et modèle de fiche d'entretien |
| [docs/04-decisions.md](docs/04-decisions.md) | Critères Poursuivre / Repositionner / Arrêter, point d'arrêt anticipé, journal des décisions |
| [docs/05-reglementation.md](docs/05-reglementation.md) | Obligation de vigilance du donneur d'ordre : seuil, documents, périodicité, sanctions, articles, points à confirmer |
| [docs/06-nom.md](docs/06-nom.md) | Vérification du nom NEXORA (défavorable) et pistes de noms, marche à suivre INPI |
| [docs/07-checklist-avant-lancement.md](docs/07-checklist-avant-lancement.md) | Tout ce qui doit être vu ou vérifié avant un lancement définitif |
| [docs/08-prompt-passation.md](docs/08-prompt-passation.md) | Prompt à coller pour reprendre le projet dans une nouvelle session |

## Démo cliquable (`demo/`)

Support d'entretien, tout simulé dans le navigateur, en deux modes : **données fictives** ou **vide, comme à la réception** (tutoriel « Premiers pas »). Thèmes clair/sombre et quatre directions de couleurs, logo de l'entreprise, menu latéral, accueil limité à l'urgent du mois, page Dossiers avec historique. Voir [demo/README.md](demo/README.md). Ce n'est pas un produit et sa création n'est pas une décision de développer (docs/04-decisions.md, entrées des 14 et 16/11/2026).

## Documents des phases précédentes (racine, conservés pour l'historique)

- Phase 1 (12/11/2026) : [MARKET_RESEARCH.md](MARKET_RESEARCH.md) (avec erratum en tête).
- Phase 2 (12/11/2026) : [PHASE_1_AUDIT.md](PHASE_1_AUDIT.md), [COMPETITOR_ANALYSIS.md](COMPETITOR_ANALYSIS.md), [INTERVIEW_GUIDE.md](INTERVIEW_GUIDE.md), [PROSPECTING_KIT.md](PROSPECTING_KIT.md), [PRICING_STRATEGY.md](PRICING_STRATEGY.md), [VALIDATION_SCORECARD.md](VALIDATION_SCORECARD.md), [PHASE_2_REPORT.md](PHASE_2_REPORT.md).
- Pilotage : [TODO.md](TODO.md), [CHANGELOG.md](CHANGELOG.md), [ARCHITECTURE.md](ARCHITECTURE.md) (préliminaire, gelé), [PRODUCT_SPEC.md](PRODUCT_SPEC.md) (squelette, gelé).

En cas de divergence entre un document de la racine et un document `docs/`, le document `docs/` fait foi (plus récent).

## Prochaine action

Le fondateur : test d'AddWorking Essentiel (docs/02), puis 5 à 6 premiers entretiens (docs/03), puis point d'arrêt anticipé (docs/04). Claude : préparation, dépouillement, mise à jour des documents. Personne ne code.
