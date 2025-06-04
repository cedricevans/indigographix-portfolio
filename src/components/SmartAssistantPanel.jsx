import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import smartAiDataset from "../data/smartAiDataset";

// Phrase similarity helper
const stringSimilarity = (s1, s2) => {
  const [a, b] = [s1.toLowerCase(), s2.toLowerCase()];
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  const same = [...shorter].filter((char, i) => char === longer[i]);
  return same.length / longer.length;
};

export default function SmartAssistantPanel({ isOpen, onClose, initialQuestion }) {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! Ask me anything about Cedric’s skills, projects, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (initialQuestion) {
      const reply = handleUserInput(initialQuestion);
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: initialQuestion },
        { sender: "bot", text: reply },
      ]);
    }
  }, [initialQuestion]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleUserInput = (inputText) => {
    const input = inputText.toLowerCase();

    // 1. Match by phrase similarity
    let phraseMatch = null;
    let bestScore = 0;
    for (const item of smartAiDataset) {
      for (const phrase of item.phrases || []) {
        const score = stringSimilarity(input, phrase.toLowerCase());
        if (score > bestScore && score > 0.7) {
          bestScore = score;
          phraseMatch = item;
        }
      }
    }
    if (phraseMatch) return phraseMatch.answer;

    // 2. Match by keyword containment
    for (const item of smartAiDataset) {
      if (item.keywords.some(k => input.includes(k.toLowerCase()))) {
        return item.answer;
      }
    }

    // 3. Default fallback
    return `That’s a great question! Cedric has worked across many industries. Try checking out the 
      <a href='/about' class='text-blue-600 underline'>About</a> or 
      <a href='/projects' class='text-blue-600 underline'>Projects</a> page.`;
  };

  const onSend = () => {
    if (!input.trim()) return;
    const userInput = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userInput }]);
    setInput("");

    setTimeout(() => {
      const botReply = handleUserInput(userInput);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-full sm:w-[90vw] md:w-[400px] h-full bg-white text-black z-50 shadow-xl overflow-y-auto flex flex-col"
        >
          <div className="p-4 border-b flex justify-between items-center bg-[#0A2342] text-white">
            <h2 className="text-lg font-bold">Smart Assistant</h2>
            <button
              onClick={onClose}
              className="text-sm hover:underline hover:text-yellow-400"
            >
              Close
            </button>
          </div>

          <div className="flex-1 p-4 space-y-2 overflow-y-auto text-sm">
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