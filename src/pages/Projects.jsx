import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const allProjects = [
  {
    title: 'TriHealth Patient Portal',
    image: '/assets/triHealth.png',
    link: '/case-studies/trihealth',
    summary: 'Redesigned patient portal to improve accessibility and mobile UX.',
    tech: ['Healthcare', 'UX', ],
  },
  {
    title: 'Fortra Security Dashboard',
    image: '/assets/fortra.png',
    link: '/case-studies/fortra',
    summary: 'Built enterprise-grade UI components for real-time security management.',
    tech: ['React', 'Enterprise', 'Security' ,'Figma', 'UX', 'Graphic Design'],
  },
  {
    title: 'SeniorCare Xpress App',
    image: '/assets/senior.png',
    link: '/case-studies/seniorcare',
    summary: 'Created a responsive mobile app for caregiver scheduling and tracking.',
    tech: ['Mobile', 'Healthcare', 'Flutter', 'Graphic Design','Figma'],
  },
  {
    title: 'HRBP Intranet Portal',
    image: '/assets/hrbp.jpg',
    link: '/case-studies/hrbp',
    summary: 'Designed an internal HR dashboard with smart workflows and dashboards.',
    tech: ['Intranet', 'Admin', 'UX','Figma'],
  },
  {
    title: 'Custom CRM Platform',
    image: '/assets/crm.png',
    link: '/case-studies/crm',
    summary: 'Built a tailored CRM UI to simplify lead management for small teams.',
    tech: ['React', 'CRM', 'Dashboard', 'UX'],
  },
  {
    title: 'NIH Health Institute Website',
    image: '/assets/NHLBI.png',
    link: '/case-studies/nih',
    summary: 'Redesigned government health site with focus on mobile and clarity.',
    tech: ['Healthcare', 'Government', 'HTML', 'UX'],
  },
];

const uniqueCategories = ['All', ...new Set(allProjects.flatMap(p => p.tech))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.tech.includes(activeCategory));

  return (
    <section className='bg-[#0A2342] text-white min-h-screen py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold text-[#FFD700] text-center mb-12'>
          Selected Works
        </h2>

        {/* Filter Buttons */}
        <div className='flex flex-wrap gap-4 justify-center mb-10'>
          {uniqueCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={
                'px-4 py-2 rounded-full text-sm transition ' +
                (cat === activeCategory
                  ? 'bg-[#FFD700] text-black'
                  : 'bg-white/10 text-white hover:bg-[#FFD700]/20')
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className='group relative rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 bg-[#1c1c1c]'
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-60 object-cover brightness-90 group-hover:brightness-75 transition'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-100 transition duration-300 p-4 flex flex-col justify-end'>
                  <h3 className='text-lg font-semibold text-[#FFD700] mb-1'>{project.title}</h3>
                  <p className='text-sm text-gray-300'>{project.summary}</p>
                  <div className='flex flex-wrap gap-1 mt-2 text-xs text-gray-300'>
                    {project.tech.map((tag, j) => (
                      <span key={j} className='bg-white/10 px-2 py-1 rounded'>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <FaExternalLinkAlt className='absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition' />
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
