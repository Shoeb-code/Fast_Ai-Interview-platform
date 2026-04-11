import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await login(formData);

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        
        {/* Left Branding Panel */}
        <div className="relative hidden overflow-hidden border-r border-white/10 px-16 lg:flex lg:flex-col lg:justify-center">
  
  {/* Background Glow */}
  <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
  <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
  <div className="absolute left-1/3 top-1/2 h-40 w-40 rounded-full bg-pink-500/5 blur-3xl" />

  <div className="relative z-10">
    {/* Badge */}
    <div className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-indigo-300">
      AI Powered Platform
    </div>

    {/* Heading */}
    <h1 className="mt-6 text-5xl font-bold leading-tight">
      Continue Your
      <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Interview Journey
      </span>
    </h1>

    {/* Subtext */}
    <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
      Practice with real-time AI mock interviews,
      advanced performance analytics, and
      enterprise-grade feedback reports built for
      placements and job success.
    </p>

    {/* Premium Metrics */}
    <div className="mt-10 grid grid-cols-2 gap-5">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-xl">
        <p className="text-sm text-gray-400">
          Interviews Taken
        </p>
        <h3 className="mt-2 text-3xl font-bold">
          120+
        </h3>
        <p className="mt-2 text-xs text-indigo-400">
          Live AI sessions
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-xl">
        <p className="text-sm text-gray-400">
          Success Rate
        </p>
        <h3 className="mt-2 text-3xl font-bold">
          92%
        </h3>
        <p className="mt-2 text-xs text-purple-400">
          Placement ready
        </p>
      </div>
    </div>

    {/* Floating Insight Card */}
    <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 shadow-2xl backdrop-blur-2xl">
      <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">
        AI Insight
      </p>

      <h3 className="mt-3 text-xl font-semibold">
        Smart Performance Reports
      </h3>

      <p className="mt-3 leading-8 text-gray-300">
        Get instant breakdowns of technical depth,
        confidence, clarity, and growth opportunities
        after every mock interview.
      </p>
    </div>

    {/* Trust Text */}
    <p className="mt-8 text-sm text-gray-500">
      Trusted by students, developers, and
      professionals preparing for real-world
      interviews.
    </p>
  </div>
</div>

        {/* Right Login Panel */}
        <div className="relative flex items-center justify-center px-6 py-12">
  {/* Background Glow */}
  <div className="absolute top-10 right-10 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
  <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

  <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-2xl">
    
    {/* Top Badge */}
    <div className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-indigo-300">
      Secure Login
    </div>

    {/* Heading */}
    <h2 className="mt-6 text-4xl font-bold leading-tight">
      Welcome Back
    </h2>

    <p className="mt-3 text-sm leading-7 text-gray-400">
      Sign in to access your AI dashboard,
      mock interviews, and performance reports.
    </p>

    {/* Social Buttons */}
    <div className="mt-6 grid grid-cols-2 gap-4">
      <button className="rounded-2xl border border-white/10 bg-white/[0.04] py-3 text-sm font-medium shadow-lg transition hover:bg-white/[0.08] hover:border-indigo-500/30">
        Google
      </button>

      <button className="rounded-2xl border border-white/10 bg-white/[0.04] py-3 text-sm font-medium shadow-lg transition hover:bg-white/[0.08] hover:border-purple-500/30">
        GitHub
      </button>
    </div>

    {/* Divider */}
    <div className="my-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-white/10" />
      <span className="text-xs text-gray-500">
        OR CONTINUE WITH EMAIL
      </span>
      <div className="h-px flex-1 bg-white/10" />
    </div>

    {/* Form */}
    <form
      onSubmit={handleLogin}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Password
        </label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          required
        />
      </div>

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-gray-400">
          <input
            type="checkbox"
            className="accent-indigo-500"
          />
          Remember me
        </label>

        <Link
          to="/forgot-password"
          className="text-indigo-400 transition hover:text-indigo-300"
        >
          Forgot password?
        </Link>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-medium shadow-xl shadow-indigo-500/20 transition duration-300 hover:scale-[1.01] hover:shadow-indigo-500/40 disabled:opacity-60"
      >
        {loading
          ? "Signing in..."
          : "Sign In"}
      </button>
    </form>

    {/* Bottom Link */}
    <p className="mt-6 text-center text-sm text-gray-400">
      Don’t have an account?{" "}
      <Link
        to="/register"
        className="font-medium text-indigo-400 hover:text-indigo-300"
      >
        Create one
      </Link>
    </p>
  </div>
</div>
      </div>
    </div>
  );
};

export default Login;