# NEXORA — Étude de marché (Phase 1)

- **Date de l'étude** : 12 novembre 2026
- **Statut** : livrable de phase 1, **en attente de validation du fondateur**. Aucun code écrit.
- **Périmètre** : micro-SaaS pour indépendants et petites entreprises, marché France.
- **Auteur** : Claude (rôle CTO / PM / analyste), pour le fondateur de NEXORA.

---

> **ERRATUM (phase 2, 12 novembre 2026).** L'audit [PHASE_1_AUDIT.md](PHASE_1_AUDIT.md) a établi que la cartographie concurrentielle de l'opportunité 1 était incomplète : AddWorking propose une offre gratuite pour donneurs d'ordre (relances et vérification automatiques, partenaires illimités), Othentis vend dès 59 € HT/mois, Quitus et Axiobat intègrent le suivi des sous-traitants dans des logiciels pour artisans et PME. La note « Concurrence 7/10 » et l'affirmation « une TPE n'a aujourd'hui que le tableur » ne sont plus défendables ; le classement du tableau comparatif ne tient plus. Le contenu ci-dessous est conservé tel quel à titre historique. La version à jour de l'analyse concurrentielle est [COMPETITOR_ANALYSIS.md](COMPETITOR_ANALYSIS.md) ; les corrections juridiques (rattachement de la liste des salariés étrangers à l'art. D8254-2, sanction de l'art. L133-4-5 CSS, loi n° 2026-534 du 25 juin 2026) sont dans l'audit.


## 0. Méthode, sources et limites

**Comment l'étude a été menée.** Recherche web réalisée le 12/11/2026 : pages tarifaires des éditeurs quand elles étaient accessibles, sites officiels (economie.gouv, service-public, Banque de France, INSEE, URSSAF), comparateurs (Appvizer, Capterra, tool-advisor), avis utilisateurs (Trustpilot, Capterra), presse professionnelle.

**Ce que l'étude n'est pas.** Aucun entretien client n'a été réalisé. Aucun chiffre ci-dessous n'est inventé ; quand une donnée vient d'une source secondaire ou d'un éditeur intéressé, c'est signalé.

**Code de confiance utilisé dans tout le document :**

| Symbole | Signification |
|---|---|
| ✅ | Source officielle ou page de l'éditeur consultée directement |
| ⚠️ | Source secondaire (comparateur, presse, blog, étude commanditée par un éditeur) : à confirmer avant d'être réutilisée commercialement |
| ❓ | Hypothèse de travail, non vérifiée : à valider en entretien |

---

## 1. Contexte du marché français (chiffres clés)

| Donnée | Valeur | Source | Confiance |
|---|---|---|---|
| Auto-entrepreneurs administrativement actifs (fin juin 2025) | 3,186 millions (+204 000 sur un an) ; environ 1,59 million économiquement actifs (CA > 0) | URSSAF, relayé par tpeactu.fr et optigestplus.org | ⚠️ (chiffre URSSAF relayé) |
| Part des micro-entrepreneurs dans les créations 2025 | 65 % (758 600 sur 1 165 800) | INSEE via sources secondaires | ⚠️ |
| Artisanat du bâtiment | > 400 000 entreprises, 1,1 million de salariés ; activité en recul en 2025 | CAPEB | ✅ |
| Retards de paiement 2025 | 13 Md€ de trésorerie manquante pour PME et micro-entreprises ; retard moyen 13,4 jours fin 2025 ; un retard de paiement augmente de 25 % le risque de défaillance | Observatoire des délais de paiement, rapport 2025 (Banque de France, remis sept. 2026) | ✅ |
| Indépendants touchés par retards ou défauts de paiement | 63 % | Étude ACASI, oct. 2025, 1 489 indépendants interrogés | ⚠️ |
| Facturation électronique | Réception obligatoire pour toutes les entreprises assujetties à la TVA depuis le 1er sept. 2026 ; émission obligatoire pour PME, TPE et micro-entreprises au 1er sept. 2027 | economie.gouv.fr | ✅ |
| Sous-traitance | 54 % des micro-entreprises y recourent ; « trois entreprises sur quatre » dans la construction | INSEE Focus (données 2014, donc anciennes) | ✅ mais daté |
| Obligation de vigilance | Dès 5 000 € HT de prestation ; documents à obtenir à la signature puis tous les 6 mois | Code du travail art. D8222-5 ; service-public.gouv.fr | ✅ |
| Procédures de solidarité financière URSSAF | +85 % entre 2024 et 2025 | Annexe au projet de loi d'approbation des comptes de la sécurité sociale 2025, p. 64 (cité par un cabinet d'avocats, non relu à la source) | ⚠️ |
| Recours aux avis en ligne | 93 % des Français disent recourir aux avis pour choisir une entreprise, un produit ou un service | IFOP pour Guest Suite, janv. 2026, 1 003 personnes (étude commanditée par un éditeur) | ⚠️ |

**Deux faits structurants pour NEXORA :**

1. **La facturation est un marché fermé pour nous.** Abby, Indy, Tiime et Pennylane proposent tous une offre gratuite et sont « Plateformes Agréées » (PA) immatriculées par la DGFiP. Devenir PA est hors de portée d'un projet à 0 €. Toute idée qui consiste à « refaire un logiciel de facturation » est à écarter.
2. **La réforme rend les factures lisibles par machine.** Depuis septembre 2026, les factures circulent en formats structurés (Factur-X, UBL, CII). Un outil tiers peut donc lire une facture sans IA ni API payante. C'est un atout technique pour toute idée qui s'appuie sur des factures existantes (relances, suivi).

