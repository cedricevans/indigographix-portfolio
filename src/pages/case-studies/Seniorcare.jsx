import React from 'react';
import { motion } from 'framer-motion';

export default function Seniorcare() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#0A2342] text-white px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <img
            src="/assets/senior.png"
            alt="Senior Care Xpress App Header"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Breadcrumbs */}
        <div className="text-sm text-gray-400 mb-8">
          <a href="/works" className="text-[#FFD700] hover:underline">Works</a>
          <span className="mx-2 text-white/50">/</span>
          <span className="text-white">Senior Care Xpress</span>
        </div>

        <h1 className="text-4xl font-bold text-[#FFD700] mb-4">Senior Care Xpress</h1>
        <p className="text-md text-gray-300 mb-10">Media Type: Website / Membership Platform</p>

        <div className="space-y-8 text-lg text-gray-200">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Overview</h2>
            <p>
              Senior Care Xpress is a membership service dedicated to helping individuals aged 50+ live healthier, more independent lives. Their team offers a wide scope of personalized care and support solutions to assist aging adults at home.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Core Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal care, mobility support, transportation assistance</li>
              <li>Specialized Alzheimer's and dementia support</li>
              <li>Hospice and 24-hour in-home caregiving</li>
              <li>Meal prep, light housekeeping, and wellness monitoring</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Programs</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Care Coordination & Personalized Plans</li>
              <li>Hospital-to-Home Recovery Assistance</li>
              <li>Comfort Care at Home</li>
              <li>Optimal Living Home Management (downsizing & decluttering)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">Contact</h2>
            <p><strong>Phone:</strong> 513.687.7866</p>
            <p><strong>Email:</strong> contact@seniorcarexpress.com</p>
            <p><strong>Location:</strong> Cincinnati, OH 45056</p>
            <p><strong>Hours:</strong> Mon–Fri, 8:00 AM – 6:00 PM</p>
          </section>
        </div>
      </div>
    </motion.section>
  );
}
