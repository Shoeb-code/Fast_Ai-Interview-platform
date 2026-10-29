import React from "react";
import { Navbar } from "./shared";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="pt-16 sm:pt-18">
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;