---

## 2. Les opportunités analysées

Sept pistes ont été étudiées. Six sont détaillées ; la septième (facturation) est traitée brièvement car écartée d'emblée pour les raisons ci-dessus.

### Opportunité 1 — Conformité des sous-traitants pour les petites entreprises donneuses d'ordre (« obligation de vigilance »)

**Problème concret.** Toute entreprise qui confie une prestation d'au moins 5 000 € HT à un sous-traitant ou prestataire doit, à la signature puis **tous les 6 mois**, obtenir et vérifier : l'attestation de vigilance URSSAF (avec vérification du code de sécurité sur urssaf.fr), un justificatif d'immatriculation (Kbis, extrait D1 / RNE), et le cas échéant la liste des salariés étrangers soumis à autorisation de travail (art. D8222-5 du Code du travail ✅). En pratique le BTP y ajoute l'attestation d'assurance décennale et RC pro. Si le sous-traitant est pris en travail dissimulé et que le donneur d'ordre ne peut pas prouver ces vérifications, il paie solidairement les cotisations (« solidarité financière »). Exemple récent : TJ Bobigny, 30 mars 2026, 161 658 € de cotisations + 63 832 € de majorations mis à la charge d'une entreprise ⚠️ (cité par un cabinet d'avocats).

**Profil des utilisateurs.** Dirigeant, conjoint collaborateur ou assistante de gestion d'une entreprise du bâtiment de 2 à 20 salariés qui sous-traite régulièrement (entreprise générale de petite taille, second œuvre, rénovation). Segment secondaire : agences web / communication / conseil de 2 à 15 personnes qui emploient des freelances récurrents pour plus de 5 000 € par an (la règle s'applique à toute prestation de services, pas seulement au BTP).

**Fréquence.** À chaque nouveau contrat ≥ 5 000 € HT, puis tous les 6 mois par sous-traitant. Une entreprise avec 8 sous-traitants gère environ 16 renouvellements par an plus les nouveaux contrats, soit un geste administratif quasi hebdomadaire. ❓ Volume réel à valider en entretien.

**Solutions actuellement utilisées (hypothèse ❓ à valider).** Tableur + e-mails de relance manuels, dossier papier, ou rien du tout jusqu'au contrôle. Les grands donneurs d'ordre imposent leur plateforme (Once For All, Aprovall) aux sous-traitants.

**Concurrents.**

| Acteur | Cible | Fonctionnalités | Prix | Faiblesses pour une TPE | Confiance |
|---|---|---|---|---|---|
| Once For All (ex-Attestation Légale, Lyon 2010) | Donneurs d'ordre et sous-traitants BTP/industrie | Collecte, authentification par équipes expertes, archivage 15 ans, pré-qualification ESG, agréments | Non public sur le site ; « à partir de 24,50 €/mois/utilisateur » selon un comparateur | Positionnement grands comptes, pas d'essai gratuit, pas d'API ouverte, lourd pour 5 sous-traitants | ⚠️ |
| Aprovall (ex-e-Attestations) | ETI et grands groupes | Conformité fournisseurs 360° (légal, financier, cyber, RSE) | Sur devis | Sur-dimensionné pour une TPE | ⚠️ |
| Provigis | Grands comptes | Tiers de confiance, collecte et contrôle documentaire | Sur devis | Idem | ⚠️ |
| AddWorking | PME/ETI BTP, ingénierie | Conformité documentaire continue, qualification fournisseurs | Sur devis | Idem | ⚠️ |
| Subclic | BTP | Dossiers de sous-traitance (contrats, DC4, agréments), signature électronique ; éditions Free / Pro / MO | Non trouvé | Centré sur le dossier d'agrément en marché public, pas sur le suivi des 6 mois | ⚠️ |
| Logiciels devis-facture BTP (Obat, Tolteck, Batappli) | Artisans | Gestion commerciale ; Obat publie un guide sur les documents de sous-traitance mais aucune fonction dédiée n'a été identifiée sur sa page tarifs | 25 à 129 €/mois | Ne couvrent pas le suivi documentaire des sous-traitants (à confirmer en démo ❓) | ⚠️ |
| Plateformes de freelances (Malt) | Entreprises clientes | Prennent en charge la vigilance pour les missions passées par la plateforme | Commission | Ne couvrent pas les prestataires hors plateforme | ⚠️ |
| Développement sur mesure (agences) | ETI | Portail sous-traitants | 20 000 à 50 000 € HT + 4 000 €/an (article Kolonell, oct. 2026) ; « plateformes en abonnement : 2 000 à 6 000 € HT/an » | Inaccessible aux TPE | ⚠️ |

**Différenciation possible.** Un outil volontairement petit : (1) fiche par sous-traitant avec dates d'expiration, (2) relances automatiques au sous-traitant par e-mail avec lien de dépôt sans compte, (3) checklist de vérification guidée (lien direct vers la vérification URSSAF du code de sécurité, car il n'existe pas d'API publique ✅), (4) **export « dossier de preuve »** horodaté prêt en cas de contrôle, (5) tarif fixe lisible sans devis. Positionnement « assurance administrative à 19 €/mois » plutôt que « plateforme de conformité ».

**Difficulté technique.** Faible à moyenne : gestion de documents, dates, e-mails transactionnels, génération de PDF. Pas d'API payante nécessaire. Point d'attention : stockage sécurisé de documents (Kbis, attestations) → chiffrement au repos, contrôle d'accès strict, RGPD.

