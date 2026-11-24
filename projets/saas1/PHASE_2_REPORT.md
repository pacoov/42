# PHASE_2_REPORT — Synthèse de la phase 2 : audit et préparation de la validation commerciale

- **Date** : 12 novembre 2026
- **Ce que cette phase a produit** : un audit critique de la phase 1 (PHASE_1_AUDIT.md), une analyse concurrentielle élargie (COMPETITOR_ANALYSIS.md), le guide d'entretien (INTERVIEW_GUIDE.md), le kit de prospection (PROSPECTING_KIT.md), les hypothèses de prix (PRICING_STRATEGY.md) et la grille de décision (VALIDATION_SCORECARD.md).
- **Ce que cette phase n'a pas produit** : aucun entretien, aucun contact, aucune donnée primaire. Tout ce qui suit repose sur des sources publiques consultées le 12/11/2026 et sur du raisonnement. La décision GO / PIVOT / NO GO **n'est pas prise** : elle dépend des entretiens que seul le fondateur peut mener.

---

## 1. NEXORA répond-il à un problème réel ?

**Le problème existe ; sa douleur pour la cible n'est pas démontrée.**

Faits établis :
- L'obligation est réelle, précise et périodique : au-delà de 5 000 € HT, attestation URSSAF et justificatif d'immatriculation à la signature puis tous les 6 mois (art. D8222-5), liste des salariés étrangers tous les 6 mois (art. D8254-2) ✅.
- L'application se durcit : 1 027 actions de solidarité financière en 2025, +85 % en un an ; 1 503 M€ de redressements pour travail dissimulé dont 877 M€ dans le BTP (bilan URSSAF 2025, publié le 20 février 2026) ✅ relayé.
- La loi n° 2026-534 du 25 juin 2026 étend une obligation de vigilance aux maîtres d'ouvrage, applicable au plus tard fin décembre 2026 (décret attendu) ✅.
- Le marché l'a reconnu : au moins dix éditeurs adressent le sujet, dont un gratuitement ✅.

Ce qui manque : toute mesure du temps passé, de la fréquence des oublis et de leurs conséquences **dans des entreprises de 3 à 20 salariés**. Les seuls chiffres disponibles sont des arguments marketing d'éditeurs. Sans entretiens, il est impossible de dire si ces entreprises souffrent du problème ou l'ignorent.

## 2. Quelle cible semble la plus prometteuse ?

**Hypothèse maintenue, mais rétrogradée de « décision » à « pari à tester » : l'entreprise du bâtiment de 3 à 20 salariés qui fait travailler 5 à 20 sous-traitants par an, dont des auto-entrepreneurs, sur des marchés privés sans plateforme imposée par le client.**

Pourquoi celle-ci : c'est là que les outils existants semblent le moins adaptés (plateformes conçues pour des panels de centaines de tiers, ERP trop lourds), et là où le sous-traitant est le moins équipé (donc où un dépôt sans compte a le plus de valeur). Pourquoi un pari : la même cible est déjà visée par Quitus et couverte gratuitement par AddWorking.

Deux cibles de repli, à n'ouvrir qu'en cas de PIVOT :
- les secteurs hors BTP nommés par la loi de juin 2026 (nettoyage, sécurité, logistique, événementiel), où les outils BTP ne parlent pas le bon langage ;
- les petits maîtres d'ouvrage (promoteurs locaux, syndics, bailleurs) qui découvriront une obligation nouvelle fin 2026, une fois le décret publié.

## 3. Les concurrents laissent-ils une place ?

**Une place étroite, conditionnelle, et pas sur le prix.**

- **Ce qui ferme la porte** : AddWorking Essentiel (0 €, partenaires illimités, relances et vérification automatiques, API) ; Quitus Pro (29,99 €/mois avec devis, factures et suivi des sous-traitants) ; Othentis (dès 59 €/mois, essai gratuit) ; les ERP BTP qui intègrent la fonction.
- **Ce qui la laisse entrouverte** : aucun de ces outils n'a été testé ; les acteurs installés visent des panels de dizaines à centaines de sous-traitants ; le modèle Once For All fait payer le sous-traitant (399 à 1 699 €/an), ce qu'un petit donneur d'ordre ne peut pas imposer ; les avis utilisateurs publics sur AddWorking sont quasi inexistants, ce qui laisse sa diffusion réelle chez les TPE inconnue.
- **La condition** : NEXORA ne peut exister que si les entretiens montrent que les TPE **connaissent ou ont essayé** ces outils et les rejettent pour une raison précise (critère D de la grille). Si elles ne les connaissent simplement pas, la différenciation serait la notoriété, que NEXORA n'a pas non plus.

## 4. Quel prix serait raisonnable à tester ?

**29 € HT par mois, par entreprise, sans engagement, jusqu'à 15 sous-traitants suivis**, avec relances automatiques et lien de dépôt sans compte pour le sous-traitant. Repli possible à 19 € si la volonté de payer est présente mais faible. Le gratuit et le prix par utilisateur ne sont pas à tester en premier. La volonté réelle de payer se mesure par un engagement écrit à une bêta qui devient payante après 30 jours, pas par un « oui » en entretien (PRICING_STRATEGY.md §4).

