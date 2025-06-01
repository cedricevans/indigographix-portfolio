import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Header from './components/Header';

import TriHealth from './pages/case-studies/TriHealth';
import ReactVersion from './pages/case-studies/ReactVersion';
import Fortra from './pages/case-studies/Fortra';
import Seniorcare from './pages/case-studies/Seniorcare';
import Hrbp from './pages/case-studies/HRBP';
import Crm from './pages/case-studies/Crm';
import Nih from './pages/case-studies/Nih';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies/trihealth" element={<TriHealth />} />
      <Route path="/case-studies/reactversion" element={<ReactVersion />} />
        <Route path="/case-studies/fortra" element={<Fortra />} />
        <Route path="/case-studies/seniorcare" element={<Seniorcare />} />
        <Route path="/case-studies/hrbp" element={<Hrbp />} />
        <Route path="/case-studies/crm" element={<Crm />} />
        <Route path="/case-studies/nih" element={<Nih />} />
      </Routes>
    </>
  );
}

export default App;
