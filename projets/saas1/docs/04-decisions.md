# 04 — Journal des décisions et critères Go / Repositionner / Arrêter

- **Date de création** : 13 novembre 2026
- **Usage** : le haut du document fixe les critères **avant** les entretiens ; le bas est un journal daté, en ajout seulement (on ne réécrit pas une décision passée, on en ajoute une nouvelle).

---

## 1. Critères de décision (figés le 13/11/2026, avant tout entretien)

Base : 10 entretiens **dans la cible** (entreprise du BTP de 3 à 20 salariés, au moins 3 sous-traitants par an, contrats ≥ 5 000 € HT), notés avec docs/03-entretiens/grille.md. Les entretiens hors cible sont comptés à part.

| Décision | Critère | Pourquoi ce seuil |
|---|---|---|
| **Poursuivre** | Au moins **3 entreprises sur 10** décrivent un problème coûteux (C = 2 et F ≥ 1) **et** **1 à 2** acceptent un engagement concret (G = 2 : pilote avec e-mail et nombre de sous-traitants, ou précommande explicite) | Trois récits de coût réel sur dix écartent le simple irritant. Un ou deux engagements prouvent qu'au moins une personne agit, pas seulement approuve. C'est volontairement bas : on valide le droit de continuer à explorer, pas le succès. |
| **Repositionner** | Le problème est réel (au moins 3 « problème coûteux ») **mais** : aucun engagement, **ou** les problèmes se concentrent sur un sous-groupe identifiable (une taille, un type de client, un secteur hors BTP, le côté sous-traitant), **ou** la raison de ne pas payer est toujours la même et désigne une autre proposition de valeur | Un problème sans engagement signale que la cible ou la promesse est à côté, pas que le sujet est vide. On reformule une hypothèse précise et on refait 5 à 6 entretiens ciblés, sans coder. |
| **Arrêter** | **L'offre gratuite suffit** (le test docs/02 montre qu'AddWorking Essentiel couvre le besoin de bout en bout et les interviewés qui le connaissent en sont satisfaits) **et** aucune raison concrète de payer n'émerge (P ≤ 1 partout, aucun G = 2) ; **ou** moins de 2 « problème coûteux » sur 10 ; **ou** la majorité est déjà couverte par la plateforme imposée par son client (O = 0 majoritaire) | Si le gratuit suffit et que personne ne décrit de coût, il n'y a rien à vendre. Aucune exécution ne compense l'absence de problème. |
| **Indéterminé** | Toute autre combinaison | 5 entretiens supplémentaires en corrigeant le biais le plus probable (canal, taille, région), puis décision. Au-delà de 15 entretiens sans « Poursuivre », c'est Repositionner ou Arrêter. |

### Point d'arrêt anticipé (après 5 à 6 entretiens dans la cible)

- Si **aucun** « problème coûteux » n'a émergé sur 5 à 6 entretiens, **ou** si le test docs/02 conclut que le gratuit couvre le besoin sans friction majeure : on s'arrête, on écrit la décision ci-dessous (Arrêter ou Repositionner), et on ne consomme pas les dix entretiens pour se rassurer.
- Si 2 « problème coûteux » ou plus sont apparus : on continue jusqu'à 10.

### Ce que les critères ne mesurent pas

La capacité du fondateur à vendre et à supporter un produit dans la durée ; la réaction possible des concurrents ; la valeur d'apprentissage du projet, qui ne doit pas servir à transformer un « Arrêter » en « Poursuivre ».

---

## 2. Décisions déjà prises (rappel, phases 1 et 2, 12/11/2026)

| Date | Décision | Fondement | Statut |
|---|---|---|---|
| 12/11/2026 | Écarter la piste « facturation / compta micro-entrepreneur » | Offres gratuites établies (Abby, Indy, Tiime, Pennylane) ; statut de Plateforme Agréée hors de portée | Maintenue |
| 12/11/2026 | Retenir « suivi documentaire des sous-traitants » comme hypothèse prioritaire, « relances d'impayés » comme plan B | Étude de marché de phase 1 | Maintenue **comme hypothèse**, rétrogradée par l'audit de phase 2 (concurrents manqués, dont une offre gratuite) |
| 12/11/2026 | Aucun code avant une décision fondée sur des entretiens | Règle du fondateur | Maintenue |
| 12/11/2026 | Tester AddWorking Essentiel avant le premier entretien | Découverte de l'offre gratuite | À faire |
| 13/11/2026 | Reformuler la promesse : outil **opérationnel** (oublis, relances, dispersion), jamais « plateforme juridique garantissant la conformité » | Brief du fondateur du 13/11 | Appliquée dans tous les documents `docs/` |
| 13/11/2026 | Figer les critères Go / Repositionner / Arrêter ci-dessus avant les entretiens | Éviter d'ajuster les seuils après avoir vu les résultats | Appliquée |

---

## 3. Journal (ajouter en bas, ne jamais modifier une entrée)

### 2026-11-13 — Ouverture de la phase de validation
- Arborescence `docs/` créée ; critères figés ; aucun entretien réalisé ; aucun prospect contacté ; aucun code.
- Information manquante signalée : le fichier `passation_projet_NEXORA.md` n'existe pas dans le dossier.
- Prochaine entrée attendue : résultat du test AddWorking (docs/02), puis synthèse après 5 à 6 entretiens.

### 2026-11-14 — Démo cliquable créée comme support d'entretien
- Démo cliquable créée comme support d'entretien dans `demo/` (Vite + React + TypeScript, données fictives, tout simulé côté navigateur). **Ce n'est pas une décision de développer le produit.** La démo sert à recueillir des réactions sur des fonctions concrètes à la fin des entretiens ; elle est jetable.
- Les critères de décision de la section 1 sont inchangés.
- Aucun entretien réalisé, aucun prospect contacté, aucune donnée réelle.

### 2026-11-16 — Démo v2 (deux modes) et documents de préparation
- Le fondateur a demandé une **nouvelle démo** plus aboutie visuellement, avec deux modes : « données fictives » et « vide, comme à la réception » (tutoriel « Premiers pas »), commutables dans les réglages. Livrée dans `demo/`. **Ce n'est toujours pas une décision de développer le produit** : pas de backend, pas de comptes, pas d'envoi réel, pas de prix.
- Notion de **dossier** adoptée dans la démo = un contrat de sous-traitance (chantier, montant, dates) ; les documents restent rattachés au sous-traitant. À confirmer en entretien.
- Le fondateur a écarté le lancement commercial immédiat et les briques « produit final » (comptes, stockage réel, e-mails, hébergement commercial) : elles sont listées dans docs/07-checklist-avant-lancement.md pour plus tard.
- Nom : avis défavorable sur « NEXORA » (homonymes nombreux, dont un projet crypto) ; pistes dans docs/06-nom.md ; vérifications INPI à faire par le fondateur.
- Les critères de décision de la section 1 sont inchangés. Aucun entretien réalisé.

### (à compléter) — Résultat du test AddWorking
- Verdict question 1 (gratuit de bout en bout) :
- Conséquence :

### (à compléter) — Point d'arrêt anticipé après 5 à 6 entretiens
- Entretiens dans la cible : — · « problème coûteux » : — · engagements : —
- Décision : continuer / Repositionner / Arrêter — justification :

### (à compléter) — Décision après 10 entretiens
- Totaux : —
- Décision : Poursuivre / Repositionner / Arrêter — justification en 5 lignes, avec 3 verbatims :
