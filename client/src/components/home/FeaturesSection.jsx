import React from "react";
import { useNavigate } from 'react-router-dom'

const features = [
  {
    title: "AI Question Generation",
    desc: "Dynamic, role-based interview questions generated intelligently for technical, HR, and behavioral rounds.",
    tag: "Smart AI",
  },
  {
    title: "Live Performance Scoring",
    desc: "Instant scoring on confidence, communication, technical depth, and answer quality in real-time.",
    tag: "Real-Time",
  },
  {
    title: "Detailed Feedback Reports",
    desc: "Get actionable insights, weak area detection, and personalized improvement recommendations.",
    tag: "Analytics",
  },
];

const FeaturesSection = () => {
  const navigate =useNavigate()
  return (
    <section
      id="learn-more"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
          Powerful Features
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
          Why Choose
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our AI Platform
          </span>
        </h2>

        <p className="mt-5 text-lg text-gray-400">
          Built to help students, developers, and professionals
          prepare with confidence using intelligent interview
          simulations.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-white/10"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition group-hover:opacity-100" />

            {/* Tag */}
            <div className="relative z-10 inline-block rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
              {feature.tag}
            </div>

            {/* Title */}
            <h3 className="relative z-10 mt-5 text-xl font-semibold">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 mt-4 text-sm leading-7 text-gray-400">
              {feature.desc}
            </p>

            {/* Learn More */}
            <button  onClick={() => navigate('/learn-more')} 
             className="relative bg-gray-950 p-3 z-10 mt-6 text-sm font-medium text-indigo-500 cursor-pointer rounded-2xl transition group-hover:text-indigo-300">
              Learn more →
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Highlight */}
      <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 text-center backdrop-blur-xl">
        <h3 className="text-2xl font-bold">
          AI-powered feedback trusted by learners
        </h3>

        <p className="mt-3 text-gray-400">
          Improve faster with data-driven interview preparation
          and personalized performance insights.
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;