import { FC, useState } from "react";
import { Menu, X } from "lucide-react"; // icônes modernes

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/images/Logo.jpg" alt="Logo" className="h-12" />
          </div>

          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="/" className="text-gray-700 hover:text-gray-900">
                Accueil
              </a>
            </li>
            <li>
              <a href="/QuiNousSommes" className="text-gray-700 hover:text-gray-900">
                Qui sommes-nous
              </a>
            </li>
            <li>
              <a href="/NosActivités" className="text-gray-700 hover:text-gray-900">
                Nos activités
              </a>
            </li>
          </ul>

          {/* Bouton rejoindre (desktop) */}
          <div className="hidden md:block bg-[#00A39A] text-white px-4 py-2 rounded">
            <button><a href="/Contact">Nous rejoindre</a></button>
          </div>

          {/* Hamburger (mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-4 py-6">
            <li>
              <a
                href="/"
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="/QuiNousSommes"
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Qui sommes-nous
              </a>
            </li>
            <li>
              <a
                href="/NosActivités"
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Nos activités
              </a>
            </li>
            <li>
              <button className="bg-[#00A39A] text-white w-full py-2 rounded">
                <a href="/Contact">Nous rejoindre</a>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
