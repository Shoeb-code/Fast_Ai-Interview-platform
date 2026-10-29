export { default as Login } from "./pages/Login.jsx";
export { default as Register } from "./pages/Register.jsx";
export { default as ForgotPassword } from "./pages/ForgotPassword.jsx";
export { default as VerifyOtp } from "./pages/VerifyOtp.jsx";
export { default as ResetPassword } from "./pages/ResetPassword.jsx";

export * as authService from "./services/auth.service.js";
export { AuthProvider, useAuth } from "../../shared/context/AuthContext.jsx";