**Coût d'exploitation.** Très faible au démarrage (hébergement et base gratuits, e-mails en volume faible). Le stockage de fichiers est le premier poste qui grandira (de l'ordre de quelques Mo par sous-traitant et par an).

**Potentiel de monétisation.** Abonnement mensuel par entreprise donneuse d'ordre, paliers par nombre de sous-traitants suivis (ex. ❓ 19 €/mois jusqu'à 10, 39 €/mois jusqu'à 30). Volonté de payer ancrée sur le risque (amende, redressement) et le temps gagné. Extension naturelle : décennale/RC pro, agrément maître d'ouvrage, « devoir de vigilance » renforcé en cascade annoncé pour fin décembre 2026 (service-public ✅).

**Risques principaux.** Douleur *latente* : beaucoup de TPE ne ressentent le problème qu'au contrôle, ce qui complique la vente. Public BTP moins digital. Taille exacte du segment inconnue.

---

### Opportunité 2 — Relance et recouvrement des factures impayées, au-dessus de n'importe quel outil de facturation

**Problème concret.** 63 % des indépendants subissent des retards ou défauts de paiement ⚠️ ; les PME et micro-entreprises ont manqué de 13 Md€ de trésorerie en 2025 à cause des retards ✅. Relancer est pénible, chronophage et mal fait (ton, timing, oubli), et la plupart ignorent leurs droits : pénalités au taux légal minimal de 8,25 % depuis le 1er juillet 2026 ⚠️ et indemnité forfaitaire de 40 € par facture (art. D441-5 Code de commerce ✅).

**Profil des utilisateurs.** Freelances B2B (développeurs, consultants, designers), artisans, petites agences : 5 à 50 factures par mois, 1 à 5 clients en retard à tout moment.

**Fréquence.** Hebdomadaire voire quotidienne (chaque facture a une échéance).

**Solutions actuelles.** Relances manuelles par e-mail ou téléphone ; relances automatiques incluses dans les outils de facturation ; pour les gros montants, cabinet de recouvrement ou commissaire de justice (procédure simplifiée < 5 000 € via Credicys, frais par tranches de 11,61 % à 3,87 % du recouvré ⚠️).

**Concurrents.**

| Acteur | Cible | Fonctionnalités | Prix | Faiblesses | Confiance |
|---|---|---|---|---|---|
| Abby | Indépendants | Facturation + relances automatiques dès l'offre Pro | Basique 0 €, Start 9 €, Pro 15 €, Business 33 € HT/mois | Relances basiques, liées à ses propres factures | ✅ |
| Indy | Indépendants | Facturation + relances automatiques dès l'offre Plus | Essentiel 0 €, Plus 9 €, Autonomie 15–22 €, Sérénité dès 63 € HT/mois | Idem | ✅ |
| Tiime, Pennylane, Qonto | Indépendants / TPE | Relances incluses dans la facturation | Gratuit à ~18 € HT/mois pour l'entrée de gamme | Idem | ⚠️ |
| Rubypayeur | TPE/PME | Relances, recouvrement amiable et judiciaire, base de comportements de paiement | Standard 19,99 €/mois/utilisateur | Orienté recouvrement, moins « prévention » | ⚠️ (page tarifs inaccessible, chiffre comparateur) |
| Clearnox (Sage) | TPE à PME | Suivi, relance, recouvrement, factures illimitées | 134 € HT/mois | Trop cher pour un indépendant | ⚠️ |
| LeanPay | PME | Relance multicanale, hébergé en France | 225 à 245 €/mois | Idem | ⚠️ |
| GCollect | TPE/PME | Place de marché de recouvrement amiable | Sur demande | Pas un outil de relance quotidienne | ⚠️ |
| Soan, Hoopiz, Aston AI | PME | Relance / credit management | Soan dès 49 €/mois ; autres sur devis | Cible PME | ⚠️ |

**Lecture du marché.** Il y a un vide entre « relance incluse gratuitement mais basique » (0–15 €) et « logiciel de recouvrement PME » (134 € et plus). Mais ce vide est **menacé des deux côtés** : les outils de facturation gratuits enrichissent leurs relances, et la réforme donne aux Plateformes Agréées la visibilité sur les statuts de paiement.

**Différenciation possible.** (1) Indépendant de l'outil de facturation : import de factures Factur-X (lecture du XML embarqué, bibliothèques TypeScript open source disponibles ✅), CSV ou saisie ; (2) séquence d'escalade complète : rappel amical → relance ferme → mise en demeure conforme en PDF avec calcul automatique des pénalités et des 40 € → dossier prêt pour Credicys ; (3) « score de payeur » par client ; (4) scripts d'appel.

**Difficulté technique.** Moyenne : planification d'e-mails, délivrabilité (envoyer au nom de l'utilisateur sans finir en spam est un vrai sujet), génération PDF, parsing Factur-X.

**Coût d'exploitation.** Faible (e-mails transactionnels : Resend 3 000/mois gratuits, Brevo 300/jour gratuits ⚠️), mais un domaine d'envoi dédié et une bonne configuration DNS sont indispensables.

**Monétisation.** 9 à 19 €/mois ❓, ou gratuit + commission sur mise en demeure / transmission au recouvrement.

**Risques.** Absorption par les outils de facturation ; l'utilisateur doit maintenir ses factures dans deux endroits si l'import n'est pas fluide.

