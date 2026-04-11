import React from "react";
import {
  Activity,
  RefreshCw,
  Sparkles,
} from "lucide-react";

const HistoryHeader = () => {
  return (
    <div className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-2xl">
      {/* Top premium accent */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* Glow effects */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {/* Left Section */}
        <div>
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2">
            <Activity
              size={13}
              className="text-indigo-300"
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-300">
              Analytics Dashboard
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Interview
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Performance History
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Review previous mock interviews,
            analyze score trends, and access
            AI-generated reports to track your
            growth over time.
          </p>
        </div>

        {/* Right Meta Card */}
        <div className="min-w-[220px] rounded-3xl border border-white/10 bg-white/[0.05] px-5 py-4 shadow-xl backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2">
              <RefreshCw
                size={15}
                className="text-indigo-300"
              />
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Last Sync
              </p>

              <p className="mt-1 text-sm font-medium text-white">
                Real-time backend
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <Sparkles size={12} />
            Auto-updated after each interview
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryHeader;