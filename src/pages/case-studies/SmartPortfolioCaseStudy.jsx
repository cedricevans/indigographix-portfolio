import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SmartPortfolioCaseStudy() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const isDark = theme === 'dark';

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen px-6 py-20 ${isDark ? 'bg-[#0A2342] text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-4xl mx-auto space-y-20">
        <div className="flex justify-end">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full border border-gray-400 text-sm font-medium shadow hover:shadow-lg transition-all duration-300 bg-opacity-20 backdrop-blur"
          >
            {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <header className="text-center">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-[#FFD700]' : 'text-[#0A2342]'}`}>Smart Portfolio Case Study</h1>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            A portfolio isn’t just about showing what you’ve done — it should demonstrate how you think. In this case study, I walk through the process of turning a static website into an adaptive, AI-informed, multi-platform product experience.
          </p>
        </header>

        <section className="space-y-16">
          {[{
            title: "Background & Problem",
            content: [
              "The challenge was simple: traditional portfolios don’t scale. They provide screenshots, generic summaries, and minimal context. I needed a better way to communicate my multi-disciplinary strengths in design, frontend development, and applied AI.",
              "Employers and collaborators want more than visuals — they want insight into how you think, adapt, and make decisions. My previous portfolio lacked that depth."
            ]
          }, {
            title: "Strategy & Planning",
            content: [
              "I set out to build a modular, scalable system that didn’t just present my work — it *explained* it. Each version of the portfolio would serve a purpose:",
              <ul className={`list-disc pl-5 space-y-2 mt-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li><strong>React Site:</strong> A dynamic, responsive frontend built with Vite + TailwindCSS v4</li>
                <li><strong>Smart Assistant:</strong> A searchable AI layer using Supabase and Fuzzysort</li>
                <li><strong>Flutter App:</strong> A native mobile-first version built to scale to app design</li>
                <li><strong>HTML5 Site:</strong> A lightweight, semantic archive version for SEO and accessibility</li>
                <li><strong>Case Studies:</strong> Interactive, narrative-driven deep dives into real projects</li>
              </ul>
            ]
          }, {
            title: "Implementation & Build",
            content: [
              "I began by structuring my React site into reusable components, optimized for responsiveness and performance. The site was styled with TailwindCSS v4, leveraging utility classes for speed and modularity.",
              "The Smart Assistant was designed to simulate an AI experience. Using Supabase to store structured Q&A data, I integrated Fuzzysort to match user queries with relevant answers — ranging from project breakdowns to resume insights. The assistant feels conversational but operates purely on structured logic and keyword mapping.",
              "The Flutter version showcased how the same content could be reorganized in a native mobile format — supporting app prototyping and platform consistency. The HTML5 site offered lean fallback for edge-case browsers, bots, or non-interactive sessions."
            ]
          }, {
            title: "Results & Learnings",
            content: [
              <ul className={`list-disc pl-5 space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Multi-version support helped me demonstrate versatility and platform fluency</li>
                <li>AI-powered interaction provided clarity to visitors exploring specific questions</li>
                <li>Modular content improved maintenance and allowed A/B testing of sections</li>
                <li>The assistant became a conversation-starter in interviews and networking</li>
              </ul>,
              "The result is a living product — not a one-time build, but an adaptive platform I continue to evolve."
            ]
          }, {
            title: "What’s Next",
            content: [
              <ul className={`list-disc pl-5 space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Integrate real-time AI (OpenRouter or LLM) to enhance assistant interactivity</li>
                <li>Add voice synthesis and speech-to-text options for accessibility</li>
                <li>Implement vector search for deeper case study linking</li>
                <li>Use analytics to personalize suggestions and UI behavior</li>
                <li>Create a content management dashboard to update knowledge base live</li>
              </ul>
            ]
          }].map((section, index) => (
            <div key={index}>
              <h2 className={`text-xl font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-[#FFD700]' : 'text-[#0A2342]'}`}>{section.title}</h2>
              <div className={`${isDark ? 'bg-white/5' : 'bg-gray-100'} rounded-lg p-6`}>
                {section.content.map((text, i) => (
                  <div key={i} className={`mt-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{text}</div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <footer className="text-center border-t border-gray-700 pt-10">
          <h3 className="text-xl font-semibold mb-2 text-[#FFD700]">Conclusion</h3>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            This case study is one part of a larger journey. My goal is to continue blurring the line between design, development, and AI — and use this portfolio as a testing ground for what's next in human-centered, intelligent interfaces.
          </p>
        </footer>
      </div>
    </motion.section>
  );
}