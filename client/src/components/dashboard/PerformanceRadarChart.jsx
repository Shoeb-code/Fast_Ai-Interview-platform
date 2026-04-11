import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const PerformanceRadarChart = ({ result }) => {
  const data = [
    {
      subject: "Confidence",
      value: result.confidence || 86,
    },
    {
      subject: "Clarity",
      value: (result.clarity || 8.2) * 10,
    },
    {
      subject: "Technical",
      value: (result.technicalDepth || 8.8) * 10,
    },
    {
      subject: "Communication",
      value: 84,
    },
    {
      subject: "Problem Solving",
      value: 88,
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
      <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
        Visual Report
      </p>

      <h3 className="mt-3 text-2xl font-semibold">
        Performance Overview
      </h3>

      <div className="mt-6 h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />

            <PolarAngleAxis
              dataKey="subject"
              tick={{
                fill: "#cbd5e1",
                fontSize: 12,
              }}
            />

            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={false}
            />

            <Radar
              name="Performance"
              dataKey="value"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceRadarChart;