// src/components/SmartNavigator.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

const suggestions = [
  { label: "Explore Case Studies", path: "/works" },
  { label: "View Resume", path: "/resume" },
  { label: "Why Three Tech Stacks?", path: "/about" },
  { label: "Meet Cedric", path: "/about" },
];

const initialMessage =
  "👋 Welcome! I'm your interactive guide. Want to check out case studies, explore my resume, or learn why I built this portfolio in 3 stacks?";

export default function SmartNavigator() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  // Typing animation
  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setMessage((prev) => prev + initialMessage[idx]);
      idx++;
      if (idx >= initialMessage.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Voice input setup
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) return;
    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      if (transcript.includes("resume")) navigate("/resume");
      else if (transcript.includes("case") || transcript.includes("project")) navigate("/works");
      else if (transcript.includes("about") || transcript.includes("cedric")) navigate("/about");
    };

    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;
  }, [navigate]);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  return (
    <div className="relative z-30 max-w-xl w-full mx-auto px-4 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="bg-[#0A2342] text-[#FFD700] p-6 rounded-xl shadow-xl border border-yellow-500 backdrop-blur-lg"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">AI Assistant</h1>
          <button
            onClick={toggleListening}
            className="text-yellow-300 hover:text-white"
            title="Toggle Voice Input"
          >
            {listening ? <FaMicrophoneSlash /> : <FaMicrophone />}
          </button>
        </div>
        <p className="mt-4 text-sm md:text-lg leading-relaxed font-medium">
          {message}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {suggestions.map(({ label, path }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-3 py-2 text-sm rounded-full shadow"
            >
              {label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}