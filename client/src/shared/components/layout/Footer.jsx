import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-12">
          
          {/* Brand Info (2 cols on tablet+) */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-sm">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                FastAI <span className="text-indigo-600 font-semibold">Interview</span>
              </span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-slate-500 max-w-sm">
              An enterprise-grade interview preparation platform leveraging intelligent evaluation models to help candidates build confidence, depth, and mastery.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium text-slate-600">
                AI Evaluation Models Operational (99.9% uptime)
              </span>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Platform
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/setup" className="hover:text-slate-900 transition-colors">
                  Mock Interview
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-slate-900 transition-colors">
                  Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-slate-900 transition-colors">
                  Session History
                </Link>
              </li>
              <li>
                <Link to="/learn-more" className="hover:text-slate-900 transition-colors">
                  Methodology
                </Link>
              </li>
            </ul>
          </div>

          {/* Specializations Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Domains
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <span className="text-slate-600">Frontend Engineering</span>
              </li>
              <li>
                <span className="text-slate-600">Backend & API Systems</span>
              </li>
              <li>
                <span className="text-slate-600">Distributed Architecture</span>
              </li>
              <li>
                <span className="text-slate-600">DevOps & Cloud</span>
              </li>
            </ul>
          </div>

          {/* Company / Legal Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Account & Legal
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/login" className="hover:text-slate-900 transition-colors">
                  Candidate Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-slate-900 transition-colors">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-slate-900 transition-colors">
                  Profile Settings
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Privacy & Terms</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Fast AI Interview Platform. All rights reserved.</p>
          <p className="font-medium text-slate-600">
            Crafted for engineers, developers, and future leaders
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;