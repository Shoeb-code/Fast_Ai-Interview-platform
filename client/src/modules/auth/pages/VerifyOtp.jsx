import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../../shared/services/api";
import {
  KeyRound,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  RotateCw,
  Mail,
  CheckCircle2,
} from "lucide-react";

const OTP_LENGTH = 6;

const VerifyOtp = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [formError, setFormError] = useState("");

  const inputRefs = useRef([]);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("resetEmail");

    if (!storedEmail) {
      toast.error("Session expired. Please request a new code.");
      navigate("/forgot-password");
      return;
    }

    setEmail(storedEmail);
    // Auto-focus first input
    inputRefs.current[0]?.focus();
  }, [navigate]);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (index, value) => {
    setFormError("");
    // Accept only digits
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto advance focus
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    setFormError("");
    const pastedData = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(pastedData)) return;

    const digits = pastedData.slice(0, OTP_LENGTH).split("");
    const newOtp = [...otp];
    digits.forEach((digit, i) => {
      newOtp[i] = digit;
    });
    setOtp(newOtp);

    const focusIndex = Math.min(digits.length, OTP_LENGTH - 1);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setFormError("");

    const finalOtp = otp.join("");

    if (finalOtp.length !== OTP_LENGTH) {
      setFormError("Please enter all 6 digits of the verification code.");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/verify-otp", {
        email,
        otp: finalOtp,
      });

      if (!res.data?.success) {
        throw new Error(res.data?.message || "Invalid or expired OTP");
      }

      sessionStorage.setItem("verifiedOtp", finalOtp);
      toast.success("Verification successful! Please choose a new password.");
      navigate("/reset-password");
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Invalid or expired OTP. Please try again.";
      setFormError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setFormError("");
    try {
      setResendLoading(true);

      await api.post("/auth/forgot-password", { email });

      setTimer(30);
      setOtp(new Array(OTP_LENGTH).fill(""));
      inputRefs.current[0]?.focus();

      toast.success("A fresh verification code has been sent 📩");
    } catch (error) {
      const msg =
        error?.response?.data?.message || "Failed to resend code. Please try again.";
      setFormError(msg);
      toast.error(msg);
    } finally {
      setResendLoading(false);
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
              Two-step verification keeps your account safe.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We require a quick one-time code to confirm account ownership before any password changes are authorized.
            </p>

            {/* Step Milestones */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Step 1: Request Initiated
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    One-time code dispatched to {email || "your registered email"}.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <KeyRound className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Step 2: Enter 6-Digit Code (Current)
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Codes are valid for 5 minutes. Check spam folder if not received.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 opacity-60">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Step 3: Choose New Password
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    Immediate re-authentication and session recovery.
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery Note */}
            <div className="mt-10 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-900">Didn't get the email? </span>
              Double check your spam or promotion tabs. If you made a typo in your email, you can{" "}
              <Link
                to="/forgot-password"
                className="font-medium text-indigo-600 hover:text-indigo-800 underline underline-offset-2"
              >
                re-enter email
              </Link>
              .
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
          <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5">
            {/* Header */}
            <div>
              <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                Step 2 of 3 • Identity Verification
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Enter verification code
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We sent a 6-digit one-time code to{" "}
                <span className="font-semibold text-slate-900">{email}</span>.
              </p>
            </div>

            {/* Error Alert */}
            {formError && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50/80 p-3.5 text-xs leading-relaxed text-red-700">
                <p className="font-semibold text-red-800">Verification Error</p>
                <p className="mt-0.5">{formError}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleVerify} className="mt-6 space-y-6">
              {/* 6 Digit Inputs */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  6-Digit OTP Code
                </label>
                <div
                  className="flex justify-between gap-2 sm:gap-3"
                  onPaste={handlePaste}
                >
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="h-12 w-11 sm:h-14 sm:w-13 text-center text-xl sm:text-2xl font-bold text-slate-900 rounded-xl border border-slate-300 bg-white outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 shadow-xs"
                    />
                  ))}
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
                    <span>Verifying Code...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm & Continue</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {/* Resend OTP Row */}
            <div className="mt-6 border-t border-slate-100 pt-5 text-center text-sm text-slate-600">
              <span>Didn’t receive the code? </span>
              {timer > 0 ? (
                <span className="font-semibold text-slate-700">
                  Resend available in {timer}s
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendLoading}
                  className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-800 transition cursor-pointer"
                >
                  <RotateCw
                    className={`h-3.5 w-3.5 ${
                      resendLoading ? "animate-spin" : ""
                    }`}
                  />
                  <span>Resend OTP</span>
                </button>
              )}
            </div>

            {/* Change Email Link */}
            <div className="mt-4 text-center">
              <Link
                to="/forgot-password"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Try a different email address</span>
              </Link>
            </div>
          </div>

          {/* Security Note */}
          <div className="mt-6 text-center text-xs text-slate-500">
            <span>Codes are single-use and automatically expire in </span>
            <span className="font-semibold text-slate-700">5 minutes</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;