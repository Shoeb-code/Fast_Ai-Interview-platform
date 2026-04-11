import React from "react";

const features = [
  "AI-generated questions",
  "Real-time performance scoring",
  "Detailed feedback report",
  "Adaptive difficulty",
];

const stats = [
  { label: "Avg. Duration", value: "12m", sub: "10–15 min range" },
  { label: "AI Score", value: "Live", sub: "Real-time analysis" },
  { label: "Feedback", value: "Instant", sub: "Post-session report" },
];

const SetupHero = () => {
  return (
    <div>
      {/* Eyebrow */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-4 py-2">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-300">
          AI Interview Engine
        </span>
      </div>

      {/* Title */}
      <h1 className="mb-5 text-5xl font-bold leading-[1.12] tracking-tight md:text-6xl">
        Start Your
        <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Mock Interview
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mb-8 max-w-xl text-base leading-8 text-slate-400">
        Practice smarter with AI-powered interviews, live performance scoring,
        and actionable feedback. Built to simulate real-world technical
        interviews — from basics to system design.
      </p>

      {/* Feature Pills */}
      <div className="mb-10 flex flex-wrap gap-2">
        {features.map((f) => (
          <div
            key={f}
            className="flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-4 py-2 text-[13px] text-slate-300"
          >
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
            {f}
          </div>
        ))}
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map(({ label, value, sub }) => (
          <div
            key={label}
            className="rounded-2xl border border-white/7 bg-white/[0.03] p-4"
          >
            <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-slate-500">
              {label}
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-slate-100">
              {value}
            </h3>
            <p className="mt-1 text-[11px] text-slate-600">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetupHero;
