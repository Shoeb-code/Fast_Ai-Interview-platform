import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-slate-950 to-black">
      <div className="mx-auto max-w-7xl px-6 py-14">
        
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">
              AI Mock Interview
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Practice smarter with AI-powered interviews,
              real-time feedback, and detailed performance
              analytics.
            </p>

            <div className="mt-5 flex gap-4 text-sm text-gray-400">
              <span className="cursor-pointer hover:text-white">
                LinkedIn
              </span>
              <span className="cursor-pointer hover:text-white">
                GitHub
              </span>
              <span className="cursor-pointer hover:text-white">
                Twitter
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-400">
              Product
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
              <Link to="/">
                Features
              </Link>
              <Link to="/setup">
                Mock Interview
              </Link>
              <Link to="/dashboard">
                Dashboard
              </Link>
              <Link to="/history">
                Reports
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-400">
              Company
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
              <Link to="/">
                About
              </Link>
              <Link to="/">
                Careers
              </Link>
              <Link to="/">
                Contact
              </Link>
              <Link to="/">
                Blog
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-400">
              Legal
            </h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
              <Link to="/">
                Privacy Policy
              </Link>
              <Link to="/">
                Terms of Service
              </Link>
              <Link to="/">
                Security
              </Link>
              <Link to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 AI Mock Interview. All rights reserved.
          </p>

          <p>
            Built with AI for future professionals 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;