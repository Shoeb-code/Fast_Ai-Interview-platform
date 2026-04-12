import React from "react";
import {
  X,
  BarChart3,
  History,
  Mic,
  Settings,
  LogOut,
  UserCircle2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProfileSidebar = ({
  isOpen,
  onClose,
  user,
  logout,
}) => {

  const { user: authUser }= useAuth()
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 z-[70] h-screen w-full max-w-sm border-l border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-2xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <h2 className="text-lg font-semibold text-white">
              Profile
            </h2>

            <button
              onClick={onClose}
              className="rounded-xl p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* User Info */}
          <div className="border-b border-white/10 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-lg font-bold text-white shadow-lg">
                {user?.fullName?.charAt(0) || "U"}
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {user?.fullName || "User"}
                </h3>

                <p className="text-sm text-slate-400">
                  {user?.email || "No email"}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 p-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs text-slate-500">
                Interviews
              </p>
              <p className="mt-2 text-xl font-bold text-white">
                 {authUser?.totalInterviews }
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs text-slate-500">
                Best Score
              </p>
              <p className="mt-2 text-xl font-bold text-white">
              {authUser?.bestScore}
              </p>
            </div>
          </div>

          {/* Menu */}
          <div className="flex-1 space-y-2 px-6">
            <Link
              to="/dashboard"
              onClick={onClose}
              className="flex items-center gap-3 rounded-2xl p-4 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              <BarChart3 size={18} />
              Dashboard
            </Link>

            <Link
              to="/history"
              onClick={onClose}
              className="flex items-center gap-3 rounded-2xl p-4 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              <History size={18} />
              History
            </Link>

            <Link
              to="/setup"
              onClick={onClose}
              className="flex items-center gap-3 rounded-2xl p-4 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              <Mic size={18} />
              Start Interview
            </Link>

            <button className="flex w-full items-center gap-3 rounded-2xl p-4 text-slate-300 transition hover:bg-white/5 hover:text-white">
              <Settings size={18} />
              Settings
            </button>

            <button className="flex w-full items-center gap-3 rounded-2xl p-4 text-slate-300 transition hover:bg-white/5 hover:text-white">
              <UserCircle2 size={18} />
              
              <Link to="/profile">
                      Profile
               </Link>
            </button>
            
          </div>

          {/* Logout */}
          <div className="border-t border-white/10 p-6">
            <button
              onClick={() => {
                logout();
                onClose();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-800 to-rose-800 py-3 font-medium text-white shadow-lg transition hover:scale-[1.01]"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;