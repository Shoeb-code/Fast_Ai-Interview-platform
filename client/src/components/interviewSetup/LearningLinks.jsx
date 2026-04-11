import React from "react";

const techLinks = [
  { name: "React", url: "https://react.dev", dot: "#818cf8" },
  { name: "Node.js", url: "https://nodejs.org", dot: "#68d391" },
  { name: "Express", url: "https://expressjs.com", dot: "#f6ad55" },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/docs",
    dot: "#48bb78",
  },
  {
    name: "JavaScript (MDN)",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    dot: "#f6e05e",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/docs",
    dot: "#63b3ed",
  },
  {
    name: "Jest",
    url: "https://jestjs.io/docs/getting-started",
    dot: "#fc8181",
  },
  { name: "Git", url: "https://git-scm.com/docs", dot: "#fbd38d" },
];

const LearningLinks = () => {
  return (
    <section className="rounded-[1.75rem] border border-white/7 bg-white/[0.025] p-8">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="mb-1.5 text-[1.3rem] font-bold tracking-tight text-slate-100">
            Quick Reference Links
          </h2>
          <p className="text-[13px] text-slate-500">
            Official docs — open directly while you revise
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {techLinks.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/9 bg-white/[0.04] px-4 py-2.5 text-[13px] font-medium text-slate-300 transition hover:border-indigo-500/35 hover:bg-indigo-500/7 hover:text-indigo-300"
          >
            <span
              className="h-2 w-2 flex-shrink-0 rounded-full"
              style={{ backgroundColor: tech.dot }}
            />
            {tech.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default LearningLinks;
