import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fuzzysort from "fuzzysort";
import { supabase } from "../lib/supabaseClient";

export default function SmartAssistantPanel({ isOpen, onClose, initialQuestion }) {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Click one of the FAQs or type a question about Cedric’s skills, projects, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [aiData, setAiData] = useState([]);
  const chatEndRef = useRef(null);

  const handleUserInput = (inputText) => {
    const userInput = inputText.toLowerCase();
    const cleaned = userInput.replace(/[^\w\s]/gi, "").trim();

    const manualOverrides = {
      "what experience does he have in healthcare": `Cedric has contributed to healthcare UX projects with NIH and senior care platforms...`,
      "what experience does cedric have in healthcare": `Cedric has contributed to healthcare UX projects with NIH and senior care platforms...`,
    };

    if (manualOverrides[cleaned]) return manualOverrides[cleaned];

    const phraseMatched = aiData.find(entry =>
      (typeof entry.phrases === "string" ? JSON.parse(entry.phrases) : entry.phrases || []).some(p =>
        cleaned === p.toLowerCase()
      )
    );
    if (phraseMatched) return phraseMatched.answer;

    const preppedData = aiData.map((entry) => {
      let keywords = [], phrases = [];
      try {
        keywords = typeof entry.keywords === "string" ? JSON.parse(entry.keywords) : entry.keywords || [];
        phrases = typeof entry.phrases === "string" ? JSON.parse(entry.phrases) : entry.phrases || [];
      } catch (e) {}

      return {
        ...entry,
        fuzzysortBlob: [entry.question || "", entry.answer || "", ...keywords, ...phrases].join(" ")
      };
    });

    const results = fuzzysort.go(userInput, preppedData, {
      keys: ["fuzzysortBlob"],
      threshold: -1000,
      limit: 1,
    });

    if (results.length > 0 && results[0].score !== -Infinity) {
      return results[0].obj.answer;
    }

    return `That’s a great question! Try the <a href='/about' class='text-blue-600 underline'>About</a> or 
            <a href='/projects' class='text-blue-600 underline'>Projects</a> page.`;
  };

  useEffect(() => {
    async function fetchAIKnowledge() {
      const { data, error } = await supabase.from("ai_knowledge").select("*");
      if (!error) setAiData(data);
    }
    fetchAIKnowledge();
  }, []);

  useEffect(() => {
    if (initialQuestion && aiData.length > 0) {
      const reply = handleUserInput(initialQuestion);
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: initialQuestion },
        { sender: "bot", text: reply },
      ]);
    }
  }, [initialQuestion, aiData]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const adjustHeight = () => {
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      const panel = document.getElementById("assistant-panel");
      if (panel) panel.style.height = `${viewportHeight}px`;
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", adjustHeight);
      adjustHeight();
    }

    return () => {
      window.visualViewport?.removeEventListener("resize", adjustHeight);
    };
  }, []);

  const onSend = () => {
    if (!input.trim()) return;
    const userInput = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userInput }]);
    setInput("");

    setTimeout(() => {
      const botReply = handleUserInput(userInput);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="assistant-panel"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 right-0 w-full sm:w-[90vw] md:w-[400px] bg-white text-black z-50 shadow-2xl flex flex-col border-t border-gray-300"
        >
          {/* Header */}
          <div className="p-4 flex justify-between items-center bg-[#0A2342] text-white">
            <h2 className="text-base font-semibold">Smart Assistant</h2>
            <button onClick={onClose} className="text-sm hover:underline hover:text-yellow-400">
              Close
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 space-y-2 overflow-y-auto text-sm min-h-[0]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[85%] ${
                  msg.sender === "bot"
                    ? "bg-gray-100 text-black text-left"
                    : "bg-[#0A2342] text-white text-right ml-auto"
                }`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-200 p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSend()}
              placeholder="Ask Cedric anything..."
              className="flex-1 p-2 text-sm outline-none border border-gray-300 rounded-l"
            />
            <button
              onClick={onSend}
              className="bg-[#FFD700] px-4 text-sm font-semibold hover:bg-yellow-500 rounded-r"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}