import React from "react";

const variants = {
  primary:
    "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 hover:shadow-indigo-500/30",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:bg-white/10",
  ghost:
    "bg-transparent text-gray-300 hover:bg-white/5 hover:text-white",
  danger:
    "bg-red-600 text-white shadow-lg shadow-red-500/20 hover:bg-red-500",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-5 py-3 text-sm rounded-2xl",
  lg: "px-6 py-4 text-base rounded-2xl",
};

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2
        font-medium
        transition-all duration-300
        active:scale-[0.98]
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Loading...
        </>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;