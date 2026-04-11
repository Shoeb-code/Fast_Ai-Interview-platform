import React from "react";
import { Link } from "react-router-dom";
import StatsCard from "./StatsCard";
import { useAuth } from "../../context/AuthContext";

const HeroSection = () => {
      
    const {isAuthenticated} =useAuth()

  const scrollToInfo = () => {
    document
      .getElementById("learn-more")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
            AI Powered Platform
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
            Master Interviews with
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Mock Sessions
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-400">
            Practice real-world interviews with AI feedback and analytics.
          </p>

          <div className="mt-8 flex gap-4">
          
            <Link
              to= '/setup'
              className="rounded-2xl bg-indigo-600 px-6 py-3"
            >
              Start Interview
            </Link>

            <button
              onClick={scrollToInfo}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3"
            >
              Learn More
            </button>
          </div>
        </div>

        <StatsCard />
      </div>
    </section>
  );
};

export default HeroSection;