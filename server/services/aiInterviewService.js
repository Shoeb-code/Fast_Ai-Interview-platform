const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// generate questions
const generateQuestions = async (
  role,
  level
) => {
  try {
const prompt = `
You are an expert technical interviewer.

Generate exactly 5 interview questions for:
Role: ${role}
Difficulty: ${level}

Return ONLY a valid JSON array.

Example:
[
  {
    "question": "Tell me about yourself",
    "category": "hr"
  }
]
`;

    const response =
      await ai.models.generateContent({
        model:
          "gemini-2.5-flash",
        contents: prompt,
      });

    const text =
      response.text.trim();

    return JSON.parse(text);
  } catch (error) {
    console.error(
      "Generate Question Error:",
      error
    );

    return [
      {
        question:
          "Tell me about yourself",
        category: "hr",
      },
      {
        question:
          "Explain your recent project",
        category:
          "technical",
      },
      {
        question:
          "What are React hooks?",
        category:
          "technical",
      },
      {
        question:
          "How do you solve bugs?",
        category:
          "behavioral",
      },
      {
        question:
          "Why should we hire you?",
        category: "hr",
      },
    ];
  }
};

// Evaluate Answer
const evaluateAnswer = async (
  question,
  answer,
  role
) => {
  try {
    const prompt = `
You are an expert interviewer.

Role: ${role}
Question: ${question}
Answer: ${answer}

Evaluate answer from 0 to 10.

Return ONLY valid JSON:
{
  "score": 8,
  "feedback": "Strong answer with clear explanation"
}
`;

    const response =
      await ai.models.generateContent({
        model:
          "gemini-2.5-flash",
        contents: prompt,
      });

    const text =
      response.text.trim();

    return JSON.parse(text);
  } catch (error) {
    console.error(
      "Evaluate Answer Error:",
      error
    );

    return {
      score: 7,
      feedback:
        "Good answer but improve structure and examples.",
    };
  }
};

// Final FeedBack
const generateFinalFeedback =
  async (
    answers,
    totalScore
  ) => {
    try {
      const prompt = `
You are an expert career coach.

Average Score: ${totalScore}/10

Answers:
${JSON.stringify(
  answers
)}

Generate professional final interview feedback.

Include:
- strengths
- weaknesses
- improvements
`;

      const response =
        await ai.models.generateContent(
          {
            model:
              "gemini-2.5-flash",
            contents: prompt,
          }
        );

      return response.text.trim();
    } catch (error) {
      console.error(
        "Final Feedback Error:",
        error
      );

      return `
Strong overall performance.
Good technical depth.
Improve communication clarity and structured examples.
`;
    }
  };

module.exports = {
  generateQuestions,
  evaluateAnswer,
  generateFinalFeedback,
};