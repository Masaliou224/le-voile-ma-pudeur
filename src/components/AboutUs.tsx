import React from "react";
import Statistic from "../types/Statistics"
import StatisticCounter from "./StatisticCounter";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {

  const initialStatistics: Statistic[] = [
    { id: 1, value: 69500, suffix: "+", label: "Membres" },
    { id: 2, value: 79, label: "Pays"},
    { id: 3, value: 7, suffix: "+", label: "Expériences" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 mb-0">
      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="md:pr-8">
          <img 
            src="public/images/About image.jpg" 
            alt="Activity image"
            className="rounded-lg w-full h-auto mt-8"
          />
        </div>
        <div>
          <h2 className="text-pink-600 text-2xl font-bold mb-4">Qui sommes nous?</h2>
          <p className="text-gray-700 mb-4">
            Créé le 18 Août 2018, « LE VOILE, MA PUDEUR » est une association islamique avec pour mission principale de participer au bienfaîte de la femme musulmane.
          </p>
          <p className="text-gray-700 mb-6">
            Après 7 années d'existence, l'association totalise à ce jour plus de 69.500 membres présents dans 79 pays à travers le monde. L'association est dirigée par un Bureau exécutif composé de 13 personnes qui dispose de tous les pouvoirs pour agir en droit pour le compte de l'organisation.
          </p>
          <Link 
            to="/QuiSommesNousDetails"
            className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-colors">
            Lire plus
          </Link>
        </div>
      </div>

      {/* Stats Bar */}

      <div className="bg-gray-900 text-white rounded-lg mb-0">
        <div className="grid grid-cols-3 divide-x divide-gray-700">
          {initialStatistics.map((stat) => (
            <div key={stat.id} className="py-8 px-4 text-center">
                  <StatisticCounter 
                    key={stat.id}
                    end={stat.value} 
                    suffix={stat.suffix}
                    label={stat.label}
                  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;