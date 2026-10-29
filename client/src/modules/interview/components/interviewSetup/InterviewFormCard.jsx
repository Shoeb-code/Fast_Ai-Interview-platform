import React from "react";
import { Briefcase, Layers, Sparkles, Clock } from "lucide-react";

const levels = [
  {
    value: "beginner",
    label: "Beginner",
    desc: "Core concepts & fundamentals",
    emoji: "🌱",
    color: "indigo",
  },
  {
    value: "intermediate",
    label: "Intermediate",
    desc: "Projects & practical questions",
    emoji: "🚀",
    color: "purple",
  },
  {
    value: "advanced",
    label: "Advanced",
    desc: "System design & deep technical",
    emoji: "⚡",
    color: "pink",
  },
];

const InterviewFormCard = ({
  role,
  setRole,
  level,
  setLevel,
  loading,
  onStart,
}) => {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/9 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-2xl">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-indigo-500/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-12 bottom-0 h-44 w-44 rounded-full bg-purple-500/7 blur-3xl" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1.5">
            <Sparkles size={12} className="text-indigo-400" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-indigo-300">
              Interview Setup
            </span>
          </div>
          <h2 className="text-[1.65rem] font-bold tracking-tight text-slate-100">
            Customize Session
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
            Set your target role and experience level to generate the most
            relevant interview questions for your goals.
          </p>
        </div>

        {/* Role Input */}
        <div className="mb-5">
          <label className="mb-3 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            <Briefcase size={13} />
            Role / Position
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. MERN Stack Developer, React Engineer…"
            className="w-full rounded-2xl border border-white/9 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition focus:border-indigo-500/50 focus:bg-indigo-500/[0.04] focus:ring-2 focus:ring-indigo-500/15"
          />
        </div>

        {/* Level Selector */}
        <div className="mb-7">
          <label className="mb-3 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            <Layers size={13} />
            Difficulty Level
          </label>
          <div className="flex flex-col gap-2.5">
            {levels.map((item) => (
              <button
                key={item.value}
                onClick={() => setLevel(item.value)}
                className={`flex w-full items-center gap-3.5 rounded-2xl border p-4 text-left transition ${
                  level === item.value
                    ? "border-indigo-500/50 bg-indigo-500/8"
                    : "border-white/8 bg-white/[0.03] hover:bg-white/[0.06]"
                }`}
              >
                {/* Emoji icon */}
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-base ${
                    item.color === "indigo"
                      ? "bg-indigo-500/10"
                      : item.color === "purple"
                      ? "bg-purple-500/10"
                      : "bg-pink-500/10"
                  }`}
                >
                  {item.emoji}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-[13.5px] font-semibold text-slate-200">
                    {item.label}
                  </p>
                  <p className="text-[12px] text-slate-500">{item.desc}</p>
                </div>

                {/* Check */}
                <div
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition ${
                    level === item.value
                      ? "border-indigo-500 bg-indigo-500"
                      : "border-white/15"
                  }`}
                >
                  {level === item.value && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <polyline
                        points="2,6 5,9 10,3"
                        stroke="#fff"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onStart}
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-4 text-[15px] font-semibold tracking-wide shadow-xl shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:opacity-90 active:scale-[0.99] disabled:opacity-50"
        >
          {loading ? "Starting Session…" : "Start AI Interview →"}
        </button>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-slate-600">
          <Clock size={11} />
          Estimated duration: 10–15 minutes
        </p>
      </div>
    </div>
  );
};

export default InterviewFormCard;
