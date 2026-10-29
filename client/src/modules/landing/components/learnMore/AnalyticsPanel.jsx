import React from "react";
import {
  TrendingUp,
  Brain,
  Activity,
  Target,
} from "lucide-react";

const stats = [
  {
    title: "Confidence",
    value: "86%",
    icon: TrendingUp,
    desc: "Strong communication and delivery confidence.",
  },
  {
    title: "Technical",
    value: "8.8",
    icon: Brain,
    desc: "Excellent technical depth and accuracy.",
  },
  {
    title: "Clarity",
    value: "8.2",
    icon: Activity,
    desc: "Clear structure with room for refinement.",
  },
  {
    title: "Success Rate",
    value: "92%",
    icon: Target,
    desc: "High probability of interview success.",
  },
];

const AnalyticsPanel = () => {
  return (
    <section
      id="analytics"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-2xl"
    >
      {/* Glow Background */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
            AI Analytics
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Performance Intelligence
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-400">
            Advanced AI-driven analytics designed to
            evaluate communication, technical depth,
            confidence, and success probability in
            real-time.
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.08]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                  <Icon size={22} />
                </div>

                <p className="mt-5 text-sm text-gray-400">
                  {item.title}
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom AI Insights */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-400">
              AI Recommendation
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Growth Opportunity
            </h3>

            <p className="mt-3 leading-8 text-gray-400">
              Focus on concise structured answers,
              project-based examples, and stronger
              leadership communication to push your
              performance into the top 95 percentile.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">
              Product Insight
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Real-Time Analytics Engine
            </h3>

            <p className="mt-3 leading-8 text-gray-300">
              This component processes live interview
              answers and generates intelligent
              scoring metrics, personalized feedback,
              and predictive success indicators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPanel;