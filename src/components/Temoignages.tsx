const Temoignages = () => {
  const temoignages = [
    {
      name: "Nom 1",
      message: "Le forum est dédié à la femme musulmane...",
      image: "public/images/Témoignages 1.jpg"
    },
    {
      name: "Nom 2",
      message: "Le forum est dédié à la femme musulmane...",
      image: "public/images/Témoignages 2.jpg"
    },
    {
      name: "Nom 3",
      message: "Le forum est dédié à la femme musulmane...",
      image: "public/images/Témoignages 3.jpg"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 bg-gray-100 mb-8">
      <h2 className="text-center text-4xl font-bold mb-8">Témoignages</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 ">
        {temoignages.map((temoignage, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center mt-8">
            <img src={temoignage.image} alt={temoignage.name} className="w-20 h-20 mx-auto rounded-full bg-gray-300 -mt-16 mb-4"/>
            <h3 className="text-xl font-bold mb-2">{temoignage.name}</h3>
            <p className="text-gray-600">{temoignage.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Temoignages;