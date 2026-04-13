import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/ui/Card";
import PerformanceRadarChart from "../components/dashboard/PerformanceRadarChart";

const ResultDashboard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const backendResult = state?.result || {};

  console.log("LOCATION STATE:", state);
  console.log("BACKEND RESULT:", backendResult);

  const answers = backendResult.answers || [];

  const averageAnswerScore =
    answers.length > 0
      ? Number(
          (
            answers.reduce(
              (sum, item) => sum + (item.score || 0),
              0
            ) / answers.length
          ).toFixed(1)
        )
      : backendResult.totalScore || 0;

  const strengths = answers
    .filter((item) => (item.score || 0) >= 8)
    .map(
      (item) =>
        item.question ||
        item.feedback ||
        "Strong response"
    )
    .slice(0, 5);

  const improvements = answers
    .filter((item) => (item.score || 0) < 8)
    .map(
      (item) =>
        item.question ||
        item.feedback ||
        "Needs improvement"
    )
    .slice(0, 5);

  const keyInsights = [
    `Role: ${backendResult.role || "N/A"}`,
    `Level: ${backendResult.level || "N/A"}`,
    `Questions Completed: ${
      backendResult.questionCount ||
      answers.length
    }`,
    `Overall Score: ${
      backendResult.totalScore || 0
    }/10`,
    ...strengths,
  ].slice(0, 10);

  const result = {
    totalScore:
      backendResult.totalScore ?? 0,

    overallFeedback:
      backendResult.overallFeedback ||
      "Keep practicing more interview scenarios.",

    confidence:
      (backendResult.totalScore || 0) * 10,

    clarity: averageAnswerScore,

    technicalDepth: averageAnswerScore,

    strengths:
      strengths.length > 0
        ? strengths
        : [
            "Good overall interview performance",
          ],

    improvements:
      improvements.length > 0
        ? improvements
        : [
            "Practice more advanced questions",
          ],

    keyInsights,

    recommendation:
      backendResult.overallFeedback ||
      "Focus on improving weak answers and practice structured responses.",
  };

  const performanceLabel =
    result.totalScore >= 9
      ? "Excellent"
      : result.totalScore >= 8
      ? "Strong"
      : "Improving";

  const topInsights =
    result.keyInsights.slice(0, 10);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Premium Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-indigo-400">
              AI Performance Report
            </p>

            <h1 className="mt-3 text-4xl font-bold md:text-5xl">
              Interview
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Result Dashboard
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm text-gray-400">
              Real-time analytics, personalized AI feedback,
              and actionable performance insights.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Performance Tier
            </p>
            <p className="mt-2 text-lg font-semibold text-indigo-300">
              {performanceLabel}
            </p>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="mb-10 grid gap-6 md:grid-cols-4">
          {[
            [
              "Total Score",
              `${result.totalScore}/10`,
            ],
            [
              "Confidence",
              `${result.confidence}%`,
            ],
            [
              "Clarity",
              result.clarity,
            ],
            [
              "Technical",
              result.technicalDepth,
            ],
          ].map(([title, value], i) => (
            <Card
              key={i}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition hover:border-indigo-500/20 hover:bg-white/[0.07]"
            >
              <p className="text-sm text-gray-400">
                {title}
              </p>
              <h2 className="mt-3 text-4xl font-bold">
                {value}
              </h2>
            </Card>
          ))}
        </div>

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left */}
          <div className="lg:col-span-2 space-y-8">

            {/* Top Insights */}
            <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-2xl">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
                      AI Executive Review
                    </p>
                    <h2 className="mt-3 text-3xl font-bold">
                      Top  Key Insights
                    </h2>
                  </div>

                  <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-xs font-medium text-indigo-300">
                    Premium Report
                  </span>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {topInsights.map(
                    (point, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-sm font-bold">
                            {index + 1}
                          </div>

                          <p className="text-sm leading-7 text-gray-300">
                            {point}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </Card>

            {/* Radar */}
            <Card className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
                Performance Analytics
              </p>

              <div className="mt-5">
                <PerformanceRadarChart
                  result={result}
                />
              </div>
            </Card>

            {/* Strengths */}
            <Card className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xl font-semibold">
                Key Strengths
              </h3>

              <div className="mt-5 space-y-3">
                {result.strengths.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-emerald-300"
                    >
                      ✓ {item}
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>

          {/* Right */}
          <div className="space-y-8">
            <Card className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xl font-semibold">
                Improvement Areas
              </h3>

              <div className="mt-5 space-y-3">
                {result.improvements.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-amber-300"
                    >
                      → {item}
                    </div>
                  )
                )}
              </div>
            </Card>

            <Card className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 shadow-2xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">
                AI Recommendation
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Next Best Action
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                {result.recommendation}
              </p>

              <button
                onClick={() =>
                  navigate("/setup")
                }
                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-medium shadow-lg shadow-indigo-500/20 transition hover:scale-[1.01]"
              >
                Start New Interview
              </button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDashboard;