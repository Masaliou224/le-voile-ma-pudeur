const MembershipSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      <div className="grid md:grid-cols-2 gap-8 items-center relative">
        {/* Image Column */}
        <div className="relative">
          <img 
            src="public/images/About image.jpg" 
            alt="Activity image" 
            className="w-full h-auto object-cover rounded-lg shadow-lg transform translate-x-8"
          />
        </div>

        {/* Content Column */}
        <div className="bg-teal-100 rounded-lg p-8 shadow-lg relative z-10">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">
            Pourquoi dévenir membre?
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Dans le but de réunir les femmes musulmanes et de débattre des 
            problématiques qui les concernent, Le Voile, Ma Pudeur, association 
            de femmes musulmanes dynamiques, a initié en 2019 un Forum annuel 
            intitulé RIDWANE. Ce cadre unique rassemble des femmes musulmanes 
            de divers horizons pour échanger et réfléchir sur des problématiques 
            qui touchent à leur bien-être, leur foi et leur rôle dans la société.
          </p>

          <button
            className="bg-pink-600 text-white px-6 py-3 rounded-lg 
          hover:bg-pink-700 transition-colors font-semibold shadow-md">
            <a href="/Contact">
            Dévenir membre
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;