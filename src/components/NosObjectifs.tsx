const NosObjectifs = () => {
  const objectifs = [
    {
      icon: "communication.png",
      title: "Cadre D'échange",
      description: "Créé le 18 Août 2018, cette association a pour mission principale de participer au bien-être de la femme musulmane."
    },
    {
      icon: "training.png",
      title: "Sensibilisation",
      description: "Créé le 18 Août 2018, cette association a pour mission principale de participer au bien-être de la femme musulmane."
    },
    {
      icon: "satisfaction.png",
      title: "Épanouissement",
      description: "Créé le 18 Août 2018, cette association a pour mission principale de participer au bien-être de la femme musulmane."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 bg-white ">
      <h2 className="text-center text-4xl font-bold mb-8">Nos Objectifs</h2>
      <div className="container divide-x-2 divide-gray-300 bg-gray-100 mx-auto grid md:grid-cols-3 gap">
        {objectifs.map((objectif, index) => (
          <div key={index} className="p-6 text-center ">
            <img src={`/images/${objectif.icon}`} alt={objectif.title} className="text-sm w-1/2 mx-auto mb-4"/>
            <h3 className="text-xl font-bold mb-2">{objectif.title}</h3>
            <p className="text-gray-600">{objectif.description}</p>
            <button className="mt-4 bg-[#00A39A] text-white px-4 py-2 rounded hover:bg-[#0e837d]">En savoir plus</button>
            <hr className="mt-5" />
          </div>
          
        ))}
        
      </div>
      
    </section>
  );
};

export default NosObjectifs;