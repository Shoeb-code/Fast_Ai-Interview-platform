import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

import SessionHeader from "../components/interviewSession/SessionHeader";

import QuestionCard from "../components/interviewSession/QuestionCard";
import AnswerPanel from "../components/interviewSession/AnswerPanel";
import SessionSidebar from "../components/interviewSession/SessionSidebar";

const InterviewSession = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const interview = state?.interview;
  const questions = interview?.questions || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(120);
  const [loading, setLoading] = useState(false);

  const questionText =
    questions[currentQuestion]?.question ||
    questions[currentQuestion] ||
    "";

  const isLastQuestion = currentQuestion === questions.length - 1;

  /*
  |--------------------------------------------------------------------------
  | Timer
  |--------------------------------------------------------------------------
  */
  useEffect(() => {
    if (timeLeft <= 0) {
      handleNextQuestion();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);



  /*
  |--------------------------------------------------------------------------
  | Submit Current Answer
  |--------------------------------------------------------------------------
  */
  const submitCurrentAnswer = async () => {
    if (!answer.trim()) return null;
    const res = await api.post("/interview/submit-answer", {
      interviewId: interview._id,
      question: questionText,
      answer,
    });
    return res.data;
  };

  /*
  |--------------------------------------------------------------------------
  | Finish Interview
  |--------------------------------------------------------------------------
  */
  const finishInterview = async () => {
    try {
      const res = await api.post("/interview/finish", {
        interviewId: interview._id,
      });
      toast.success("Interview completed! Great job.");
      navigate("/result", { state: { result: res.data.interview } });
    } catch {
      toast.error("Failed to finish interview");
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Next Question
  |--------------------------------------------------------------------------
  */
  const handleNextQuestion = async () => {
    try {
      setLoading(true);
      await submitCurrentAnswer();

      if (!isLastQuestion) {
        setCurrentQuestion((prev) => prev + 1);
        setAnswer("");
        setTimeLeft(120);
        toast.success("Answer submitted");
      } else {
        await finishInterview();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Guard
  |--------------------------------------------------------------------------
  */
  if (!interview) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <p className="text-lg font-semibold text-slate-300">Session not found</p>
          <p className="mt-2 text-sm text-slate-500">
            Please start a new interview from the setup page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid min-h-screen gap-8 lg:grid-cols-3">

          {/* ── Main Column ── */}
          <div className="lg:col-span-2">
            <SessionHeader timeLeft={timeLeft} />

           

            <QuestionCard
              questionText={questionText}
              currentQuestion={currentQuestion}
              total={questions.length}
            />

            <AnswerPanel
              answer={answer}
              setAnswer={setAnswer}
              loading={loading}
              onSubmit={handleNextQuestion}
              isLastQuestion={isLastQuestion}
            />
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-span-1">
            <SessionSidebar
              interview={interview}
              currentQuestion={currentQuestion}
              questions={questions}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default InterviewSession;
