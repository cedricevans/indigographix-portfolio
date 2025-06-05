import React, { useEffect, useRef, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const hasSpokenRef = useRef(false);
  const recognitionRef = useRef(null);

  const welcomeMessage =
    "Hi! My name is Cedric. I’m your AI Engineering Assistant, or AIEA for short. Select from the list or enter a question below.";

  const speakMessage = (text) => {
    const synth = window.speechSynthesis;
    if (!synth) return;

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();

    let preferredVoice;
    if (isSafari) {
      preferredVoice = voices.find((v) => v.name === "Samantha");
    } else {
      preferredVoice =
        voices.find((v) => v.lang === "en-GB" && v.name.toLowerCase().includes("male")) ||
        voices.find((v) => v.lang === "en-GB") ||
        voices[0];
    }

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    synth.cancel();
    synth.speak(utterance);
  };

  const startVoiceRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice recognition is not supported in this browser.");
      return;
    }

    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim();
        if (transcript) {
          setTypedQuestion(transcript);
          setTimeout(() => handleTypedQuestionSubmit(), 300);
        }
      };

      recognition.onerror = (event) => {
        console.error("Voice recognition error:", event.error);
      };

      recognitionRef.current = recognition;
    }

    recognitionRef.current.start();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textSlides.length);
    }, 8000);

    const botDelay = setTimeout(() => setShowBot(true), 600);

    const isDev = import.meta.env.DEV;
    const shouldSpeak = !sessionStorage.getItem("hasSpoken") || isDev;

    if (shouldSpeak && !hasSpokenRef.current) {
      let attempts = 0;

      const trySpeak = () => {
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();

        if (voices.length > 0 || attempts >= 20) {
          speakMessage(welcomeMessage);
          hasSpokenRef.current = true;
          if (!isDev) sessionStorage.setItem("hasSpoken", "true");
        } else {
          attempts++;
          setTimeout(trySpeak, 100);
        }
      };

      trySpeak();
    }

    const loadingTimeout = setTimeout(() => setLoading(false), 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(botDelay);
      clearTimeout(loadingTimeout);
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
    <div className="relative h-[95vh] overflow-hidden bg-[#0A2342] pb-10">
      <motion.div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{ backgroundImage: "url('/assets/hero1.jpeg')" }}
        animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342]/80 to-black/70 z-10" />

      <div className="relative z-20 flex flex-col justify-start items-center h-full text-center px-4 pt-16 md:pt-24">
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
              <>
                <h2 className="text-base md:text-lg mb-2 text-white font-medium">
                  <Typewriter
                    words={["Select from the list or enter a question below:"]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={30}
                  />
                </h2>

                {loading && (
                  <div className="text-sm text-yellow-400 animate-pulse mb-4">
                    Retrieving interface data…
                  </div>
                )}
              </>
            )}

            {step >= 2 && !loading && (
              <>
                <ul className="space-y-2 mb-4 max-h-40 overflow-y-auto pr-2">
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

                <div className="flex flex-col sm:flex-row gap-2 mt-2 w-full">
                  <input
                    type="text"
                    value={typedQuestion}
                    onChange={(e) => setTypedQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleTypedQuestionSubmit()}
                    placeholder="Type your question here..."
                    className="w-full sm:w-2/3 px-3 py-2 text-sm rounded border border-gray-300 text-yellow-400"
                  />
                  <button
                    onClick={handleTypedQuestionSubmit}
                    className="w-full sm:w-1/3 px-4 py-2 bg-[#FFD700] text-sm font-semibold text-black rounded hover:bg-yellow-500"
                  >
                    Ask
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mt-3 w-full">
                  <button
                    onClick={startVoiceRecognition}
                    className="w-full sm:w-1/2 text-sm px-4 py-2 border border-blue-400 text-blue-300 hover:bg-blue-600/10 rounded"
                  >
                    🎤 Ask with Voice
                  </button>
                  <button
                    onClick={() => speakMessage(welcomeMessage)}
                    className="w-full sm:w-1/2 text-sm px-4 py-2 border border-yellow-400 text-yellow-300 hover:bg-yellow-600/10 rounded"
                  >
                    🔁 Replay Voice Intro
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