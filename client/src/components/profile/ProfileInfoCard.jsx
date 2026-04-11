import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  UserCircle2,
  Sparkles,
  Code2,
  Target,
} from "lucide-react";

const ProfileInfoCard = ({
  fullName = "Shoeb Khan",
  email = "shoeb@email.com",
  phone = "+91 9876543210",
  location = "Moradabad, Uttar Pradesh",
  website = "shoeb.dev",
  bio = "Passionate full stack developer focused on building scalable SaaS products, AI platforms, and modern user experiences.",
  skills = "React, Node.js, MongoDB, Express, AI, Tailwind",
  objective = "Become a software engineer at a top product-based company and build impactful AI products.",
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(99,102,241,0.12)]">
      {/* Accent */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

      {/* Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl opacity-70" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Personal Information
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
              Professional Profile
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <UserCircle2
              size={18}
              className="text-indigo-300"
            />
          </div>
        </div>

        {/* Grid Info */}
        <div className="grid gap-4 md:grid-cols-2">
          <InfoRow
            icon={Mail}
            label="Email"
            value={email}
          />

          <InfoRow
            icon={Phone}
            label="Phone"
            value={phone}
          />

          <InfoRow
            icon={MapPin}
            label="Location"
            value={location}
          />

          <InfoRow
            icon={Globe}
            label="Portfolio"
            value={website}
          />
        </div>

        {/* About */}
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles
              size={15}
              className="text-indigo-300"
            />
            <p className="text-xs font-medium text-slate-500">
              About Me
            </p>
          </div>

          <p className="text-sm leading-7 text-slate-300">
            {bio}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center gap-2">
            <Code2
              size={15}
              className="text-indigo-300"
            />
            <p className="text-xs font-medium text-slate-500">
              Core Skills
            </p>
          </div>

          <p className="text-sm leading-6 text-white">
            {skills}
          </p>
        </div>

        {/* Objective */}
        <div className="mt-5 rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.04] p-4">
          <div className="mb-3 flex items-center gap-2">
            <Target
              size={15}
              className="text-emerald-300"
            />
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-emerald-300">
              Career Objective
            </p>
          </div>

          <p className="text-sm leading-7 text-emerald-100/80">
            {objective}
          </p>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({
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

export default ProfileInfoCard;