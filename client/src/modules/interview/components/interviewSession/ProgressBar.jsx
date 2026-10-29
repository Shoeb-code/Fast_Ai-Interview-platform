import React from "react";

const ProgressBar = ({
  current,
  total,
  progress,
}) => {
  return (
    <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl backdrop-blur-xl">
      
      {/* Top Labels */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-400">
            Interview Progress
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Question {current} of {total}
          </p>
        </div>

        {/* Percentage Badge */}
        <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
          {Math.round(progress)}%
        </div>
      </div>

      {/* Main Track */}
      <div className="relative h-3 overflow-hidden rounded-full bg-white/[0.06]">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5" />

        {/* Fill */}
        <div
          className="relative h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* moving shine */}
          <div className="absolute right-0 top-0 h-full w-8 bg-white/20 blur-sm" />
        </div>
      </div>

      {/* Bottom Steps */}
      <div className="mt-4 flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => {
          const step = i + 1;

          return (
            <div
              key={i}
              className={`flex h-2 flex-1 rounded-full transition-all duration-500 ${
                step < current
                  ? "bg-indigo-500"
                  : step === current
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.45)]"
                  : "bg-white/[0.06]"
              }`}
            />
          );
        })}
      </div>

      {/* Bottom Helper Text */}
      <p className="mt-3 text-xs text-slate-500">
        Keep going — you’re making great progress 🚀
      </p>
    </div>
  );
};

export default ProgressBar;