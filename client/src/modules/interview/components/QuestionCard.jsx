import React from "react";

const QuestionCard = ({
  question = "Tell me about yourself and your recent projects.",
  index = 1,
}) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl">
      <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
        Question {index}
      </p>

      <h2 className="mt-4 text-2xl font-semibold leading-relaxed text-white">
        {question}
      </h2>
    </div>
  );
};

export default QuestionCard;