import React from "react";

const steps = [
  {
    title: "Choose Your Role & Level",
    desc: "Select your target role, interview type, and difficulty level tailored to your career goals.",
  },
  {
    title: "Take AI Mock Interview",
    desc: "Practice with AI-generated real-world technical, HR, and behavioral interview questions.",
  },
  {
    title: "Get Feedback & Improve",
    desc: "Receive instant scoring, performance insights, and personalized recommendations.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Heading */}
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
          Product Flow
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          How It
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Works
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
          A simple 3-step journey designed to help you
          prepare smarter and perform better.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-white/10"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition group-hover:opacity-100" />

            {/* Step Number */}
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-lg font-bold text-indigo-400">
              {i + 1}
            </div>

            {/* Title */}
            <h3 className="relative z-10 mt-6 text-xl font-semibold">
              {step.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 mt-4 text-sm leading-7 text-gray-400">
              {step.desc}
            </p>

            {/* Bottom line */}
            <div className="relative z-10 mt-6 text-sm font-medium text-indigo-400">
              Step {i + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Trust Banner */}
      <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 text-center backdrop-blur-xl">
        <h3 className="text-2xl font-bold">
          Built for placements, internships & job interviews
        </h3>

        <p className="mt-3 text-gray-400">
          Prepare with confidence using AI-powered
          simulations trusted by students and developers.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;