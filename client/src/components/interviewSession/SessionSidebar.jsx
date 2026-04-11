import React from "react";
import {
  Briefcase,
  Layers,
  ListChecks,
  CheckCircle2,
  Circle,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const levelColors = {
  beginner: {
    badge:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
  },
  intermediate: {
    badge:
      "border-amber-500/20 bg-amber-500/10 text-amber-300",
  },
  advanced: {
    badge:
      "border-red-500/20 bg-red-500/10 text-red-300",
  },
};

const SessionSidebar = ({
  interview,
  currentQuestion,
  questions,
}) => {
  const colors =
    levelColors[interview?.level?.toLowerCase()] ||
    levelColors.beginner;

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col gap-5">
      {/* Session Overview */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-2xl">
        <div className="h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

        <div className="p-6">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-300">
            Session Overview
          </p>

          {/* Role */}
          <div className="mb-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-indigo-500/10 p-2">
                <Briefcase
                  size={15}
                  className="text-indigo-300"
                />
              </div>

              <div>
                <p className="text-[11px] text-slate-500">
                  Target Role
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {interview?.role || "—"}
                </p>
              </div>
            </div>
          </div>

          {/* Difficulty */}
          <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-purple-500/10 p-2">
                <Layers
                  size={15}
                  className="text-purple-300"
                />
              </div>

              <div>
                <p className="text-[11px] text-slate-500">
                  Difficulty
                </p>

                <span
                  className={`mt-1 inline-block rounded-full border px-3 py-1 text-xs font-semibold capitalize ${colors.badge}`}
                >
                  {interview?.level || "—"}
                </span>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div>
            <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
              <span>Interview Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/[0.04]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Questions Tracker */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl">
        <div className="mb-5 flex items-center gap-2">
          <ListChecks
            size={14}
            className="text-slate-400"
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Question Tracker
          </p>
        </div>

        <div className="space-y-2">
          {questions.map((q, i) => {
            const text =
              typeof q === "string"
                ? q
                : q?.question || "";

            const isDone = i < currentQuestion;
            const isActive = i === currentQuestion;

            return (
              <div
                key={i}
                className={`rounded-2xl border p-3 transition-all duration-300 ${
                  isActive
                    ? "border-indigo-500/30 bg-indigo-500/[0.08]"
                    : isDone
                    ? "border-white/5 bg-white/[0.02] opacity-70"
                    : "border-white/5 bg-white/[0.015] opacity-40"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {isDone ? (
                      <CheckCircle2
                        size={15}
                        className="text-emerald-400"
                      />
                    ) : (
                      <Circle
                        size={15}
                        className={
                          isActive
                            ? "text-indigo-400"
                            : "text-slate-600"
                        }
                      />
                    )}
                  </div>

                  <p
                    className={`line-clamp-2 text-xs leading-5 ${
                      isActive
                        ? "text-white"
                        : "text-slate-500"
                    }`}
                  >
                    {text || `Question ${i + 1}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Tips */}
      <div className="rounded-3xl border border-amber-400/10 bg-amber-400/[0.04] p-6 backdrop-blur-xl">
        <div className="mb-4 flex items-center gap-2">
          <Sparkles
            size={14}
            className="text-amber-300"
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
            AI Coaching Tips
          </p>
        </div>

        <div className="space-y-3">
          {[
            "Use STAR method for behavioural answers",
            "Mention specific tools and technologies",
            "Explain impact with measurable results",
          ].map((tip) => (
            <div
              key={tip}
              className="flex items-start gap-3"
            >
              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-300" />
              <p className="text-xs leading-6 text-amber-100/70">
                {tip}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Card */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
        <div className="flex items-center gap-2">
          <TrendingUp
            size={14}
            className="text-cyan-300"
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Performance
          </p>
        </div>

        <p className="mt-3 text-sm text-slate-400">
          Keep answers concise, structured, and backed by
          real-world examples.
        </p>
      </div>
    </div>
  );
};

export default SessionSidebar;