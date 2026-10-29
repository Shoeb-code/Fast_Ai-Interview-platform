import React from "react";
import { TrendingUp } from "lucide-react";

const StatCard = ({
  title,
  value,
  sub,
  icon: Icon = TrendingUp,
  accent = "from-indigo-500 via-purple-500 to-cyan-500",
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_25px_70px_rgba(99,102,241,0.15)]">
      {/* Premium gradient border top */}
      <div
        className={`absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r ${accent}`}
      />

      {/* Glow background */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/15 blur-3xl opacity-70 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />

      {/* Secondary glow */}
      <div className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-purple-500/10 blur-3xl opacity-50" />

      {/* Soft inner light */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />

      <div className="relative z-10">
        {/* Top section */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[13px] font-medium tracking-wide text-slate-400">
              {title}
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {value}
            </h2>
          </div>

          {/* Premium icon */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500/15">
            <Icon
              size={18}
              className="text-indigo-300"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

        {/* Bottom section */}
        <div className="flex items-center justify-between">
          <p className="text-xs leading-5 text-slate-500">
            {sub}
          </p>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
            +12%
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;