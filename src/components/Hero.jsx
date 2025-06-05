import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import SmartAssistantPanel from "../components/SmartAssistantPanel";

const textSlides = [
  { title: "Design. Develop. Deliver.", subtitle: "Cedric Evans, UI/UX & Frontend Expert." },
  { title: "Smart, Interactive Portfolio.", subtitle: "Explore case studies, projects & more." },
  { title: "3 Builds. 1 Vision.", subtitle: "HTML • React • Flutter" },
];

const suggestions = [
  "Show me Cedric’s latest projects.",
  "What experience does he have in healthcare?",
  "What is the story behind this portfolio?",
  "Can I download his resume?",
  "What tech stack did he use?",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [showBot, setShowBot] = useState(false);
  const [step, setStep] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [typedQuestion, setTypedQuestion] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textSlides.length);
    }, 8000);
    const botDelay = setTimeout(() => setShowBot(true), 600);
    return () => {
      clearInterval(interval);
      clearTimeout(botDelay);
    };
  }, []);

  useEffect(() => {
    if (step === 1) {
      const delay = setTimeout(() => setStep(2), 3500);
      return () => clearTimeout(delay);
    }
  }, [step]);

  const handleSuggestionClick = (question) => {
    setSelectedQuestion(question);
    setPanelOpen(true);
  };

  const handleTypedQuestionSubmit = () => {
    if (!typedQuestion.trim()) return;
    setSelectedQuestion(typedQuestion.trim());
    setPanelOpen(true);
    setTypedQuestion("");
  };

  return (
    <div className="relative h-[90vh] overflow-hidden bg-[#0A2342]">
      <motion.div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{ backgroundImage: "url('/assets/hero1.jpeg')" }}
        animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342]/80 to-black/70 z-10" />

      <div className="relative z-20 flex flex-col justify-start items-center h-full text-center px-4 pt-20 md:pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.75 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
              {textSlides[index].title}
            </h2>
            <h3 className="mt-4 text-lg md:text-2xl text-white">
              {textSlides[index].subtitle}
            </h3>
          </motion.div>
        </AnimatePresence>

        {showBot && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 w-full max-w-2xl bg-white/5 border-l-4 border-[#FFD700] text-white p-6 rounded-lg shadow-lg text-left backdrop-blur"
          >
            {step >= 0 && (
              <motion.h1
                className="text-xl md:text-2xl font-bold mb-2 text-[#FFD700]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                onAnimationComplete={() => setStep(1)}
              >
                👋 Welcome! I’m your AI Assistant.
              </motion.h1>
            )}

            {step >= 1 && (
              <h2 className="text-base md:text-lg mb-4 text-white font-medium">
                <Typewriter
                  words={[
                    "Select from the list or enter a question below:",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                />
              </h2>
            )}

            {step >= 2 && (
              <>
                <ul className="space-y-2 mb-4">
                  {suggestions.map((text, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.3 }}
                      className="text-sm md:text-base hover:underline hover:cursor-pointer"
                      onClick={() => handleSuggestionClick(text)}
                    >
                      • {text}
                    </motion.li>
                  ))}
                </ul>

                {/* Input Field */}
                <div className="flex mt-2">
                  <input
                    type="text"
                    value={typedQuestion}
                    onChange={(e) => setTypedQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleTypedQuestionSubmit()}
                    placeholder="Type your question here..."
                    className="flex-1 px-3 py-2 text-sm text-yellow-400 rounded-l border border-gray-300"
                  />
                  <button
                    onClick={handleTypedQuestionSubmit}
                    className="px-4 bg-[#FFD700] text-sm font-semibold text-black rounded-r hover:bg-yellow-500"
                  >
                    Ask
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </div>

      <SmartAssistantPanel
        isOpen={panelOpen}
        onClose={() => setPanelOpen(false)}
        initialQuestion={selectedQuestion}
      />
    </div>
  );
}