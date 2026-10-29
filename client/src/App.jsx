import React from "react";
import { Navbar } from "./shared";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-20">
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;