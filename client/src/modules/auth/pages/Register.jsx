import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../shared/services/api";
import toast from "react-hot-toast";
import { useAuth } from "../../../shared/context/AuthContext";
import {
  User,
  Mail,
  Lock,
  KeyRound,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  RotateCw,
} from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const { completeLogin, isAuthenticated } = useAuth();
  const timerRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    otp: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);
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

  const startTimer = () => {
    setTimer(30);
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  /*
  --------------------------------
  SEND OTP
  --------------------------------
  */
  const handleSendOtp = async () => {
    setFormError("");

    if (!formData.fullName.trim()) {
      setFormError("Please enter your full name.");
      return;
    }

    const cleanEmail = formData.email.trim().toLowerCase();
    if (!cleanEmail) {
      setFormError("Please enter your email address.");
      return;
    }

    if (!validateEmail(cleanEmail)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      setFormError("Password must be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/send-register-otp", {
        email: cleanEmail,
      });

      if (!res.data?.success) {
        throw new Error(res.data?.message || "Failed to send OTP");
      }

      toast.success("Verification code sent to your email 📩");
      setOtpSent(true);
      startTimer();
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to send verification code. Please check your email.";
      setFormError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  /*
  --------------------------------
  VERIFY & REGISTER
  --------------------------------
  */
  const handleRegister = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!formData.otp || formData.otp.trim().length !== 6) {
      setFormError("Please enter the 6-digit verification code.");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/verify-register-otp", {
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
        otp: formData.otp.trim(),
      });

      if (!res.data?.success) {
        throw new Error(res.data?.message || "Registration failed");
      }

      completeLogin(res.data.token, res.data.user);
      toast.success("Account created successfully 🎉");
      navigate("/dashboard");
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Registration failed. Please check the OTP and try again.";
      setFormError(msg);
      toast.error(msg);
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

          {/* Value Proposition */}
          <div className="my-auto max-w-lg w-full">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 xl:text-4xl leading-tight">
              Accelerate your interview readiness with AI.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Create your candidate account to practice realistic interview rounds, get scored against industry rubrics, and land your dream tech offer.
            </p>

            {/* Structured Value Highlights */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    500+ Role Specializations
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Targeted practice for Frontend, Backend, Fullstack, ML, DevOps, and Product roles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Live Answer Evaluation
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Sub-3s latency feedback measuring technical depth, problem solving, and structure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    100% Free Practice Tier
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    No credit card required. Start your first practice round in less than 2 minutes.
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

        {/* Right Form Column */}
        <div className="lg:col-span-6 flex flex-col justify-center px-4 py-8 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5">
            {/* Header */}
            <div>
              <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                Candidate Registration
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Create your account
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Get started with free AI-powered mock interviews and feedback.
              </p>
            </div>

            {/* Error Alert */}
            {formError && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50/80 p-3.5 text-xs leading-relaxed text-red-700">
                <p className="font-semibold text-red-800">Registration Notice</p>
                <p className="mt-0.5">{formError}</p>
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleRegister} className="mt-6 space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    disabled={otpSent}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 shadow-xs disabled:bg-slate-50 disabled:text-slate-500"
                  />
                </div>
              </div>

              {/* Email */}
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
                    disabled={otpSent}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 shadow-xs disabled:bg-slate-50 disabled:text-slate-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Minimum 6 characters"
                    autoComplete="new-password"
                    disabled={otpSent}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-10 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 shadow-xs disabled:bg-slate-50 disabled:text-slate-500"
                  />
                  {!otpSent && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Verification Code Step */}
              {!otpSent ? (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:opacity-60 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Sending Code...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Verification Code</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              ) : (
                <div className="space-y-4 rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-indigo-900">
                        6-Digit Verification Code
                      </label>
                      <button
                        type="button"
                        onClick={() => setOtpSent(false)}
                        className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition"
                      >
                        Edit Details
                      </button>
                    </div>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-indigo-400">
                        <KeyRound className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        name="otp"
                        maxLength={6}
                        value={formData.otp}
                        onChange={handleChange}
                        placeholder="123456"
                        required
                        className="w-full rounded-xl border border-indigo-200 bg-white pl-10 pr-4 py-2.5 text-center text-lg font-bold tracking-widest text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 shadow-xs"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <>
                        <span>Verify & Create Account</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-xs text-slate-500">
                    {timer > 0 ? (
                      <span>Resend code available in {timer}s</span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={loading}
                        className="inline-flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800 transition cursor-pointer"
                      >
                        <RotateCw className="h-3 w-3" />
                        <span>Resend Verification Code</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </form>

            {/* Bottom Login Link */}
            <div className="mt-6 border-t border-slate-100 pt-5 text-center text-sm text-slate-600">
              <span>Already have an account? </span>
              <Link
                to="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-800 transition"
              >
                Sign in
              </Link>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-6 text-center text-xs text-slate-500">
            <span>By registering, you agree to our </span>
            <span className="font-medium text-slate-700">Terms of Service</span>
            <span> and </span>
            <span className="font-medium text-slate-700">Privacy Policy</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;