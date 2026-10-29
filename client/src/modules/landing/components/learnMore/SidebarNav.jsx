import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Cpu,
  BarChart3,
  Layers,
  Rocket,
} from "lucide-react";

const links = [
  {
    id: "overview",
    label: "Overview",
    icon: LayoutDashboard,
  },
  {
    id: "features",
    label: "AI Engine",
    icon: Cpu,
  },
  {
    id: "analytics",
    label: "Scoring Rubric",
    icon: BarChart3,
  },
  {
    id: "journey",
    label: "Candidate Journey",
    icon: Layers,
  },
  {
    id: "cta",
    label: "Get Started",
    icon: Rocket,
  },
];

const SidebarNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("overview");

  // Scroll Spy using IntersectionObserver
  useEffect(() => {
    const sections = links
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const topOffset = 90;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActive(id);
    }
  };

  return (
    <>
      {/* Mobile Horizontal Pill Navigation */}
      <div className="lg:hidden sticky top-16 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2.5 bg-white/95 backdrop-blur-md border-b border-slate-200/80 overflow-x-auto no-scrollbar flex items-center gap-1.5 shadow-xs">
        {links.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Desktop Vertical Sticky Sidebar */}
      <aside
        className={`hidden lg:block sticky top-24 h-fit transition-all duration-300 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-sm ring-1 ring-slate-900/5 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5 mb-2">
          {!collapsed && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                Documentation
              </p>
              <h3 className="text-xs font-bold text-slate-900">
                Product Specs
              </h3>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-label="Toggle navigation collapse"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {links.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`w-full group flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
                title={collapsed ? item.label : undefined}
              >
                <Icon
                  className={`h-4 w-4 flex-shrink-0 transition ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 group-hover:text-slate-700"
                  }`}
                />

                {!collapsed && (
                  <span className="truncate">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick Help Footer */}
        {!collapsed && (
          <div className="mt-4 border-t border-slate-100 pt-3 px-3">
            <p className="text-[11px] text-slate-500 leading-snug">
              Have questions? Read our{" "}
              <a
                href="#cta"
                className="font-medium text-indigo-600 hover:text-indigo-800"
              >
                FAQ & Support
              </a>
            </p>
          </div>
        )}
      </aside>
    </>
  );
};

export default SidebarNav;