import React from "react";
import { TrendingUp, Award, CheckCircle, BarChart2, Shield } from "lucide-react";

const metrics = [
  {
    label: "Questions Generated",
    value: "250K+",
    sub: "Across all domains",
  },
  {
    label: "Average Improvement",
    value: "+34%",
    sub: "After 3 sessions",
  },
  {
    label: "Evaluation Speed",
    value: "< 2.4s",
    sub: "Real-time AI response",
  },
  {
    label: "Placement Readiness",
    value: "92%",
    sub: "FAANG & top tech",
  },
];

const StatsCard = () => {
  return (
    <div className="relative mx-auto max-w-lg rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xl shadow-slate-200/70 ring-1 ring-slate-900/5">
      
      {/* Top Header Card Info */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Live Session Analysis
            </span>
          </div>
          <h3 className="mt-1 text-base font-bold text-slate-900">
            Senior Full-Stack Engineer
          </h3>
        </div>

        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
          Scored 8.9 / 10
        </span>
      </div>

      {/* Score Meter Overview */}
      <div className="mt-5 space-y-3.5">
        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-700">
            <span>System Architecture & Concurrency</span>
            <span className="text-indigo-600">92%</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-indigo-600" style={{ width: "92%" }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-700">
            <span>Problem-Solving & Data Structures</span>
            <span className="text-violet-600">88%</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-violet-600" style={{ width: "88%" }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-700">
            <span>Communication & Structural Clarity</span>
            <span className="text-emerald-600">86%</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-emerald-600" style={{ width: "86%" }} />
          </div>
        </div>
      </div>

      {/* AI Qualitative Feedback Snippet */}
      <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 text-xs leading-relaxed text-slate-700">
        <p className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
          <Award className="h-3.5 w-3.5 text-indigo-600" />
          AI Interviewer Assessment
        </p>
        "Strong reasoning on Redis caching and lock contention. Articulate explanation of trade-offs between consistency and latency."
      </div>

      {/* Key Metric Grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 pt-2">
        {metrics.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-xs transition hover:border-slate-200"
          >
            <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              {item.label}
            </p>
            <p className="mt-1 text-xl font-bold tracking-tight text-slate-900">
              {item.value}
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500">
              {item.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Trust Footer */}
      <div className="mt-5 flex items-center justify-center gap-1.5 text-center text-xs font-medium text-slate-500 border-t border-slate-100 pt-4">
        <Shield className="h-3.5 w-3.5 text-indigo-600" />
        <span>Enterprise-calibrated scoring standards</span>
      </div>
    </div>
  );
};

export default StatsCard;