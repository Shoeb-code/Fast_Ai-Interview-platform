import React from "react";

const stats = [
  {
    title: "Interviews",
    value: "120+",
    trend: "+18%",
    desc: "Completed this month",
  },
  {
    title: "Avg Score",
    value: "8.6",
    trend: "+0.9",
    desc: "Performance improvement",
  },
  {
    title: "Success Rate",
    value: "92%",
    trend: "+12%",
    desc: "Placement readiness",
  },
  {
    title: "AI Feedback",
    value: "Live",
    trend: "24/7",
    desc: "Real-time insights",
  },
];

const StatsCard = () => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
      
      {/* Heading */}
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
          Live Metrics
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Platform
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Insights
          </span>
        </h2>

        <p className="mt-3 text-sm text-gray-400">
          Track interview growth, score improvement,
          and candidate readiness in real-time.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mt-8 grid grid-cols-2 gap-5">
        {stats.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-white/10"
          >
            <p className="text-sm text-gray-400">
              {item.title}
            </p>

            <div className="mt-2 flex items-center justify-between">
              <h3 className="text-3xl font-bold">
                {item.value}
              </h3>

              <span className="rounded-full bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-400">
                {item.trend}
              </span>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Trust Strip */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-4 text-center">
        <p className="text-sm text-gray-300">
          Trusted by students, developers & job seekers 🚀
        </p>
      </div>
    </div>
  );
};

export default StatsCard;