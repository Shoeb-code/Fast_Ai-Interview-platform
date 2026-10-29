import React from "react";

import {FaGithub, FaLinkedin,} from "react-icons/fa";
import {SiLeetcode, SiTransportforireland,SiReaddotcv,} from "react-icons/si";
import {ExternalLink,Code2,} from "lucide-react";

const SocialLinksCard = ({
  linkedin = "linkedin.com/in/shoeb-khan",
  github = "github.com/shoebkhan",
  leetcode = "leetcode.com/shoeb",
  portfolio = "shoeb.dev",
  resume = "Resume.pdf",
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(99,102,241,0.12)]">
      {/* Premium accent */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

      {/* Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl opacity-70" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Developer Presence
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
              Social & Coding Profiles
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <Code2
              size={18}
              className="text-indigo-300"
            />
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <SocialLinkRow
            icon={FaLinkedin}
            label="LinkedIn"
            value={linkedin}
          />

          <SocialLinkRow
            icon={FaGithub}
            label="GitHub"
            value={github}
          />

          <SocialLinkRow
            icon={SiLeetcode}
            label="LeetCode"
            value={leetcode}
          />

          <SocialLinkRow
            icon={SiTransportforireland}
            label="Portfolio"
            value={portfolio}
          />

          <SocialLinkRow
            icon={SiReaddotcv}
            label="Resume"
            value={resume}
          />
        </div>
      </div>
    </div>
  );
};

const SocialLinkRow = ({
  icon: Icon,
  label,
  value,
}) => (
  <div className="group/item flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.05]">
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-white/[0.04] p-2">
        <Icon
          size={15}
          className="text-indigo-300"
        />
      </div>

      <div>
        <p className="text-xs text-slate-500">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-white">
          {value}
        </p>
      </div>
    </div>

    <button className="rounded-xl p-2 text-slate-500 transition hover:bg-white/[0.04] hover:text-white">
      <ExternalLink size={15} />
    </button>
  </div>
);

export default SocialLinksCard;