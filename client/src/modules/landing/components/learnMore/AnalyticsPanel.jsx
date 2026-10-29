import React from "react";
import {
  Brain,
  Target,
  Activity,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const dimensions = [
  {
    title: "Technical Depth",
    weight: "40% Weight",
    score: "8.8 / 10",
    icon: Brain,
    color: "bg-indigo-50 text-indigo-600",
    desc: "Evaluates conceptual correctness, architecture trade-offs, and awareness of edge cases.",
  },
  {
    title: "Problem Formulation",
    weight: "25% Weight",
    score: "8.5 / 10",
    icon: Target,
    color: "bg-violet-50 text-violet-600",
    desc: "Measures hypothesis validation, boundary condition reasoning, and step-by-step logic.",
  },
  {
    title: "Structure & STAR Method",
    weight: "20% Weight",
    score: "8.2 / 10",
    icon: Activity,
    color: "bg-emerald-50 text-emerald-600",
    desc: "Checks situation setup, task delegation, concrete action taken, and quantifiable result.",
  },
  {
    title: "Delivery & Clarity",
    weight: "15% Weight",
    score: "91% Benchmark",
    icon: TrendingUp,
    color: "bg-amber-50 text-amber-600",
    desc: "Scores response conciseness, absence of filler words, and professional communication cadence.",
  },
];

const AnalyticsPanel = () => {
  return (
    <section
      id="analytics"
      className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm ring-1 ring-slate-900/5"
    >
      {/* Section Header */}
      <div className="max-w-2xl">
        <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
          Evaluation Methodology
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Multi-Factor Scoring & Performance Intelligence
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
          Instead of generic thumbs-up/down ratings, our evaluation engine breaks down every response across four standardized industry dimensions calibrated against actual hiring rubrics.
        </p>
      </div>

      {/* 4 Dimension Cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dimensions.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 transition hover:bg-white hover:border-slate-300 hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {item.weight}
                  </span>
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 border-t border-slate-200/80 pt-3">
                <span className="text-[10px] text-slate-400 font-medium">
                  Average Candidate Benchmark:
                </span>
                <p className="text-base font-extrabold text-slate-900">
                  {item.score}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lower Deep-Dive Grid: Rubrics & Actionable Feedback */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Card 1: Objective Rubric */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900">
              Unbiased, Objective Evaluation Rubric
            </h3>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">
            Interview results must be consistent. Our model uses structured JSON schema validation to evaluate candidate submissions against role-specific criteria with zero human interviewer mood variance.
          </p>

          <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>Standardized benchmarks matching Tier-1 tech rubrics</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>Deterministic JSON output for structured dashboard reporting</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>Zero hallucinated scoring criteria</span>
            </li>
          </ul>
        </div>

        {/* Card 2: Model Answers & Recommendations */}
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6 shadow-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900">
              Prescriptive Model Answers & Revision Guidance
            </h3>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">
            Evaluation is only helpful if you know how to improve. At the end of every round, FastAI generates tailored model answers comparing what you said with what top-percentile candidates say.
          </p>

          <ul className="mt-4 space-y-2 border-t border-indigo-100/80 pt-4 text-xs text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" />
              <span>Identifies exact missing technical terms and conceptual gaps</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" />
              <span>Generates side-by-side ideal responses tailored to your experience level</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" />
              <span>Tracks improvement across consecutive practice sessions</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPanel;