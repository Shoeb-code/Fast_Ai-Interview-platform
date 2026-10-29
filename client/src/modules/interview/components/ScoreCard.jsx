import React from "react";

const ScoreCard = ({ score = 8.5 }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
      <p className="text-sm text-gray-400">
        Current Score
      </p>

      <h2 className="mt-2 text-5xl font-bold text-white">
        {score}/10
      </h2>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-indigo-500"
          style={{ width: `${score * 10}%` }}
        />
      </div>
    </div>
  );
};

export default ScoreCard;