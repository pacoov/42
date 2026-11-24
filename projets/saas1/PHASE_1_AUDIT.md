# PHASE_1_AUDIT — Audit critique des livrables de la phase 1

- **Date** : 12 novembre 2026
- **Documents audités** : MARKET_RESEARCH.md, ARCHITECTURE.md, PRODUCT_SPEC.md, TODO.md, README.md, CHANGELOG.md. Aucun autre document n'existe dans le dossier (pas de dossier `interviews/`, pas de code, pas de notes d'entretien). Le dépôt Git racine est `/home/paco/jeez` ; le dossier `projets/saas1/` n'est pas encore commité.
- **Méthode** : relecture ligne à ligne, puis re-vérification des affirmations clés par des recherches nouvelles (12/11/2026). Aucune information n'a été considérée comme acquise parce qu'elle figurait dans un document précédent.
- **Auteur de l'audit** : Claude, qui est aussi l'auteur des documents audités. Ce conflit d'intérêts est assumé : l'audit cherche explicitement à contredire la phase 1, et il y parvient sur un point majeur (section 3).

---

## 1. Verdict en une page

| Question | Réponse |
|---|---|
| Les documents sont-ils cohérents entre eux ? | Globalement oui, avec trois incohérences mineures (section 4). |
| Le cadre juridique est-il correct ? | Correct dans l'ensemble, avec une imprécision de rattachement d'article et deux lacunes (section 5). |
| La recommandation « conformité des sous-traitants » repose-t-elle sur des faits solides ? | **Non sur le point décisif.** La note « Concurrence 7/10 » et l'affirmation « le segment TPE n'a aujourd'hui que le tableur » sont **contredites par les faits** : AddWorking propose une offre gratuite pour donneurs d'ordre avec partenaires illimités, vérification automatique et relances automatiques ; Othentis vend dès 59 € HT/mois avec essai gratuit ; Quitus et Axiobat intègrent le suivi des documents de sous-traitants dans des logiciels à 20–30 €/mois pour artisans et PME. La phase 1 n'avait identifié aucun de ces quatre acteurs. |
| Le projet peut-il passer en phase 2 ? | **Oui, sous condition.** La phase 2 doit tester une hypothèse corrigée (section 7) et non celle de la phase 1. Si la correction n'est pas acceptée, la recommandation honnête est de ne pas poursuivre cette opportunité en l'état. |

---

## 2. Informations solides et suffisamment sourcées

Ces points ont été re-vérifiés le 12/11/2026 et peuvent être réutilisés tels quels.

