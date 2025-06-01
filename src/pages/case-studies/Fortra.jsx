import React from 'react';
import { motion } from 'framer-motion';

export default function Fortra() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#0A2342] text-white px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#FFD700] mb-6">Fortra Secure Email/Webmail</h1>
        <p className="text-md text-gray-300 mb-2">Media Type: Mobile Application</p>
        <p className="text-sm text-gray-400 mb-8">Completed: March 2024</p>

        <img
          src="/assets/fortra.png"
          alt="Fortra Project Screenshot"
          className="w-full rounded-xl shadow-lg mb-6"
        />

        {/* Breadcrumbs */}
        <div className="text-sm text-gray-400 mb-8">
          <a href="/works" className="text-[#FFD700] hover:underline">Works</a>
          <span className="mx-2 text-white/50">/</span>
          <span className="text-white">Fortra</span>
        </div>

        <div className="space-y-8 text-lg text-gray-200">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Role</h2>
            <p>Lead UI/UX Designer / Senior UX Designer</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Tools & Skills</h2>
            <p>Figma, Adobe Suite, Sketch, HTML, React, Design Systems, Accessibility Standards</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Client</h2>
            <p>Fortra — Government / Military Application</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Project Overview</h2>
            <p>
              Fortra needed a mobile-first, secure communication platform for U.S. government personnel. The system had
              to support web-based secure email across various classification levels while aligning with military-grade
              compliance and UI expectations.
            </p>
            <p className="mt-2">
              I collaborated with the product team to scope user roles, define key workflows, and design scalable UI
              patterns that would remain accessible under high-security constraints.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Challenges</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Translating Microsoft Outlook functionality into a responsive, intuitive mobile experience</li>
              <li>Maintaining strict visual hierarchy for classified/unclassified messaging</li>
              <li>Creating low-latency interfaces suitable for use in secure, low-bandwidth environments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Solutions</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Componentized interface using atomic design principles in Figma and React</li>
              <li>Created toggle-safe UIs for multiple clearance levels and themes</li>
              <li>Conducted accessibility testing for WCAG compliance and screen reader behavior</li>
              <li>Prototyped full user journey from inbox triage to secure document preview</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Outcome</h2>
            <p>
              The final system passed security testing and integrated successfully into government workflows. The mobile
              app now supports thousands of users daily, enabling secure messaging, smart filtering, and protected attachments.
            </p>
            <p className="mt-2">
              Documentation and pattern libraries were handed off to the internal engineering team for future scaling and
              component reuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Demo Video</h2>
            <video
              controls
              className="w-full rounded-lg shadow-md"
              poster="/assets/fortra-poster.png"
            >
              <source src="/assets/titus_mail.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
        </div>
      </div>
    </motion.section>
  );
}
