import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import TriHealth from './pages/case-studies/TriHealth';
import HRBP from './pages/case-studies/HRBP';
import Fortra from './pages/case-studies/Fortra';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/case-studies/trihealth" element={<TriHealth />} />
        <Route path="/case-studies/hrbp" element={<HRBP />} />
        <Route path="/case-studies/fortra" element={<Fortra />} />
      </Routes>
    </Router>
  );
}

export default App;