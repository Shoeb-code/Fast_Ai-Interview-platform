import React from "react";
import { Link } from "react-router-dom";
import StatsCard from "./StatsCard";
import { useAuth } from "../../../../shared/context/AuthContext";
import { ArrowRight, ShieldCheck, Star, Sparkles, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const { isAuthenticated } = useAuth();

  const scrollToInfo = () => {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pb-32">
      {/* Subtle Ambient Background Gradient */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div 
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 via-purple-100 to-slate-100 opacity-60 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            {/* Top Eyebrow Chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/70 px-3.5 py-1.5 text-xs font-semibold text-indigo-800 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
              <span>AI-Powered Interview Simulation</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-[1.12]">
              Master Technical & Behavioral Interviews with{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-800 bg-clip-text text-transparent">
                Adaptive AI
              </span>
            </h1>

            {/* Subtitle / Body Copy */}
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8 max-w-2xl">
              Simulate realistic, role-tailored interview rounds powered by advanced LLMs. 
              Receive instant rubric scoring on technical precision, architectural depth, and communication clarity.
            </p>

            {/* Core Value Props List */}
            <div className="mt-6 flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span>500+ Engineering & Product Roles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span>Live Audio & Text Answers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span>Benchmark Analytics</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3.5">
              <Link
                to={isAuthenticated ? "/setup" : "/login"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                <span>Start Free Interview</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                type="button"
                onClick={scrollToInfo}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
              >
                Explore Features
              </button>
            </div>

            {/* Social Proof Strip */}
            <div className="mt-10 flex items-center gap-4 border-t border-slate-200/70 pt-6">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                <span className="font-semibold text-slate-900">4.9/5 rating</span> from 10,000+ candidate practice sessions
              </p>
            </div>
          </div>

          {/* Right Column: Interactive SaaS Preview Card */}
          <div className="lg:col-span-5 w-full">
            <StatsCard />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;