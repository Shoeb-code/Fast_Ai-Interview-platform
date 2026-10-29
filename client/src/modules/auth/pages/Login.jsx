import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../shared/context/AuthContext";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormError("");
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!formData.email.trim() || !formData.password) {
      setFormError("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      await login({
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
      });
      navigate("/dashboard");
    } catch (error) {
      setFormError(
        error?.response?.data?.message ||
          error.message ||
          "Invalid credentials. Please verify your email and password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900 selection:bg-indigo-500 selection:text-white">
      <div className="grid min-h-screen lg:grid-cols-12">
        
        {/* Left Branding Showcase Panel (Desktop) */}
        <div className="relative hidden lg:col-span-6 lg:flex flex-col justify-between border-r border-slate-200/80 bg-white p-12 xl:p-16">
          
          {/* Subtle Ambient Light */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.08),transparent_50%)]"
          />

          {/* Middle Value Proposition */}
          <div className="my-auto max-w-lg w-full">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 xl:text-4xl leading-tight">
              Master technical interviews with AI-calibrated precision.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Practice realistic interview rounds, get evaluated against industry rubrics, and pinpoint your exact blind spots before facing hiring teams.
            </p>

            {/* Structured Value Highlights */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Domain-Specific Simulations
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Targeted questions custom-tailored for 500+ engineering, product, and data specializations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Multi-Factor Scoring Rubric
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Instant evaluation measuring technical accuracy, structural depth, and communication clarity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Targeted Revision Plans
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Actionable model answers and weak area detection to maximize practice efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Key Metric Strip */}
            <div className="mt-10 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-lg font-extrabold text-slate-900">12.5K+</p>
                  <p className="text-[11px] text-slate-500 font-medium">Candidates</p>
                </div>
                <div className="border-x border-slate-200">
                  <p className="text-lg font-extrabold text-slate-900">92%</p>
                  <p className="text-[11px] text-slate-500 font-medium">Pass Rate</p>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-slate-900">&lt; 2.4s</p>
                  <p className="text-[11px] text-slate-500 font-medium">AI Feedback</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Security Footer */}
          <div className="flex items-center gap-2 text-xs text-slate-400 border-t border-slate-100 pt-5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>256-bit encrypted • Private candidate records</span>
          </div>

        </div>

        {/* Right Form Column (Center Box) */}
        <div className="lg:col-span-6 flex flex-col justify-center px-4 py-8 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Login Card Box */}
          <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5">
            
            {/* Header */}
            <div>
              <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                Candidate Login
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Welcome back
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Enter your credentials to continue your interview practice sessions.
              </p>
            </div>

            {/* Error Alert (if any) */}
            {formError && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50/80 p-3.5 text-xs leading-relaxed text-red-700">
                <p className="font-semibold text-red-800">Authentication Error</p>
                <p className="mt-0.5">{formError}</p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="mt-6 space-y-4 sm:space-y-5">
              
              {/* Email Field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 shadow-xs"
                  />
                </div>
              </div>

              {/* Password Field with Eye Toggle */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-10 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 shadow-xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 transition"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:opacity-60 cursor-pointer"
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign in to Dashboard</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

            </form>

            {/* Bottom Register Link */}
            <div className="mt-6 border-t border-slate-100 pt-5 text-center text-sm text-slate-600">
              <span>Don't have an account? </span>
              <Link
                to="/register"
                className="font-semibold text-indigo-600 hover:text-indigo-800 transition"
              >
                Create free account
              </Link>
            </div>

          </div>

          {/* Help & Privacy note */}
          <div className="mt-6 text-center text-xs text-slate-500">
            <span>Need assistance? Contact </span>
            <span className="font-medium text-slate-700">support@fastai-interview.com</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;