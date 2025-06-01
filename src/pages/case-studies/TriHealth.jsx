import React from 'react';
import { motion } from 'framer-motion';

export default function TriHealth() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#0A2342] text-white px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#FFD700] mb-6">TriHealth Redesign</h1>
        <p className="text-md text-gray-300 mb-8">Media Type: Website / CMS Integration</p>

        {/* ✅ Keep this image exactly as-is */}
        <img
          src="/assets/triHealth.png"
          alt="TriHealth Project Screenshot"
          className="w-full rounded-xl shadow-lg mb-10"
        />
<div className="text-sm text-gray-400 mb-8">
  <a href="/works" className="text-[#FFD700] hover:underline">Works</a>
  <span className="mx-2 text-white/50">/</span>
  <span className="text-white">TriHealth</span>
</div>

        {/* 🔁 Only updated content below this line */}
        <div className="space-y-8 text-lg text-gray-200">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Role</h2>
            <p>Web Developer II / Lead Designer Engineer</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Tools & Skills</h2>
            <p>Ektron CMS, HTML5, CSS3, ASP.NET, JavaScript, jQuery</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Challenge</h2>
            <p>
              TriHealth needed to improve UX, modernize its design, and integrate CMS functionality.
              The original site used XHTML and required manual updates with no CMS.
              Additionally, the redesign had to align with a full brand refresh across TriHealth’s digital presence.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Outcome</h2>
            <p>
              I led the front-end rebuild and content migration of 200+ pages into Ektron CMS.
              We implemented new design patterns, rebuilt the navigation, and made the experience fully responsive.
              Extensive testing validated the site's accessibility and usability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Results</h2>
            <p>
              This project became the first responsive healthcare site launched on Ektron CMS.
              It received major industry recognition and made the site easier to manage and scale.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-white/80">
              <li>
                🏆 <a href="http://www.webaward.org/winner.asp?eid=17884" target="_blank" rel="noopener noreferrer" className="underline text-[#FFD700]">WebMarketing Award – Best in Industry: TriHealth “Power of Unity”</a>
              </li>
              <li>
                📌 <a href="https://www.slideshare.net/slideshow/tri-health/38366234" target="_blank" rel="noopener noreferrer" className="underline text-[#FFD700]">Slideshare Feature – Branding Techniques with Ektron</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
