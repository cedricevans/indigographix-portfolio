import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/ask', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'No question provided' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(question);
    const response = result.response.text();

    res.json({ answer: response });
  } catch (err) {
    console.error('❌ Gemini error:', err.message);
    res.status(500).json({ error: 'Failed to get response from Gemini' });
  }
});

export default router;