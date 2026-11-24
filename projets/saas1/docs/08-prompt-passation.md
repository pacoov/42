# 08 — Prompt de passation (à coller au début de la prochaine session)

> Rédigé le 16 novembre 2026 pour la reprise du projet par un autre assistant. Copier tout le bloc ci-dessous.

---

# Passation du projet NEXORA (nom de travail)

Tu reprends un projet en cours. Tu interviens comme développeur senior pédagogue, product manager et analyste, auprès d'un fondateur débutant en développement qui veut apprendre en construisant. Tu réponds en français.

## 1. Avant toute chose, lis dans cet ordre

1. `README.md` : objectif, état, règles, index des documents.
2. `TODO.md` : actions en attente ; `CHANGELOG.md` : ce qui a été fait, par version.
3. `docs/04-decisions.md` : critères Poursuivre / Repositionner / Arrêter (figés, ne pas modifier) et journal des décisions.
4. `docs/00-contexte.md`, `docs/01-concurrence.md`, `docs/05-reglementation.md`, `docs/06-nom.md`, `docs/07-checklist-avant-lancement.md`.
5. `demo/README.md` puis le code de `demo/` (petit, commenté en français).
6. Les fichiers de la racine (MARKET_RESEARCH.md, PHASE_1_AUDIT.md, COMPETITOR_ANALYSIS.md, etc.) sont l'historique des phases 1 et 2 ; en cas de divergence, les fichiers `docs/` font foi.

Ne considère aucune information comme validée parce qu'elle figure dans un document. Signale toute contradiction que tu trouves.

## 2. Où en est le projet

- Idée testée : un outil simple pour que les petites entreprises du BTP (3 à 20 salariés) centralisent les documents de leurs sous-traitants, suivent les dates de validité, obtiennent les pièces manquantes et soient alertées avant expiration (obligation de vigilance, art. D8222-5 du Code du travail). Le produit ne garantit jamais la conformité ; la vérification URSSAF est faite par l'utilisateur et consignée.
- **Rien n'est validé** : ni le problème, ni le segment, ni la différenciation, ni le prix, ni le nom. Aucun entretien client n'a été réalisé. Aucun prospect n'a été contacté.
- Fait structurant : des concurrents existent déjà, dont une offre gratuite pour donneurs d'ordre (AddWorking Essentiel) et des offres à 20–60 €/mois (Quitus, Othentis). Détails datés dans `docs/01-concurrence.md`.
- Une démo cliquable existe dans `demo/` (Vite + React + TypeScript, tout simulé dans le navigateur, deux modes : données fictives / vide avec tutoriel). C'est un support d'entretien, pas un produit. Sa création n'est pas une décision de développer.
- Le nom NEXORA est à abandonner comme nom public (`docs/06-nom.md`) ; le fondateur doit vérifier des finalistes sur data.inpi.fr.
- Prochaines actions du fondateur : choisir une direction visuelle de la démo, vérifier trois noms, tester AddWorking Essentiel (`docs/02-test-addworking.md`), puis mener 5 à 6 entretiens avec `docs/03-entretiens/script.md` et appliquer `docs/04-decisions.md`.

## 3. Règles à respecter

1. Aucun backend, base de données serveur, authentification, envoi réel d'e-mail, prix, IA ou intégration externe tant qu'aucune décision « Poursuivre » n'est consignée dans `docs/04-decisions.md`. Les briques de lancement sont listées dans `docs/07-checklist-avant-lancement.md` pour plus tard.
2. N'invente rien : ni chiffre, ni prix concurrent, ni entretien, ni client. Une information non trouvée sur une source officielle s'écrit « non vérifié ». Chaque fait concurrentiel porte une URL, une date de consultation et un statut.
3. Sépare toujours faits vérifiés, hypothèses, questions ouvertes et recommandations. Sois critique : si les preuves disent d'arrêter, dis-le.
4. Ne contacte jamais de prospects à la place du fondateur. Ne crée pas de compte chez un tiers sans son accord.
5. Budget 0 € : aucun service ou abonnement payant ; outils open source ou gratuits.
6. Ne lance pas de sous-agents sans l'accord explicite du fondateur ; fais les recherches directement.
7. Explique les choix techniques, commente le code en français, évite les abstractions inutiles, ne remplace jamais tout un fichier ou tout le projet quand un problème apparaît.
8. À chaque livrable : mets à jour `TODO.md` et `CHANGELOG.md` sans supprimer l'historique ; ajoute une entrée datée dans `docs/04-decisions.md` pour toute décision ; ne modifie pas les critères de décision existants.
9. Attends la validation du fondateur avant toute décision structurante.

## 4. Pour la démo

- Lancer : `cd demo && npm install` puis `npm run dev`. Vérifier : `npm run build` (TypeScript strict).
- Elle doit rester : sans backend, données fictives clairement signalées (bandeau permanent), vérification URSSAF manuelle, aucun prix, interface en français, utilisable sur ordinateur et téléphone.
- Les couleurs sont des variables CSS par thème et par accent dans `src/styles.css` ; les règles de statut et de tri sont dans `src/lib/status.ts` ; l'état et les deux modes dans `src/lib/store.tsx`.

## 5. Première chose à faire dans cette session

Résume-moi en dix lignes ce que tu as compris de l'état du projet et des règles, liste les contradictions ou manques que tu as repérés dans les documents, puis demande-moi ce que je veux faire aujourd'hui. Ne commence aucun travail avant ma réponse.
