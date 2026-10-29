import React from "react";
import {
  CalendarDays,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const InterviewCard = ({
  item,
  meta,
  onView,
  formatDate,
}) => {
  const scorePercent = (item.totalScore || 0) * 10;

  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-500/20 hover:shadow-[0_25px_70px_rgba(99,102,241,0.15)] ${meta.glow}`}
    >
      {/* Premium top accent */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

      {/* Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl opacity-70 transition duration-500 group-hover:scale-125" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              {item.role}
            </h2>

            <p className="mt-2 text-sm capitalize text-slate-400">
              {item.level}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}
          >
            {item.totalScore}/10
          </span>
        </div>

        {/* Score progress */}
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <BarChart3 size={12} />
              <span>Performance Score</span>
            </div>

            <span>{scorePercent}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/[0.04]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transition-all duration-700"
              style={{
                width: `${scorePercent}%`,
              }}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

        {/* Details */}
        <div className="space-y-3 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CalendarDays size={14} />
            {formatDate(item.createdAt)}
          </div>

          <div className="flex items-center justify-between">
            <span>Status</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-xs capitalize text-slate-300">
              {item.status}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span>AI Rating</span>
            <span className="text-sm font-medium text-white">
              {meta.label}
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => onView(item)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-indigo-500/30"
        >
          <Sparkles size={15} />
          Open Full Report
          <ArrowRight
            size={15}
            className="transition group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
};

export default InterviewCard;