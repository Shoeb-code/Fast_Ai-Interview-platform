import React from "react";

const Card = ({
  children,
  className = "",
  hover = false,
  glow = false,
  padding = "p-6",
}) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-xl
        transition-all duration-300
        ${padding}
        ${hover ? "hover:-translate-y-1 hover:shadow-2xl" : ""}
        ${
          glow
            ? "hover:shadow-indigo-500/20 hover:border-indigo-500/20"
            : ""
        }
        ${className}
      `}
    >
      {/* subtle glow effect */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Card;