| Affirmation | Statut après audit | Source de contrôle |
|---|---|---|
| Obligation de vigilance : seuil 5 000 € HT, documents à la conclusion puis tous les 6 mois ; attestation URSSAF et justificatif d'immatriculation (art. D8222-5) | ✅ Confirmé | service-public.gouv.fr F31422 ; texte D8222-5 |
| L'attestation de régularité fiscale ne fait pas partie des pièces de l'art. D8222-5 | ✅ Confirmé (le blog Obat qui l'inclut est en erreur) | texte D8222-5 |
| Pas d'API publique pour vérifier une attestation de vigilance ; l'API Entreprise est réservée aux administrations | ✅ Confirmé | data.gouv.fr / api.gouv.fr |
| Calendrier facturation électronique (réception 1er sept. 2026 ; émission PME/TPE 1er sept. 2027) | ✅ Confirmé | economie.gouv.fr |
| Observatoire des délais de paiement 2025 : 13 Md€, 13,4 jours, +25 % de risque de défaillance | ✅ Confirmé | Banque de France, communiqué sept. 2026 |
| Hausse des procédures de solidarité financière : +85 % entre 2024 et 2025 | ✅ **Renforcé** : le bilan officiel URSSAF 2025 (publié le 20 février 2026) indique 1 027 actions de solidarité financière en 2025, +85 % vs 2024 ; redressements travail dissimulé 1 503 M€ dont 877 M€ dans le BTP | LégiSocial 27/02/2026 et presse régionale citant le bilan URSSAF |
| Tarifs publics relevés : Abby, Indy, Obat, Kizeo Forms, Guest Suite | ✅ Pages éditeurs consultées | pages tarifs |
| Vercel Hobby interdit l'usage commercial | ✅ Confirmé | documentation Vercel |
| Bibliothèques Factur-X open source en TypeScript | ✅ Confirmé | npm / jsr |
| Chiffres CAPEB et FFB (plus de 400 000 entreprises artisanales ; 450 000 entreprises hors micro-entreprises pures ; 95 % de taille artisanale ; CA 193 Md€ en baisse) | ✅ Confirmé | capeb.fr ; ffbatiment.fr (publication du 29 juin 2026) |

---

## 3. Erreur majeure : la cartographie concurrentielle était incomplète

C'est le point qui invalide une partie de la recommandation de phase 1.

| Acteur manqué en phase 1 | Ce qui a été vérifié le 12/11/2026 | Impact sur la thèse |
|---|---|---|
| **AddWorking** (fondé en 2015) | Page tarifs : offre **Essentiel à 0 €/mois** pour les donneurs d'ordre, « partenaires illimités », « documents légaux vérifiés automatiquement », « relances automatiques », « indicateurs de conformité », accès API. Offre Business à 49 €/licence/mois (39 € en annuel). Aucune condition restrictive affichée. | **Fort.** Le cœur du MVP imaginé (fiches, expirations, relances, statut) existe gratuitement. |
| **Othentis** | Page tarifs : « à partir de 59 € HT par mois », essai gratuit, forfait selon le nombre d'entreprises vérifiées ; vérification contre sources officielles, alertes avant expiration. Limites reconnues par l'éditeur : pas d'API avant 2027, pas de mode hors ligne. | Moyen. Un acteur positionné PME avec prix public. |
| **Quitus** | Logiciel « BTP pour artisans et PME » : Essentiel 19,99 €/mois (1 utilisateur), Pro 29,99 €/mois (5 utilisateurs, « PME 3-15 personnes »), essai 14 jours sans carte, sans engagement. Son guide annonce stockage des documents obligatoires des sous-traitants, vérification URSSAF avec traçabilité, alertes de renouvellement. Traction inconnue. | Moyen. Même cible que NEXORA, suivi des sous-traitants inclus dans un outil plus large. |
| **Axiobat** | ERP « TPE-PME du bâtiment » : fiche sous-traitant avec dates d'émission/expiration (URSSAF, Kbis, RC pro, décennale, carte BTP), statuts « Conforme / À renouveler / Non conforme », alerte à 30 jours ; l'éditeur indique que les notifications e-mail automatiques « ne sont pas encore disponibles ». Tarifs protégés par mot de passe. | Moyen. Confirme que les ERP BTP intègrent la fonction. |
| **Bativigie** (2015, Occitanie) | Plateforme de lutte contre le travail illégal pour maîtres d'ouvrage et donneurs d'ordre. Site inaccessible le 12/11 (erreur de connexion) ; informations issues de la presse (Le Journal des Entreprises). Tarifs non trouvés. | Faible à moyen. |
| **Once For All, côté sous-traitants** | Grille publique : Business Expérience 399 € HT/an (partage avec 2 clients), Essentiel 739 €/an (20 clients), Liberté 1 099 €/an, Horizon 1 699 €/an, + 39 € d'activation, engagement 12 mois. Côté donneurs d'ordre : sur devis. | Précise le modèle : **ce sont les sous-traitants qui paient**. La phase 1 ne l'avait pas établi. |

**Conséquence.** La note « Concurrence 7/10 » de la phase 1 n'est pas défendable ; une note de 3 à 4/10 serait cohérente avec ces faits. Recalculé, le total de l'opportunité 1 passe de 56 à environ 52–53 sur 80, soit au niveau de l'opportunité 2 (54) et non plus devant elle. Le classement de la phase 1 ne tient donc plus. Ce recalcul reste lui-même une estimation.

**Ce qui reste vrai malgré tout.** Aucun des acteurs ci-dessus n'a été testé en conditions réelles ; une offre gratuite peut être inutilisable pour une TPE (complexité, obligation pour le sous-traitant de créer un compte, support, pérennité du gratuit). C'est précisément ce que la phase 2 doit établir, et non supposer.

---

## 4. Contradictions entre les documents

| Contradiction | Fichiers | Correction |
|---|---|---|
| Taille de la cible : « 2 à 20 salariés » (profil utilisateurs) contre « 3 à 20 salariés » (ICP et PRODUCT_SPEC) | MARKET_RESEARCH.md §2 opp. 1 vs §6.1 ; PRODUCT_SPEC.md ; README.md | Harmonisé sur « 3 à 20 salariés » (hypothèse de travail, à tester). |
| Deux signaux de prix incompatibles présentés côte à côte sans arbitrage : « 24,50 €/mois/utilisateur » (Attestation Légale, comparateur non daté) et « 2 000 à 6 000 € HT/an » (article d'agence) | MARKET_RESEARCH.md §2 opp. 1 | Les deux restent non vérifiés auprès de l'éditeur ; la grille publique Once For All (399 à 1 699 €/an côté sous-traitant) remplace désormais ces chiffres. |
| La fiche opportunité 1 affirme « une TPE n'a aujourd'hui que le tableur » alors que la même fiche admet que les solutions actuelles sont une « hypothèse à valider » | MARKET_RESEARCH.md §2 et §4 | L'affirmation est retirée de la recommandation (voir erratum en tête de MARKET_RESEARCH.md). |

---

## 5. Erreurs ou imprécisions juridiques, commerciales et techniques

**Juridique**

1. **Rattachement de la liste des salariés étrangers.** La phase 1 la présentait comme une pièce « le cas échéant » de l'art. D8222-5. En réalité elle relève d'une obligation distincte (art. L8254-1 et D8254-2 du Code du travail), avec la même périodicité de 6 mois. Le résultat pratique est le même, mais la citation était inexacte. Corrigé.
2. **Sanctions incomplètes.** La phase 1 ne citait que la solidarité financière (L8222-2). Il faut ajouter l'annulation des réductions et exonérations de cotisations dont a bénéficié le donneur d'ordre (art. L133-4-5 du Code de la sécurité sociale) lorsque le manquement à la vigilance se cumule avec un travail dissimulé du cocontractant. Les plafonds chiffrés de cette annulation n'ont pas pu être vérifiés et ne sont pas repris. L'« amende de 1 500 € » qui circule sur des blogs n'a pas été retrouvée dans une source officielle : **non reprise**.
3. **« Devoir de vigilance en cascade fin décembre 2026 » : formulation trop vague.** Il s'agit de la loi n° 2026-534 du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales, qui crée une obligation de vigilance propre au **maître d'ouvrage** à l'égard des sous-traitants acceptés (nouvel art. L8222-1-1), avec seuil, liste de documents et périodicité renvoyés à un décret non encore paru, et entrée en vigueur au plus tard fin décembre 2026 (les sources consultées indiquent le 25 ou le 26 décembre). Effet pour NEXORA : élargit la population concernée (maîtres d'ouvrage) mais **ne change rien aux obligations des petites entreprises principales**, qui sont la cible.
4. **Jurisprudence citée (TJ Bobigny, 30 mars 2026, 161 658 € + 63 832 €)** : issue d'un blog d'avocat, non vérifiée sur une base de décisions. Maintenue avec le marqueur ⚠️ uniquement.

**Commercial**

5. Le « vide de marché TPE » était une déduction (absence de prix publics chez les grands acteurs), pas une observation. Voir section 3.
6. La fréquence « quasi hebdomadaire » était un calcul (8 sous-traitants × 2 renouvellements), pas une mesure. Aucune donnée terrain n'existe sur le temps réellement passé ; les chiffres éditeurs (Once For All « 185 heures/an économisées », Aprovall « 25 % de temps administratif économisé ») sont des arguments marketing sans méthodologie publiée.
7. Les hypothèses de prix (19 € et 39 €/mois) n'avaient aucun ancrage concurrentiel direct. Elles en ont désormais un (AddWorking 0 € et 39–49 €, Othentis dès 59 €, Quitus 19,99–29,99 €), traité dans PRICING_STRATEGY.md.
8. Taille du marché jamais estimée. Éléments obtenus le 12/11 : INSEE Ésane 2023, secteur construction : 561 504 micro-entreprises (moins de 10 salariés) et 25 948 PME hors micro ; la tranche « 3 à 20 salariés » chevauche les deux catégories et n'est pas isolable dans ces tables. L'API publique de recherche d'entreprises plafonne ses comptages à 10 000 résultats et ne permet pas un dénombrement national ; elle reste utile pour constituer des listes locales (voir PROSPECTING_KIT.md).

**Technique**

9. Rien d'erroné dans ARCHITECTURE.md. Deux compléments : (a) les documents stockés (Kbis, attestations) contiennent des données personnelles de dirigeants, ce qui impose un registre de traitement et une politique de rétention dès le MVP ; (b) les limites Supabase citées proviennent de sources secondaires et n'ont pas été vérifiées sur supabase.com (toujours vrai au 12/11).

---

## 6. Conclusions reposant sur des estimations subjectives

- **Toutes les notes du tableau comparatif** (8 critères × 7 opportunités). Elles n'ont pas été étalonnées sur des données terrain. Le changement d'une seule note (Concurrence) suffit à inverser le classement, ce qui montre la fragilité de l'exercice.
- Les affirmations sur la « douleur latente », le « public BTP moins digital », la « volonté de payer ancrée sur le risque » : plausibles, non mesurées.
- Les statistiques sur les devis non signés (48 %, J+3/J+10/J+21) : non retrouvées à la source FFB, à ne pas réutiliser.

---

## 7. Informations manquantes (à obtenir en phase 2)

1. Qui, dans une entreprise de 3 à 20 salariés, collecte et vérifie réellement les documents ; combien de temps cela prend ; ce qui se passe quand c'est oublié. **Aucune donnée primaire.**
2. Pourquoi ces entreprises n'utilisent pas AddWorking Essentiel (gratuit), ni le module de leur ERP, ni Othentis. Trois hypothèses à tester : elles ne connaissent pas ces outils ; elles les trouvent trop lourds ; elles n'en ressentent pas le besoin.
3. Le point de vue des sous-traitants : accepteraient-ils de déposer leurs documents sur un énième portail, sans compte, gratuitement ?
4. La part des petites entreprises principales qui travaillent pour des maîtres d'ouvrage imposant déjà leur plateforme (Once For All, Aprovall), ce qui rendrait NEXORA redondant.
5. Les tarifs réels côté donneur d'ordre de Once For All, Aprovall, Provigis (sur devis ; le site de Provigis était injoignable le 12/11).
6. La traction réelle de Quitus et d'Othentis (nombre de clients) : non publiée.

---

## 8. Décision d'audit et correction proposée

**Le projet peut passer en phase 2 à condition de remplacer l'hypothèse testée.**

- Hypothèse de la phase 1 (à abandonner) : « les petites entreprises du BTP n'ont aucun outil abordable pour suivre les documents de leurs sous-traitants ».
- Hypothèse corrigée (à tester) : « les entreprises du BTP de 3 à 20 salariés qui sous-traitent régulièrement gèrent encore ce suivi à la main **malgré l'existence d'outils gratuits ou bon marché**, parce que ces outils sont inconnus, trop lourds, ou conçus pour des structures plus grandes ; une version radicalement plus simple, sans compte pour le sous-traitant et sans paramétrage, aurait une valeur pour laquelle elles paieraient entre 20 et 40 € HT par mois ».

Trois garde-fous ajoutés à la phase 2 :

1. **Test personnel d'AddWorking Essentiel par le fondateur avant le premier entretien** (compte gratuit, une heure, avec deux sous-traitants fictifs). Si l'outil gratuit couvre déjà simplement le besoin d'une TPE, la barre de différenciation à atteindre devient très haute et doit être explicitement discutée en entretien.
2. **Critère d'arrêt explicite** dans VALIDATION_SCORECARD.md : si la majorité des interviewés connaissent déjà un outil adapté ou sont couverts par la plateforme de leur maître d'ouvrage, c'est NO GO sur cette cible.
3. **Pistes de pivot préparées à l'avance** (PHASE_2_REPORT.md §6) pour éviter de forcer la validation.

Un erratum renvoyant au présent audit a été ajouté en tête de MARKET_RESEARCH.md ; le contenu historique n'a pas été réécrit.
