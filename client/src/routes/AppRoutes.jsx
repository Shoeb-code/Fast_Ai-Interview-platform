import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";

import Dashboard from "../pages/Dashboard.jsx";
import History from "../pages/History.jsx";

import InterviewSetup from "../pages/InterviewSetup.jsx";
import InterviewSession from "../pages/InterviewSession.jsx";
import ResultDashboard from "../pages/ResultDashboard.jsx";
import ForgotPassword from "../pages/auth/ForgotPassword.jsx";
import VerifyOtp from "../pages/auth/VerifyOtp.jsx";
import ResetPassword from "../pages/auth/ResetPassword.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";

import LearnMore from "../pages/LearnMore.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import Profile from "../pages/Profile.jsx";



const AppRoutes = () => {
  const {isAuthenticated} =useAuth()
  return (
    <Routes>
      {/* public */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/learn-more" element={<LearnMore />} />

      {/* interview */}


      <Route path="/setup" element={<ProtectedRoute> <InterviewSetup /></ProtectedRoute> } />
      <Route path="/session" element={<ProtectedRoute> <InterviewSession /></ProtectedRoute>} /> 
      <Route path="/result" element={<ProtectedRoute> <ResultDashboard /></ProtectedRoute>} /> 

      <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} /> 

      

      {/* dashboard */}
     <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /></ProtectedRoute>}/>
      <Route path="/history" element={<ProtectedRoute> <History /> </ProtectedRoute>} />
      

      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOtp />}/>
      <Route path="/reset-password" element={<ResetPassword />}/>
    </Routes>
  );
};

export default AppRoutes;