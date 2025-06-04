import React, { useRef } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';




const builds = [
  {
    title: "Advanced HTML5 Design",
    image: "/assets/portfolio-html.jpg",
    stack: "Interactive Design Demo",
    link: "https://portfolio.cedric-evans.com/",
  },
  {
    title: "Next-Gen React Experience",
    image: "/assets/portfolio-react.jpg",
    stack: "AI-Driven UX + Scalable UI (Current)",
    link: "/case-studies/reactversion",
  },
  {
    title: "Cross-Platform Flutter Build",
    image: "/assets/portfolio-flutter.jpg",
    stack: "Native UX Prototyping (In Dev)",
    link: "https://flutter.cedric-evans.com/",
  },
];

export default function Home() {
  const buildsRef = useRef(null);

  const scrollToBuilds = () => {
    buildsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#242424] text-[#fafafa]">
      {/* Hero (includes SmartNavigator inside) */}
      <div className="relative">
        <Hero />
      </div>

      {/* Builds Section */}
      <section
        ref={buildsRef}
        className="py-16 px-6 bg-[#0A2342] text-white text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-4">
          I didn’t just build a portfolio — I engineered three. HTML. React. Flutter.
        </h3>
        <p className="text-md md:text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
          Explore how each version brings the same design to life across different platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {builds.map((build, i) => (
            <a
              key={i}
              href={build.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1c1c1c] hover:bg-[#2b2b2b] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition"
            >
              <img
                src={build.image}
                alt={build.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-[#FFD700] mb-1">{build.title}</h4>
                <p className="text-sm text-gray-300">{build.stack}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA to About */}
      <section className="py-16 px-6 bg-[#08172E] text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-4">
          Want to know more about my journey?
        </h3>
        <p className="text-md text-gray-300 mb-6 max-w-2xl mx-auto">
          Learn how I built this portfolio and why I chose three different platforms to bring my work to life.
        </p>
        <Link
          to="/about"
          className="inline-block bg-[#FFD700] text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
        >
          Read My Story
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2342] text-white py-10 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center space-y-4 text-sm">
          <div className="space-y-2">
            <div className="flex justify-center space-x-6 text-[#FFD700] text-lg">
              <a href="mailto:cedric.evans@gmail.com" className="hover:underline flex items-center space-x-1">
                <FaEnvelope /> <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/cedricevans1914" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center space-x-1">
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
              <a href="https://github.com/cedricevans" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center space-x-1">
                <FaGithub /> <span>GitHub</span>
              </a>
            </div>

     

            <p className="text-gray-400">&copy; {new Date().getFullYear()} Cedric Evans. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

