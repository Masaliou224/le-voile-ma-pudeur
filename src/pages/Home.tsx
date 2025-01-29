import AboutSection from "../components/AboutSection";
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import NosObjectifs from "../components/NosObjectifs"
import SchedulePreview from "../components/SchedulePreview";
import Temoignages from "../components/Temoignages"

const Home = () => {
  const handleContactClick = () => {
    console.log("contact button clicked");
  };
  
  return (
    <div>
      <Hero 
        title="LE VOILE MA PUDEUR"
        description="Bienvenue sur notre site officiel qui pour mission de vous tenir informer de toutes nos activités."
        backgroundImage="public/images/Hero image.jpg"
        buttonText="Nous contacter"
        onContactClick={handleContactClick}
      />
      <SchedulePreview />
      <AboutSection />
      <NosObjectifs />
      <Temoignages />
      <Contact />
    </div>
  );
};

export default Home;