---

### Opportunité 3 — Relance automatique des devis non signés (artisans)

**Problème concret.** Des blogs sectoriels citent la FFB : 48 % des devis du bâtiment ne seraient jamais signés, et une séquence de relance à J+3 / J+10 / J+21 ferait passer le taux de transformation de 22 à 30 % en moyenne. **Ces chiffres n'ont pas été retrouvés à la source FFB** ⚠️. Le mécanisme est cependant plausible : l'artisan chiffre, envoie, puis oublie de relancer.

**Utilisateurs.** Artisans du bâtiment et prestataires à devis (paysagistes, photographes, agences).

**Fréquence.** À chaque devis envoyé : plusieurs fois par semaine.

**Solutions actuelles.** Relance manuelle au téléphone ; freelances vendant des automatisations n8n / Make sur comeup.com (preuve d'un besoin exprimé ⚠️) ; fonctions de suivi dans Obat (relances automatiques identifiées pour les **factures** ; pour les devis, le blog d'Obat donne des modèles d'e-mails mais aucune automatisation n'a été confirmée ❓).

**Concurrents.** Obat (Pro 32 €/mois micro, 49 €/mois sinon ✅), Tolteck (dès 25 € HT ⚠️), Batappli (39 à 119 €/mois/utilisateur ⚠️), Costructor, EBP ; CRM généralistes (HubSpot gratuit, Sellsy).

**Différenciation.** Se brancher sur n'importe quel logiciel de devis (transfert d'e-mail, PDF), relances par e-mail + rappel SMS à l'artisan de téléphoner, page de signature simple.

**Difficulté technique.** Faible à moyenne. **Coût.** Faible. **Monétisation.** 9 à 15 €/mois ❓.

**Risques.** C'est une *fonctionnalité* plus qu'un produit : Obat ou Tolteck peuvent l'ajouter en un trimestre. La base de chiffres est fragile.

---

### Opportunité 4 — Collecte de documents clients pour les professions de conseil (experts-comptables, courtiers, agences)

**Problème concret.** Les cabinets passent un temps considérable à réclamer des pièces à leurs clients (relevés, justificatifs, contrats). Les relances se perdent dans les e-mails.

**Utilisateurs.** Experts-comptables de petite taille, courtiers en crédit et assurance, agences, avocats.

**Fréquence.** Quotidienne pour un cabinet.

**Concurrents.** Content Snare (dès 29 $/mois ⚠️), Clustdoc (Gold 100 €/mois pour 3 utilisateurs, Platinum 350 €/mois ⚠️), FileInvite (dès 829 $ ⚠️, segment entreprise), outils intégrés des éditeurs comptables (Pennylane, Dext, Welyb).

**Différenciation.** Version française légère, sans compte client, relances automatiques, prix TPE. Mais la différenciation est surtout « moins cher », ce qui est faible.

**Difficulté.** Faible à moyenne. **Coût.** Stockage de fichiers. **Monétisation.** 19 à 29 €/mois ❓.

**Remarque.** L'opportunité 1 est en réalité une version *spécialisée* de celle-ci : même mécanique (demander, relancer, stocker, prouver), mais avec un déclencheur légal, une périodicité imposée et une cible précise. C'est ce qui la rend plus vendable.

---

### Opportunité 5 — Collecte d'avis Google pour artisans et commerces de proximité

**Problème concret.** 93 % des Français disent recourir aux avis ⚠️ ; un artisan avec 4 avis perd face à un concurrent qui en a 80. Demander un avis après chaque intervention est oublié ou gênant.

**Utilisateurs.** Artisans, commerces, professions libérales non réglementées.

**Fréquence.** Après chaque prestation.

**Concurrents.**

| Acteur | Prix | Faiblesses | Confiance |
|---|---|---|---|
| Guest Suite (Nantes, 2013) | Dès 49 €/mois sans engagement pour un indépendant (page tarifs) ; un comparateur cite 39 €/49 € | Prix élevé pour un artisan seul | ✅ / ⚠️ |
| Plus que pro | Avis clients et articles citent 429 à 430 € HT/mois sur **48 mois d'engagement ferme** (≈ 20 600 €) ; avis Trustpilot très polarisés | Engagement lourd, mécontentement documenté | ⚠️ |
| Partoo, Trustup Pro, Easy Review, Custplace, Skeepers | De la dizaine à plusieurs centaines d'euros par mois | Marché saturé | ⚠️ |
| Lien d'avis Google + QR code | Gratuit | Pas d'automatisation ni de suivi | ✅ |

**Différenciation possible.** Outil minimal à 9 €/mois : fiche client → e-mail / QR automatique après intervention → suivi. Mais l'écart avec « un QR code gratuit » est mince.

**Difficulté.** Faible pour la collecte ; l'API Google Business Profile (réponse aux avis, lecture) est soumise à un dossier d'accès et à un profil vérifié depuis plus de 60 jours ⚠️ ; les SMS sont payants (API payante, donc exclus au départ).

**Coût.** Faible sans SMS. **Monétisation.** 9 à 19 €/mois ❓, marché très élastique.

**Risques.** Concurrence massive, différenciation faible, dépendance totale à Google.

---

### Opportunité 6 — Rapports d'intervention et PV terrain avec photos (artisans, techniciens)

**Problème concret.** Le compte-rendu d'intervention (photos avant/après, signature du client, réserves) est fait sur papier ou par SMS, se perd, et manque en cas de litige.

