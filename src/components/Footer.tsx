const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="images/Logo.jpg" alt="logo" className="h-16 w-auto mb-4" />
          <div className="flex space-x-4">
            <a href="#" className="text-green-950 hover:opacity-80"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-green-950 hover:opacity-80"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-green-950 hover:opacity-80"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-green-950 hover:opacity-80"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-green-950 hover:opacity-80"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Liens rapides</h3>
          <ul>
            <li><a href="/" className="text-gray-600 hover:text-gray-900">Accueil</a></li>
            <li><a href="/QuiSommesNous" className="text-gray-600 hover:text-gray-900">Qui sommes nous</a></li>
            <li><a href="NosActivités" className="text-gray-600 hover:text-gray-900">Nos activités</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul>
            <li><a href="/ConfidentialityPolicy" className="text-gray-600 hover:text-gray-900">Politique De Confidentialité</a></li>
            <li><a href="/TermsAndConditions" className="text-gray-600 hover:text-gray-900">Termes Et Conditions</a></li>

          </ul>
        </div>
      </div>

      <div className="bg-gray-800 pt-8 mt-8 border-t border-gray-200">
        <p className="text-sm  text-center text-white">Copyright © {currentYear} - Le voile ma poigne Association.</p>
      </div>
    </footer>
  );
};

export default Footer;