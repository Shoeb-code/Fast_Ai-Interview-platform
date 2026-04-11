import React from "react";

const Timer = ({ time = "10:00" }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-xl">
      <p className="text-sm text-gray-400">
        Time Remaining
      </p>

      <h2 className="mt-2 text-4xl font-bold tracking-tight text-white">
        {time}
      </h2>
    </div>
  );
};

export default Timer;