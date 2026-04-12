import React, {
  useState,
  useRef,
  useEffect,
} from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const navigate =
    useNavigate();

  const {
    completeLogin,
  } = useAuth();

  const timerRef =
    useRef(null);

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      password: "",
      otp: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [otpSent, setOtpSent] =
    useState(false);

  const [timer, setTimer] =
    useState(0);

  /*
  --------------------------------
  HANDLE INPUT
  --------------------------------
  */
  const handleChange = (
    e
  ) => {
    setFormData(
      (prev) => ({
        ...prev,
        [e.target.name]:
          e.target.value,
      })
    );
  };

  /*
  --------------------------------
  SEND OTP
  --------------------------------
  */
  const handleSendOtp =
    async () => {
      if (
        !formData.email
      ) {
        toast.error(
          "Please enter email first"
        );
        return;
      }

      try {
        setLoading(
          true
        );

        await api.post(
          "/auth/send-register-otp",
          {
            email:
              formData.email,
          }
        );

        toast.success(
          "OTP sent successfully ✨"
        );

        setOtpSent(
          true
        );

        startTimer();
      } catch (
        error
      ) {
        toast.error(
          error
            ?.response
            ?.data
            ?.message ||
            "Failed to send OTP"
        );
      } finally {
        setLoading(
          false
        );
      }
    };

  /*
  --------------------------------
  REGISTER
  --------------------------------
  */
  const handleRegister =
    async (e) => {
      e.preventDefault();

      try {
        setLoading(
          true
        );

        const res =
          await api.post(
            "/auth/verify-register-otp",
            formData
          );

        completeLogin(
          res.data.token,
          res.data.user
        );

        toast.success(
          "Account created successfully 🎉"
        );

        navigate(
          "/dashboard"
        );
      } catch (
        error
      ) {
        toast.error(
          error
            ?.response
            ?.data
            ?.message ||
            "Registration failed"
        );
      } finally {
        setLoading(
          false
        );
      }
    };

  /*
  --------------------------------
  TIMER
  --------------------------------
  */
  const startTimer = () => {
    setTimer(30);

    clearInterval(
      timerRef.current
    );

    timerRef.current =
      setInterval(() => {
        setTimer(
          (
            prev
          ) => {
            if (
              prev <= 1
            ) {
              clearInterval(
                timerRef.current
              );
              return 0;
            }

            return (
              prev - 1
            );
          }
        );
      }, 1000);
  };

  useEffect(() => {
    return () =>
      clearInterval(
        timerRef.current
      );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT PANEL */}
        <div className="relative hidden overflow-hidden border-r border-white/10 px-16 lg:flex lg:flex-col lg:justify-center">
          <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.04]">
            <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Next Gen Interview SaaS
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Unlock Your
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                AI Career Edge
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              Practice with intelligent AI interviews, real-time reports, and performance analytics.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative flex items-center justify-center px-6 py-12">
          <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500" />

            <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Secure Signup
            </div>

            <h2 className="mt-6 text-4xl font-bold">
              Create Your
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                AI Career Account
              </span>
            </h2>

            <form
              onSubmit={
                handleRegister
              }
              className="mt-8 space-y-5"
            >
              <input
                type="text"
                name="fullName"
                value={
                  formData.fullName
                }
                onChange={
                  handleChange
                }
                placeholder="Full name"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                required
              />

              <input
                type="email"
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                placeholder="Email"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                required
              />

              <input
                type="password"
                name="password"
                value={
                  formData.password
                }
                onChange={
                  handleChange
                }
                placeholder="Password"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                required
              />

              {!otpSent ? (
                <button
                  type="button"
                  onClick={
                    handleSendOtp
                  }
                  disabled={
                    loading
                  }
                  className="w-full rounded-2xl bg-gradient-to-r from-indigo-700 via-purple-700 to-cyan-700 py-3 font-semibold"
                >
                  {loading
                    ? "Sending OTP..."
                    : "Send Verification OTP"}
                </button>
              ) : (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="otp"
                    value={
                      formData.otp
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Enter OTP"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                    required
                  />

                  <button
                    type="submit"
                    disabled={
                      loading
                    }
                    className="w-full rounded-2xl bg-gradient-to-r from-emerald-700 via-cyan-700 to-sky-700 py-3 font-semibold"
                  >
                    {loading
                      ? "Creating..."
                      : "Verify & Continue"}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    {timer >
                    0
                      ? `Resend in ${timer}s`
                      : "You can resend OTP"}
                  </p>
                </div>
              )}
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-emerald-400"
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