**Utilisateurs.** Plombiers, électriciens, chauffagistes, entreprises de maintenance de 1 à 10 techniciens.

**Fréquence.** À chaque intervention.

**Concurrents.** Kizeo Forms (Smart 15 €/mois/utilisateur en annuel, 22 € en mensuel ; Business 25 €/37 € ✅), Organilog (dès 19 €/utilisateur/mois ⚠️), Praxedo, Synchroteam, Bob! Desk ; Obat Croissance inclut les rapports d'intervention (52 €/mois micro, 79 € sinon ✅).

**Différenciation.** Difficile : Kizeo est déjà bon marché, hors ligne et très flexible.

**Difficulté.** Moyenne à élevée (mobile hors ligne, photos, PDF). **Coût.** Stockage photo significatif. **Monétisation.** 10 à 20 €/utilisateur/mois ❓.

**Risques.** Concurrence établie et bien financée ; difficulté technique la plus élevée du lot.

---

### Opportunité 7 — Facturation et gestion pour micro-entrepreneurs (écartée)

Marché immense (3,2 millions d'auto-entrepreneurs) mais : offres gratuites chez Abby, Indy, Tiime, Pennylane ✅ ; obligation d'émission via Plateforme Agréée au 1er septembre 2027 ✅, statut impossible à obtenir pour nous ; différenciation nulle. **Écartée.** Elle reste en revanche une *source d'intégration* (import Factur-X) pour les autres opportunités.

---

## 3. Tableau comparatif

Notation sur 10. Pour « Concurrence » et « Coût d'exploitation », 10 = situation la plus favorable (concurrence faible, coût faible).

| Critère | 1. Vigilance sous-traitants | 2. Relances impayés | 3. Relance devis | 4. Collecte docs clients | 5. Avis Google | 6. Rapports terrain | 7. Facturation |
|---|---|---|---|---|---|---|---|
| Intensité du problème | 7 | 8 | 7 | 6 | 6 | 6 | 8 |
| Fréquence d'utilisation | 6 | 7 | 8 | 7 | 7 | 8 | 9 |
| Volonté de payer | 7 | 6 | 6 | 7 | 6 | 7 | 3 |
| Accessibilité des clients | 6 | 7 | 6 | 5 | 6 | 5 | 7 |
| Concurrence (10 = faible) | 7 | 4 | 5 | 5 | 3 | 3 | 1 |
| Facilité de développement | 8 | 7 | 7 | 7 | 7 | 5 | 3 |
| Coût d'exploitation (10 = faible) | 8 | 8 | 8 | 7 | 7 | 6 | 6 |
| Potentiel de croissance | 7 | 7 | 5 | 6 | 6 | 6 | 4 |
| **Total / 80** | **56** | **54** | **52** | **50** | **48** | **46** | **41** |

**Justification des notes principales.**

- **Intensité.** Impayés et facturation touchent directement la trésorerie (8). La vigilance est un risque financier lourd mais ressenti par intermittence (7). Avis, rapports, collecte de documents sont des irritants plus que des urgences (6).
- **Fréquence.** Facturation et devis sont quotidiens (8–9). La vigilance est périodique par sous-traitant (6).
- **Volonté de payer.** Facturation : 3, car le gratuit est la norme. Vigilance : 7, car le prix se compare à une amende ou à un redressement, et un concurrent facture déjà 24,50 €/utilisateur. Impayés : 6, car la relance est perçue comme « déjà incluse » ailleurs.
- **Accessibilité.** Freelances et micro-entrepreneurs sont très présents en ligne (7). Artisans et cabinets comptables demandent du terrain ou des réseaux (5–6).
- **Concurrence.** Facturation : 1 (saturé et gratuit). Avis et rapports terrain : 3 (acteurs nombreux et financés). Impayés : 4 (pris en étau). Vigilance : 7 (acteurs présents mais tous orientés grands comptes et sur devis ; le segment TPE semble peu adressé — **hypothèse à confirmer**).
- **Facilité.** Vigilance : 8 (CRUD, dates, e-mails, PDF). Rapports terrain : 5 (mobile hors ligne). Facturation : 3 (barrière PA).
- **Croissance.** Impayés et vigilance ouvrent sur des services annexes (recouvrement, assurance, cascade de sous-traitance). La relance de devis plafonne vite (5).

---

## 4. Les trois meilleures opportunités et la recommandation

### Top 3

1. **Conformité des sous-traitants (obligation de vigilance)** — 56/80
2. **Relances d'impayés indépendantes de l'outil de facturation** — 54/80
3. **Relance automatique des devis non signés** — 52/80

### Recommandation principale : l'opportunité 1

**Produit en une phrase (hypothèse de positionnement).** « Le tableau de bord qui garde vos sous-traitants en règle : relances automatiques, vérifications guidées, dossier de preuve prêt en cas de contrôle URSSAF, pour 19 €/mois. »

**Pourquoi elle est préférable aux deux autres :**

1. **Un déclencheur légal et un calendrier imposé.** La loi fixe le seuil (5 000 € HT), la liste des documents et la périodicité (6 mois). Le produit n'a pas à convaincre d'une bonne pratique : il exécute une obligation. Les opportunités 2 et 3 vendent une amélioration ; la 1 vend une mise en conformité.
2. **Un écart de marché net et vérifiable.** Tous les acteurs identifiés (Once For All, Aprovall, Provigis, AddWorking) vendent sur devis à des ETI et grands comptes. Le seul prix public trouvé est 24,50 €/utilisateur/mois, sans essai gratuit. Une TPE qui suit 6 sous-traitants n'a aujourd'hui que le tableur. À l'inverse, l'opportunité 2 est coincée entre les relances gratuites d'Abby ou Indy et les outils PME à 134 € et plus, et l'opportunité 3 peut être absorbée par Obat en un trimestre.
3. **Le signal d'enforcement monte.** Procédures de solidarité financière en hausse de 85 % entre 2024 et 2025 ⚠️, nouvelle procédure ad hoc depuis le 1er janvier 2026, renforcement du devoir de vigilance en cascade annoncé pour fin 2026. Un marché tiré par la contrainte se vend mieux qu'un marché tiré par l'envie.
4. **MVP le plus simple du lot et sans API payante.** Fiches, dates, e-mails, upload, PDF. Tout est faisable avec la stack envisagée et des services gratuits. Aucun verrou technique (la vérification URSSAF se fait par lien guidé, faute d'API publique).
5. **Un apprentissage complet pour le fondateur.** Authentification, données relationnelles, fichiers, e-mails planifiés, génération de documents, RGPD : c'est un parcours formateur sans être écrasant.

**Pourquoi ce n'est pas un choix sans risque.** La douleur est latente ; beaucoup de petites entreprises ne feront rien tant qu'elles n'ont pas été contrôlées ou effrayées. C'est précisément ce que la phase de validation doit mesurer. **Si la validation échoue, l'opportunité 2 est le plan B**, avec une partie du code réutilisable (relances automatiques, PDF, e-mails).

**Ce que je ne recommande pas.** Un CRM ou un « assistant IA » générique, conformément à la consigne : aucune des deux pistes ne résout un problème précis mieux que les acteurs installés.

---

## 5. Concurrents à étudier en priorité (phase 2)

Pour l'opportunité 1, à examiner par une démo, une inscription ou une lecture des CGV :

| Concurrent | Ce qu'il faut vérifier | Lien |
|---|---|---|
| Once For All (ex-Attestation Légale) | Grille tarifaire réelle pour un donneur d'ordre de moins de 20 salariés ; qui paie (sous-traitant ou donneur d'ordre) ; parcours de dépôt côté sous-traitant | https://onceforall.fr/ |
| Aprovall (ex-e-Attestations) | Ticket d'entrée minimal ; existence d'une offre TPE | https://www.aprovall.com/ |
| Provigis | Idem | https://www.provigis.com/ |
| AddWorking | Idem ; fonctions de relance et d'authentification | https://www.addworking.com/ |
| Subclic | Contenu des éditions Free / Pro ; couvre-t-il le renouvellement à 6 mois ? | https://subclic.com/ |
| Obat, Tolteck, Batappli | Présence ou absence d'un module sous-traitants ; feuille de route annoncée | https://obat.fr/tarifs/ ; https://www.tolteck.com/ ; https://www.batappli.fr/ |
| URSSAF (service de vérification d'attestation) | Déroulé exact de la vérification par code de sécurité ; absence confirmée d'API publique | https://www.urssaf.fr/ |

Pour l'opportunité 2 (plan B) : Abby, Indy, Pennylane, Qonto (profondeur réelle des relances automatiques), Rubypayeur, Clearnox, GCollect, Credicys.

---

## 6. Plan de validation auprès de vrais professionnels (opportunité 1)

**Rappel : aucun entretien n'a encore eu lieu.** Ce plan est à exécuter par le fondateur, avec mon aide pour préparer, dépouiller et synthétiser.

### 6.1 Client idéal (ICP)

- **Primaire** : entreprise du bâtiment de 3 à 20 salariés (second œuvre, rénovation, petite entreprise générale) qui travaille avec 3 à 20 sous-traitants dans l'année, avec des contrats dépassant 5 000 € HT. Interlocuteur : dirigeant, conjoint collaborateur ou assistante de gestion.
- **Secondaire** : agence (web, communication, conseil, ESN) de 2 à 15 personnes qui confie plus de 5 000 € par an à des freelances récurrents hors plateforme.

### 6.2 Situations où le problème apparaît

1. Signature d'un nouveau contrat ou d'un nouveau chantier avec un sous-traitant.
2. Échéance des 6 mois : l'attestation est périmée et personne ne l'a vu.
3. Demande du maître d'ouvrage ou du client final : agrément, DC4, attestations à fournir sous 48 h.
4. Contrôle URSSAF ou inspection du travail : il faut produire les justificatifs sur plusieurs années.
5. Sinistre : la décennale du sous-traitant était expirée.
6. Remplacement en urgence d'un sous-traitant défaillant : on signe sans vérifier.
7. Reprise d'un dossier par une nouvelle assistante : rien n'est centralisé.

### 6.3 Dix questions d'entretien (ouvertes, sur le passé, sans présenter le produit)

1. Combien de sous-traitants ou prestataires avez-vous fait travailler ces douze derniers mois, et pour quels montants environ ?
2. Racontez-moi la dernière fois que vous avez signé avec un nouveau sous-traitant : quels documents lui avez-vous demandés, et comment ?
3. Comment savez-vous aujourd'hui qu'une attestation URSSAF arrive à expiration ? Qui s'en occupe ?
4. Vous est-il déjà arrivé de découvrir qu'un document était périmé ou manquant ? Que s'est-il passé ensuite ?
5. Vérifiez-vous le code de sécurité des attestations sur le site de l'URSSAF ? Si non, pourquoi ?
6. Avez-vous déjà vécu un contrôle URSSAF ou une demande de justificatifs d'un maître d'ouvrage ? Combien de temps cela vous a-t-il pris de rassembler les pièces ?
7. Combien de temps par mois, à la louche, part dans la collecte et la relance de ces documents ? Qui le fait ?
8. Avez-vous déjà cherché ou testé un outil pour ça ? Lequel, et pourquoi l'avoir gardé ou abandonné ?
9. Si ce suivi disparaissait de votre charge demain, qu'est-ce que cela changerait concrètement ?
10. Quel budget mensuel consacrez-vous déjà à des logiciels de gestion, et lequel avez-vous résilié récemment, pourquoi ?

Question de clôture : « Connaissez-vous deux autres entreprises qui gèrent plusieurs sous-traitants et accepteraient un échange de quinze minutes ? »

### 6.4 Méthode pour trouver dix professionnels

- **Réseau direct** : famille, amis, anciens collègues ayant un lien avec le bâtiment ou une agence ; demander une introduction, pas une vente.
- **CAPEB et FFB départementales** : appeler le secrétariat, proposer un échange sur « la charge administrative de la sous-traitance » ; demander à participer à une réunion locale.
- **Négoces de matériaux et comptoirs pro** (Point P, Cedeo, Rexel) : lieu physique où l'on croise des artisans ; échanges courts, prise de rendez-vous.
- **Experts-comptables** de proximité : ils voient le problème chez leurs clients et peuvent introduire deux ou trois entreprises.
- **LinkedIn** : recherche « conducteur de travaux », « gérant », « assistante de gestion » + « bâtiment » dans un rayon local, entreprises de 2 à 20 salariés ; message court demandant un conseil, pas une démo.
- **Groupes Facebook** d'artisans du bâtiment et forums (forumconstruire côté particuliers, moins utile).
- **Pour le segment agences** : fondateurs d'agences via LinkedIn et communautés de freelances (Malt, Slack / Discord de freelances), en ciblant ceux qui *achètent* des prestations.
- **Contrepartie offerte** : une checklist « documents à exiger de vos sous-traitants et quand » en PDF, envoyée après l'entretien.

Objectif : 10 entretiens de 15 à 25 minutes en 2 à 3 semaines, 7 au moins dans le segment primaire.

### 6.5 Signaux de confirmation et d'invalidation

**Confirment l'opportunité :**
- L'interlocuteur décrit spontanément un épisode précis (document périmé, panique avant un contrôle, dossier d'agrément bâclé).
- Il existe déjà un tableur, un classeur ou un rituel : le problème est assez réel pour qu'on l'ait bricolé.
- Il cite un temps mensuel ou une personne dédiée.
- Il demande « ça existe ? » ou « vous pouvez me le montrer quand ? » sans qu'on le propose.
- Il accepte d'être recontacté pour tester avec ses vrais sous-traitants.

**Invalident l'opportunité :**
- « Je demande l'attestation une fois et c'est tout » sans gêne exprimée : le risque n'est pas perçu.
- Moins de trois sous-traitants par an chez la majorité des interrogés.
- Le maître d'ouvrage ou le logiciel existant gère déjà tout.
- Refus net de payer quoi que ce soit pour « de l'administratif ».
- Les interlocuteurs renvoient systématiquement vers leur expert-comptable : le client serait alors le cabinet, pas l'entreprise, ce qui change le produit.

### 6.6 Seuil minimal de validation avant tout développement

Sur 10 entretiens exploitables :

| Indicateur | Seuil |
|---|---|
| Entreprises gérant au moins 3 sous-traitants/prestataires par an | ≥ 6 |
| Épisode concret de document manquant, périmé ou de stress lié à un contrôle, raconté spontanément | ≥ 5 |
| Déclarent qu'elles paieraient au moins 15 €/mois pour en être débarrassées (question posée en fin d'entretien seulement) | ≥ 4 |
| Acceptent de tester une version bêta avec de vrais sous-traitants (nom + e-mail enregistrés) | ≥ 3 |

