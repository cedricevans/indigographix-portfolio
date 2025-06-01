import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textSlides = [
  { title: "Crafting Human-Centered Design", subtitle: "12+ years in UI/UX & Frontend" },
  { title: "Bridging Code and Creativity", subtitle: "From research to deployment" },
  { title: "Your Next Digital Partner", subtitle: "Innovative. Responsive. Proven." },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{ backgroundImage: "url('/assets/hero1.jpeg')" }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Navy Blue + Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342]/80 to-black/70 z-10" />

      {/* Animated Text */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.75 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#FFD700] drop-shadow-lg">
              {textSlides[index].title}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-white">
              {textSlides[index].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
