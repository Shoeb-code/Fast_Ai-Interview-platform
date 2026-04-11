import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

import HistoryHeader from "../components/history/HistoryHeader";
import StatsGrid from "../components/history/StatsGrid";
import SearchBar from "../components/history/SearchBar";
import InterviewCard from "../components/history/InterviewCard";
import EmptyState from "../components/history/EmptyState";

const getScoreMeta = (score) => {
  if (score >= 9) {
    return {
      badge:
        "text-emerald-300 bg-emerald-500/10 border border-emerald-500/20",
      glow: "shadow-emerald-500/10",
      label: "Excellent",
    };
  }

  if (score >= 8) {
    return {
      badge:
        "text-indigo-300 bg-indigo-500/10 border border-indigo-500/20",
      glow: "shadow-indigo-500/10",
      label: "Strong",
    };
  }

  return {
    badge:
      "text-amber-300 bg-amber-500/10 border border-amber-500/20",
      glow: "shadow-amber-500/10",
      label: "Needs Work",
  };
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const History = () => {
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await api.get("/interview/history");

        if (res.data?.success) {
          setHistory(res.data.interviews);
        }
      } catch (error) {
        toast.error("Failed to load history");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const filteredHistory = useMemo(() => {
    return history.filter((item) =>
      item.role
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [history, search]);

  const stats = useMemo(() => {
    const total = history.length;

    const average =
      total > 0
        ? (
            history.reduce(
              (acc, item) =>
                acc + (item.totalScore || 0),
              0
            ) / total
          ).toFixed(1)
        : 0;

    const best =
      total > 0
        ? Math.max(
            ...history.map(
              (item) => item.totalScore || 0
            )
          )
        : 0;

    return {
      total,
      average,
      best,
    };
  }, [history]);

  const handleViewReport = (item) => {
    navigate("/result", {
      state: {
        result: item,
      },
    });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading history...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Header */}
        <HistoryHeader />

        {/* Stats */}
        <StatsGrid stats={stats} />

        {/* Search */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Cards */}
        {filteredHistory.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredHistory.map((item) => {
              const meta = getScoreMeta(
                item.totalScore
              );

              return (
                <InterviewCard
                  key={item._id}
                  item={item}
                  meta={meta}
                  onView={handleViewReport}
                  formatDate={formatDate}
                />
              );
            })}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default History;