## 5. Principales raisons de poursuivre

1. Obligation légale précise, récurrente, et contrôles en hausse documentée.
2. Extension du périmètre légal fin 2026 (maîtres d'ouvrage), qui va faire parler du sujet dans toute la chaîne.
3. MVP techniquement simple, sans API payante, formateur pour le fondateur.
4. Un modèle de principe clair et différent de l'acteur dominant : le sous-traitant ne paie jamais et n'a pas besoin de compte.
5. Un coût de validation quasi nul : trois semaines d'entretiens suffisent pour trancher.

## 6. Principales raisons d'abandonner

1. **Un concurrent gratuit couvre déjà le cœur du besoin.** Battre un gratuit par la simplicité est possible mais rarement suffisant pour faire payer 29 €.
2. **Douleur latente** : la majorité des petites entreprises ne découvre le problème qu'au contrôle, ce qui rend l'acquisition lente et chère en temps.
3. **Cible difficile à atteindre** pour un fondateur seul sans réseau BTP : canaux physiques, taux de réponse faibles.
4. **Dépendance à un acte manuel** (vérification du code URSSAF) que le produit ne peut pas automatiser, ce qui limite la promesse.
5. **La phase 1 s'est trompée sur le point décisif** (concurrence). Cela doit rendre le fondateur prudent sur le reste du raisonnement, y compris celui-ci.

Pistes de pivot préparées, pour ne pas forcer la validation : (a) relances d'impayés indépendantes de l'outil de facturation (opportunité 2 de la phase 1, 54/80, désormais à égalité) ; (b) version « côté sous-traitant » : un dossier de conformité à jour partageable gratuitement par lien, financé par les donneurs d'ordre qui veulent le recevoir ; (c) secteurs hors BTP de la loi de juin 2026.

## 7. Actions que le fondateur doit réaliser personnellement

Dans l'ordre, sur 2 à 3 semaines. Claude prépare les supports, dépouille les fiches et met à jour les documents ; il ne contacte personne.

1. **Jour 1 : tester AddWorking Essentiel** avec un compte gratuit et deux sous-traitants fictifs (une heure). Noter : combien de clics pour inviter un sous-traitant, ce que voit le sous-traitant, si une relance part, si l'interface est compréhensible sans aide. Consigner dans `interviews/00-test-addworking.md`. Si l'outil est simple et complet, lire la section 3 de VALIDATION_SCORECARD.md avant d'aller plus loin.
2. **Jours 1 à 3 : constituer la liste de 30 à 50 contacts** avec PROSPECTING_KIT.md §1 (réseau, comptable, annuaire-entreprises.data.gouv.fr, Google Maps, panneaux de chantier).
3. **Jour 2 : valider la fiche récapitulative** (contrepartie offerte) que Claude rédige ; la mettre en page.
4. **Jours 3 à 15 : contacter, relancer à J+4, mener 10 à 15 entretiens** avec INTERVIEW_GUIDE.md ; remplir une fiche par entretien dans l'heure.
5. **Après les 3 premiers entretiens** : faire relire les fiches par un tiers et ajuster la formulation des questions si nécessaire (sans toucher aux seuils).
6. **Jour 15 à 20 : remplir `interviews/synthese.md`**, appliquer VALIDATION_SCORECARD.md, écrire la décision et sa justification dans ce rapport (section « Décision », ci-dessous).

## 8. Prochaine étape recommandée

**Lancer la validation terrain avec l'hypothèse corrigée, en commençant par le test d'AddWorking.** Pas de cahier des charges, pas d'architecture détaillée, pas de code avant la décision. Si la décision est GO, la phase 3 démarre avec les verbatims comme cahier des charges. Si PIVOT, six entretiens ciblés sur la nouvelle hypothèse. Si NO GO, l'opportunité 2 de la phase 1 reprend la main avec le même protocole.

---

## Décision (à compléter après les entretiens)

| Élément | Valeur |
|---|---|
| Nombre d'entretiens exploitables / hors cible | — / — |
| Totaux F / I / S / B / P / A / D | — |
| Engagements de niveau 2 obtenus | — |
| Décision | GO / PIVOT / NO GO / Indéterminé |
| Justification (5 lignes maximum, avec 3 verbatims) | — |
| Date | — |

---

## Incertitudes résiduelles à garder en tête

- Tarifs donneurs d'ordre de Once For All, Aprovall, Provigis : non publics, non obtenus.
- Sites de Provigis et Bativigie injoignables le 12/11 ; tarifs Axiobat protégés.
- Traction réelle de Quitus, Othentis et AddWorking chez les TPE : inconnue.
- Contenu du décret d'application de la loi du 25 juin 2026 : non paru.
- Limites de l'offre gratuite Supabase : non vérifiées sur le site de l'éditeur.
- Taille exacte de la cible « 3 à 20 salariés » : non isolable dans les tables INSEE consultées (561 504 micro-entreprises et 25 948 PME hors micro dans la construction en 2023).
