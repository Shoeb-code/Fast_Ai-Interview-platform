import React from "react";
import {
  Mic,
  Send,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const AnswerPanel = ({
  answer,
  setAnswer,
  loading,
  onSubmit,
  isLastQuestion,
}) => {
  const wordCount = answer.trim()
    ? answer.trim().split(/\s+/).length
    : 0;

  const minWords = 50;
  const progress = Math.min((wordCount / minWords) * 100, 100);

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-2xl">
      {/* Top Glow */}
      <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Your Answer
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Write a clear and structured response
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2">
          <p className="text-xs font-medium text-slate-400">
            {wordCount} {wordCount === 1 ? "word" : "words"}
          </p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="px-6 pt-4">
        <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
          <span>Recommended: {minWords}+ words</span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/[0.04]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Textarea */}
      <div className="p-6">
        <textarea
          rows={8}
          placeholder="Type your answer here… Use examples, explain your thinking, and structure your response clearly."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full resize-none rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-200 placeholder-slate-500 outline-none transition-all duration-300 focus:border-indigo-500/40 focus:bg-indigo-500/[0.02] focus:ring-4 focus:ring-indigo-500/10"
        />
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between border-t border-white/5 px-6 py-5">
        {/* Voice Input */}
        <button className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-400 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/[0.04] hover:text-white">
          <div className="rounded-xl bg-white/[0.04] p-2 transition group-hover:bg-indigo-500/20">
            <Mic size={15} />
          </div>
          Voice Input
        </button>

        {/* Submit */}
        <button
          onClick={onSubmit}
          disabled={loading}
          className={`group flex items-center gap-3 rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-2xl transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 ${
            isLastQuestion
              ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-emerald-500/25"
              : "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 shadow-indigo-500/25"
          }`}
        >
          {loading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Processing...
            </>
          ) : isLastQuestion ? (
            <>
              <CheckCircle2 size={16} />
              Finish Interview
            </>
          ) : (
            <>
              <Sparkles size={16} />
              Next Question
              <ChevronRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AnswerPanel;