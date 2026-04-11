import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await register(formData);

      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        
        {/* Left Branding Panel */}
        <div className="relative hidden overflow-hidden border-r border-white/10 px-16 lg:flex lg:flex-col lg:justify-center">
          {/* Glow Background */}
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
  
          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
              Start Your Journey
            </div>
  
            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Build Your
              <span className="block bg-gradient-to-r from-emerald-700 via-cyan-700 to-sky-400 bg-clip-text text-transparent">
                AI Career Edge
              </span>
            </h1>
  
            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
              Join the next generation interview platform
              designed for placements, internships, and
              real-world job success.
            </p>
  
            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm text-gray-400">
                  Unlimited Practice
                </p>
                <h3 className="mt-2 text-3xl font-bold">
                   Unlimited
                </h3>
              </div>
  
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm text-gray-400">
                  AI Reports
                </p>
                <h3 className="mt-2 text-3xl font-bold">
                  Live
                </h3>
              </div>
            </div>
          </div>
        </div>
  
        {/* Right Register Panel */}
        <div className="relative flex items-center justify-center px-6 py-12">
          {/* Glow */}
          <div className="absolute top-10 right-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
  
          <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-2xl">
            
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
              Create New Account
            </div>
  
            <h2 className="mt-6 text-4xl font-bold">
              Join Platform
            </h2>
  
            <p className="mt-3 text-sm leading-7 text-gray-400">
              Start your personalized AI interview journey.
            </p>
  
            <form
              onSubmit={handleRegister}
              className="mt-8 space-y-5"
            >
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                required
              />
  
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                required
              />
  
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                required
              />
  
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-emerald-800 to-cyan-800 py-3 font-medium shadow-xl shadow-emerald-500/20 transition hover:scale-[1.01]"
              >
                {loading
                  ? "Creating..."
                  : "Create Account"}
              </button>
            </form>
  
            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-emerald-600 hover:text-emerald-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;