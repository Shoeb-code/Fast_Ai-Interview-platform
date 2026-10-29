import React from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Zap,
  BarChart3,
  Target,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
  Terminal,
  FileCheck2,
  Clock,
} from "lucide-react";

import SidebarNav from "../components/learnMore/SidebarNav.jsx";
import FeatureCard from "../components/learnMore/FeatureCard.jsx";
import AnalyticsPanel from "../components/learnMore/AnalyticsPanel.jsx";
import CTASection from "../components/learnMore/CTASection.jsx";

const featureSections = [
  {
    icon: Cpu,
    badge: "Adaptive Engine",
    subtitle: "Context-Aware Intelligence",
    title: "Domain-Calibrated Interview Generator",
    desc: "Dynamically produces technical and behavioral questions calibrated to your exact role, target senior level, and chosen technology stack.",
    benefits: [
      "500+ specialized engineering & product archetypes",
      "Calibrated for Junior, Mid, Senior, and Staff levels",
      "Dynamic follow-ups that challenge superficial answers",
    ],
    metricLabel: "Specializations",
    metricValue: "500+ Roles Supported",
  },
  {
    icon: Zap,
    badge: "Low Latency",
    subtitle: "Real-Time Pipeline",
    title: "Live Answer Scoring & Speech Pipeline",
    desc: "Evaluates verbal and text responses instantaneously with sub-3-second processing, mirroring the conversational cadence of a real hiring panel.",
    benefits: [
      "Near-instant LLM response evaluation",
      "Speech-to-text with syntax and terminology correction",
      "Pacing, filler word, and articulation tracking",
    ],
    metricLabel: "Response Latency",
    metricValue: "< 2.4s Average",
  },
  {
    icon: BarChart3,
    badge: "Objective Scoring",
    subtitle: "Standardized Metrics",
    title: "Multi-Factor Rubric Evaluation",
    desc: "Breaks candidate responses down across Technical Depth, Problem Solving, Communication, and Structural STAR methodology without human bias.",
    benefits: [
      "Standardized scoring rubrics aligned with top tech standards",
      "Identifies exact missing technical keywords and edge cases",
      "Historical trend reporting across all practice rounds",
    ],
    metricLabel: "Rubric Accuracy",
    metricValue: "98.2% Inter-Rater Reliability",
  },
  {
    icon: Target,
    badge: "Actionable Coaching",
    subtitle: "Targeted Growth",
    title: "Ideal Model Answers & Revision Blueprints",
    desc: "Rather than leaving you with vague advice, FastAI generates ideal answer blueprints showing how top-percentile candidates structure their responses.",
    benefits: [
      "Side-by-side comparison with your original answer",
      "Concrete structural tips and architectural diagrams",
      "Recommended revision flashcards and practice drills",
    ],
    metricLabel: "Candidate Outcome",
    metricValue: "3.2x Faster Prep Time",
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Select Role & Target Level",
    desc: "Specify your engineering domain, seniority (Junior to Principal), and optional job description for targeted questions.",
    icon: Terminal,
  },
  {
    step: "02",
    title: "Engage in Live AI Simulation",
    desc: "Answer realistic technical and architectural questions under realistic timed conditions with dynamic follow-ups.",
    icon: Clock,
  },
  {
    step: "03",
    title: "Receive Granular Rubrics",
    desc: "Get scored across four standardized dimensions with highlighted blind spots, missing keywords, and ideal model answers.",
    icon: FileCheck2,
  },
  {
    step: "04",
    title: "Track Historical Trajectory",
    desc: "Review your progress over time in your candidate dashboard, identifying consistent strengths and areas for focused revision.",
    icon: Layers,
  },
];

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 selection:bg-indigo-500 selection:text-white pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Sidebar (3 cols) + Content (9 cols) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* Left Sticky Sidebar Nav */}
          <div className="lg:col-span-3">
            <SidebarNav />
          </div>

          {/* Right Main Deep Dive Content */}
          <div className="space-y-16 lg:col-span-9">
            
            {/* 1. Overview Section */}
            <section id="overview" className="scroll-mt-24">
              <span className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700 shadow-xs">
                Product Architecture & Deep Dive
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                How FastAI Delivers Industry-Calibrated Mock Interviews
              </h1>

              <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600">
                FastAI bridges the gap between passive interview reading and real-world high-stakes interview performance. Our multi-model pipeline replicates genuine hiring panels, challenges shallow answers, and scores responses against validated rubrics.
              </p>

              {/* 3 Metric Highlight Strip */}
              <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                  <div className="pt-2 sm:pt-0 sm:pr-4 text-center sm:text-left">
                    <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      3.2x
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Faster Preparation
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Eliminate guesswork with targeted model answers.
                    </p>
                  </div>

                  <div className="pt-4 sm:pt-0 sm:px-4 text-center sm:text-left">
                    <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      500+
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Role Specializations
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Custom prompts for Frontend, Backend, ML, & DevOps.
                    </p>
                  </div>

                  <div className="pt-4 sm:pt-0 sm:pl-4 text-center sm:text-left">
                    <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      92%
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Offer Acceptance
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Candidates consistently clear on-site rounds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Architecture Pipeline Strip */}
              <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-indigo-600" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900">
                    The 3-Tier Evaluation Pipeline
                  </h3>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3 text-xs">
                  <div className="rounded-xl border border-indigo-100/80 bg-white p-3.5 shadow-xs">
                    <p className="font-bold text-slate-900">1. Context Profiling</p>
                    <p className="mt-1 text-slate-600 leading-relaxed">
                      Extracts technical stack requirements and difficulty parameters to generate unique prompt sets.
                    </p>
                  </div>
                  <div className="rounded-xl border border-indigo-100/80 bg-white p-3.5 shadow-xs">
                    <p className="font-bold text-slate-900">2. Adaptive Probing</p>
                    <p className="mt-1 text-slate-600 leading-relaxed">
                      Detects gaps in candidate answers and generates contextual follow-up questions in real time.
                    </p>
                  </div>
                  <div className="rounded-xl border border-indigo-100/80 bg-white p-3.5 shadow-xs">
                    <p className="font-bold text-slate-900">3. Schema Validation</p>
                    <p className="mt-1 text-slate-600 leading-relaxed">
                      Evaluates response against JSON scoring schemas to ensure objective, verifiable grading.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. AI Engine & Features Section */}
            <section id="features" className="scroll-mt-24 space-y-6">
              <div>
                <span className="inline-block rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600 shadow-xs">
                  Core AI Capabilities
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Engineered for Rigorous Technical Practice
                </h2>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600">
                  Every feature is purposefully designed to recreate actual engineering on-site rounds.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {featureSections.map((item) => (
                  <FeatureCard key={item.title} {...item} />
                ))}
              </div>
            </section>

            {/* 3. Analytics & Scoring Rubric */}
            <section className="scroll-mt-24">
              <AnalyticsPanel />
            </section>

            {/* 4. Candidate Journey Roadmap */}
            <section id="journey" className="scroll-mt-24 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm ring-1 ring-slate-900/5">
              <div>
                <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                  How Candidates Progress
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  The End-to-End Practice Workflow
                </h2>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600">
                  From initial topic setup to post-interview review, each session takes 10–15 minutes and yields measurable improvement.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {journeySteps.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 transition hover:bg-white hover:border-slate-300 hover:shadow-xs"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-indigo-600">
                            {item.step}
                          </span>
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-700 shadow-xs">
                            <Icon className="h-4 w-4" />
                          </div>
                        </div>

                        <h3 className="mt-4 text-sm font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-slate-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 5. CTA Section */}
            <section className="scroll-mt-24">
              <CTASection />
            </section>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LearnMore;