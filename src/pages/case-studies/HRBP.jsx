import React from 'react';
import { motion } from 'framer-motion';

export default function Hrbp() {
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
            src="/assets/hrbp.jpg"
            alt="HR Business Partners"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Breadcrumbs */}
        <div className="text-sm text-gray-400 mb-8">
          <a href="/works" className="text-[#FFD700] hover:underline">Works</a>
          <span className="mx-2 text-white/50">/</span>
          <span className="text-white">HR Business Partners</span>
        </div>

        <h1 className="text-4xl font-bold text-[#FFD700] mb-4">USAA HR Business Partners Portal</h1>
        <p className="text-md text-gray-300 mb-10">Internal SharePoint • Web Portal • UI/UX Development</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-10">
          <div>
            <h3 className="text-lg font-semibold">Role</h3>
            <p>Lead UI/UX Designer & Developer</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Completed</h3>
            <p>March 2021</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Tools</h3>
            <p>SharePoint, Adobe Suite, Angular, HTML/CSS, JavaScript</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Client</h3>
            <p>USAA / HR Business Partners</p>
          </div>
        </div>

        <section className="space-y-8 text-lg text-gray-200">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">About This Project</h2>
            <p>
              USAA’s HR Business Partners needed a centralized portal to streamline access to policies, forms, and training.
              I was brought on to create a unified experience that mimicked a modern web platform while leveraging SharePoint’s backend.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Process</h2>
            <p>
              I led research workshops with stakeholders, designed reusable UI components, and coded a custom Angular interface 
              within SharePoint. Weekly iterations ensured a polished UX that supported HR’s evolving workflow.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Results</h2>
            <p>
              The solution was adopted org-wide, reducing search friction and cutting onboarding time by 35%. 
              It laid the groundwork for USAA's SharePoint standard and was praised for its accessibility and design clarity.
            </p>
          </div>
        </section>
      </div>
    </motion.section>
  );
}
