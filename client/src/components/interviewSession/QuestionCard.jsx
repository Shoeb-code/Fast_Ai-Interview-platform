import React from "react";
import {
  MessageSquare,
  Lightbulb,
  BarChart3,
} from "lucide-react";

const QuestionCard = ({
  questionText,
  currentQuestion,
  total,
}) => {
  const progress =
    ((currentQuestion + 1) / total) * 100;

  const remaining = total - currentQuestion - 1;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-2xl">
      {/* Premium top line */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

      {/* Glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10">
        {/* Top row */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare
              size={14}
              className="text-indigo-300"
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
              Question {currentQuestion + 1}
            </span>
          </div>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-400">
            {remaining} remaining
          </span>
        </div>

        {/* Progress section */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <BarChart3 size={12} />
              <span>Interview Progress</span>
            </div>

            <span>{Math.round(progress)}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/[0.04]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question text */}
        <h2 className="text-xl font-semibold leading-9 text-white md:text-2xl">
          {questionText}
        </h2>

        {/* AI Tip */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-500/15 bg-amber-500/[0.05] px-4 py-3">
          <Lightbulb
            size={14}
            className="mt-0.5 flex-shrink-0 text-amber-300"
          />

          <p className="text-[12.5px] leading-6 text-amber-100/70">
            Structure your answer as{" "}
            <span className="font-medium text-amber-200">
              what → why → how → result
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;