const FormationSection = () => {
  return (
    <section className="max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <h2 className="text-xl font-bold text-rose-600 mb-4 text-center">
          La formation religieuse et professionnelle
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className="relative">
            <img 
              src="public/images/Formation image 2.jpg" 
              alt="Foramtion session"
              className="w-2/3 h-full object-cover mx-auto" 
            />
          </div>

          {/* Text Content */}
          <div className="p-6">
            <p className="text-gray-700 text-base leading-relaxed text-center">
              À travers des thématiques variées, ce rendez-vous est devenu, au fil des années, 
              un espace privilégié d'échanges et de formation pour de nombreuses personnes, 
              particulièrement issues de plusieurs pays, et se révèle être un soutien précieux pour les 
              rassemblements féminins en Côte d'Ivoire.
          </p>
          </div>
        </div>
        <p className="text-rose-600 hover:text-rose-700 font-medium text-center">
          <a href="#">
            En savoir plus
          </a>
        </p>
      </div>
      <hr className="mt-5" />
    </section>
  );
};

export default FormationSection;