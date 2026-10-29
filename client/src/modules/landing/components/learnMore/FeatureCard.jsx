import React from "react";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const FeatureCard = ({
  icon,
  subtitle,
  title,
  desc,
}) => {
  return (
    <div id= "features" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.08]">
      
      {/* Glow Effect */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:bg-indigo-500/20" />

      <div className="relative z-10">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div className="text-4xl">
            {icon}
          </div>

          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
            Premium
          </span>
        </div>

        {/* Subtitle */}
        <p className="mt-5 text-xs uppercase tracking-[0.25em] text-indigo-400">
          {subtitle}
        </p>

        {/* Title */}
        <h2 className="mt-3 text-2xl font-bold leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-4 leading-8 text-gray-400">
          {desc}
        </p>

        {/* Benefits */}
        <div className="mt-6 space-y-3">
          {[
            "Real-time AI powered",
            "Scalable architecture",
            "Instant actionable insights",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm text-gray-300"
            >
              <CheckCircle2
                size={16}
                className="text-indigo-400"
              />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Feature Impact
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              High User Engagement
            </p>
          </div>

          <ArrowUpRight
            size={18}
            className="text-indigo-400 transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;