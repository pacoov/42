import { Layout } from '../components/Layout';

export function AboutPage() {
  return (
    <Layout title="À propos de cette démonstration">
      <section className="card">
        <h2>Ce qui est simulé</h2>
        <ul>
          <li>En mode « données fictives », toutes les entreprises, contacts, SIRET et documents sont inventés.</li>
          <li>Aucun fichier n’est réellement stocké : seul le nom du fichier est conservé, dans ce navigateur.</li>
          <li>Les relances et l’envoi du lien de dépôt ne partent nulle part : l’outil affiche un aperçu, et vous notez vous-même que c’est envoyé.</li>
          <li>La page de dépôt est une page de cette même démonstration : pas de serveur, pas d’e-mail, pas de compte.</li>
        </ul>
      </section>
      <section className="card">
        <h2>Ce que l’outil ne fait pas, et ne prétend pas faire</h2>
        <ul>
          <li>Il ne vérifie rien auprès de l’URSSAF ni d’aucun organisme. La vérification de l’attestation (code de sécurité sur urssaf.fr) est faite par vous, et vous la consignez.</li>
          <li>Il ne garantit pas la conformité de votre entreprise. Il aide à ne pas oublier, à relancer et à garder une trace.</li>
          <li>Il ne liste pas nécessairement toutes les pièces exigibles dans votre situation (sous-traitant étranger, marchés publics, intérim…).</li>
        </ul>
      </section>
      <section className="card">
        <h2>Ce que nous testons avec vous</h2>
        <ul>
          <li>Le dépôt par lien, sans compte pour le sous-traitant : vos sous-traitants le feraient-ils ?</li>
          <li>Le dossier de preuve imprimable : vous servirait-il vraiment en cas de demande d’un client ou d’un contrôle ?</li>
          <li>Les familles de documents suivies : lesquelles manquent, lesquelles sont en trop par rapport à votre pratique ?</li>
        </ul>
      </section>
    </Layout>
  );
}
