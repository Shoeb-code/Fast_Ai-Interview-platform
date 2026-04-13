const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey:
    process.env.GROQ_API_KEY,
});

 // Generate Questions

 const generateQuestions = async (
    role,
    level
  ) => {
    try {
      const response =
        await groq.chat.completions.create(
          {
            model:
              "llama-3.1-8b-instant",
            messages: [
              {
                role: "system",
                content: `
  You are an expert technical interviewer.
  
  IMPORTANT RULES:
  - Return ONLY a valid JSON array
  - Exactly 5 questions
  - No explanation
  - No numbering
  - No markdown
  - No SQL code examples
  - No extra text
  
  Example:
  ["Question 1","Question 2","Question 3","Question 4","Question 5"]
                `,
              },
              {
                role: "user",
                content: `Generate 5 ${level} level interview questions for ${role}`,
              },
            ],
            temperature: 0.5,
            max_tokens: 180,
          }
        );
  
      const text =
        response.choices[0]
          .message.content;
  
      console.log(
        "Questions AI Response:",
        text
      );
  
      let cleanedText = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
  
      /*
      First try JSON array parsing
      */
      const match =
        cleanedText.match(
          /\[[\s\S]*\]/
        );
  
      if (match) {
        return JSON.parse(
          match[0]
        );
      }
  
      /*
      Fallback: extract numbered questions
      */
      const extracted =
        cleanedText
          .split("\n")
          .filter((line) =>
            /^\d+\./.test(
              line.trim()
            )
          )
          .map((line) =>
            line.replace(
              /^\d+\.\s*\*\*Question:\*\*\s*/,
              ""
            )
          )
          .map((line) =>
            line.replace(
              /^\d+\.\s*/,
              ""
            )
          );
  
      if (
        extracted.length >= 5
      ) {
        return extracted.slice(
          0,
          5
        );
      }
  
      throw new Error(
        "Invalid AI response format"
      );
    } catch (error) {
      console.error(
        "Question Generation Error:",
        error
      );
  
      return [
        `What is ${role}?`,
        `Explain key concepts of ${role}.`,
        `What are best practices in ${role}?`,
        `How do you solve common problems in ${role}?`,
        `Describe a real-world ${role} project.`,
      ];
    }
  };


// Generate Final Feedback

const generateFinalFeedback =async ( answers,role) => {
    try { const response = await groq.chat.completions.create(
          { model: "llama-3.1-8b-instant",
            messages: [
              {
                role: "system",
                content:
                  'Evaluate complete interview and return ONLY valid JSON format: {"totalScore": number, "feedback": "string"}',
              },
              {
                role: "user",
                content: `Role: ${role} Interview Answers:${JSON.stringify(answers)} Score between 0 and 10.`,
              },
            ],
            temperature: 0.4,
            max_tokens: 200,
          }
        );

      const text =response.choices[0].message.content;

      console.log( "Final Feedback AI Response:", text );

      const match =text.match(/\{[\s\S]*\}/);

      if (!match) {
        throw new Error("Invalid final feedback format");
      }

      return JSON.parse( match[0] );
    } catch (error) {
      console.error("Final Feedback Error:",error);

      return {
        totalScore: 7,feedback:
        "Good performance overall. Focus on improving technical depth and communication clarity.",
      };
    }
  };

module.exports = {
  generateQuestions,
  generateFinalFeedback,
};