Si les quatre seuils sont atteints : passage à la phase 3 (cahier des charges et architecture). Si deux seuils ou plus échouent : on rejoue le même protocole sur l'opportunité 2 avant toute ligne de code.

---

## 7. Sources consultées (12 novembre 2026)

**Réglementation et chiffres publics**
- Calendrier facturation électronique : https://www.economie.gouv.fr/node/3240685 ; https://www.moneyvox.fr/actu/110141/facturation-electronique-ce-qui-change-vraiment-a-partir-du-1er-septembre-2026
- Observatoire des délais de paiement, rapport 2025 : https://www.banque-france.fr/system/files/2026-09/CP_RA-ODP_20260923.pdf ; https://www.vie-publique.fr/rapport/305125-rapport-annuel-2025-observatoire-des-delais-de-paiement
- Attestation de vigilance (service-public) : https://entreprendre.service-public.gouv.fr/vosdroits/F31422
- Article D8222-5 Code du travail : https://www.marche-public.fr/Marches-publics/Textes/Codes/Code-du-travail/Code-travail-D8222-5.htm
- Solidarité financière, hausse des procédures (annexe PLACSS 2025 p. 64, citée) : https://consultation.avocat.fr/barreau-grenoble/blog/ingrid-kis/article-2984820-augmentation-des-procedures-de-solidarite-financiere-urssaf.html ; https://kohenavocats.com/solidarite-financiere-donneur-ordre-obligation-vigilance-urssaf-jurisprudence-2025-2026/
- INSEE, sous-traitance : https://www.insee.fr/fr/statistiques/2499249
- CAPEB, chiffres de l'artisanat du bâtiment : https://www.capeb.fr/les-chiffres-de-l'artisanat ; https://www.capeb.fr/www/capeb/media/national/capeb-plaquette-institutionelle-2025-web.pdf
- Auto-entrepreneurs (URSSAF relayé) : https://tpeactu.fr/2026/01/29/auto-entrepreneurs-chiffre-affaires-urssaf-2025/ ; https://optigestplus.org/2026/05/10/auto-entrepreneur-en-france-le-bilan-2025-en-chiffres-statistiques-ca-secteurs/
- Pénalités de retard et indemnité de 40 € : https://kohenavocats.fr/2026/05/15/penalite-retard-facture-calcul-exemple-40-euros-2026/ ; https://bpifrance-creation.fr/boiteaoutils/taux-penalites-retard
- Procédure simplifiée petites créances et Credicys : https://www.justice.fr/fiche/recouvrement-amiable-procedure-simplifiee-recouvrement-petites-creances ; https://www.legifiscal.fr/vie-affaires/procedure-simplifiee-recouvrement-petites-creances.html
- Étude ACASI impayés indépendants (oct. 2025) : https://www.presse-citron.net/etude-acasi-freelance-france-salaires/
- Shine, enquête 2022 retards de paiement : https://www.shine.fr/blog/pres-d-un-independant-sur-deux-victime-de-retards-de-paiements/

