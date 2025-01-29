import React, { useEffect, useState } from "react";
import Statistic from "../types/Statistics";
import StatisticCounter from "./StatisticCounter";
import { Link } from "react-router-dom";

const initialStatistics: Statistic[] = [
  { id: 1, value: 69500, suffix: "+", label: "Membres" },
  { id: 2, value: 79, label: "Pays"},
  { id: 3, value: 7, suffix: "+", label: "Expériences" },
];

interface AboutSectionProps {
  statistics?: Statistic[];
  statisticsUrl?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  statistics: initialStats,
  statisticsUrl
}) => {
  const [statistics, setStatistics] = useState<Statistic[]>(initialStats || initialStatistics);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (statisticsUrl) {
      const fetchStatistics = async () => {
        try {
          setLoading(true);
          const response = await fetch(statisticsUrl);
          if (!response.ok) throw new Error("Failed to fetch statistics");
          const data = await response.json();
          setStatistics(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to fetch statistics");

          setStatistics(initialStats || initialStatistics);
        } finally {
          setLoading(false);
        }
      };

      fetchStatistics();
    }
  }, [statisticsUrl, initialStats]);

  return (
    <section className="max-w-6xl mx-auto bg-gray-900 text-white py-12">
      <div className=" max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="images/Image2.jpg" 
                alt="Organisation activities" 
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="grid gap-4">
                <img 
                  src="images/Image1.jpg" 
                  alt="Organisation events" 
                  className="rounded-lg object-cover w-full"
                />
            
                <img 
                  src="images/Activité image 2.jpg" 
                  alt="Organisation images" 
                  className="rounded-lg object-cover w-full"
                />
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">À propos de nous</h2>
            <h3 className="text-xl text-pink-500 font-bold mb-4">LE VOILE MA PUDEUR</h3>

            <p className="text-gray-300 mb-4">Créé le 18 Août 2018, « LE VOILE MA PUDEUR » est une association islamique avec pour objectif principal de partager au sein de la la communauté.</p>

            <p className="text-gray-300 mb-6">Après 7 années d'existence, l'association totalise à ce jour plus de 65.500 membres présents dans 79 pays à travers le monde. L'association est dirigée par un Bureau exécutif composé de 7 membres qui détiennent tous les pouvoirs pour agir en droit pour le compte de l'organisation.</p>

            <Link 
              to="/QuiSommesNousDetails"
              className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition duration-300">
              Lire plus
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics */}
      {error && (
        <div className="text-red-400 text-sm mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700">
        {loading ? (
          Array(3).fill(null).map((_, index) => (
            <div key={index} className="animate-pulse text-center">
              <div className="h-8 bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-2/3 mx-auto"></div>
            </div>
          ))
        ) : (
          statistics.map((stat) => (
            <StatisticCounter
              key={stat.id}
              end={stat.value} 
              suffix={stat.suffix}
              label={stat.label}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default AboutSection;