import React from "react";
import {
  Radio,
  Clock3,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const SessionHeader = ({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeStr = `${minutes}:${String(seconds).padStart(2, "0")}`;

  const isLow = timeLeft <= 30;
  const isCritical = timeLeft <= 10;

  return (
    <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      {/* Left Section */}
      <div>
        {/* Live Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 backdrop-blur-xl">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-3 w-3 animate-ping rounded-full bg-indigo-400/40" />
            <Radio size={12} className="relative text-indigo-300" />
          </div>

          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-300">
            Live AI Session
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          AI Mock Interview
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-400 md:text-base">
          Answer each question clearly, confidently, and with real examples.
        </p>

        {/* Metadata */}
        <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Sparkles size={13} />
            AI-powered evaluation
          </div>

          <div className="flex items-center gap-1.5">
            <ShieldCheck size={13} />
            Real-time feedback
          </div>
        </div>
      </div>

      {/* Timer Card */}
      <div
        className={`relative overflow-hidden rounded-3xl border px-6 py-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
          isCritical
            ? "border-red-500/30 bg-red-500/10 shadow-red-500/10"
            : isLow
            ? "border-amber-500/30 bg-amber-500/10 shadow-amber-500/10"
            : "border-white/10 bg-white/[0.04] shadow-black/20"
        }`}
      >
        {/* Glow */}
        <div
          className={`absolute inset-0 opacity-40 blur-2xl ${
            isCritical
              ? "bg-red-500/10"
              : isLow
              ? "bg-amber-500/10"
              : "bg-indigo-500/5"
          }`}
        />

        <div className="relative flex items-center gap-3">
          <div
            className={`rounded-2xl p-2 ${
              isCritical
                ? "bg-red-500/10"
                : isLow
                ? "bg-amber-500/10"
                : "bg-white/[0.04]"
            }`}
          >
            <Clock3
              size={16}
              className={
                isCritical
                  ? "text-red-400"
                  : isLow
                  ? "text-amber-400"
                  : "text-slate-300"
              }
            />
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-slate-500">
              Time Left
            </p>

            <span
              className={`text-2xl font-bold tabular-nums tracking-tight ${
                isCritical
                  ? "animate-pulse text-red-400"
                  : isLow
                  ? "text-amber-400"
                  : "text-white"
              }`}
            >
              {timeStr}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionHeader;