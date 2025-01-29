import { FC } from "react";

const Header: FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold">
            <img src="/images/Logo.jpg" alt="Logo" className="h-16" />
          </div>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="text-gray-700 hover:text-gray-900">
                  Acceuil
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
            <div className="bg-[#00A39A] text-white px-4 py-2 rounded">
              <button><a href="/Contact">Nous rejoindre</a></button>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
