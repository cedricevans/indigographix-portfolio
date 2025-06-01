import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#0A2342] text-white px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#FFD700] mb-6">About Me</h1>

        <p className="text-lg mb-6 text-gray-200">
          I’m Cedric Evans — a results-driven UX/UI Designer and Frontend Developer with over 12 years of experience
          designing intuitive digital products across healthcare, government, SaaS, and enterprise environments.
        </p>

        <p className="text-lg mb-6 text-gray-200">
          My background spans the full spectrum of the product lifecycle: from user research and wireframing, to high-fidelity prototyping,
          semantic HTML, CSS/JS builds, and CMS theming. I've led cross-functional design efforts for institutions like NIH, USAA, and Fortra,
          creating accessible, scalable, and human-centered platforms that align with both brand and business goals.
        </p>

        <p className="text-lg mb-6 text-gray-200">
          I bring a unique blend of creative thinking and technical fluency — able to bridge the gap between design vision and dev execution.
          Whether launching a custom CRM, developing UI kits, or optimizing UX flows for mobile apps, I’m committed to delivering clean,
          interactive experiences that solve real user problems.
        </p>

        <div className="mt-10 border-l-4 border-[#FFD700] pl-6 py-4 bg-white/5 rounded-md">
          <p className="text-[#FFD700] italic">
            “I don’t just build interfaces — I craft experiences with purpose.”
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-white mb-3">What I Bring to the Table</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-2 text-lg">
            <li>🔍 Human-centered design thinking that uncovers real user needs</li>
            <li>🛠️ Full-stack fluency in HTML, React, TailwindCSS, Figma, and Framer Motion</li>
            <li>🚀 Enterprise-level delivery for clients in healthcare, government, and SaaS</li>
            <li>📊 UX strategy informed by analytics, accessibility, and performance data</li>
            <li>🤝 Collaborative mindset with experience mentoring designers and devs</li>
          </ul>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-white mb-3">Career Timeline — 12 Years of Experience</h2>
          <div className="space-y-6 border-l-2 border-[#FFD700] pl-6">
            <div>
              <h4 className="font-bold text-[#FFD700]">2024–2025</h4>
              <p className="text-gray-300">Lead UX Designer – Custom CRM & AI Portfolio Project</p>
            </div>
            <div>
              <h4 className="font-bold text-[#FFD700]">2022–2024</h4>
              <p className="text-gray-300">UX Consultant – NIH (NHLBI)</p>
            </div>
            <div>
              <h4 className="font-bold text-[#FFD700]">2021–2022</h4>
              <p className="text-gray-300">Lead Designer – USAA HR Business Partners Portal</p>
            </div>
            <div>
              <h4 className="font-bold text-[#FFD700]">2020–2021</h4>
              <p className="text-gray-300">Senior UI/UX – Fortra Secure Webmail</p>
            </div>
            <div>
              <h4 className="font-bold text-[#FFD700]">2018–2020</h4>
              <p className="text-gray-300">UX Engineer – Government & Public Sector Contracts</p>
            </div>
            <div>
              <h4 className="font-bold text-[#FFD700]">2016–2018</h4>
              <p className="text-gray-300">UI Designer – Healthcare SaaS Applications</p>
            </div>
            <div>
              <h4 className="font-bold text-[#FFD700]">2012–2016</h4>
              <p className="text-gray-300">Web Designer / Developer – Freelance & Early Career</p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-white mb-3">Tech Stack Proficiency</h2>
          <div className="space-y-4">
            {[
              ['HTML/CSS', 95],
              ['JavaScript/React', 90],
              ['Figma/Adobe XD', 85],
              ['Tailwind/Framer Motion', 90],
              ['Accessibility/Analytics', 80],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-gray-300 text-sm mb-1">{label}</p>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div
                    className="bg-[#FFD700] h-3 rounded-full"
                    style={{ width: `${value}%`, transition: 'width 1s ease' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Download My Resume</h2>
          <a
            href="/assets/Cedric_Evans_Resume.pdf"
            className="inline-block bg-[#FFD700] text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
            download
          >
            Get Resume PDF
          </a>
        </div>

        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/cedricevans1914"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#FFD700] hover:underline"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a
            href="https://www.indigographix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#FFD700] hover:underline"
          >
            <FaGlobe className="mr-2" /> Portfolio Site
          </a>
        </div>
      </div>
    </motion.section>
  );
}
