import React from "react";

interface QuiSommesNousProps {
  image: string;
  title?: string;
  onClick?: () => void;
}

const QuiSommesNous: React.FC<QuiSommesNousProps> = ({
  image = "public/images/Activité hero section.jpg",
  title = "Qui sommes nous?",
  onClick,
}) => {
  return (
    <div
      className="relative w-full h-36 md:h-48 flex items-center overflow-hidden bg-white group"
      onClick={onClick}
    >
      {/* Background Image Container */}
      <div className="w-1/3 h-full">
        <img 
          src={image} 
          alt="Qui sommes nous background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-2/3 h-full flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl md:text-5xl font-bold text-rose-500">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default QuiSommesNous;