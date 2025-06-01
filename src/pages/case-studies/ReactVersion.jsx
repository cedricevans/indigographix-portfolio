import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaCode, FaRobot, FaReact, FaTools } from 'react-icons/fa';

import { TechStackPieChart, TimelineBarChart } from '../../components/ReactCharts';


export default function ReactVersion() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0A2342] text-white"
    >
      {/* Hero */}
      <div className="relative w-full h-[420px] overflow-hidden">
        <img
          src="/assets/portfolio-react.jpg"
          alt="React Hero"
          className="absolute w-full h-full object-cover object-center opacity-30"
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl font-bold text-[#FFD700] drop-shadow-lg">React Portfolio Version</h1>
          <p className="mt-3 text-white max-w-2xl text-lg">
            Designed to showcase my front-end development, UX thinking, and AI-assisted design process in one powerful build.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-6 pt-6">
        <Link to="/works" className="text-sm text-[#FFD700] hover:underline">← Back to Works</Link>
      </div>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* Left Column: Content Cards */}
        <div className="space-y-10">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 p-6 rounded-lg"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold text-[#FFD700] mb-2">
              <FaLightbulb /> Project Purpose
            </h3>
            <p className="text-gray-300">
              This version wasn't just built to look good — it was built to prove capability. From routing to scroll animation, it's a living resume in code.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-6 rounded-lg"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold text-[#FFD700] mb-2">
              <FaCode /> Development Stack
            </h3>
            <ul className="list-disc text-gray-300 pl-5 space-y-1">
              <li>React 18 + Vite</li>
              <li>Framer Motion for animation</li>
              <li>TailwindCSS v4 (utility-first)</li>
              <li>Dynamic routing with React Router</li>
            </ul>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 p-6 rounded-lg"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold text-[#FFD700] mb-2">
              <FaRobot /> AI + Design Thinking
            </h3>
            <p className="text-gray-300">
              Used AI to guide structure, debug issues, and co-create messaging — integrating human-centered design thinking with machine-driven iteration.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/5 p-6 rounded-lg"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold text-[#FFD700] mb-2">
              <FaTools /> Lessons & Outcomes
            </h3>
            <ul className="list-disc text-gray-300 pl-5 space-y-1">
              <li>Created a reusable scalable layout system</li>
              <li>Integrated smooth animation triggers</li>
              <li>Improved mobile-first UX patterns</li>
              <li>Reinforced design/dev handoff strategies</li>
            </ul>
          </motion.div>
        </div>

        {/* Right Column: Visual/Stats */}

        
        <div className="space-y-12">
        <div className="bg-white/5 p-6 rounded-lg">
  <TechStackPieChart />
</div>

<div className="bg-white/5 p-6 rounded-lg mt-10">
  <TimelineBarChart />
</div>


          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-[#FFD700] mb-3">Code Repository</h4>
            <a
              href="https://github.com/cedricevans/indigographix-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-3 bg-[#FFD700] text-black font-bold rounded hover:bg-yellow-400 transition"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
