import React from "react";
import { Sliders, MessageSquareCode, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    step: "01",
    icon: Sliders,
    title: "Configure Role & Difficulty",
    desc: "Define your target position (e.g. Backend Engineer, Frontend Specialist, DevOps) and select Beginner, Intermediate, or Advanced level.",
    detail: "Over 500+ job specializations supported.",
  },
  {
    step: "02",
    icon: MessageSquareCode,
    title: "Complete the Live AI Session",
    desc: "Tackle 5 tailored, dynamic questions. Use browser-native voice dictation or type your answers with real-time countdown assistance.",
    detail: "Simulates realistic interview pressure.",
  },
  {
    step: "03",
    icon: Award,
    title: "Receive Rubric Evaluation",
    desc: "Unlock comprehensive analysis: numeric score out of 10, identified knowledge gaps, strong answers, and recommended revision topics.",
    detail: "Saved automatically to your history.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
            <span>Workflow</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How Fast AI Interview Works
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            A frictionless, 3-step process designed to test your knowledge, highlight blind spots, and accelerate preparation.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-14 sm:mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs transition hover:border-slate-300 hover:shadow-md"
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-slate-200 tracking-tight">
                      {item.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Helper */}
        <div className="mt-12 text-center">
          <Link
            to="/setup"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
          >
            <span>Start your first simulation now</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;