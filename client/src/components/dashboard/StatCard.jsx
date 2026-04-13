const StatCard = ({
  title,
  value = 0,
  subtitle,
  trend = "0%",
  icon = "📊",
}) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10">

      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition-all duration-300 group-hover:bg-indigo-500/20" />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400">
            {title}
          </p>

          <h3 className="mt-3 text-4xl font-bold tracking-tight text-white">
            {value}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-xl ring-1 ring-white/10">
          {icon}
        </div>
      </div>

      <div className="relative z-10 mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-400">
          {subtitle}
        </p>

        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/20">
          {trend}
        </span>
      </div>
    </div>
  );
};

export default StatCard;