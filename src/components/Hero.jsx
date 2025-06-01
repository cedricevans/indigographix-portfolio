import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textSlides = [
  {
    title: "Design That Performs. Code That Converts.",
    subtitle: "Bridging UX thinking with scalable front-end execution.",
  },
  {
    title: "One Designer. Three Platforms.",
    subtitle: "HTML. React. Flutter — I built a portfolio to prove versatility.",
  },
  {
    title: "From Prototype to Production",
    subtitle: "I don't just design interfaces. I engineer full-stack solutions.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{ backgroundImage: "url('/assets/hero1.jpeg')" }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342]/90 to-black/80 z-10" />

      {/* Text */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.75 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#FFD700] leading-tight">
              {textSlides[index].title}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-white max-w-3xl">
              {textSlides[index].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
