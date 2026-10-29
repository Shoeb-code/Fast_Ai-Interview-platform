import React from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  badge = "Core Engine",
  title,
  subtitle,
  desc,
  benefits = [],
  metricLabel = "Evaluation Speed",
  metricValue = "< 2.5s Latency",
}) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200">
      <div>
        {/* Top Header Strip */}
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
            {Icon && <Icon className="h-5 w-5" />}
          </div>

          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
            {badge}
          </span>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-5 text-[11px] font-bold uppercase tracking-wider text-indigo-600">
            {subtitle}
          </p>
        )}

        {/* Title */}
        <h3 className="mt-1.5 text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {desc}
        </p>

        {/* Benefits Checklist */}
        {benefits.length > 0 && (
          <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-600 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Metric Strip */}
      <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            {metricLabel}
          </p>
          <p className="mt-0.5 text-xs font-bold text-slate-900">
            {metricValue}
          </p>
        </div>

        <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
      </div>
    </div>
  );
};

export default FeatureCard;