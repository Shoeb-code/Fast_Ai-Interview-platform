import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

const stats = [
  {
    value: "12,500+",
    label: "Simulations Run",
  },
  {
    value: "92%",
    label: "Offer Rate",
  },
  {
    value: "< 2.4s",
    label: "Feedback Speed",
  },
];

const CTASection = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 sm:px-12 sm:py-16 text-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-800"
    >
      {/* Subtle Ambient Radial Light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.18),transparent_60%)]"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Start Practice Free • No Credit Card Required</span>
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Ready to experience your first AI-calibrated interview?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
          Join thousands of engineering, product, and data candidates practicing with industry-standard rubrics and landing top offers.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/setup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 hover:shadow-md cursor-pointer"
          >
            <span>Start Practice Session</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            to="/login"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700 hover:border-slate-600 cursor-pointer"
          >
            <span>Sign In to Dashboard</span>
          </Link>
        </div>

        {/* Stat Metrics Strip */}
        <div className="mt-12 grid grid-cols-3 gap-3 border-t border-slate-800/90 pt-8">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-xl sm:text-2xl font-extrabold text-white">
                {item.value}
              </p>
              <p className="mt-0.5 text-xs text-slate-400 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Bottom Notice */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>Private & confidential candidate practice • No public transcripts</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;