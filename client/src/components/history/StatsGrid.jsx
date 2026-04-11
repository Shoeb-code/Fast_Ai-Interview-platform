import React from "react";
import {
  Activity,
  TrendingUp,
  Trophy,
} from "lucide-react";
import StatCard from "./StatCard";

const StatsGrid = ({ stats }) => {
  return (
    <section className="mb-10">
      {/* Section label */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Performance Overview
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Quick snapshot of your interview metrics
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Total Interviews"
          value={stats.total}
          sub="Sessions completed"
          icon={Activity}
          accent="from-indigo-500 via-purple-500 to-cyan-500"
        />

        <StatCard
          title="Average Score"
          value={`${stats.average}/10`}
          sub="Overall performance"
          icon={TrendingUp}
          accent="from-emerald-500 via-teal-500 to-cyan-500"
        />

        <StatCard
          title="Best Score"
          value={`${stats.best}/10`}
          sub="Peak performance"
          icon={Trophy}
          accent="from-amber-500 via-orange-500 to-red-500"
        />
      </div>
    </section>
  );
};

export default StatsGrid;