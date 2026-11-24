# TODO — NEXORA

## 16/11/2026 — Démo v2 et nom

- [ ] Fondateur : choisir une direction visuelle parmi les quatre (Réglages → Apparence) et me dire ce qui cloche.
- [ ] Fondateur : vérifier trois noms finalistes sur data.inpi.fr, EUIPO et les domaines (docs/06-nom.md §4).
- [ ] Fondateur : parcourir le mode vide (Réglages → Désactiver les données fictives) comme un nouvel utilisateur et noter chaque hésitation.
- [ ] Claude : à chaque retour, ajuster la démo ; ne rien construire de la checklist docs/07 avant une décision Poursuivre.

## 14/11/2026 — Démo cliquable

- [ ] Fondateur : dérouler le parcours de 5 minutes de `demo/README.md` une fois seul avant le premier entretien.
- [ ] Fondateur : montrer la démo **uniquement après** les questions d'entretien (docs/03-entretiens/script.md), jamais avant.
- [ ] Noter les réactions à chaque fonction dans la fiche d'entretien (champ « Ce que cet entretien change à mes hypothèses »).

## 13/11/2026 — Phase de validation (arborescence `docs/`)

- [ ] Fondateur : remplir docs/02-test-addworking.md avec un compte gratuit (données factices uniquement) ; consigner dans `interviews/00-test-addworking.md`.
- [ ] Fondateur : relire docs/05-reglementation.md et confirmer sur Légifrance les articles marqués « à confirmer » avant tout usage externe.
- [ ] Fondateur : 5 à 6 premiers entretiens avec docs/03-entretiens/script.md ; fiches dans `interviews/` ; point d'arrêt anticipé selon docs/04-decisions.md.
- [ ] Claude : dépouiller les fiches, tenir `interviews/synthese.md`, mettre à jour docs/04-decisions.md (journal, ajout seulement).
- [ ] Si un fichier `passation_projet_NEXORA.md` existe ailleurs : l'ajouter au dossier et réviser docs/00-contexte.md.

## Phase 2 — Validation terrain (actions du fondateur, dans l'ordre)

- [ ] Jour 1 : tester AddWorking Essentiel (compte gratuit, 2 sous-traitants fictifs, 1 h) et consigner dans `interviews/00-test-addworking.md`. Lire VALIDATION_SCORECARD.md §3 avant de continuer.
- [ ] Valider le texte de la fiche récapitulative « documents à demander à un sous-traitant et quand » (Claude rédige, le fondateur met en page). Voir PROSPECTING_KIT.md §5.
- [ ] Constituer `prospects.csv` avec 30 à 50 contacts (PROSPECTING_KIT.md §1).
- [ ] Contacter, relancer à J+4, mener 10 à 15 entretiens avec INTERVIEW_GUIDE.md ; une fiche par entretien dans `interviews/`.
- [ ] Après 3 entretiens : relecture des fiches par un tiers ; ajuster les formulations sans toucher aux seuils.
- [ ] Remplir `interviews/synthese.md`, appliquer VALIDATION_SCORECARD.md, consigner la décision dans PHASE_2_REPORT.md.

## Vérifications restées ouvertes (sans contact commercial)

- [ ] Revisiter les sites de Provigis et Bativigie (injoignables le 12/11/2026).
- [ ] Vérifier les limites de l'offre gratuite Supabase directement sur supabase.com.
- [ ] Surveiller la parution du décret d'application de la loi n° 2026-534 du 25 juin 2026 (seuil, documents, date d'entrée en vigueur).
- [ ] Confirmer sur urssaf.fr le déroulé exact de la vérification d'attestation par code de sécurité.

## Phase 3 — Cahier des charges et architecture (uniquement si décision GO)

- [ ] Rédiger PRODUCT_SPEC.md à partir des verbatims (positionnement, parcours, MVP, exclusions, tarifs).
- [ ] Finaliser ARCHITECTURE.md : hébergement (Vercel Hobby interdit l'usage commercial), modèle de données, sécurité des documents, registre RGPD.

## Hors périmètre tant que la décision n'est pas prise

- Tout développement applicatif, toute intégration technique, tout changement de stack.
- Toute dépendance ou service payant (SMS, IA, enrichissement de données, pré-paiement).

## Historique

- Phase 1 (12/11/2026) : étude de marché livrée ; recommandation « conformité des sous-traitants » ; plan de validation initial (MARKET_RESEARCH.md §6).
- Phase 2 (12/11/2026) : audit de la phase 1 ; concurrents manqués identifiés (AddWorking gratuit, Othentis, Quitus, Axiobat, Bativigie) ; hypothèse corrigée ; kit de validation produit. Les anciennes tâches « lister 20 à 30 contacts », « 10 entretiens avec la grille §6.3 », « vérifier Once For All, Subclic, AddWorking en démo » sont remplacées par les tâches ci-dessus.
