import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useAuth } from "../../../../shared/context/AuthContext";

const CTASection = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Deep Slate High-Contrast Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-white shadow-2xl">
          
          {/* Subtle Ambient Background Light */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" 
          />
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" 
          />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-300">
              Start Practicing Today
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
              Ready to Accelerate Your Interview Preparation?
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Experience realistic interview rounds tailored to your role. Receive automated score benchmarks, targeted feedback, and personalized improvement areas.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to={isAuthenticated ? "/setup" : "/register"}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
              >
                <span>Start Free Interview</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/dashboard"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-white/10"
              >
                <span>View Dashboard</span>
              </Link>
            </div>

            {/* Micro Feature List */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Instant Evaluation Reports</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Free Practice Rounds</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;