import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  BarChart3,
  Mic,
  FileCheck2,
  TrendingUp,
  Compass,
  ArrowRight,
} from "lucide-react";

const featureList = [
  {
    icon: Brain,
    title: "Adaptive Question Engine",
    desc: "AI dynamically generates 5 targeted questions tailored to your exact role, seniority, and specific technical requirements.",
    tag: "Llama 3.1 Powered",
  },
  {
    icon: BarChart3,
    title: "Multi-Factor Scoring Rubric",
    desc: "Answers are evaluated against real industry benchmarks, measuring technical precision, trade-off analysis, and clarity.",
    tag: "Objective Scoring",
  },
  {
    icon: Mic,
    title: "Voice-to-Text Speech Practice",
    desc: "Practice answering verbally just like in a live interview, with built-in voice recognition and live transcription.",
    tag: "Natural Interaction",
  },
  {
    icon: FileCheck2,
    title: "Executive Feedback Reports",
    desc: "Receive actionable breakdowns of strengths, flagged conceptual gaps, and model answers after every session.",
    tag: "Detailed Reports",
  },
  {
    icon: TrendingUp,
    title: "Performance Trends & Analytics",
    desc: "Track score improvements across interview attempts with radar charts, history logs, and skill level tracking.",
    tag: "Progress Tracking",
  },
  {
    icon: Compass,
    title: "Targeted Revision Hub",
    desc: "Automated recommendations pinpoint topics that need revision, paired with curated learning links for fast mastery.",
    tag: "Curated Study",
  },
];

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="features" className="border-y border-slate-200/80 bg-slate-50/60 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold text-indigo-700">
            <span>Capabilities</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need to Ace Modern Tech Interviews
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Engineered around realistic hiring rubrics used by top tech companies and high-growth startups worldwide.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => navigate("/learn-more")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <span>Read documentation</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Ready to evaluate your interview readiness?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Setup your session in under 30 seconds. No credit card required.
              </p>
            </div>
            <button
              onClick={() => navigate("/setup")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-indigo-700 flex-shrink-0"
            >
              <span>Setup Interview Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;