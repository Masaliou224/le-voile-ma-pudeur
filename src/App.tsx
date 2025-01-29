import Header from './components/Header';
import "./App.css";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuiNousSommes from './pages/QuiNousSommes';
import NosActivités from './pages/NosActivitésPage';
import Contact from './pages/Contact';
import QuiSommesNousDetails from './pages/QuiSommeNousDetails';
import ConfidentialityPolicy from './pages/ConfidentialityPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {

  return (
    <Router>
      <Header />
      <main className='pt-16'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QuiNousSommes" element={<QuiNousSommes />} />
          <Route path="/NosActivités" element={<NosActivités />} />
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/QuiSommesNousDetails" element={<QuiSommesNousDetails />} />
          <Route path="/ConfidentialityPolicy" element={<ConfidentialityPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
