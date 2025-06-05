import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Header from './components/Header';
import SmartPortfolioCaseStudy from './pages/case-studies/SmartPortfolioCaseStudy';
import TriHealth from './pages/case-studies/TriHealth';
import ReactVersion from './pages/case-studies/ReactVersion';
import Fortra from './pages/case-studies/Fortra';
import Seniorcare from './pages/case-studies/Seniorcare';
import Hrbp from './pages/case-studies/HRBP';
import Crm from './pages/case-studies/Crm';
import Nih from './pages/case-studies/Nih';
import Projects from './pages/Projects';

import { supabase } from './lib/supabaseClient';




function App() {
  useEffect(() => {
  async function fetchAIResponses() {
    const { data, error } = await supabase.from("ai_knowledge").select("*");
    if (error) {
      console.error("❌ Supabase fetch error:", error.message);
    } else {
      console.log("✅ Supabase data:", data);
    }
  }

  fetchAIResponses();
}, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
       
           <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies/trihealth" element={<TriHealth />} />
      <Route path="/case-studies/reactversion" element={<ReactVersion />} />
        <Route path="/case-studies/fortra" element={<Fortra />} />
        <Route path="/case-studies/seniorcare" element={<Seniorcare />} />
        <Route path="/case-studies/hrbp" element={<Hrbp />} />
        <Route path="/case-studies/crm" element={<Crm />} />
        <Route path="/case-studies/nih" element={<Nih />} />
        <Route path="/case-studies/smartportfoliocasestudy" element={<SmartPortfolioCaseStudy />} />
      </Routes>
    </>
  );
}

export default App;
