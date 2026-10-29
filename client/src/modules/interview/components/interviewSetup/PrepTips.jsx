import React from "react";

const tips = [
  {
    number: "01",
    area: "Frontend",
    title: "React & the DOM",
    desc: "Understand hooks deeply — especially useEffect, useMemo, and useCallback. Know the virtual DOM, reconciliation, and how React 18's concurrent features work.",
    tags: ["useState", "useEffect", "React Router", "Context API"],
    accent: "from-indigo-500 to-indigo-400",
  },
  {
    number: "02",
    area: "Backend",
    title: "APIs & Auth",
    desc: "Be ready to explain JWT lifecycle, middleware chains, and rate limiting. Know the difference between stateless and stateful auth and when to use each.",
    tags: ["JWT", "Middleware", "REST vs GraphQL", "OAuth"],
    accent: "from-purple-500 to-purple-400",
  },
  {
    number: "03",
    area: "Database",
    title: "Data Modelling",
    desc: "Practice schema design decisions — embedding vs referencing in MongoDB. Know when indexing helps and how to interpret query plans. Write aggregation pipelines from memory.",
    tags: ["Schema design", "Indexing", "Aggregation", "Transactions"],
    accent: "from-pink-500 to-pink-400",
  },
];

const PrepTips = () => {
  return (
    <section>
      {/* Header */}
      <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400">
        Interview Strategy
      </p>
      <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-100">
        Prep Checklist
      </h2>
      <p className="mb-8 max-w-2xl text-sm leading-8 text-slate-500">
        Cover these areas before you begin. Each category maps directly to how
        your AI interview session will be structured and scored.
      </p>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {tips.map((tip) => (
          <div
            key={tip.number}
            className="relative overflow-hidden rounded-[1.25rem] border border-white/7 bg-white/[0.03] p-6"
          >
            {/* Top accent bar */}
            <div
              className={`absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r ${tip.accent}`}
            />

            {/* Number + Area */}
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-indigo-400">
              {tip.number} — {tip.area}
            </p>

            {/* Title */}
            <h3 className="mb-3 text-[1.1rem] font-bold text-slate-100">
              {tip.title}
            </h3>

            {/* Description */}
            <p className="mb-5 text-[13px] leading-7 text-slate-500">
              {tip.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tip.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/8 bg-white/[0.05] px-2.5 py-1 text-[11px] text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrepTips;
