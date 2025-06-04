import React from "react";

export default function SmartPortfolioCaseStudy() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-gray-900">
      <h1 className="text-3xl md:text-5xl font-bold text-[#0A2342] mb-6">
        How I Built This: The Smart Portfolio
      </h1>
      <p className="text-lg mb-6">
        From static HTML to AI-powered interactivity — here's how I created a portfolio that not only shows my work, but thinks with the user.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0A2342] mb-2">Project Overview</h2>
        <p>
          I wanted to build a portfolio that truly reflected my skills — not just visually, but in how it responds to users. This project combines frontend development, UX design, and lightweight AI interaction to create an assistant-like experience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0A2342] mb-2">Tech Stack Evolution</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>HTML</strong> – for a quick-loading static build</li>
          <li><strong>React</strong> – to support interactivity and routing</li>
          <li><strong>Flutter</strong> – to showcase mobile-friendly UI builds</li>
          <li><strong>Supabase</strong> – as a low-code backend to host smart assistant content</li>
          <li><strong>Fuzzysort</strong> – for fast phrase matching without real AI</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0A2342] mb-2">Building the Smart Assistant</h2>
        <p className="mb-4">
          The assistant is powered by a simple Supabase table of FAQs. I created a scoring algorithm using Fuzzysort and JSON-parsed keywords/phrases to detect user intent. Manual overrides help answer common questions with high accuracy.
        </p>
        <p>
          When a user types or selects a question, the assistant finds the best match using weighted scores, then returns a tailored answer. It feels smart, but runs on basic logic and a free database.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0A2342] mb-2">UX Decisions</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Typewriter intro mimics a real assistant's "thinking"</li>
          <li>Preloaded questions encourage discovery</li>
          <li>Slide-out assistant panel respects layout space</li>
          <li>Mobile-friendly, fully accessible layout</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0A2342] mb-2">Challenges</h2>
        <p className="mb-2">
          Getting phrase-matching accurate without AI was tricky. Resume download links broke due to path issues. And designing for both mobile and desktop users required careful testing.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0A2342] mb-2">What I Learned</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Even basic logic can feel intelligent if paired with good UX</li>
          <li>Supabase is powerful for lightweight AI-like apps</li>
          <li>User context matters more than feature count</li>
        </ul>
      </section>

      <div className="mt-10 text-center">
        <a href="/projects" className="text-[#0A2342] font-semibold underline hover:text-yellow-600">
          ← View All Projects
        </a>
      </div>
    </div>
  );
}