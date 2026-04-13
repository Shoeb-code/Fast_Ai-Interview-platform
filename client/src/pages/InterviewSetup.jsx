import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

import SetupHero from "../components/interviewSetup/SetupHero";
import InterviewFormCard from "../components/interviewSetup/InterviewFormCard";
import RevisionHub from "../components/interviewSetup/RevisionHub";
import LearningLinks from "../components/interviewSetup/LearningLinks";
import PrepTips from "../components/interviewSetup/PrepTips";

const InterviewSetup = () => {
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("beginner");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleStart = async () => {
    if (!role.trim()) {
      toast.error(
        "Please enter your target role"
      );
      return;
    }
  
    try {
      setLoading(true);
  
      const token =
        localStorage.getItem(
          "token"
        );
  
      const res =
        await api.post(
          "/interview/start",
          {
            role,
            level,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
      console.log(
        "START RESPONSE:",
        res.data
      );
  
      navigate("/session", {
        state: {
          interview:
            res.data.interview,
        },
      });
    } catch (error) {
      console.error(
        "START INTERVIEW ERROR:",
        error.response?.data ||
          error
      );
  
      const message =
        error?.response?.data
          ?.message ||
        "Failed to start interview. Please try again.";
  
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="mx-auto max-w-7xl space-y-20 px-6 py-14">

        {/* ── Hero + Form ── */}
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <SetupHero />
          
          <InterviewFormCard
            role={role}
            setRole={setRole}
            level={level}
            setLevel={setLevel}
            loading={loading}
            onStart={handleStart}
          />
        </div>

        {/* ── Resource Cards ── */}
        <RevisionHub />

        {/* ── Prep Tips ── */}
        <PrepTips />

        {/* ── Quick Links ── */}
        <LearningLinks />

      </div>
    </div>
  );
};

export default InterviewSetup;
