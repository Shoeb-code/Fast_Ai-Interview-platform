import React from "react";
import { Code2, Database, Server, Globe } from "lucide-react";

const resources = [
  {
    title: "React",
    desc: "Hooks, state management, props, routing, and component lifecycle patterns",
    icon: Code2,
    link: "https://react.dev",
  },
  {
    title: "Node.js",
    desc: "Runtime, event loop, modules, async/await, and streams",
    icon: Server,
    link: "https://nodejs.org",
  },
  {
    title: "Express",
    desc: "Middleware, routing, REST API design, and error handling",
    icon: Globe,
    link: "https://expressjs.com",
  },
  {
    title: "MongoDB",
    desc: "Schema design, queries, indexing, and aggregation pipelines",
    icon: Database,
    link: "https://www.mongodb.com/docs",
  },
];

const RevisionHub = () => {
  return (
    <section>
      {/* Section header */}
      <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400">
        Quick Revision
      </p>
      <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-100">
        Learning Hub
      </h2>
      <p className="mb-8 max-w-2xl text-sm leading-8 text-slate-500">
        Brush up on key technologies before your session. Each resource covers
        the concepts most likely to appear in your interview — from hooks to
        aggregation pipelines.
      </p>

      {/* Cards wrapper */}
      <div className="rounded-[1.75rem] border border-white/7 bg-white/[0.03] p-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {resources.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-white/7 bg-white/[0.03] p-5 transition duration-200 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.06]"
              >
                {/* Icon */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
                  <Icon size={18} className="text-indigo-400" />
                </div>

                {/* Name */}
                <h3 className="mb-2 text-[15px] font-bold text-slate-200">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="mb-4 text-[12.5px] leading-7 text-slate-500">
                  {item.desc}
                </p>

                {/* CTA */}
                <p className="text-[12.5px] font-semibold text-indigo-400 transition group-hover:text-indigo-300">
                  Revise now →
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RevisionHub;
