const SocialSection = () => {
  return (
    <section className="max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <h2 className="text-xl font-bold text-rose-600 mb-4">
          Le volet social à travers une cellule sociale
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Text Content */}
          <div className="p-6">
            <p className="text-gray-700 text-base leading-relaxed">
              À travers des thématiques variées, ce rendez-vous est devenu, au fil des années, 
              un espace privilégié d'échanges et de réseautage, réunissant des milliers de 
              participantes venant de plusieurs pays, et se révèle être un soutien précieux pour les 
              rassemblements féminins en Côte d'Ivoire. Pour sa quatrième édition qui s'annonce, 
              la formation sur le leadership et un sujet évoqué souvent tabou : la dépression, 
              va toucher un large public venant de la capitale économique et d'autres villes.
            </p>
          </div>

          {/* Image Section */}
          <div>
            <img 
              src="public/images/Activité image.jpg" 
              alt="Volet social image"
               className="w-2/3 h-full object-cover mx-auto"
            />
          </div>
        </div>
        <p className="text-rose-600 hover:text-rose-700 font-medium">
          <a href="#">
            En savoir plus
          </a>
        </p>
      </div>
      <hr className="mt-5" />
    </section>
  );
};

export default SocialSection;