import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  {
    value: "120+",
    label: "Mock Interviews",
  },
  {
    value: "92%",
    label: "Success Rate",
  },
  {
    value: "Live",
    label: "AI Feedback",
  },
];

const CTASection = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 px-8 py-16 shadow-2xl backdrop-blur-2xl"
    >
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/5 blur-3xl" />

      <div className="relative z-10 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-indigo-300">
          <Sparkles size={14} />
          Premium AI Experience
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Ready to Crack Your
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next Interview?
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Practice with AI-powered mock interviews,
          receive instant feedback, and improve with
          real-time performance analytics built for
          placements, internships, and job success.
        </p>

        {/* CTA Button */}
        <Link
          to="/setup"
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-sm font-semibold shadow-xl shadow-indigo-500/20 transition duration-300 hover:scale-[1.02] hover:shadow-indigo-500/40"
        >
          Start Interview
          <ArrowRight size={18} />
        </Link>

        {/* Trust Metrics */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg backdrop-blur-xl"
            >
              <p className="text-3xl font-bold text-white">
                {item.value}
              </p>

              <p className="mt-2 text-sm text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Trust Text */}
        <p className="mt-8 text-sm text-gray-500">
          Trusted by students, developers, and
          professionals preparing for real-world
          interviews.
        </p>
      </div>
    </section>
  );
};

export default CTASection;