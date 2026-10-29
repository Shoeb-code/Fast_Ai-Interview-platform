import React, {
    useEffect,
    useState,
  } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import {
    ChevronLeft,
    ChevronRight,
    Sparkles,
    BarChart3,
    ShieldCheck,
    Rocket,
    LayoutDashboard,
  } from "lucide-react";
  
  const links = [
    {
      id: "hero",
      label: "Overview",
      icon: LayoutDashboard,
    },
    {
      id: "features",
      label: "AI Features",
      icon: Sparkles,
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
    },
   
    {
      id: "cta",
      label: "Get Started",
      icon: Rocket,
    },
  ];
  
  const SidebarNav = () => {
    const [collapsed, setCollapsed] =
      useState(false);
  
    const [active, setActive] =
      useState("hero");
  
    /*
    |--------------------------------------------------------------------------
    | Scroll Spy
    |--------------------------------------------------------------------------
    */
    useEffect(() => {
      const sections =
        document.querySelectorAll(
          "section[id]"
        );
  
      const observer =
        new IntersectionObserver(
          (entries) => {
            entries.forEach(
              (entry) => {
                if (
                  entry.isIntersecting
                ) {
                  setActive(
                    entry.target.id
                  );
                }
              }
            );
          },
          {
            threshold: 0.4,
          }
        );
  
      sections.forEach(
        (section) =>
          observer.observe(
            section
          )
      );
  
      return () =>
        sections.forEach(
          (section) =>
            observer.unobserve(
              section
            )
        );
    }, []);
  
    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    */
    const handleScroll = (id) => {
      const section =
        document.getElementById(
          id
        );
  
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
  
        setActive(id);
      }
    };
  
    return (
      <motion.aside
        animate={{
          width: collapsed
            ? 90
            : 280,
        }}
        transition={{
          duration: 0.35,
        }}
        className="sticky top-24 h-fit overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-indigo-400">
                  Product Docs
                </p>
  
                <h3 className="mt-2 text-sm font-semibold text-white">
                  Learn More
                </h3>
              </motion.div>
            )}
          </AnimatePresence>
  
          <button
            onClick={() =>
              setCollapsed(
                !collapsed
              )
            }
            className="rounded-xl bg-white/5 p-2 transition hover:bg-white/10"
          >
            {collapsed ? (
              <ChevronRight
                size={18}
              />
            ) : (
              <ChevronLeft
                size={18}
              />
            )}
          </button>
        </div>
  
        {/* Links */}
        <div className="space-y-2 p-4">
          {links.map((item) => {
            const Icon =
              item.icon;
  
            const isActive =
              active === item.id;
  
            return (
              <button
                key={item.id}
                onClick={() =>
                  handleScroll(
                    item.id
                  )
                }
                className={`w-full group flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon
                  size={18}
                />
  
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -10,
                      }}
                      className="text-sm font-medium"
                    >
                      {
                        item.label
                      }
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </motion.aside>
    );
  };
  
  export default SidebarNav;