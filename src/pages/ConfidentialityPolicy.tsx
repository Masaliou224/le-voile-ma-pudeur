const ConfidentialityPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
     {/* Header Section */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Politique de Confidentialité
        </h1>
        <p className="text-gray-600">
          Dernière mise à jour: {new Date().toLocaleDateString()}
        </p>
      </header> 

      {/* Main Content Container */}
      <div className="prose prose-lg max-w-none">
        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Introduction
          </h2>
          <div>
            <p>
              <span>Le voile ma pudeur</span>, l'association s'engage à respecter et protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous visitez notre site web ([insérez l'URL du site]) ou interagissez avec nous.
            </p>
          </div>
        </section>

        {/* Information Collection Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Collecte d'Informations
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p>
              Nous collectons des informations uniquement dans le cadre des activités de l'Association et des interactions avec nos membres, donateurs, ou visiteurs. Ces informations incluent:

                Données fournies volontairement

                  Lorsque vous remplissez un formulaire (adhésion, don, contact, etc.), nous pouvons collecter:
                  Votre nom,
                  Votre adresse e-mail,
                  Votre numéro de téléphone,
                  Votre adresse postale (pour l'envoi de reçus ou d'informations).
                  Données collectées automatiquement

                Lorsque vous visitez notre site, nous collectons des informations techniques comme:
                  L’adresse IP,
                  Le type de navigateur et le système d’exploitation utilisé,
                  Les pages visitées et le temps passé sur le site.
            </p>
          </div>
        </section>

        {/* Data Usage Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Utilisation des Données
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p>
              Nous utilisons vos informations pour:

                Vous fournir des informations sur les activités de l'Association,
                Gérer vos adhésions, inscriptions ou dons,
                Répondre à vos demandes via les formulaires de contact,
                Améliorer le contenu et les fonctionnalités de notre site,
                Vous envoyer des newsletters ou des informations (si vous avez donné votre consentement).
              </p>
          </div>
        </section>

        {/* Data Protection Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Protection des Données
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p>
              Vos données personnelles ne seront jamais vendues ou partagées à des fins commerciales. Nous pouvons partager vos données uniquement dans les cas suivants:

                Avec des prestataires de services qui nous aident à gérer nos activités (hébergement du site, outils d'envoi d'e-mails, gestion des dons),
                Si la loi nous y oblige (par exemple, pour répondre à des obligations légales).
            </p>
          </div>
        </section>

        {/* User Rights Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Droits des Utilisateurs
          </h2>
          <div>
            <p>
              Vous avez des droits sur vos données personnelles, conformément aux lois applicables:

                Accéder à vos données : Vous pouvez demander à savoir quelles informations nous détenons sur vous.
                Corriger vos données : Vous pouvez demander à ce que vos données soient mises à jour si elles sont inexactes.
                Demander la suppression de vos données : Vous pouvez demander la suppression de vos informations, sauf si elles sont nécessaires pour respecter des obligations légales.
                Retirer votre consentement : Si vous avez consenti à recevoir nos communications, vous pouvez vous désabonner à tout moment.
              Pour exercer ces droits, contactez-nous à: [Adresse e-mail de contact].
            </p>
          </div>
        </section>

        {/* Cookies usages Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Utilisation des cookies
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p>
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. Les cookies sont de petits fichiers stockés sur votre appareil qui nous aident à comprendre comment notre site est utilisé.

                Cookies essentiels : Nécessaires pour le bon fonctionnement du site.
                Cookies analytiques : Nous aident à analyser le trafic et à améliorer nos contenus.
                Vous pouvez gérer les cookies via les paramètres de votre navigateur.
            </p>
          </div>
        </section>

        {/* Data Security Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Sécurité des données
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p>
              Nous mettons tout en œuvre pour protéger vos données personnelles. Cependant, aucun système n'est entièrement sécurisé. Si vous avez des préoccupations, n'hésitez pas à nous contacter.
            </p>
          </div>
        </section>

        {/* Data conservation Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Durée de conservation des données
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p>
              Nous conservons vos données aussi longtemps que nécessaire pour les finalités décrites dans cette politique (par exemple, pour gérer vos adhésions ou vos dons) ou pour respecter des obligations légales.
            </p>
          </div>
        </section>

        {/* Updating this policy Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Modifiaction de cette politique
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p>
              Nous pouvons mettre à jour cette politique pour refléter des changements dans nos pratiques ou pour respecter de nouvelles obligations légales. Toute mise à jour sera publiée sur cette page.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p>
              Si vous avez des questions ou préoccupations concernant cette politique de confidentialité, veuillez nous contacter:

                Adresse e-mail: [Votre e-mail de contact]
                Adresse postale: [Adresse de l'Association]
                Téléphone: [Numéro de téléphone]
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConfidentialityPolicy;