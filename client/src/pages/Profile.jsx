import React from "react";
import {
  Pencil,
  
} from "lucide-react";

const Profile = () => {
  const profile = {
    name: "Shoeb Khan",
    email: "shoeb@email.com",
    role: "Full Stack Developer",
    experience: "1+ Years",
    course: "B.Tech - Mechanical Engineering",
    dreamCompany: "Google",
    linkedin:
      "linkedin.com/in/shoeb-khan",
    github:
      "github.com/shoebkhan",
    leetcode:
      "leetcode.com/shoeb",
    skills:
      "React, Node.js, MongoDB, AI",
    bio: "Passionate developer building AI-powered SaaS products and interview platforms.",
    bestScore: "9.4 / 10",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl font-bold shadow-xl">
                S
              </div>

              <div>
                <h1 className="text-3xl font-bold">
                  {profile.name}
                </h1>

                <p className="mt-1 text-slate-400">
                  {profile.email}
                </p>

                <p className="mt-2 text-sm text-indigo-300">
                  {profile.role}
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 font-medium transition hover:bg-white/[0.06]">
              <Pencil size={16} />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left */}
          <div className="space-y-6 lg:col-span-2">
            <ProfileCard
              title="Career Details"
              items={[
                ["Experience", profile.experience],
                ["Course", profile.course],
                ["Dream Company", profile.dreamCompany],
                ["Skills", profile.skills],
              ]}
            />

            <ProfileCard
              title="About"
              description={profile.bio}
            />
          </div>

          {/* Right */}
          <div className="space-y-6">
            <ProfileCard
              title="Developer Profiles"
              items={[
                ["LinkedIn", profile.linkedin],
                ["GitHub", profile.github],
                ["LeetCode", profile.leetcode],
              ]}
            />

            <div className="rounded-3xl border border-amber-500/10 bg-amber-500/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-amber-300">
                Best Score
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                {profile.bestScore}
              </h2>

              <p className="mt-2 text-sm text-amber-200/70">
                Peak interview performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileCard = ({
  title,
  items,
  description,
}) => (
  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl">
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
      {title}
    </p>

    {description ? (
      <p className="mt-4 text-sm leading-7 text-slate-400">
        {description}
      </p>
    ) : (
      <div className="mt-4 space-y-4">
        {items.map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
          >
            <p className="text-xs text-slate-500">
              {label}
            </p>
            <p className="mt-1 text-sm font-medium text-white">
              {value}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Profile;