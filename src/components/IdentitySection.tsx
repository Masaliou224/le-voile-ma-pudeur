import { Clock, Heart, Target } from "lucide-react";

const IdentityCard = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
    <div className="mb-4 flex justify-center">
      {icon}
    </div>
    <p className="text-gray-600 text-sm">
      {text}
    </p>
  </div>
);

const IdentitySection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-300 mt-0">
      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <IdentityCard 
          icon={
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <Clock className="w-8 h-8 text-pink-500"/>
            </div>
          }
          text="Créé le 18 Août 2018, « LE VOILE, MA PUDEUR » est une association islamique avec pour mission principale de participer au bienfaîte de la femme musulmane."
        />
        <IdentityCard 
          icon={
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <Heart className="w-8 h-8 text-pink-500"/>
            </div>
          }
          text="Créé le 18 Août 2018, « LE VOILE, MA PUDEUR » est une association islamique avec pour mission principale de participer au bienfaîte de la femme musulmane."
        />
        <IdentityCard 
          icon={
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <Target className="w-8 h-8 text-pink-500"/>
            </div>
          }
          text="Créé le 18 Août 2018, « LE VOILE, MA PUDEUR » est une association islamique avec pour mission principale de participer au bienfaîte de la femme musulmane."
        />
      </div>

      {/* Video Section */}
      <div className="relative">
        <div className="aspect-video bg-teal-500 rounded-lg overflow-hidden w-1/2 mx-auto">
          {/* Video thumbnail or placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Play button */}
            <button className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentitySection;