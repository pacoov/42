# 07 — Checklist avant lancement définitif

- **Date** : 16 novembre 2026
- **Usage** : liste de tout ce qui devra être vu, décidé ou vérifié **avant** de donner accès au produit à un client payant. Rien ici n'est fait. Chaque ligne a un statut : ☐ à faire · ☑ fait · ✗ écarté (avec la raison). Le document se met à jour au fil de l'eau ; on ne supprime pas une ligne, on la marque.
- **Prérequis absolu** : une décision « Poursuivre » dans docs/04-decisions.md, fondée sur les entretiens. Tant qu'elle n'existe pas, cette liste est une liste d'attente.

## A. Décision et positionnement

- ☐ Décision Poursuivre consignée dans docs/04-decisions.md avec les totaux d'entretiens et trois verbatims.
- ☐ Cible retenue nommée précisément (taille, métier, type de clients, nombre de sous-traitants) et raison de ne pas utiliser l'offre gratuite d'AddWorking formulée en une phrase, issue des entretiens.
- ☐ Promesse écrite en une phrase, sans jamais employer « conformité garantie », « conforme à la loi » ou équivalent.
- ☐ Liste des fonctions du MVP figée, chacune rattachée à un verbatim d'entretien ; tout le reste explicitement « plus tard ».
- ☐ Nom définitif choisi (docs/06-nom.md), vérifié sur data.inpi.fr (classes 9 et 42), EUIPO, annuaire des entreprises, et domaine `.fr` disponible. NEXORA abandonné comme nom public.
- ☐ Prix de lancement choisi après le test de volonté de payer (PRICING_STRATEGY.md) : montant, unité (par entreprise), palier par nombre de sous-traitants, sans engagement ou non.

## B. Juridique et réglementaire (produit)

- ☐ Relecture sur Légifrance des articles cités dans docs/05-reglementation.md (L8222-1 à L8222-5, R8222-1, D8222-5, D8222-7, L8254-1, D8254-2 ; L243-15, D243-15, L133-4-5 CSS) ; mise à jour des textes d'aide dans le produit.
- ☐ Texte officiel de la loi n° 2026-534 du 25 juin 2026 et de son décret d'application (seuil, documents, date) ; décision d'intégrer ou non les maîtres d'ouvrage au périmètre.
- ☐ Liste des familles de documents du produit validée : distinguer dans l'interface « pièce légale » et « pratique du bâtiment » ; vérifier la dénomination actuelle du justificatif d'immatriculation des artisans (extrait RNE).
- ☐ Mentions dans le produit : « la vérification de l'attestation URSSAF est faite par l'utilisateur », « l'outil ne garantit pas la conformité », présentes sur la fiche, le dossier de preuve et les conditions d'utilisation.
- ☐ Relecture par un professionnel du droit (avocat, expert-comptable ou juriste de CAPEB/FFB) des textes d'aide et du dossier de preuve : coût à estimer ; peut être gratuit via un réseau d'accompagnement.
- ☐ Conditions générales d'utilisation et de vente (CGU/CGV) : rédigées, relues, avec clause de limitation de responsabilité adaptée, droit applicable, durée, résiliation, prix, support.
- ☐ Mentions légales du site et du produit (éditeur, hébergeur, SIREN, contact).
- ☐ Statut juridique et fiscal du fondateur pour facturer (micro-entreprise, société) ; TVA ; facturation électronique via une plateforme agréée dès l'obligation applicable (émission obligatoire pour TPE/micro au 1er septembre 2027 ; réception déjà obligatoire).
- ☐ Assurance responsabilité civile professionnelle pour un éditeur de logiciel : devis et décision.

## C. Données personnelles et sécurité (RGPD)

