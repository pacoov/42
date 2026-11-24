# NEXORA (nom de travail) — Démonstration cliquable v2

**Ce n'est pas un produit.** C'est un support de discussion à montrer en fin d'entretien. Tout est simulé dans le navigateur : aucun backend, aucune base de données serveur, aucune authentification, aucun e-mail envoyé, aucune connexion à l'URSSAF ou à un service externe, aucun prix affiché.

## Lancer (2 commandes)

```bash
cd demo && npm install
```

```bash
npm run dev
```

Ouvrir l'adresse affichée (http://localhost:5173 par défaut). Version statique : `npm run build` produit `dist/`, à servir avec n'importe quel serveur de fichiers (`npx serve dist`). Prérequis : Node.js 18 ou plus. Stack : Vite + React + TypeScript ; polices Sora et Inter en fichiers locaux (licence libre) ; aucune autre dépendance.

## Les deux modes

| Mode | Pour quoi | Comment |
|---|---|---|
| **Données fictives** (par défaut) | Montrer l'outil « en vie » : 8 sous-traitants, 11 dossiers dont 3 terminés, situations variées, dates calculées par rapport au jour | Réglages → Mode de démonstration → « Activer les données fictives » |
| **Vide, comme à la réception** | Montrer l'arrivée d'un nouvel utilisateur : accueil de bienvenue, tutoriel « Premiers pas » qui se coche tout seul, aucune donnée | Réglages → « Désactiver les données fictives (mode vide) » |

Les réglages (nom, logo, thème, seuil) sont conservés d'un mode à l'autre. « Réinitialiser » remet le mode courant à son état initial. Tout reste dans le localStorage du navigateur ; en mode fictif les données sont régénérées chaque jour.

## Parcours de démo conseillé (5 minutes, mode fictif)

1. **Accueil** : seulement l'urgent du mois, trié par échéance. Changer le seuil (30 → 15 jours). Question : « Cette liste, vous l'avez où aujourd'hui ? »
2. **Dossiers → En cours** : un dossier = un chantier, un montant, des dates. Terminer un dossier, le retrouver dans **Historique**. Question : « C'est par chantier ou par sous-traitant que vous raisonnez ? »
3. **Fiche Menuiserie Alu Verdier** (rien reçu) : « Préparer la relance » (aperçu, rien n'est envoyé), puis « Envoyer le lien » (aperçu d'e-mail, marquage manuel). Question : « Votre sous-traitant ferait ça depuis son téléphone ? »
4. **Page du sous-traitant** (bouton « Voir la page du sous-traitant ») : dépôt sans compte, barre de progression, confirmation. Revenir sur la fiche : la pièce apparaît « via le lien ».
5. **Fiche Couverture Bastide Frères** : URSSAF reçue mais non vérifiée → cocher « attestation vérifiée ». Faire lire : vérification manuelle, aucune connexion URSSAF.
6. **Dossier de preuve** (bouton sur la fiche) : imprimer / PDF.
7. **Réglages** : logo, nom, thème sombre, couleurs. Question : « Vous préférez laquelle ? »

Ensuite, montrer le **mode vide** en une minute : accueil de bienvenue, « Premiers pas », créer un sous-traitant avec son premier dossier.

Si on vous demande « ça coûte combien ? » : « Ce n'est pas fixé. Vous, vous mettriez combien, et à la place de quoi ? »

## Ce qui est simulé et ce qui ne l'est pas

| Simulé | Réel |
|---|---|
| Entreprises, contacts, SIRET (tous commencent par 000), documents | Calcul des statuts à partir des dates saisies |
| Fichiers : seul le nom est gardé, le contenu n'est ni lu ni stocké | Seuil d'alerte, tri par urgence |
| Relance et envoi du lien : aperçu, rien ne part ; marquage manuel | Vérification URSSAF **manuelle** consignée (nom, date, commentaire) |
| Page de dépôt : une page de la même démo, adresse courte fictive | Chronologie, historique par dossier, dossier de preuve imprimable |
| Sauvegarde : localStorage, rien ne quitte la machine | Logo et réglages dans le navigateur |

## Limites connues

- Une seule entreprise par navigateur ; pas de comptes, pas de multi-utilisateurs.
- Pas de modification ni de suppression de document ou de sous-traitant après création (hors périmètre de la démo).
- Le lien de dépôt n'est ni sécurisé ni partageable : il ne fonctionne que dans le navigateur où la démo tourne.
- Les cinq familles de documents sont une proposition ; sous-traitant étranger, marchés publics, intérim ne sont pas couverts.
- Les durées de validité par défaut sont des conventions (sauf les six mois URSSAF), modifiables à la saisie.
- En mode fictif, les modifications d'une journée ne survivent pas au lendemain.
- `dist/index.html` nécessite un serveur local, même minimal.

## Organisation du code

- `src/types.ts` : sous-traitant, document, dossier (= contrat), réglages, modes.
- `src/data/docTypes.ts` : les cinq familles de documents, légales ou de pratique.
- `src/data/seed.ts` : données fictives et état vide.
- `src/lib/status.ts` : statuts, alertes, tri par urgence.
- `src/lib/store.tsx` : état en mémoire, sauvegarde locale, bascule des modes.
- `src/lib/theme.ts` : thèmes et directions de couleurs (variables CSS sur `<html>`).
- `src/lib/router.ts` : navigation par `#/…`.
- `src/components/` : coque avec menu latéral, bandeau, badges, chronologie, modale, tutoriel.
- `src/pages/` : Accueil, Dossiers, fiche, nouveau sous-traitant, dépôt, historique, réglages, à propos.
- `src/styles.css` : feuille de style unique ; les couleurs sont des variables par thème et par accent.
