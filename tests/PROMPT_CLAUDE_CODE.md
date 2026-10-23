# Prompt de démarrage pour Claude Code

Préparation (une seule fois) : dézippe `le-fil-d-ariane.zip`, ouvre Claude Code dans le dossier `le-fil-d-ariane/`, puis colle le prompt ci-dessous.

---

Tu reprends le développement du site **Le Fil d'Ariane** : un site éducatif sur la mythologie grecque pour les 15–25 ans (Next.js 16, TypeScript strict, Tailwind v4, 100 % statique). Ce dossier contient déjà un dépôt Git avec tout l'historique.

## Étape 0 — Mise en place
1. Lis `CLAUDE.md` (règles du dépôt, répartition du travail), `AGENTS.md` (Next.js 16 diffère de ce que tu connais : consulte `node_modules/next/dist/docs/` avant d'utiliser une API), puis `docs/PROJECT_BLUEPRINT.md` en entier.
2. Lance `npm install`, puis `npm run content:check && npm test && npm run typecheck && npm run lint && npm run build`. Tout doit être vert avant de continuer.
3. Envoie le projet sur GitHub, dépôt `https://github.com/pacoov/mini-porjets.git` :
   - regarde d'abord ce qu'il contient (`git ls-remote`, ou clone-le dans un dossier temporaire) ;
   - s'il est **vide** : ajoute-le comme `origin` et pousse la branche `main` ;
   - s'il contient **déjà d'autres projets** : ne réécris rien. Clone-le, copie ce projet dans un sous-dossier `le-fil-d-ariane/` (sans `node_modules` ni `.next`), commite et pousse. À partir de là, travaille dans ce clone, et adapte les chemins de la CI (`.github/workflows/ci.yml` → `working-directory: le-fil-d-ariane`) ;
   - si l'authentification échoue, arrête-toi et explique-moi quoi faire.

## Ce qui existe déjà (phases 1 à 3)
Pipeline de contenu validé par Zod (YAML + MDX) avec graphe de relations calculé au build ; pages Accueil, catégories et fiches ; menu mobile ; design system « Marbre & Abysse » ; 5 fiches vérifiées (Méduse, Zeus, Poséidon, Hadès, Athéna) avec leurs œuvres du Met en CC0 et leurs pictogrammes.

## Ton rôle
Tu construis le site. Le contenu (fiches, sources, images) est produit et vérifié par une autre équipe, et arrive dans `content/`, `public/media/` et `docs/editorial/`, soit par des branches Git `contenu/*`, soit dans un zip. **Pour intégrer une livraison**, copie uniquement ces trois dossiers, lance `npm run content:check` et `npm run build`, puis commite avec « Contenu : <liste des fiches> ».
Tu ne modifies **jamais** un fait, une source, une date ou une citation du contenu. Quand une fonctionnalité a besoin d'un nouveau type de données, définis son schéma Zod, documente-le dans `docs/editorial/FORMATS.md` avec un exemple complet, et ajoute 2 exemples en `review: { status: draft }`.

## Feuille de route
Un commit par étape. Ne passe à la suivante que si les 5 commandes de l'étape 0 sont vertes. Après chaque étape, résume en 3 lignes ce qui a changé et ce qui reste.

1. **Ordre du Panthéon** : Zeus, Héra, Poséidon, Hadès, Athéna, puis les autres (blueprint §7), au lieu de l'ordre alphabétique. Ajoute un champ `order` optionnel au schéma.
2. **Le Fil d'Ariane, la fonctionnalité signature (§10)** : enregistre le parcours du visiteur pendant la session (`sessionStorage`) ; un bouton flottant dessine ce chemin en fil doré, permet de revenir à n'importe quelle étape et donne un lien de partage. Accessible au clavier et aux lecteurs d'écran, `prefers-reduced-motion` respecté.
3. **Fiche d'entité complète (§15.5)** : sommaire collant, sélecteur de profondeur Découvrir / Comprendre / Approfondir (§9), mini-arbre familial statique sur 3 générations, aperçus au survol des liens `<E>`, bloc « Prochaine porte ».
4. **Arbre généalogique `/fr/genealogie` (§15.13)** : SVG avec mise en page calculée au build (dagre), vue « focus » sur mobile, alternative en listes imbriquées, navigation au clavier.
5. **Recherche (§28)** : Pagefind, palette ⌘K, alias (Hercule → Héraclès), insensible aux accents.
6. **L'Oracle, le bouton « Surprends-moi » (§10)**.
7. **Schémas des nouveaux contenus**, sans les remplir : Mythe (§15.10, §24), Quiz (§26), Comparaison pop culture (§25), Mot (§15.18). Pour chacun : schéma Zod, chargement, page-modèle, 2 exemples en `draft`, documentation dans `docs/editorial/FORMATS.md`.
8. **Pages** : Explorer (§15.2), La mythologie en 5 minutes (§15.3), Quiz (§15.20) avec le moteur de score, Codex et gamification sans compte (§27).
9. **SEO (§35)** : JSON-LD, images Open Graph générées, `hreflang` prêt pour les futures langues.
10. **Qualité (§38)** : tests Playwright des parcours du §14 avec axe, Lighthouse CI avec les budgets du §36.
