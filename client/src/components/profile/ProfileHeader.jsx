import React from "react";
import {
  Pencil,
  Sparkles,
  Trophy,
  Briefcase,
} from "lucide-react";

const ProfileHeader = ({
  name = "Shoeb Khan",
  email = "shoeb@email.com",
  role = "Full Stack Developer",
  tagline = "Building AI-powered SaaS products and modern web applications",
  interviews = 12,
  bestScore = "9.4",
  onEdit,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      {/* Premium top accent */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

      {/* Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-12 bottom-0 h-28 w-28 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex items-center gap-5">
          {/* Avatar */}
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 text-2xl font-bold text-white shadow-xl">
            {name.charAt(0)}
          </div>

          {/* User Info */}
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {name}
              </h1>

              <Sparkles
                size={18}
                className="text-indigo-300"
              />
            </div>

            <p className="mt-1 text-sm text-slate-400">
              {email}
            </p>

            <p className="mt-2 text-sm font-medium text-indigo-300">
              {role}
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              {tagline}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <StatTile
              label="Interviews"
              value={interviews}
              icon={Briefcase}
            />

            <StatTile
              label="Best Score"
              value={bestScore}
              icon={Trophy}
            />
          </div>

          {/* Edit */}
          <button
            onClick={onEdit}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 font-medium text-white transition hover:bg-white/[0.06]"
          >
            <Pencil size={15} />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

const StatTile = ({
  label,
  value,
  icon: Icon,
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg">
    <div className="mb-2 flex items-center gap-2">
      <Icon
        size={14}
        className="text-indigo-300"
      />
      <p className="text-xs text-slate-500">
        {label}
      </p>
    </div>

    <p className="text-xl font-bold text-white">
      {value}
    </p>
  </div>
);

export default ProfileHeader;
