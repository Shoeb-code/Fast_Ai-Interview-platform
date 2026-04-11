import React, {
    useState,
    useEffect,
  } from "react";
  import {
    useNavigate,
    Link,
  } from "react-router-dom";
  import toast from "react-hot-toast";
  import api from "../../services/api";
  
  const ResetPassword = () => {
    const navigate = useNavigate();
  
    const [password, setPassword] =
      useState("");
    const [
      confirmPassword,
      setConfirmPassword,
    ] = useState("");
  
    const [email, setEmail] =
      useState("");
    const [otp, setOtp] =
      useState("");
  
    const [loading, setLoading] =
      useState(false);
  
    const [
      showPassword,
      setShowPassword,
    ] = useState(false);
  
    useEffect(() => {
      const storedEmail =
        sessionStorage.getItem(
          "resetEmail"
        );
  
      const storedOtp =
        sessionStorage.getItem(
          "verifiedOtp"
        );
  
      if (
        !storedEmail ||
        !storedOtp
      ) {
        toast.error(
          "Session expired. Please try again."
        );
  
        navigate(
          "/forgot-password"
        );
        return;
      }
  
      setEmail(storedEmail);
      setOtp(storedOtp);
    }, [navigate]);
  
    const getStrength = () => {
      if (password.length < 6)
        return "Weak";
      if (password.length < 10)
        return "Medium";
      return "Strong";
    };
  
    const handleReset = async (
      e
    ) => {
      e.preventDefault();
  
      if (
        password.length < 6
      ) {
        toast.error(
          "Password must be at least 6 characters"
        );
        return;
      }
  
      if (
        password !==
        confirmPassword
      ) {
        toast.error(
          "Passwords do not match"
        );
        return;
      }
  
      try {
        setLoading(true);
  
        const res =
          await api.post(
            "/auth/reset-password",
            {
              email,
              otp,
              password,
            }
          );
  
        if (
          !res.data?.success
        ) {
          throw new Error(
            "Failed to reset password"
          );
        }
  
        sessionStorage.removeItem(
          "resetEmail"
        );
        sessionStorage.removeItem(
          "verifiedOtp"
        );
  
        toast.success(
          "Password reset successful 🔐"
        );
  
        navigate("/login");
      } catch (error) {
        console.error(
          "Reset Password Error:",
          error
        );
  
        toast.error(
          error?.response?.data
            ?.message ||
            "Failed to reset password"
        );
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
        <div className="grid min-h-screen lg:grid-cols-2">
          {/* Left Branding */}
          <div className="hidden flex-col justify-center border-r border-white/10 px-16 lg:flex">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
              Security Update
            </p>
  
            <h1 className="mt-4 text-5xl font-bold leading-tight">
              Create a New
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Secure Password
              </span>
            </h1>
  
            <p className="mt-6 max-w-lg text-lg text-gray-400">
              Choose a strong
              password to protect your
              interview reports,
              dashboard, and profile.
            </p>
  
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-gray-400">
                Security Tip
              </p>
  
              <h3 className="mt-2 text-2xl font-bold">
                Use Strong Passwords
              </h3>
  
              <p className="mt-3 text-sm text-gray-500">
                Use uppercase,
                lowercase, numbers,
                and special characters
                for better protection.
              </p>
            </div>
          </div>
  
          {/* Right Form */}
          <div className="flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <h2 className="text-3xl font-bold">
                Reset Password
              </h2>
  
              <p className="mt-2 text-sm text-gray-400">
                Create your new secure
                password
              </p>
  
              <form
                onSubmit={
                  handleReset
                }
                className="mt-8 space-y-5"
              >
                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    New Password
                  </label>
  
                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter new password"
                    value={
                      password
                    }
                    onChange={(e) =>
                      setPassword(
                        e.target
                          .value
                      )
                    }
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-indigo-500"
                  />
  
                  <p className="mt-2 text-xs text-gray-400">
                    Strength:{" "}
                    <span className="text-indigo-400">
                      {getStrength()}
                    </span>
                  </p>
                </div>
  
                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Confirm Password
                  </label>
  
                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm password"
                    value={
                      confirmPassword
                    }
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target
                          .value
                      )
                    }
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-indigo-500"
                  />
                </div>
  
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="text-sm text-indigo-400"
                >
                  {showPassword
                    ? "Hide Password"
                    : "Show Password"}
                </button>
  
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-indigo-600 py-3 font-medium shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 disabled:opacity-50"
                >
                  {loading
                    ? "Updating..."
                    : "Reset Password"}
                </button>
  
                <Link
                  to="/login"
                  className="block text-center text-sm text-indigo-400"
                >
                  Back to login
                </Link>
              </form>
  
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-400">
                <p>
                  Your password is
                  encrypted and securely
                  stored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ResetPassword;