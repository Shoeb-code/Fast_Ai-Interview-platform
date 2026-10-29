import React from "react";
import { Search, Command } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="mb-10">
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-indigo-500/20 focus-within:border-indigo-500/30 focus-within:bg-white/[0.06]">
        {/* Top accent */}
        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-70" />

        {/* Glow */}
        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition duration-300 group-focus-within:opacity-100" />

        <div className="relative flex items-center gap-3">
          {/* Icon */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 transition group-focus-within:bg-indigo-500/10">
            <Search
              size={18}
              className="text-slate-400"
            />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Search by role, level, or status..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full bg-transparent px-1 py-2 text-sm text-white outline-none placeholder:text-slate-500"
          />

          {/* Shortcut badge */}
          <div className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-slate-500 md:flex">
            <Command size={12} />
            K
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;