# VALIDATION_SCORECARD — Grille de décision GO / PIVOT / NO GO

- **Date** : 12 novembre 2026
- **Usage** : remplie après **au moins 10 entretiens exploitables** (personnes de la cible, 15 minutes minimum, fiche complète). Les entretiens « hors cible » (ne sous-traite pas) sont comptés à part : ils renseignent la taille réelle du segment.
- **Principe** : chaque entretien reçoit un score de 0 à 2 sur sept critères. On additionne par critère sur l'ensemble des entretiens, puis on applique les seuils. Un huitième critère (faisabilité du MVP) est évalué une fois, hors entretiens.
- **Garde-fou** : la grille est figée **avant** le premier entretien. On ne modifie pas les seuils après avoir vu les résultats.

---

## 1. Les critères et leur barème (par entretien)

| Code | Critère | 0 point | 1 point | 2 points |
|---|---|---|---|---|
| **F** | Fréquence du problème | Moins de 3 sous-traitants par an, ou aucun contrat ≥ 5 000 € HT | 3 à 7 sous-traitants, collecte quelques fois par an | 8 sous-traitants ou plus, ou renouvellements mensuels |
| **I** | Importance pour le prospect | Aucun épisode concret ; « on demande une fois et c'est tout » ; indifférence | Un épisode raconté (document périmé, urgence) sans conséquence grave | Épisode avec conséquence vécue (contrôle, dossier refusé par un MOA, retard de paiement, sanction) ou temps déclaré ≥ 2 h/mois |
| **S** | Solutions actuelles | Déjà équipé d'un outil qui le satisfait (AddWorking, ERP, plateforme du MOA) | Tableur, boîte mail ou classeur, avec un rituel | Rien d'organisé, ou outil essayé puis abandonné avec une raison précise |
| **B** | Budget potentiel | Aucun logiciel payant, ou résiliation récente « parce que trop cher » | Paie 1 à 2 logiciels, budget total < 50 €/mois | Paie déjà ≥ 50 €/mois de logiciels, ou a une assistante dont c'est une tâche |
| **P** | Volonté de payer | Refuse 29 € ou plafond spontané < 15 € | Accepte 29 € en déclaratif, ou plafond spontané 15–28 € | Plafond spontané ≥ 29 € **et** accepte l'engagement de niveau 2 (bêta payante différée, confirmation écrite) |
| **A** | Accessibilité | Obtenu par introduction personnelle uniquement, aucune recommandation donnée | Obtenu à froid après plusieurs relances, ou 1 recommandation | Obtenu à froid au premier ou deuxième contact, ou ≥ 2 recommandations |
| **D** | Différenciation perçue | Connaît et utilise un outil adapté ; ne voit pas ce qu'un autre apporterait | Ne connaît pas les outils existants (la différenciation serait la notoriété, fragile) | Connaît un outil existant et formule une raison précise de ne pas l'utiliser (trop lourd, compte sous-traitant, prix, pas pour sa taille) |

**Critère unique, évalué par Claude et le fondateur, hors entretiens :**

| Code | Critère | 0 | 1 | 2 |
|---|---|---|---|---|
| **M** | Faisabilité d'un MVP en 6 à 8 semaines, sans API payante, par un développeur débutant accompagné | Dépend d'une intégration ou d'une donnée inaccessible | Faisable avec des compromis notables (ex. vérification URSSAF manuelle guidée) | Faisable intégralement avec la stack et les services gratuits identifiés |

Évaluation actuelle de M : **1**. La vérification URSSAF ne peut pas être automatisée (pas d'API publique) ; le reste est faisable. Ce score ne bougera qu'avec un fait nouveau.

---

## 2. Seuils de décision (sur 10 entretiens exploitables, maximum 20 points par critère)

| Décision | Conditions (toutes requises) | Pourquoi ce seuil |
|---|---|---|
| **GO** | F ≥ 12 · I ≥ 12 · S ≥ 10 · P ≥ 10 avec **au moins 3 engagements de niveau 2** · D ≥ 10 · M ≥ 1 · et au plus 3 entretiens hors cible pour 10 exploitables | Une moyenne ≥ 1,2 sur F et I signifie que le problème est fréquent **et** a déjà coûté quelque chose à la majorité ; 3 engagements écrits sont le minimum pour constituer une bêta réelle ; D ≥ 10 garantit que l'on ne construit pas un clone ignoré du gratuit ; le ratio hors cible borne la taille du segment. |
| **PIVOT** | I ≥ 10 et (S ≤ 8 ou D ≤ 8 ou P ≤ 8 ou plus de 5 entretiens hors cible), ou bien F et I élevés chez un **sous-groupe identifiable** (ex. uniquement les entreprises travaillant pour des MOA publics, uniquement les non-BTP) | Le problème existe mais la cible, le canal ou la proposition ne sont pas les bons. On reformule une hypothèse précise et on refait 6 entretiens ciblés, sans coder. |
| **NO GO** | I ≤ 8, ou P ≤ 6, ou S ≤ 6 (majorité déjà équipée et satisfaite), ou D ≤ 6 | Si la majorité n'a jamais eu de conséquence, ne paierait pas 29 €, est déjà servie, ou ne voit pas de raison de changer, aucune exécution ne compensera. |
| **Indéterminé** | Toute autre combinaison | Mener 5 entretiens supplémentaires en corrigeant le biais d'échantillon le plus probable (canal, taille, région), puis trancher. Pas de troisième prolongation : au-delà de 15 entretiens sans GO, c'est PIVOT ou NO GO. |

Remarque sur les ordres de grandeur : F ≥ 12/20 correspond à « au moins 6 entreprises sur 10 avec un vrai flux de sous-traitance » ; I ≥ 12 à « au moins 6 sur 10 ont déjà payé le prix d'un oubli » ; P ≥ 10 avec 3 engagements à « la moitié accepte le prix en parole et un tiers le prouve par un acte ».

---

## 3. Critères d'arrêt immédiat (avant même les 10 entretiens)

- Le fondateur teste AddWorking Essentiel et constate qu'il couvre le besoin d'une TPE **sans friction majeure** (invitation du sous-traitant simple, relances fonctionnelles, interface compréhensible en moins d'une heure). Dans ce cas, la seule différenciation restante est la notoriété : décision PIVOT avant d'investir le temps des entretiens, ou poursuite uniquement avec une hypothèse de différenciation nouvelle et écrite.
- 5 premiers entretiens avec I = 0 sur au moins 4 : arrêter, reformuler, changer de canal de recrutement avant de continuer.

---

## 4. Feuille de calcul

À tenir dans `interviews/synthese.md` (modèle dans PROSPECTING_KIT.md §6). Totaux par colonne, puis application mécanique de la section 2. La décision et sa justification sont consignées dans PHASE_2_REPORT.md, section « Décision ».

---

## 5. Ce que la grille ne mesure pas

- La capacité du fondateur à vendre et supporter le produit dans la durée.
- Le risque de réaction des concurrents (un acteur gratuit peut ajouter la fonction manquante).
- La valeur d'apprentissage du projet, qui est réelle mais ne doit pas servir de prétexte pour transformer un NO GO en GO.
