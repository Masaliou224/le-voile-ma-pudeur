const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Termes et conditions</h1>

          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Introduction</h2>
              <p className="mb-4">
                Ces conditions régissent votre utilisation de notre site Web et de nos services. En accédant à nos services ou en les utilisant, vous acceptez d\’être lié par ces conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Droits et responsabilités de l\’utilisateur</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Les utilisateurs doivent être âgés d\’au moins 18 ans pour utiliser nos services</li>
                <li>Les utilisateurs sont responsables de la confidentialité de leur compte</li>
                <li>Les utilisateurs doivent fournir des informations exactes et complètes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Politique de confidentialité</h2>
              <p className="mb-4">
                Nos pratiques de confidentialité sont régies par notre politique de confidentialité, qui est incorporée dans ces conditions générales par référence.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Propriété intellectuelle</h2>
              <p className="mb-4">
                Tous les contenus, fonctionnalités et fonctionnalités de notre service sont la propriété de nous et sont protégés par droits d\’auteur, marques de commerce et autres lois sur la propriété intellectuelle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Résiliation</h2>
              <p className="mb-4">
                Nous nous réservons le droit de résilier ou de suspendre l\’accès à notre Service immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Changements des conditions</h2>
              <p className="mb-4">
                Nous nous réservons le droit de modifier ou de remplacer ces conditions à tout moment. Il est de votre responsabilité de les examiner Conditions périodiquement pour des changements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Contact Information</h2>
              <p className="mb-4">
                Si vous avez des questions au sujet de ces conditions, veuillez communiquer avec nous à l\’adresse suivante: support@example.com
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Dernière mise à jour: le 14 janvier 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;