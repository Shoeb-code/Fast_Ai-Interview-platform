import React from "react";
import {
  Briefcase,
  GraduationCap,
  Building2,
  Target,
  Code2,
  TrendingUp,
} from "lucide-react";

const CareerCard = ({
  role = "Full Stack Developer",
  experience = "1+ Years",
  course = "B.Tech - Mechanical Engineering",
  dreamCompany = "Google",
  skills = "React, Node.js, MongoDB, AI",
  goal = "Become a Software Engineer at a top product-based company",
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(99,102,241,0.12)]">
      {/* Premium top accent */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

      {/* Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl opacity-70 transition duration-500 group-hover:scale-125" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Career Overview
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
              Professional Journey
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <TrendingUp
              size={18}
              className="text-indigo-300"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          <InfoTile
            icon={Briefcase}
            label="Current Role"
            value={role}
          />

          <InfoTile
            icon={Target}
            label="Experience"
            value={experience}
          />

          <InfoTile
            icon={GraduationCap}
            label="Education"
            value={course}
          />

          <InfoTile
            icon={Building2}
            label="Dream Company"
            value={dreamCompany}
          />
        </div>

        {/* Skills */}
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center gap-2">
            <Code2
              size={15}
              className="text-indigo-300"
            />
            <p className="text-xs font-medium text-slate-500">
              Technical Skills
            </p>
          </div>

          <p className="text-sm leading-6 text-white">
            {skills}
          </p>
        </div>

        {/* Goal */}
        <div className="mt-5 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.04] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300">
            Career Goal
          </p>

          <p className="mt-3 text-sm leading-6 text-emerald-100/80">
            {goal}
          </p>
        </div>
      </div>
    </div>
  );
};

const InfoTile = ({
  icon: Icon,
  label,
  value,
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.05]">
    <div className="mb-3 flex items-center gap-2">
      <div className="rounded-xl bg-white/[0.04] p-2">
        <Icon
          size={14}
          className="text-indigo-300"
        />
      </div>

      <p className="text-xs font-medium text-slate-500">
        {label}
      </p>
    </div>

    <p className="text-sm font-medium leading-6 text-white">
      {value}
    </p>
  </div>
);

export default CareerCard;