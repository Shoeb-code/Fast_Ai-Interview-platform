import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../../shared/services/api";
import {
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  KeyRound,
} from "lucide-react";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("resetEmail");
    const storedOtp = sessionStorage.getItem("verifiedOtp");

    if (!storedEmail || !storedOtp) {
      toast.error("Session expired. Please request a new verification code.");
      navigate("/forgot-password");
      return;
    }

    setEmail(storedEmail);
    setOtp(storedOtp);
  }, [navigate]);

  const calculateStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 6) score++;
    if (pwd.length >= 10) score++;
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd) || /[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 1) return { label: "Weak", color: "bg-red-500", width: "w-1/4", text: "text-red-600" };
    if (score === 2) return { label: "Fair", color: "bg-amber-500", width: "w-2/4", text: "text-amber-600" };
    if (score === 3) return { label: "Good", color: "bg-blue-500", width: "w-3/4", text: "text-blue-600" };
    return { label: "Strong", color: "bg-emerald-500", width: "w-full", text: "text-emerald-600" };
  };

  const strength = calculateStrength(password);

  const handleReset = async (e) => {
    e.preventDefault();
    setFormError("");

    if (password.length < 6) {
      setFormError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Passwords do not match. Please ensure both fields are identical.");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/auth/reset-password", {
        email,
        otp,
        password,
      });

      if (!res.data?.success) {
        throw new Error(res.data?.message || "Failed to reset password");
      }

      sessionStorage.removeItem("resetEmail");
      sessionStorage.removeItem("verifiedOtp");

      toast.success("Password updated successfully! Please sign in 🔐");
      navigate("/login");
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to reset password. Please start the verification process again.";
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
              Create a new secure password for your account.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Almost done! Set a strong password to protect your candidate transcripts, performance rubrics, and tailored practice schedules.
            </p>

            {/* Password Criteria List */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    At least 6 characters
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Longer passphrases (10+ characters) provide significantly higher security.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Mix letters & numbers
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Combine uppercase, lowercase, numbers, and symbols to resist brute-force checks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Unique to this platform
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Never reuse sensitive passwords that you use for banking or personal email.
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Account Banner */}
            <div className="mt-10 rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-4 text-xs text-slate-700 leading-relaxed">
              <div className="flex items-center gap-2 font-semibold text-emerald-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Identity verified successfully</span>
              </div>
              <p className="mt-1 text-slate-600">
                Authorized for <span className="font-medium text-slate-900">{email}</span>. Once changed, all previous sessions will be invalidated.
              </p>
            </div>
          </div>

          {/* Bottom Security Footer */}
          <div className="flex items-center gap-2 text-xs text-slate-400 border-t border-slate-100 pt-5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Encrypted with bcrypt (cost factor 10) • Zero plaintext storage</span>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-6 flex flex-col justify-center px-4 py-8 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5">
            {/* Header */}
            <div>
              <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                Step 3 of 3 • Final Step
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Set new password
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Choose a strong new password for{" "}
                <span className="font-semibold text-slate-900">{email}</span>.
              </p>
            </div>

            {/* Error Alert */}
            {formError && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50/80 p-3.5 text-xs leading-relaxed text-red-700">
                <p className="font-semibold text-red-800">Error</p>
                <p className="mt-0.5">{formError}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleReset} className="mt-6 space-y-4 sm:space-y-5">
              {/* New Password */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setFormError("");
                      setPassword(e.target.value);
                    }}
                    placeholder="Minimum 6 characters"
                    autoComplete="new-password"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-10 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 shadow-xs"
                  />
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
                </div>

                {/* Password Strength Meter */}
                {password && (
                  <div className="mt-2.5">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-500">Strength:</span>
                      <span className={`font-semibold ${strength.text}`}>
                        {strength.label}
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${strength.color} ${strength.width}`}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Confirm New Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <KeyRound className="h-4 w-4" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => {
                      setFormError("");
                      setConfirmPassword(e.target.value);
                    }}
                    placeholder="Re-enter your new password"
                    autoComplete="new-password"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-10 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 shadow-xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 transition cursor-pointer"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p className="mt-1 text-xs text-red-600">
                    Passwords do not match yet.
                  </p>
                )}
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
                    <span>Updating Password...</span>
                  </>
                ) : (
                  <>
                    <span>Reset Password & Sign In</span>
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
                <span>Return to sign in</span>
              </Link>
            </div>
          </div>

          {/* Security Note */}
          <div className="mt-6 text-center text-xs text-slate-500">
            <span>After resetting, use your new credentials to log into your account.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;