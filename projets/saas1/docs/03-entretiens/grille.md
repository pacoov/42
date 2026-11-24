# 03 — Grille de notation par entretien et modèle de fiche

- **Usage** : une fiche par entretien, remplie dans l'heure qui suit, enregistrée dans `interviews/AAAA-MM-JJ-<initiales>.md`. Les scores sont reportés dans `interviews/synthese.md` et alimentent docs/04-decisions.md.
- **Principe** : on note des **faits racontés**, pas des opinions. Un score 2 exige un exemple concret daté.
- **Garde-fou** : la grille et les seuils de décision sont figés avant le premier entretien.

---

## 1. Grille de notation (0 à 2 par critère)

| Code | Critère | 0 | 1 | 2 |
|---|---|---|---|---|
| **F** | Fréquence du problème | Moins de 3 sous-traitants par an, ou aucun contrat ≥ 5 000 € HT | 3 à 7 sous-traitants ; collecte quelques fois par an | 8 sous-traitants ou plus, ou renouvellements tous les mois |
| **C** | Coût / temps perdu | Aucun temps identifié, aucun épisode | Épisode raconté sans conséquence grave, ou temps déclaré < 2 h/mois | Épisode avec conséquence vécue (paiement bloqué, dossier refusé, contrôle, urgence) **ou** temps déclaré ≥ 2 h/mois |
| **O** | Outil actuel | Outil dédié ou ERP qui le satisfait ; ou plateforme imposée par le client qui couvre tout | Tableur, boîte mail, classeur, agenda, avec un rituel | Rien d'organisé |
| **E** | Solutions déjà essayées | Jamais cherché, jamais entendu parler d'un outil | A cherché ou essayé, abandonné sans raison précise | A essayé (ou connaît) un outil nommé et donne une **raison précise** de ne pas l'utiliser |
| **P** | Volonté de payer | Refuse toute dépense, ou plafond spontané < 15 €/mois | Plafond spontané 15 à 28 €/mois, ou accepte 29 € en déclaratif seulement | Plafond spontané ≥ 29 €/mois **et** réponse positive à la précommande ou au pilote |
| **G** | Engagement obtenu | Aucun | Une introduction à un confrère (nom donné) | Pilote accepté avec e-mail et nombre de sous-traitants, **ou** précommande acceptée explicitement |

Score maximal par entretien : 12. Un entretien est **« problème coûteux décrit »** si C = 2 **et** F ≥ 1. Un entretien est **« engagement concret »** si G = 2.

Codes de classement du verbatim principal : **Douleur** / **Contournement** / **Déjà équipé** / **Indifférence**.

---

## 2. Modèle de fiche d'entretien

```
# Entretien <n°> — <date> — <initiales ou code>

Source du contact : réseau / comptable / annuaire / Google Maps / panneau de chantier / CAPEB-FFB / LinkedIn / autre
Canal : téléphone / visio / terrain          Durée : 
Rôle de la personne : dirigeant / conjoint collaborateur / assistante / conducteur de travaux
Entreprise : effectif          corps d'état          département
Dans la cible (≥ 3 sous-traitants/an, ≥ 5 000 € HT) : oui / non / incertain

## A. Qualification
Nb de sous-traitants / 12 mois :          Type : sociétés / auto-entrepreneurs / mixte
Montants typiques par sous-traitant :

## B. Processus réel
Documents demandés spontanément (liste) :
Canal de collecte (SMS, mail, main à main…) :
Où sont stockés les documents :
Qui s'en occupe :                         Temps estimé / mois :
Suivi des 6 mois : comment ?
Vérification du code URSSAF : systématique / parfois / jamais — pourquoi :

## C. Ratés
Épisode concret raconté : oui / non — résumé en 3 lignes :
Conséquence vécue :
Contrôle / demande de pièces vécue : oui / non — temps de constitution du dossier :
Plateforme imposée par un client : non / oui (laquelle, coût, ressenti) :

## D. Déjà essayé
Outils cités spontanément :
Gardé / abandonné et pourquoi :
Logiciels payés aujourd'hui (noms, budget mensuel) :
Dernière résiliation et raison :

## E. Valeur, prix, engagement
Q14 verbatim exact :
Plafond de prix spontané (avant toute annonce) :
Réaction au prix s'il a été évoqué (texte exact) :
Engagement : pilote (e-mail, nb de sous-traitants) / précommande (réponse exacte) / introduction (nom) / aucun

## Scores
F=   C=   O=   E=   P=   G=      Total /12 =
Classement du verbatim principal : Douleur / Contournement / Déjà équipé / Indifférence

## Trois verbatims à conserver (mot à mot)
1.
2.
3.

## Ce que cet entretien change à mes hypothèses (2 lignes)
```

---

## 3. Tableau de synthèse (`interviews/synthese.md`)

| # | Date | Source | Cible ? | Effectif | Nb ST | F | C | O | E | P | G | Total | Classement | Pb coûteux ? | Engagement concret ? |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

Sous le tableau, trois lignes de totaux : nombre d'entretiens dans la cible ; nombre de « problème coûteux décrit » ; nombre d'« engagement concret ». Ce sont les trois chiffres qui alimentent docs/04-decisions.md.
