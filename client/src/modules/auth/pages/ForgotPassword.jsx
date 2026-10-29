import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../../shared/services/api";
import {
  Mail,
  ArrowRight,
  ArrowLeft,
  KeyRound,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setFormError("");

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
      setFormError("Please enter your email address.");
      return;
    }

    if (!validateEmail(cleanEmail)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/forgot-password", {
        email: cleanEmail,
      });

      if (!res.data?.success) {
        throw new Error(res.data?.message || "Failed to send OTP");
      }

      sessionStorage.setItem("resetEmail", cleanEmail);
      toast.success("Verification OTP sent successfully 📩");
      navigate("/verify-otp");
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to send OTP. Please try again.";
      setFormError(message);
      toast.error(message);
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
              Reset your password safely and quickly.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Don’t worry—we’ll verify your identity through a one-time verification code and have you back to your interview practice in minutes.
            </p>

            {/* 3 Step Recovery Flow */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    1. Submit Registered Email
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    We generate a secure, 6-digit verification OTP and route it to your inbox.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <KeyRound className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    2. Verify 6-Digit Code
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Enter your code within 5 minutes to confirm account authorization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    3. Set New Password
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Update your password and regain instant access to your sessions and reports.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Support Tip */}
            <div className="mt-10 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-900">Need help? </span>
              If you no longer have access to this email address, contact our support team at{" "}
              <span className="font-medium text-indigo-600">support@fastai-interview.com</span>.
            </div>
          </div>

          {/* Bottom Security Footer */}
          <div className="flex items-center gap-2 text-xs text-slate-400 border-t border-slate-100 pt-5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>256-bit encrypted • One-time secure verification tokens</span>
          </div>

        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-6 flex flex-col justify-center px-4 py-8 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Form Card Box */}
          <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5">
            
            {/* Header */}
            <div>
              <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                Account Recovery
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Forgot password?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Enter your registered email and we'll send a 6-digit code to verify your identity.
              </p>
            </div>

            {/* Error Alert */}
            {formError && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50/80 p-3.5 text-xs leading-relaxed text-red-700">
                <p className="font-semibold text-red-800">Recovery Error</p>
                <p className="mt-0.5">{formError}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSendOtp} className="mt-6 space-y-5">
              
              {/* Email Input */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Registered Email Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setFormError("");
                      setEmail(e.target.value);
                    }}
                    placeholder="name@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 shadow-xs"
                  />
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
                    <span>Sending Code...</span>
                  </>
                ) : (
                  <>
                    <span>Send Verification Code</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

            </form>

            {/* Back to Login Link */}
            <div className="mt-6 border-t border-slate-100 pt-5 text-center">
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to sign in</span>
              </Link>
            </div>

          </div>

          {/* Security Note */}
          <div className="mt-6 text-center text-xs text-slate-500">
            <span>For your security, one-time codes expire after </span>
            <span className="font-semibold text-slate-700">5 minutes</span>.
          </div>

        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;