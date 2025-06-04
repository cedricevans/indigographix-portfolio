import React, { useState } from "react";

export default function OpenAITest() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const testOpenAI = async () => {
    setLoading(true);
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    const result = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Is this test working?" }],
      }),
    });

    const data = await result.json();
    setLoading(false);

    if (data.choices && data.choices.length > 0) {
      setResponse(data.choices[0].message.content);
    } else {
      setResponse("❌ Failed: " + JSON.stringify(data));
    }
  };

  return (
    <div className="p-4 bg-white/10 rounded-lg text-white border border-yellow-400 max-w-xl mx-auto mt-8">
      <button
        onClick={testOpenAI}
        className="px-4 py-2 bg-[#FFD700] text-black font-semibold rounded hover:bg-yellow-400 transition"
      >
        Test OpenAI Connection
      </button>
      <div className="mt-4">
        {loading ? "⏳ Loading..." : response && <p>✅ Response: {response}</p>}
      </div>
    </div>
  );
}