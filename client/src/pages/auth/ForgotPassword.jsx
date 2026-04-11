import React, { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");
  const [loading, setLoading] =
    useState(false);

  const validateEmail = (
    value
  ) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      value
    );
  };

  const handleSendOtp = async (
    e
  ) => {
    e.preventDefault();

    const cleanEmail = email
      .trim()
      .toLowerCase();

    if (
      !validateEmail(cleanEmail)
    ) {
      toast.error(
        "Please enter a valid email"
      );
      return;
    }

    try {
      setLoading(true);

      const res =
        await api.post(
          "/auth/forgot-password",
          {
            email: cleanEmail,
          }
        );

      if (
        !res.data?.success
      ) {
        throw new Error(
          res.data?.message ||
            "Failed to send OTP"
        );
      }

      sessionStorage.setItem(
        "resetEmail",
        cleanEmail
      );

      toast.success(
        "OTP sent successfully 📩"
      );

      navigate(
        "/verify-otp"
      );
    } catch (error) {
      console.error(
        "Forgot Password Error:",
        error
      );

      toast.error(
        error?.response?.data
          ?.message ||
          error?.message ||
          "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Branding Panel */}
        <div className="hidden flex-col justify-center border-r border-white/10 px-16 lg:flex">
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
            Account Recovery
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">
            Reset Your
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Secure Access
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-gray-400">
            Don’t worry — we’ll help
            you securely regain access
            to your interview dashboard
            and reports.
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-gray-400">
              Security Layer
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              OTP Verification
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              A secure 6-digit OTP
              will be sent to your
              registered email.
            </p>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <div>
              <h2 className="text-3xl font-bold">
                Forgot Password
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Enter your registered
                email to receive OTP
              </p>
            </div>

            <form
              onSubmit={
                handleSendOtp
              }
              className="mt-8 space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-indigo-600 py-3 font-medium shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "Sending OTP..."
                  : "Send OTP"}
              </button>

              <Link
                to="/login"
                className="block text-center text-sm font-medium text-indigo-400 hover:text-indigo-300"
              >
                Back to login
              </Link>
            </form>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-400">
              <p>
                For your protection,
                the OTP expires in 5
                minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;