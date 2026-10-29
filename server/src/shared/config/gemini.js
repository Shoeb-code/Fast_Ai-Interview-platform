const { GoogleGenerativeAI } = require("@google/generative-ai");

let genAIInstance = null;
const getGeminiClient = () => {
  if (!genAIInstance && process.env.GEMINI_API_KEY) {
    genAIInstance = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }
  return genAIInstance;
};

module.exports = { getGeminiClient };
