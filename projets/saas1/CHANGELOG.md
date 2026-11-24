# CHANGELOG — NEXORA

Format inspiré de Keep a Changelog. Dates au format AAAA-MM-JJ.

## [Non publié]

### Ajouté
- docs/08-prompt-passation.md : prompt de reprise du projet par un autre assistant (16/11/2026).

## [0.5.0] — 2026-11-16

### Ajouté
- Démo v2 (`demo/`) : menu latéral rétractable, en-tête avec logo et nom de l'entreprise utilisatrice, typographie de marque (Sora) et de texte (Inter) en fichiers locaux, thèmes clair / sombre / système et quatre directions de couleurs (Ardoise & ambre, Chantier, Sobre, Forêt), accueil limité à l'urgent du mois trié par échéance, page « Dossiers » (en cours, sous-traitants, historique des dossiers terminés), notion de dossier = contrat (chantier, montant, dates), création de sous-traitant et de dossier, page de dépôt avec impression de réel (adresse courte, étapes, progression), envoi simulé du lien avec aperçu d'e-mail, mode « vide » avec accueil de bienvenue et tutoriel « Premiers pas » auto-coché, bascule des modes et réinitialisation dans les réglages.
- docs/06-nom.md : vérification de « NEXORA » (avis défavorable) et pistes de noms, avec la marche à suivre INPI / EUIPO / domaines.
- docs/07-checklist-avant-lancement.md : tout ce qui devra être vu ou vérifié avant un lancement définitif (décision, juridique, RGPD, technique, support, commercial, interdits).
- Entrée du 16/11/2026 dans docs/04-decisions.md.

### Modifié
- demo/README.md, README.md, TODO.md.

### Inchangé
- Critères de décision ; aucun backend, aucune base de données, aucune authentification, aucun envoi réel, aucun prix, aucune IA, aucune intégration externe.

## [0.4.0] — 2026-11-14

### Ajouté
- `demo/` : démo cliquable (Vite + React + TypeScript, 2 dépendances d'exécution) : tableau de bord, fiche sous-traitant, ajout de document simulé, lien de dépôt fictif sans compte, alertes avec seuil réglable, relance avec aperçu non envoyé, vérification URSSAF manuelle (nom, date, commentaire), historique et dossier de preuve imprimable. Bandeau « Démo – données fictives » permanent. Huit sous-traitants fictifs avec dates relatives au jour.
- `demo/README.md` : lancement en 2 commandes, parcours de démo en 5 minutes, liste de ce qui est simulé et des limites.
- `.claude/launch.json` : configuration de lancement du serveur de développement de la démo.
- Entrée datée dans docs/04-decisions.md : la démo est un support d'entretien, pas une décision de développer.

### Inchangé
- Critères de décision (docs/04-decisions.md §1), documents `docs/`, règles de la phase de validation.
- Aucun backend, aucune base de données, aucune authentification, aucun envoi d'e-mail, aucun prix, aucune IA, aucune intégration externe.

## [0.3.0] — 2026-11-13

### Ajouté
- Arborescence `docs/` de la phase de validation : 00-contexte, 01-concurrence (tableau daté avec statuts par fait), 02-test-addworking (grille de test à remplir par le fondateur), 03-entretiens/script et grille, 04-decisions (critères Poursuivre / Repositionner / Arrêter, point d'arrêt anticipé, journal), 05-reglementation (articles, sanctions, points à confirmer).

### Modifié
- README.md réécrit : état « non validé », règles de la phase, index des documents ; les documents `docs/` font foi en cas de divergence avec la racine.
- TODO.md : actions de la phase de validation ajoutées en tête ; historique conservé.

### Signalé
- Le fichier `passation_projet_NEXORA.md` demandé comme référence n'existe pas dans le dossier ; docs/00-contexte.md en tient lieu.
- Aucune lecture de page web n'a été possible le 13/11/2026 (outil indisponible) : les faits concurrentiels datent du 12/11/2026 ; les textes légaux n'ont pas été relus sur Légifrance et sont marqués « à confirmer ».

### Inchangé
- Aucun code, aucune intégration, aucun service payant, aucun entretien, aucun contact de prospect.

## [0.2.0] — 2026-11-12

### Ajouté
- PHASE_1_AUDIT.md : audit critique de la phase 1 ; identifie une erreur majeure (concurrents manqués : AddWorking avec offre gratuite, Othentis, Quitus, Axiobat, Bativigie) et des imprécisions juridiques.
- COMPETITOR_ANALYSIS.md : 10 acteurs analysés avec prix publics relevés le 12/11/2026 et niveau de confiance par donnée.
- INTERVIEW_GUIDE.md : 15 questions comportementales, fiche de consignation, biais à surveiller.
- PROSPECTING_KIT.md : sources gratuites de prospects (dont annuaire-entreprises.data.gouv.fr et son API), e-mail, message LinkedIn, script téléphonique, grille d'analyse.
- PRICING_STRATEGY.md : trois niveaux de prix, prix à tester en premier (29 € HT/mois), méthode de test de la volonté de payer en trois niveaux de preuve.
- VALIDATION_SCORECARD.md : 7 critères par entretien + faisabilité MVP, seuils GO / PIVOT / NO GO justifiés, critères d'arrêt immédiat.
- PHASE_2_REPORT.md : synthèse, incertitudes, actions du fondateur, section « Décision » à compléter après entretiens.

### Modifié
- MARKET_RESEARCH.md : erratum ajouté en tête ; contenu historique conservé.
- README.md : statut, hypothèse reformulée (outil opérationnel, pas plateforme juridique), liste des fichiers.
- PRODUCT_SPEC.md : hypothèse harmonisée (3 à 20 salariés), proposition de valeur reformulée, contrainte concurrentielle notée.
- TODO.md : réorganisé autour des actions de validation ; anciennes tâches conservées dans « Historique ».

### Corrigé
- Rattachement de la liste des salariés étrangers aux art. L8254-1 / D8254-2 (et non D8222-5).
- Ajout de la sanction de l'art. L133-4-5 CSS ; retrait de l'« amende de 1 500 € » non sourcée.
- « Devoir de vigilance en cascade fin décembre 2026 » précisé : loi n° 2026-534 du 25 juin 2026, obligation du maître d'ouvrage, décret attendu.
- Chiffre « +85 % de procédures de solidarité financière » désormais rattaché au bilan URSSAF 2025 (1 027 actions).

### Décisions
- Aucune décision GO / PIVOT / NO GO : elle dépend des entretiens à mener par le fondateur.
- Aucun code, aucune intégration, aucun service payant pendant la phase 2.

## [0.1.0] — 2026-11-12

### Ajouté
- Étude de marché initiale (MARKET_RESEARCH.md) : 7 pistes analysées, tableau comparatif, top 3, recommandation (conformité des sous-traitants), plan de validation terrain.
- Fichiers de pilotage : README.md, TODO.md, CHANGELOG.md, ARCHITECTURE.md (préliminaire), PRODUCT_SPEC.md (squelette).

### Décisions
- Piste « facturation / compta micro-entrepreneur » écartée : offres gratuites établies et statut de Plateforme Agréée hors de portée.
- Aucun code écrit avant validation du fondateur.
