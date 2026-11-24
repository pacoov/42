# 02 — Grille de test d'un compte AddWorking (à remplir par le fondateur)

- **Pourquoi ce test.** AddWorking affiche une offre « Essentiel » à 0 €/mois pour les donneurs d'ordre avec partenaires illimités, vérification automatique des documents, relances automatiques et indicateurs de conformité (addworking.com/tarifs, consulté le 12/11/2026). Si cette offre couvre simplement et de bout en bout le besoin d'une entreprise de 3 à 20 salariés, la place pour NEXORA se réduit à la notoriété. Il faut le savoir **avant** de dépenser du temps en entretiens.
- **Qui.** Le fondateur, seul, avec un compte gratuit. Claude ne crée pas de compte et n'a pas accès au produit.
- **Durée visée.** 60 à 90 minutes, chronométrées.
- **Règles.** Utiliser une adresse e-mail dédiée au test. Ne pas inviter de vraie entreprise : les trois sous-traitants sont fictifs et leurs adresses e-mail sont des adresses que le fondateur contrôle (par exemple trois alias de sa propre boîte). Ne pas téléverser de vrai document d'un tiers : utiliser des PDF factices nommés explicitement « TEST ». Lire les conditions d'utilisation avant de valider l'inscription et noter toute clause sur la gratuité.
- **Consignation.** Résultat dans `interviews/00-test-addworking.md` (copier cette grille et la remplir). Captures d'écran dans `interviews/captures/` si utile.

---

## 1. Scénario de test

| Étape | Action | Ce qu'on cherche à voir |
|---|---|---|
| 0 | Inscription sur l'offre Essentiel | Carte bancaire demandée ? Durée d'essai ou gratuité permanente ? Mentions « réservé à », taille d'entreprise, SIRET exigé ? |
| 1 | Créer le profil de l'entreprise donneuse d'ordre (fictive, 8 salariés, second œuvre) | Nombre d'écrans, champs obligatoires, vocabulaire (parle-t-il à un artisan ou à un acheteur de grand groupe ?) |
| 2 | Ajouter **3 sous-traitants fictifs** : (a) une SARL « complète », (b) un auto-entrepreneur, (c) une entreprise dont on ne connaît que le SIRET | Enrichissement automatique de la fiche ? Quels documents sont réclamés automatiquement pour chacun ? La liste correspond-elle à l'art. D8222-5 (attestation URSSAF, justificatif d'immatriculation) ou va-t-elle au-delà (assurances, liste des salariés étrangers) ? |
| 3 | Envoyer l'invitation / la demande de documents aux trois | Le sous-traitant doit-il **créer un compte** ? Combien de clics et d'informations pour lui ? Peut-il déposer sans compte ? Le mail reçu est-il compréhensible pour un auto-entrepreneur ? |
| 4 | Côté sous-traitant (a) : déposer tous les documents factices | Formats acceptés, taille, temps nécessaire, messages d'erreur |
| 5 | Côté sous-traitant (b) : ne déposer **que** l'attestation URSSAF, laisser le reste manquant | Comment le manque apparaît-il côté donneur d'ordre ? Statut, couleur, liste d'actions ? |
| 6 | Côté sous-traitant (c) : ne rien faire | Une relance automatique part-elle ? Au bout de combien de temps ? Peut-on régler la cadence ? Peut-on relancer manuellement ? |
| 7 | Document qui expire : déposer pour (a) une attestation factice datée d'il y a 5 mois et 3 semaines | L'outil calcule-t-il la date d'expiration (6 mois) ? Alerte avant expiration ? À qui (donneur d'ordre, sous-traitant, les deux) ? Par quel canal ? |
| 8 | Vérification | « Documents vérifiés automatiquement » : que se passe-t-il concrètement sur une attestation factice ? Rejet ? Acceptation ? Message demandant la vérification manuelle du code URSSAF ? Trace de qui a vérifié quoi et quand ? |
| 9 | Dossier de preuve | Peut-on exporter, pour un sous-traitant ou pour toute l'entreprise, un dossier (PDF ou ZIP) avec documents et historique daté ? En combien de clics ? Est-ce dans l'offre gratuite ? |
| 10 | Limites de la gratuité | À quel moment un écran propose-t-il de passer en Business ? Pour quelle action ? Y a-t-il un plafond caché (nombre de documents, d'utilisateurs, de relances) ? |
| 11 | Support et aide | Le chat répond-il ? En combien de temps ? Centre d'aide en français ? |
| 12 | Suppression | Peut-on supprimer les données de test et le compte facilement ? |

---

## 2. Points à noter à chaque étape

- **Étapes bloquées** : impossible sans passer en payant, ou impossible tout court.
- **Étapes manuelles** : ce que l'outil laisse à faire à la main (saisie de dates, vérification URSSAF, relance).
- **Étapes payantes** : chaque invitation à payer, avec l'action qui l'a déclenchée.
- **Friction côté sous-traitant** : nombre d'écrans, création de compte, informations demandées, lisibilité du mail, ce qu'un auto-entrepreneur pressé abandonnerait.
- **Vocabulaire et densité** : combien de notions (panel, qualification, monitoring, licence) un artisan doit-il comprendre ?
- **Temps** : chronométrer l'inscription, l'ajout d'un sous-traitant, le dépôt côté sous-traitant.

---

## 3. Questions auxquelles le test doit répondre (oui / non / partiellement, avec une phrase de justification)

1. Une petite entreprise peut-elle gérer son besoin **gratuitement de bout en bout** : ajouter ses sous-traitants, obtenir les documents, être relancée et alertée, prouver ce qu'elle a fait ?
2. Un sous-traitant auto-entrepreneur peut-il déposer ses documents **sans créer de compte** ?
3. La **vérification automatique** authentifie-t-elle l'attestation URSSAF (code de sécurité) ou contrôle-t-elle seulement la présence et la date ?
4. Existe-t-il un **export ou dossier de preuve** utilisable en cas de contrôle, dans l'offre gratuite ?
5. Le fondateur, qui connaît le sujet, a-t-il compris l'outil **sans aide** en moins d'une heure ? Un artisan le pourrait-il ?
6. Y a-t-il une **fonction manquante** qu'une TPE réclamerait et que l'outil ne propose pas, même en payant ?
7. Qu'est-ce qui, dans l'expérience, donnerait à une TPE une **raison concrète de payer** un autre outil ?

---

## 4. Conclusion du test (à écrire en 5 lignes maximum)

- Verdict sur la question 1 (gratuit de bout en bout) : …
- Les deux frictions les plus fortes observées : …
- Ce que NEXORA devrait faire **différemment**, en une phrase, ou « rien d'évident » : …
- Conséquence sur la suite (voir docs/04-decisions.md, point d'arrêt anticipé) : …

---

## 5. Si le temps le permet : même grille, en version courte, pour Quitus (essai 14 jours sans carte) et Othentis (essai gratuit)

Objectif : savoir si leur module sous-traitants est réel et profond, ou cosmétique. Noter uniquement : documents suivis, alertes, relances, compte côté sous-traitant, export. Mêmes règles de prudence (données factices, pas de vrai tiers).
