import React from "react";

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage: string;
  buttonText: string;
  onContactClick?: () => void;
}

const Hero: React.FC<HeroSectionProps> = ({
  title = "LE VOILE MA PUDEUR",
  description = "Bienvenue sur notre site officiel qui a pour mission de vous tenir informer de toutes nos activités.",
  backgroundImage = "images/Hero image.jpg",
  buttonText = "Nous contacter",
  onContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}) => {
  return (
    <section className="relative h-[500px] w-full overflow-hidden z-0">
      <div className="absolute inset-0">
      <img src={backgroundImage} alt="Hero background" className="w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pink-500">
          {title}
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          {description}
        </p>

        <a
          href="#contact"
          onClick={onContactClick}
          className="bg-[#00A39A] text-white px-8 py-3 rounded-full 
          font-semibold transform hover:scale-105 transition-transform
          duration-200 ease-in-out hover:bg-blue-400"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;