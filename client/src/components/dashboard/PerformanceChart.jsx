import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">
        Score: {payload[0].value}
      </p>
    </div>
  );
};

const PerformanceChart = ({ data }) => {
  const latestScore =
    data?.length > 0 ? data[data.length - 1]?.score : 0;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
      
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400">
            Analytics
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Performance Trend
          </h2>
        </div>

        <div className="rounded-2xl bg-white/5 px-4 py-2 ring-1 ring-white/10">
          <p className="text-xs text-gray-400">
            Latest Score
          </p>
          <p className="text-lg font-bold text-white">
            {latestScore}
          </p>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="4 4"
            stroke="rgba(255,255,255,0.08)"
          />

          <XAxis
            dataKey="date"
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{
              r: 5,
              fill: "#6366f1",
              strokeWidth: 2,
              stroke: "#fff",
            }}
            activeDot={{
              r: 7,
              fill: "#818cf8",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;