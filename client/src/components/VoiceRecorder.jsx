import React, { useState } from "react";

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording((prev) => !prev);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">
            Voice Response
          </p>
          <h3 className="mt-1 text-xl font-semibold text-white">
            Microphone Input
          </h3>
        </div>

        <button
          onClick={toggleRecording}
          className={`flex h-14 w-14 items-center justify-center rounded-full text-xl shadow-lg transition ${
            isRecording
              ? "bg-red-500 shadow-red-500/30"
              : "bg-indigo-600 shadow-indigo-500/30"
          }`}
        >
          🎤
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        {isRecording
          ? "Recording in progress..."
          : "Tap to start voice answer"}
      </p>
    </div>
  );
};

export default VoiceRecorder;