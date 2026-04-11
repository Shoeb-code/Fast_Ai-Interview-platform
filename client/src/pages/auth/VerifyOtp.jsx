import React, {
    useState,
    useEffect,
    useRef,
  } from "react";
  import { useNavigate } from "react-router-dom";
  import toast from "react-hot-toast";
  import api from "../../services/api";
  
  const OTP_LENGTH = 6;
  
  const VerifyOtp = () => {
    const navigate = useNavigate();
  
    const [otp, setOtp] = useState(
      new Array(OTP_LENGTH).fill("")
    );
    const [email, setEmail] = useState("");
    const [loading, setLoading] =
      useState(false);
    const [resendLoading, setResendLoading] =
      useState(false);
    const [timer, setTimer] = useState(30);
  
    const inputRefs = useRef([]);
  
    useEffect(() => {
      const storedEmail =
        sessionStorage.getItem("resetEmail");
  
      if (!storedEmail) {
        toast.error(
          "Session expired. Please try again."
        );
        navigate("/forgot-password");
        return;
      }
  
      setEmail(storedEmail);
  
      inputRefs.current[0]?.focus();
    }, [navigate]);
  
    useEffect(() => {
      if (timer <= 0) return;
  
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
  
      return () =>
        clearInterval(interval);
    }, [timer]);
  
    const handleChange = (
      index,
      value
    ) => {
      if (!/^\d?$/.test(value)) return;
  
      const newOtp = [...otp];
      newOtp[index] = value;
  
      setOtp(newOtp);
  
      if (
        value &&
        index < OTP_LENGTH - 1
      ) {
        inputRefs.current[
          index + 1
        ]?.focus();
      }
    };
  
    const handleKeyDown = (
      index,
      e
    ) => {
      if (
        e.key === "Backspace" &&
        !otp[index] &&
        index > 0
      ) {
        inputRefs.current[
          index - 1
        ]?.focus();
      }
    };
  
    const handleVerify = async (e) => {
      e.preventDefault();
  
      const finalOtp = otp.join("");
  
      if (
        finalOtp.length !== OTP_LENGTH
      ) {
        toast.error(
          "Please enter complete OTP"
        );
        return;
      }
  
      try {
        setLoading(true);
  
        const res = await api.post(
          "/auth/verify-otp",
          {
            email,
            otp: finalOtp,
          }
        );
  
        if (!res.data?.success) {
          throw new Error(
            "Invalid OTP"
          );
        }
  
        sessionStorage.setItem(
          "verifiedOtp",
          finalOtp
        );
  
        toast.success(
          "OTP verified successfully ✅"
        );
  
        navigate("/reset-password");
      } catch (error) {
        toast.error(
          error?.response?.data
            ?.message ||
            "Invalid OTP"
        );
      } finally {
        setLoading(false);
      }
    };
  
    const handleResendOtp =
      async () => {
        try {
          setResendLoading(true);
  
          await api.post(
            "/auth/forgot-password",
            { email }
          );
  
          setTimer(30);
  
          toast.success(
            "OTP resent successfully 📩"
          );
        } catch (error) {
          toast.error(
            "Failed to resend OTP"
          );
        } finally {
          setResendLoading(false);
        }
      };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex items-center justify-center px-6">
        <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
              Secure Verification
            </p>
  
            <h2 className="mt-3 text-4xl font-bold">
              Verify OTP
            </h2>
  
            <p className="mt-3 text-sm text-gray-400">
              We’ve sent a 6-digit
              verification code to
            </p>
  
            <p className="mt-1 font-medium text-indigo-300">
              {email}
            </p>
          </div>
  
          <form
            onSubmit={handleVerify}
            className="mt-10"
          >
            <div className="flex justify-center gap-3">
              {otp.map(
                (digit, index) => (
                  <input
                    key={index}
                    ref={(el) =>
                      (inputRefs.current[
                        index
                      ] = el)
                    }
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) =>
                      handleChange(
                        index,
                        e.target.value
                      )
                    }
                    onKeyDown={(e) =>
                      handleKeyDown(
                        index,
                        e
                      )
                    }
                    className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5 text-center text-2xl font-bold outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
                  />
                )
              )}
            </div>
  
            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full rounded-2xl bg-indigo-600 py-3 font-medium shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 disabled:opacity-50"
            >
              {loading
                ? "Verifying..."
                : "Verify OTP"}
            </button>
          </form>
  
          <div className="mt-6 text-center text-sm text-gray-400">
            Didn’t receive code?{" "}
            {timer > 0 ? (
              <span>
                Resend in {timer}s
              </span>
            ) : (
              <button
                onClick={
                  handleResendOtp
                }
                disabled={
                  resendLoading
                }
                className="font-medium text-indigo-400 hover:text-indigo-300"
              >
                Resend OTP
              </button>
            )}
          </div>
  
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-400">
            <p>
              For your security, this
              code will expire in 5
              minutes.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default VerifyOtp;