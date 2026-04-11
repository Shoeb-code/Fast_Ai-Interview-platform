import React from "react";

const EmptyState = () => {
  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
      <h3 className="text-xl font-semibold">
        No records found
      </h3>

      <p className="mt-3 text-gray-400">
        Try another search keyword.
      </p>
    </div>
  );
};

export default EmptyState;