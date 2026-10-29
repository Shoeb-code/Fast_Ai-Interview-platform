import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import ProfileSidebar from "./ProfileSidebar.jsx";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, logout, user } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navLinks = isAuthenticated
    ? [
        { name: "Home", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "History", path: "/history" },
      ]
    : [
        { name: "Home", path: "/" },
        { name: "Learn More", path: "/learn-more" },
      ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all duration-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 shadow-sm shadow-indigo-500/20 transition-transform duration-200 group-hover:scale-105">
              <Sparkles className="h-5 w-5 text-white" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold tracking-tight text-slate-900">
                  FastAI
                </span>
                <span className="text-base font-semibold text-indigo-600">
                  Interview
                </span>
              </div>
              <span className="text-[11px] font-medium tracking-wider text-slate-500 uppercase">
                Enterprise AI Prep
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-slate-100 text-slate-950 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden items-center gap-3 md:flex">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  Log in
                </Link>

                <Link
                  to="/register"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/setup"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition hover:bg-indigo-700"
                >
                  <span>Start Interview</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <button
                  onClick={() => setProfileOpen(true)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-200 hover:ring-slate-300"
                  title="Profile & Settings"
                >
                  {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="border-b border-slate-200 bg-white/95 px-4 pt-3 pb-5 shadow-lg backdrop-blur-xl md:hidden">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive(link.path)
                      ? "bg-indigo-50 font-semibold text-indigo-700"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="my-2 border-t border-slate-100 pt-2">
                {!isAuthenticated ? (
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      Log in
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setMenuOpen(false)}
                      className="w-full rounded-xl bg-slate-900 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                    >
                      Get Started
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/setup"
                      onClick={() => setMenuOpen(false)}
                      className="w-full rounded-xl bg-indigo-600 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
                    >
                      Start Interview
                    </Link>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setProfileOpen(true);
                      }}
                      className="w-full rounded-xl border border-slate-200 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      Account Profile ({user?.fullName || "User"})
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <ProfileSidebar
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
        user={user}
        logout={logout}
      />
    </>
  );
};

export default Navbar;