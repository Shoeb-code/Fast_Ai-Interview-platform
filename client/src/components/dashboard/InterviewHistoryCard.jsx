const InterviewHistoryCard = ({ item }) => {
  const scoreColor =
    item.totalScore >= 8
      ? "text-emerald-400 bg-emerald-500/10 ring-emerald-500/20"
      : item.totalScore >= 5
      ? "text-yellow-400 bg-yellow-500/10 ring-yellow-500/20"
      : "text-red-400 bg-red-500/10 ring-red-500/20";

  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10">
      
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-xl ring-1 ring-indigo-500/20">
            🎤
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              {item.role}
            </h3>

            <p className="text-xs text-gray-400">
              Mock Interview Session
            </p>
          </div>
        </div>

        <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 ring-1 ring-white/10">
          {item.level}
        </span>
      </div>

      {/* Score */}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-gray-400">
          Performance Score
        </p>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ring-1 ${scoreColor}`}
        >
          {item.totalScore}/10
        </span>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
        <p className="text-xs text-gray-500">
          {new Date(item.createdAt).toLocaleDateString()}
        </p>

        <span className="text-xs font-medium text-indigo-400">
          View Report →
        </span>
      </div>
    </div>
  );
};

export default InterviewHistoryCard;