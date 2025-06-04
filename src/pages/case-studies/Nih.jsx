import React from 'react';
import { motion } from 'framer-motion';

export default function Nih() {
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
            src="/assets/NHLBI.png"
            alt="NIH Heart Lung and Blood Institute"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Breadcrumbs */}
        <div className="text-sm text-gray-400 mb-8">
          <a href="/works" className="text-[#FFD700] hover:underline">Works</a>
          <span className="mx-2 text-white/50">/</span>
          <span className="text-white">NIH NHLBI</span>
        </div>

        <h1 className="text-4xl font-bold text-[#FFD700] mb-4">NIH Heart, Lung & Blood Institute</h1>
        <p className="text-md text-gray-300 mb-10">Government Agency • Research Portal • Health Content UX</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-10">
          <div>
            <h3 className="text-lg font-semibold">Role</h3>
            <p>UX Consultant & Frontend Developer</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Completed</h3>
            <p>June 2022</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Tools</h3>
            <p>Drupal, HTML/CSS, Google Analytics, Adobe XD</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Client</h3>
            <p>NIH / NHLBI</p>
          </div>
        </div>

        <section className="space-y-8 text-lg text-gray-200">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Overview</h2>
            <p>
              The National Heart, Lung, and Blood Institute (NHLBI), part of the National Institutes of Health,
              required UX consulting for their public research portal and health information architecture.
              I was engaged to enhance navigation, searchability, and design patterns to support both researchers and the general public.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Approach</h2>
            <p>
              I conducted content audits and user behavior analysis using GA and session recordings.
              Working with NIH stakeholders, we aligned new content hierarchy with WCAG and HHS digital guidelines.
              I delivered redesigned page templates in Adobe XD and supported developers with front-end code snippets in Drupal.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Outcome</h2>
            <p>
              The resulting improvements simplified access to key research programs and patient resources.
              NIH saw measurable gains in mobile accessibility and time-on-page, along with fewer user drop-offs on vital topic pages.
            </p>
          </div>
        </section>
      </div>
    </motion.section>
  );
}
