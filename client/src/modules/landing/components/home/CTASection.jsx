import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-10 text-center shadow-2xl backdrop-blur-xl md:p-16">
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5" />

        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
            Start Today
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Ready to
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Crack Your Next Interview?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            Practice with AI-powered mock interviews, receive
            instant performance insights, and boost your
            confidence before real interviews.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/setup"
              className="rounded-2xl bg-indigo-600 px-8 py-3 font-medium shadow-lg shadow-indigo-500/30 transition hover:-translate-y-1 hover:bg-indigo-500"
            >
              Start Free Interview
            </Link>

            <Link
              to="/dashboard"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-3 font-medium transition hover:bg-white/10"
            >
              View Dashboard
            </Link>
          </div>

          {/* Trust Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-10 text-sm text-gray-400">
            <div>
              <p className="text-2xl font-bold text-white">
                10K+
              </p>
              Candidates
            </div>

            <div>
              <p className="text-2xl font-bold text-white">
                50K+
              </p>
              Interviews
            </div>

            <div>
              <p className="text-2xl font-bold text-white">
                94%
              </p>
              Success Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;