- ☐ Registre des traitements : données des utilisateurs (comptes), des sous-traitants (dirigeants, contacts, documents : Kbis, attestations, assurances, listes de salariés étrangers = données sensibles au sens large), finalités, durées, destinataires.
- ☐ Base légale de chaque traitement (exécution du contrat pour l'utilisateur ; intérêt légitime / obligation légale pour les documents des sous-traitants) ; information des sous-traitants sur la page de dépôt (qui collecte, pourquoi, combien de temps, droits).
- ☐ Politique de confidentialité publiée ; procédure pour les demandes d'accès, de rectification et d'effacement ; délai de réponse.
- ☐ Durée de conservation des documents décidée et appliquée (la pratique du marché est longue, par exemple 15 ans chez un concurrent ; à arbitrer avec le conseil juridique, les délais de prescription URSSAF et le principe de minimisation).
- ☐ Contrat de sous-traitance RGPD (art. 28) avec chaque prestataire technique (hébergeur, base de données, e-mail) ; vérifier la localisation des données (UE) et les transferts hors UE.
- ☐ Chiffrement : HTTPS partout, documents chiffrés au repos, clés gérées hors du code, sauvegardes chiffrées.
- ☐ Contrôle d'accès : un utilisateur ne voit que ses sous-traitants ; tests d'isolation ; politique de mots de passe ou connexion par lien magique ; verrouillage après tentatives.
- ☐ Lien de dépôt : jeton long et non devinable, expiration, possibilité de révoquer, pas de données affichées au-delà du strict nécessaire, protection contre le téléversement de fichiers dangereux (type, taille, antivirus ou isolation).
- ☐ Journal des actions (qui a fait quoi, quand) conservé et protégé : c'est la valeur du « dossier de preuve ».
- ☐ Procédure en cas de violation de données (notification CNIL sous 72 h) écrite, même courte.
- ☐ Suppression de compte : ce qui est effacé, ce qui est conservé et pourquoi, délai.
- ☐ Cookies et mesure d'audience : solution sans consentement (exemptée) ou bandeau conforme.

## D. Technique et exploitation

- ☐ Hébergement autorisant l'usage commercial (Vercel Hobby l'interdit) : Cloudflare, Netlify, VPS ou autre ; vérifier les conditions à la date du lancement.
- ☐ Base de données et stockage de fichiers : fournisseur, limites de l'offre gratuite vérifiées sur le site de l'éditeur, plan de passage à l'offre payante, localisation UE.
- ☐ Envoi d'e-mails : fournisseur, domaine dédié, SPF / DKIM / DMARC configurés, test de délivrabilité vers Gmail, Outlook, Orange, Free ; gabarits de relance et de lien de dépôt relus.
- ☐ Sauvegardes automatiques testées par une restauration réelle.
- ☐ Supervision : alerte en cas de panne, journal des erreurs, page de statut ou au moins une adresse de contact.
- ☐ Nom de domaine acheté, DNS configuré, certificat HTTPS automatique.
- ☐ Tests : parcours critiques (création, dépôt par lien, relance, vérification, export) testés sur ordinateur et téléphone, navigateurs courants ; tests automatisés minimaux sur le calcul des statuts et des alertes.
- ☐ Accessibilité de base : contrastes, navigation clavier, libellés de formulaires, taille des cibles sur téléphone.
- ☐ Performance : temps de chargement acceptable en 4G ; poids des pages.
- ☐ Procédure de mise en production et de retour arrière écrite (même en cinq lignes).
- ☐ Gestion des secrets : aucune clé dans le dépôt ; `.env.example` à jour ; rotation possible.
- ☐ Dépendances : licences compatibles avec un usage commercial (vérifier chaque paquet), mises à jour de sécurité suivies.
- ☐ Export des données de l'utilisateur (CSV ou ZIP) disponible : c'est aussi une exigence de confiance.

## E. Produit et support

- ☐ Mode « vide » (premiers pas) testé par deux personnes qui n'ont jamais vu le produit, sans aide.
- ☐ Textes du produit relus : aucun jargon, aucune promesse juridique, orthographe.
- ☐ Page d'aide ou FAQ minimale : comment obtenir une attestation URSSAF, comment la vérifier sur urssaf.fr, quoi demander à un auto-entrepreneur.
- ☐ Canal de support défini (e-mail, délai de réponse annoncé) et testé.
- ☐ Processus de facturation et d'encaissement : prestataire de paiement, factures conformes, gestion des échecs de paiement, résiliation en un clic.
- ☐ Tarif affiché publiquement et identique au contrat.
- ☐ Plan de pilote : 2 à 3 entreprises, durée, ce qu'on mesure, ce qui déclenche l'ouverture à d'autres clients.

## F. Commercial et communication

- ☐ Site vitrine d'une page : promesse, pour qui, ce que ça fait et ne fait pas, prix, contact ; aucune mention de garantie de conformité.
- ☐ Nom, logo, couleurs définitifs (une seule direction visuelle retenue parmi celles de la démo).
- ☐ Argumentaire de 30 secondes et réponses aux objections (« il y a un gratuit », « mon comptable s'en occupe », « mon client impose sa plateforme »).
- ☐ Liste des premiers prospects issus des entretiens, avec leur engagement (pilote, précommande).
- ☐ Modèle de contrat ou de bon de commande pour les pilotes.

## G. Ce qu'on s'interdit au lancement

- ✗ Toute formulation laissant entendre que l'outil vérifie à la place de l'utilisateur ou garantit la conformité.
- ✗ Toute fonction « IA » ou connexion automatique à l'URSSAF tant qu'aucune API officielle n'existe.
- ✗ Faire payer le sous-traitant pour déposer ses pièces.
- ✗ Stocker des documents sans durée de conservation décidée.
- ✗ Lancer sans CGU, sans politique de confidentialité, sans sauvegarde testée.
