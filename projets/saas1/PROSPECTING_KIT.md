# PROSPECTING_KIT — Trouver et contacter 10 à 15 dirigeants sans budget

- **Objectif** : obtenir 10 à 15 entretiens exploitables (INTERVIEW_GUIDE.md) en 2 à 3 semaines, à coût nul.
- **Qui agit** : le fondateur. Claude prépare, ne contacte personne.
- **Règle d'or** : on demande un conseil, pas un rendez-vous commercial. On ne mentionne jamais un produit qui n'existe pas comme s'il existait.
- **Ordre de grandeur réaliste** : 1 entretien pour 8 à 12 contacts à froid, 1 pour 2 à 3 via introduction. Prévoir 80 à 120 contacts à froid si le réseau direct ne suffit pas.

---

## 1. Où trouver des prospects gratuitement (par efficacité décroissante)

1. **Réseau direct et introductions.** Famille, amis, anciens collègues, voisins qui ont fait des travaux (« tu me donnerais le nom de ton électricien ? »). Une introduction vaut dix e-mails froids.
2. **Experts-comptables et courtiers en assurance construction.** Ils voient le problème chez leurs clients BTP. Demander à son propre comptable (ou à deux cabinets locaux) une ou deux mises en relation, en échange de la fiche récapitulative.
3. **Annuaire public des entreprises (gratuit, officiel).** https://annuaire-entreprises.data.gouv.fr permet de filtrer par activité (section F, codes 41.20 et 43.xx), par tranche d'effectif (3 à 5, 6 à 9, 10 à 19 salariés) et par localisation, et affiche les dirigeants. L'API associée (https://recherche-entreprises.api.gouv.fr) fournit la même chose en masse ; un test le 12/11/2026 a retourné 1 957 unités légales de 3 à 19 salariés en construction pour un département, soit largement assez. Le téléphone et l'e-mail ne figurent pas dans ces données : les compléter via le site web de l'entreprise ou Google Maps.
4. **Google Maps.** Recherche « entreprise générale de bâtiment », « plaquiste », « électricien », « rénovation » + ville ; privilégier les fiches avec plusieurs véhicules ou salariés visibles sur les photos (signe d'une structure qui sous-traite). Numéro de téléphone direct.
5. **Panneaux de chantier et permis de construire affichés.** L'entreprise principale y figure avec, parfois, ses sous-traitants : ce sont exactement des donneurs d'ordre en activité. Photographier, puis contacter.
6. **Négoces et comptoirs professionnels** (matériaux, électricité, plomberie) tôt le matin : contact direct, 2 minutes, demande d'un créneau téléphonique.
7. **CAPEB et FFB départementales.** Appeler le secrétariat, expliquer la démarche d'étude, demander s'il existe une réunion, un petit-déjeuner ou un référent « sous-traitance » ; proposer de partager les résultats anonymisés.
8. **LinkedIn (compte gratuit).** Recherche de personnes : « gérant » / « conducteur de travaux » / « assistante de gestion » + « bâtiment » + localisation ; filtrer les entreprises de 2 à 50 salariés via la page entreprise. Limite : quelques dizaines de recherches par mois sur un compte gratuit, et les artisans y sont peu actifs.
9. **Groupes Facebook de professionnels du bâtiment** (par métier ou par région). Publier une demande de témoignages, pas une promotion.
10. **Plateformes de mise en relation côté pros** (Habitatpresto, Travaux.com) : les entreprises qui y achètent des leads sont souvent des structures qui sous-traitent. Contact par leur site web.

Tenir un tableau `prospects.csv` : date, source, entreprise, rôle, canal, statut (contacté / répondu / entretien / refus), relance J+4.

---

## 2. E-mail de prise de contact

Objet : *Question d'un porteur de projet sur la paperasse de sous-traitance*

> Bonjour [Prénom Nom],
>
> Je m'appelle [Prénom], je prépare un projet autour de l'administratif de la sous-traitance dans le bâtiment (attestations URSSAF, Kbis, assurances des sous-traitants). Avant de construire quoi que ce soit, je cherche à comprendre comment ça se passe vraiment dans des entreprises comme [nom de l'entreprise].
>
> Accepteriez-vous un échange téléphonique de 20 minutes, au créneau de votre choix ? Je n'ai rien à vendre : je prends des notes, et je vous envoie en retour une fiche récapitulative des documents à demander à un sous-traitant et à quelle fréquence.
>
> Si ce n'est pas vous qui gérez ces papiers, pourriez-vous me dire vers qui me tourner ?
>
> Merci d'avance,
> [Prénom Nom] · [téléphone] · [ville]

Relance unique à J+4, trois lignes : « Je me permets de relancer mon message de [jour]. Si le sujet ne vous concerne pas, un simple "non" me rendra service. Bonne journée. »

---

## 3. Message LinkedIn (invitation ou message court, moins de 300 caractères)

> Bonjour [Prénom], je prépare un projet sur l'administratif de la sous-traitance dans le bâtiment. J'aimerais comprendre comment vous gérez les attestations de vos sous-traitants, en 15 minutes au téléphone. Rien à vendre, juste des questions. Partant(e) ?

Variante après acceptation sans réponse : « Merci pour la connexion ! Un créneau de 15 minutes cette semaine ou la suivante vous irait-il ? Sinon, un retour en deux lignes par écrit m'aiderait déjà : qui, chez vous, récupère les attestations URSSAF des sous-traitants, et comment ? »

---

## 4. Script d'appel téléphonique (2 minutes pour obtenir un créneau)

**Accroche (10 secondes).**
« Bonjour, [Prénom Nom]. Je ne vends rien, je vous appelle pour un conseil. Vous avez trente secondes ? »

**Si oui (20 secondes).**
« Je prépare un projet sur la paperasse de sous-traitance dans le bâtiment : attestations URSSAF, Kbis, assurances des sous-traitants. Je cherche à comprendre comment des entreprises comme la vôtre gèrent ça au quotidien. Est-ce que c'est vous qui vous en occupez, ou quelqu'un d'autre ? »

**Selon la réponse.**
- *« C'est moi / ma femme / l'assistante »* → « Parfait. Est-ce qu'on peut se caler 20 minutes au téléphone, quand vous voulez, même tôt le matin ou en fin de journée ? En échange je vous envoie une fiche claire des documents à demander et quand. »
- *« On ne sous-traite pas »* → « Merci, c'est une réponse utile. Dernière question : vous arrive-t-il d'être vous-même sous-traitant et qu'on vous demande vos attestations ? » (noter, remercier, raccrocher).
- *« C'est le comptable »* → « D'accord. Et quand un client ou l'URSSAF vous demande les papiers d'un sous-traitant, c'est vers lui que vous vous tournez ? » (noter ; demander si le comptable accepterait un échange).
- *« Pas le temps »* → « Je comprends. Je peux vous envoyer trois questions par SMS ou e-mail, vous répondez quand vous pouvez ? »

**Clôture.**
« Merci. Je vous envoie un SMS de confirmation avec le créneau. Bonne journée. »

Heures d'appel observées comme les plus propices pour les artisans (hypothèse courante, non mesurée ❓) : 7 h 30 – 8 h 30, 12 h – 13 h 30, 17 h 30 – 19 h.

---

## 5. La contrepartie offerte : fiche récapitulative

À préparer avant le premier contact, une page PDF : « Sous-traitance de plus de 5 000 € HT : les documents à demander et quand ». Contenu strictement factuel, sourcé sur service-public.gouv.fr et les articles D8222-5 et D8254-2 du Code du travail, avec le lien de vérification URSSAF, et un tableau à imprimer (sous-traitant / document / date / prochaine échéance). Pas de logo NEXORA, pas de promesse produit. Claude peut rédiger le texte ; la mise en page se fait avec un outil gratuit.

---

## 6. Grille d'analyse des réponses

Après chaque entretien, remplir la fiche de INTERVIEW_GUIDE.md §4, puis reporter les scores dans un tableau unique `interviews/synthese.md` :

| # | Date | Source | Effectif | Nb ST/an | ≥5 000 € | Qui gère | Temps/mois | Vérif. code URSSAF | Épisode concret | Plateforme imposée | Outil essayé | Budget logiciels | Plafond prix | Test bêta | F | I | S | B | P | A | D |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

Les colonnes F à D sont les scores de VALIDATION_SCORECARD.md. Les décisions se prennent sur ce tableau, pas sur l'impression générale.

**Lecture rapide des verbatims.** Classer chaque verbatim dans l'une des quatre boîtes :
- *Douleur* (« j'ai dû tout refaire en urgence », « on a eu peur au contrôle ») ;
- *Contournement* (« je demande une fois et c'est tout », « le comptable gère ») ;
- *Déjà équipé* (« le maître d'ouvrage nous impose Once For All », « j'ai AddWorking ») ;
- *Indifférence* (« personne ne m'a jamais rien demandé »).

Si les boîtes *Contournement* et *Indifférence* dominent après 10 entretiens, le signal est NO GO sur cette cible, quelle que soit la sympathie des interlocuteurs.
