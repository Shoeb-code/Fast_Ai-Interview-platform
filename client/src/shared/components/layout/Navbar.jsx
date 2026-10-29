import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import ProfileSidebar from "./ProfileSidebar.jsx";

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, logout, user } =
    useAuth();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const navLinks = isAuthenticated
    ? [
        { name: "Home", path: "/" },
        {
          name: "Dashboard",
          path: "/dashboard",
        },
        { name: "History", path: "/history" },
      ]
    : [{ name: "Home", path: "/" }];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
              <span className="text-sm font-bold text-white">
                AI
              </span>
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight text-white">
                Mock{" "}
                <span className="text-purple-500">
                  Interview
                </span>
              </h1>

              <p className="text-xs text-gray-400">
                SaaS Platform
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition ${
                  location.pathname === link.path
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden items-center gap-3 md:flex">
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>

                <Link to="/register">
                  <Button size="sm">
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/setup">
                  <Button size="sm">
                    Start Interview
                  </Button>
                </Link>

                <button
                  onClick={() =>
                    setProfileOpen(true)
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:ring-indigo-500/30"
                >
                  <span className="text-sm font-semibold text-white">
                    {user?.fullName?.charAt(0) ||
                      "U"}
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      <ProfileSidebar
        isOpen={profileOpen}
        onClose={() =>
        setProfileOpen(false)
        }
        user={user}
        logout={logout}
      />
    </>
  );
};

export default Navbar;