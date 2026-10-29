import React from "react";

const Loader = ({ size = "md", text = "Loading..." }) => {
  const sizeClasses = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6">
      <div
        className={`${
          sizeClasses[size] || sizeClasses.md
        } animate-spin rounded-full border-indigo-500 border-t-transparent`}
      />
      {text && <p className="text-sm font-medium text-slate-400">{text}</p>}
    </div>
  );
};

export default Loader;
