# ARCHITECTURE — NEXORA (préliminaire)

Ce document sera finalisé en phase 3, après validation de l'opportunité. Il consigne dès maintenant les contraintes et constats techniques issus de la phase 1, pour ne pas les perdre.

## Stack envisagée (non tranchée)

Next.js, TypeScript, Tailwind CSS, PostgreSQL via Supabase, Git et GitHub. Chaque choix sera justifié en phase 3 selon : coût, maintenance, sécurité, performances, évolutivité, conditions d'utilisation commerciale.

## Constats de la phase 1 à prendre en compte

| Sujet | Constat | Conséquence |
|---|---|---|
| Hébergement | L'offre gratuite Vercel « Hobby » est réservée à un usage personnel non commercial (documentation Vercel). | Pour un produit vendu, prévoir Cloudflare Pages/Workers ou Netlify (offres gratuites autorisant l'usage commercial selon sources secondaires, à confirmer dans leurs CGU), ou un VPS. À trancher en phase 3. |
| Base de données | Supabase gratuit : 2 projets, environ 500 Mo de base, 1 Go de fichiers, mise en pause après 7 jours sans requête (sources secondaires, à vérifier sur supabase.com). | Prévoir un « ping » planifié ou accepter la pause en phase de test. |
| E-mails transactionnels | Resend : 3 000 e-mails/mois et 100/jour gratuits. Brevo : 300/jour gratuits avec mention « Sent with Brevo ». | Suffisant pour un MVP de relances. Domaine d'envoi dédié et DNS (SPF, DKIM, DMARC) obligatoires. |
| Vérification URSSAF | Pas d'API publique identifiée pour vérifier une attestation de vigilance ; vérification manuelle par code de sécurité sur urssaf.fr. | Le produit guide l'utilisateur vers la vérification et enregistre qu'elle a été faite ; il ne peut pas l'automatiser. |
| Factures électroniques | Format Factur-X (PDF avec XML embarqué) lisible avec des bibliothèques TypeScript open source (factur-x-kit, @stackforge-eu/factur-x, node-zugferd). | Utile pour le plan B (relances d'impayés) sans IA ni API payante. |
| Fournisseurs d'IA | Aucun n'est nécessaire au MVP. | Si un usage apparaît plus tard, l'isoler derrière une interface unique (un module « provider ») pour pouvoir changer de fournisseur sans réécrire l'application. |

## Principes retenus

- Pas d'abstraction prématurée : une seule application, structure de dossiers lisible, code commenté pour l'apprentissage.
- Sécurité par défaut : documents chiffrés au repos, accès par organisation, journal des actions, suppression sur demande (RGPD).
- Aucune clé secrète dans le dépôt : variables d'environnement et fichier `.env.example` documenté.
