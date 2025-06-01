import React from 'react';
import { motion } from 'framer-motion';

export default function Crm() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#0A2342] text-white px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <img
            src="/assets/crm.png"
            alt="Custom CRM Dashboard"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Breadcrumbs */}
        <div className="text-sm text-gray-400 mb-8">
          <a href="/works" className="text-[#FFD700] hover:underline">Works</a>
          <span className="mx-2 text-white/50">/</span>
          <span className="text-white">Custom CRM</span>
        </div>

        <h1 className="text-4xl font-bold text-[#FFD700] mb-4">Custom CRM Dashboard</h1>
        <p className="text-md text-gray-300 mb-10">Business Platform • Admin Panel • Data Visualization</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-10">
          <div>
            <h3 className="text-lg font-semibold">Role</h3>
            <p>Lead Frontend Developer / UX Designer</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Completed</h3>
            <p>August 2023</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Tools</h3>
            <p>React, Tailwind, Chart.js, Figma</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Client</h3>
            <p>Internal SaaS Project</p>
          </div>
        </div>

        <section className="space-y-8 text-lg text-gray-200">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Overview</h2>
            <p>
              This custom CRM dashboard was designed to streamline user onboarding, contact management, and internal task tracking.
              It features a clean, modular layout with responsive components and dynamic reporting dashboards for both clients and team members.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Interactive charts and KPIs powered by Chart.js</li>
              <li>Admin view for managing user roles and access levels</li>
              <li>Built-in messaging and calendar integration</li>
              <li>Reusable UI blocks styled with Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Impact</h2>
            <p>
              This CRM helped reduce time spent on manual updates and improved user retention by 20%.
              It also became a key tool for team leaders to monitor performance and assign tasks in real time.
            </p>
          </div>
        </section>
      </div>
    </motion.section>
  );
}
