import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0A2342] text-white px-6 py-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#FFD700] mb-10">Contact</h1>

        <p className="text-lg text-gray-300 mb-6">
          Let’s connect! Whether it’s a collaboration, opportunity, or just a UX conversation — I’d love to hear from you.
        </p>

        <div className="space-y-6 text-lg">
          <div className="flex items-center justify-center space-x-3">
            <FaEnvelope className="text-[#FFD700]" />
            <a href="mailto:cedric.evans@gmail.com" className="text-[#FFD700] hover:underline">
              cedric.evans@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <FaLinkedin className="text-[#FFD700]" />
            <a
              href="https://www.linkedin.com/in/cedricevans1914"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:underline"
            >
              linkedin.com/in/cedricevans1914
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <FaGithub className="text-[#FFD700]" />
            <a
              href="https://github.com/cedricevans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:underline"
            >
              github.com/cedricevans
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <FaFilePdf className="text-[#FFD700]" />
            <a
              href="/assets/Cedric_Evans_Resume.pdf"
              className="text-[#FFD700] hover:underline"
              download
            >
              Download My Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
