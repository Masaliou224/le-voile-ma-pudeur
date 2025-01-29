import React from "react";

interface NosActivitésProps {
  title: string;
  backgroundImage: string;
}

const NosActivitésHero: React.FC<NosActivitésProps> = ({
  title = "Nos Activités",
  backgroundImage = "images/Activité hero section.jpg"
}) => { 
  return (
    <section className="relative h-[300px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={backgroundImage} alt="activités Hero Backgound Image" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/50"/>
      </div>
      <div className="relative h-full max-w-4xl mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl text-center font-bold mb-6 text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}; 
export default NosActivitésHero;