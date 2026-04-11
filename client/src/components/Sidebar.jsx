import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Interview", path: "/", icon: "🎤" },
    { name: "History", path: "/history", icon: "📜" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <aside className="min-h-screen w-72 border-r border-white/10 bg-slate-950/90 p-6 backdrop-blur-xl">
      <h1 className="mb-10 text-2xl font-bold text-white">
        AI Interview
      </h1>

      <div className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
              location.pathname === link.path
                ? "bg-indigo-600 text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;