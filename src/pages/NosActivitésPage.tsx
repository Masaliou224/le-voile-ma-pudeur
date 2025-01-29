import ActivitéCulturelleSection from "../components/ActivitéCulturelleSection";
import FormationSection from "../components/FormationSection";
import NewsletterInscription from "../components/NewsletterInscription";
import NosActivitésHero from "../components/NosActivitésHero"
import SocialSection from "../components/SocialSection";

const NosActivités = () => {
  return (
    <div>
      <NosActivitésHero 
        title="Nos Activités"
        backgroundImage="public/images/Activité hero section.jpg"
      />
      <FormationSection />
      <SocialSection />
      <ActivitéCulturelleSection />
      <NewsletterInscription />
    </div>
  );
};

export default NosActivités;