**Concurrents (pages consultées)**
- Abby tarifs : https://www.abby.fr/tarifs — Indy tarifs : https://www.indy.fr/tarifs/ — Obat tarifs : https://obat.fr/tarifs/
- Rubypayeur (via Appvizer, page tarifs inaccessible) : https://www.appvizer.fr/finance-comptabilite/recouvrement/rubypayeur
- LeanPay, Clearnox, GCollect (comparateurs) : https://www.appvizer.fr/finance-comptabilite/recouvrement ; https://www.lafabriquedunet.fr/logiciels/gestion/logiciel-recouvrement
- Guest Suite tarifs : https://www.guest-suite.com/tarifs — Plus que pro (avis et prix cités) : https://fr.trustpilot.com/review/plus-que-pro.fr ; https://www.marty-app.com/blog/plusqueproavis ; https://www.plus-que-pro-solution.fr/pourquoi-4-ans-dengagement-avec-plus-que-pro-les-raisons-assumees/
- Kizeo Forms tarifs : https://www.kizeo-forms.com/fr/tarifs/ — Organilog (comparateur) : https://hackceleration.com/fr/labs/meilleur/logiciel-intervention-terrain
- Once For All / Attestation Légale : https://onceforall.fr/ ; https://www.logiciels.pro/attestation-legale/ — Aprovall : https://www.aprovall.com/ — Subclic : https://lespepitestech.com/startup-de-la-french-tech/subclic — AddWorking : https://foxeet.fr/contenu/addworking
- Coût d'un portail sous-traitants sur mesure (Kolonell, oct. 2026) : https://kolonell.com/fr/blog/logiciel-suivi-sous-traitants-btp-attestations-vigilance-lyon-2026
- Documents de sous-traitance (Obat) : https://www.obat.fr/blog/documents-obligatoires-sous-traitance/
- Content Snare, Clustdoc, FileInvite : https://www.capterra.com/p/167019/Content-Snare/ ; https://www.lafabriquedunet.fr/logiciels/alternatives/alternative-clustdoc ; https://www.capterra.fr/software/138728/fileinvite
- Tolteck, Batappli (comparateurs) : https://tool-advisor.fr/logiciel-facturation/comparatif/logiciel-devis-facture-batiment/
- Statistiques devis non signés (blogs citant la FFB, non vérifiées) : https://facadecolorizer.com/blog/devis-ravalement-facade-artisan-convaincre-client ; https://kolonell.com/fr/blog/automatiser-relances-devis-n8n-make-pme-nantes-2026
- IFOP / Guest Suite 2026 sur les avis : https://www.leptidigital.fr/relation-client-cx/chiffres-influence-avis-clients-achats-francais-48802/
- Google Business Profile API, conditions d'accès : https://developers.google.com/my-business/content/faq ; https://slashpost.ai/blogs/google-business-profile/google-business-profile-api-documentation-2026

**Technique et coûts d'exploitation**
- Vercel Hobby, usage non commercial : https://vercel.com/docs/plans/hobby-plan ; https://vercel.com/docs/limits/fair-use-policy
- Cloudflare Pages / Netlify gratuits avec usage commercial (sources secondaires) : https://dev.to/build996/vercel-vs-netlify-vs-cloudflare-pages-free-frontend-hosting-compared-3h9g
- Supabase offre gratuite (sources secondaires, à revérifier sur supabase.com) : https://automationatlas.io/answers/supabase-free-tier-limits-2026/
- Resend quotas : https://resend.com/docs/knowledge-base/account-quotas-and-limits — Brevo offre gratuite : https://help.brevo.com/hc/en-us/articles/208580669
- Bibliothèques Factur-X en TypeScript : https://www.npmjs.com/package/factur-x-kit ; https://jsr.io/@stackforge-eu/factur-x ; https://github.com/stafyniaksacha/facturx ; https://www.npmjs.com/package/node-zugferd
