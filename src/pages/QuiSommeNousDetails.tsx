import Historique from "../components/Historique";
import QuiSommesNous from "../components/QuiSommesNous"

const QuiSommesNousDetails = () => {
  return (
    <div>
      <QuiSommesNous 
        title="Qui Sommes Nous?"
        image="images/Activité hero section.jpg"
      />
      <Historique 
        contents={[
          "Créé le 18 Août 2018, « LE VOILE, MA PUDEUR » est une association islamique avec pour mission principale de participer au bienêtre de la femme musulmane.",

          "Après 7 années d’existence, l’association totalise à ce jour plus de 69. 500 membres présents dans 79 pays à travers le monde. L’association est dirigée par un Bureau exécutif composé de 13 personnes qui dispose de tous les pouvoirs pour agir en droit pour le compte de l’organisation."
        ]}
        imageSrc="/images/Evènement image.jpg"
        imageAlt="Evènement image"
      />
    </div>
  );
};

export default QuiSommesNousDetails;