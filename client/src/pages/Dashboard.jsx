import { useEffect, useMemo, useState } from "react";
import api from "../services/api";
import StatCard from "../components/dashboard/StatCard";
import InterviewHistoryCard from "../components/dashboard/InterviewHistoryCard";
import PerformanceChart from "../components/dashboard/PerformanceChart";

const Dashboard = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const res = await api.get("/interview/history");
      setHistory(res.data.interviews || []);
    } catch (error) {
      console.error("Failed to fetch history", error);
    } finally {
      setLoading(false);
    }
  };

  const chartData = useMemo(() => {
    return [...history]
      .sort(
        (a, b) =>
          new Date(a.createdAt) -
          new Date(b.createdAt)
      )
      .map((item, index) => ({
        score: item.totalScore || 0,
        label: `Attempt ${index + 1}`,
      }));
  }, [history]);

  const averageScore = useMemo(() => {
    if (!history.length) return 0;

    return Math.round(
      history.reduce((sum, item) => sum + item.totalScore, 0) /
        history.length
    );
  }, [history]);

  const bestScore = useMemo(() => {
    return history.length
      ? Math.max(...history.map((x) => x.totalScore))
      : 0;
  }, [history]);

  const improvementRate = useMemo(() => {
    if (history.length < 2) return 0;

    const first = history[0]?.totalScore || 0;
    const last = history[history.length - 1]?.totalScore || 0;

    if (first === 0) return 0;

    return Math.round(((last - first) / first) * 100);
  }, [history]);

  const confidenceTrend = useMemo(() => {
    if (history.length < 2) return "Stable";

    const first = history[0]?.totalScore || 0;
    const last = history[history.length - 1]?.totalScore || 0;

    if (last > first) return "Improving";
    if (last < first) return "Declining";
    return "Stable";
  }, [history]);

  const recommendedLevel = useMemo(() => {
    if (averageScore >= 8) return "Advanced";
    if (averageScore >= 5) return "Intermediate";
    return "Beginner";
  }, [averageScore]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

        {/* Premium Header */}
        <div className="relative mb-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-2xl">

          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-indigo-400">
                Analytics Overview
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Your
                <span className="ml-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Performance Dashboard
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                Monitor interview trends, AI insights,
                performance growth, and progress analytics
                through your premium dashboard experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm">
                  📈 Growth Insights
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm">
                  🤖 AI Reports
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm">
                  🎯 Score Tracking
                </div>
              </div>
            </div>

            <button className="rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-3 text-sm font-medium shadow-xl shadow-indigo-500/20 transition hover:scale-[1.02]">
              Export Report
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <StatCard
            title="Total Interviews"
            value={history.length}
            subtitle="Completed sessions"
          />

          <StatCard
            title="Average Score"
            value={averageScore}
            subtitle="Overall performance"
          />

          <StatCard
            title="Best Score"
            value={bestScore}
            subtitle="Highest achieved"
          />
        </div>

        {/* Analytics */}
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">

          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <PerformanceChart data={chartData} />
          </div>

          {/* AI Insights */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <h2 className="mb-5 text-xl font-semibold">
              AI Insights
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-gray-400">
                  Improvement Rate
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  {improvementRate > 0
                    ? `+${improvementRate}%`
                    : `${improvementRate}%`}
                </h3>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-gray-400">
                  Confidence Trend
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  {confidenceTrend}
                </h3>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-gray-400">
                  Recommended Level
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  {recommendedLevel}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Interview History */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Interview History
            </h2>

            <span className="text-sm text-gray-400">
              {history.length} records
            </span>
          </div>

          {loading ? (
            <div className="py-12 text-center text-gray-400">
              Loading history...
            </div>
          ) : history.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              No interviews completed yet
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {history.map((item) => (
                <InterviewHistoryCard
                  key={item._id}
                  item={item}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;