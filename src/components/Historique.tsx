import React from "react";

interface HistoriqueProps {
  title?: string;
  contents: string[];
  imageSrc: string;
  imageAlt: string;
}

const Historique: React.FC<HistoriqueProps> = ({
  title = "Historique",
  contents,
  imageSrc,
  imageAlt
}) => {
  return (
    <section className="max-w-3xl mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row md:items-start gap-2">
      <h2 className="md:w-1/2 text-3xl font-bold mb-8 text-gray-800">
        {title}
      </h2>

      <div className="space-y-12 md:w-1/2 mt-20">
        
          <div className=" text-gray-700 leading-relaxed">
            {contents.slice(0, 1).map((paragrath, index) => (
              <p key={index} className="mb-4">
              {paragrath}
            </p>
            ))}
          </div>

          <div className="md:w-2/3 mx-auto">
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full rounded-lg shadow-md"
            />
          </div>

        <div className="text-gray-700 leading-relaxed">
          {contents.slice(1).map((paragrath, index) => (
            <p key={index} className="mb-4">
              {paragrath}
            </p>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Historique;