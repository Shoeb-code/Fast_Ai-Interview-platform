import React from "react";
import { Routes, Route } from "react-router-dom";

// Landing Module
import { Home, LearnMore } from "../modules/landing";

// Auth Module
import {
  Login,
  Register,
  ForgotPassword,
  VerifyOtp,
  ResetPassword,
  useAuth,
} from "../modules/auth";

// Interview Module
import {
  InterviewSetup,
  InterviewSession,
  ResultDashboard,
} from "../modules/interview";

// Dashboard Module
import { Dashboard, History } from "../modules/dashboard";

// Profile Module
import { Profile } from "../modules/profile";

// Shared Components
import { ProtectedRoute } from "../shared";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public / Landing Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/learn-more" element={<LearnMore />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Protected Interview Routes */}
      <Route
        path="/setup"
        element={
          <ProtectedRoute>
            <InterviewSetup />
          </ProtectedRoute>
        }
      />
      <Route
        path="/session"
        element={
          <ProtectedRoute>
            <InterviewSession />
          </ProtectedRoute>
        }
      />
      <Route
        path="/result"
        element={
          <ProtectedRoute>
            <ResultDashboard />
          </ProtectedRoute>
        }
      />

      {/* Protected Profile Route */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Protected Dashboard & History Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;