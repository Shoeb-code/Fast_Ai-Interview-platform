import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SidebarNav from "../components/learnMore/ SidebarNav.jsx";
import FeatureCard from "../components/learnMore/FeatureCard";
import AnalyticsPanel from "../components/learnMore/AnalyticsPanel";
import CTASection from "../components/learnMore/CTASection.jsx";

import {
  fadeUp,
  staggerContainer,
  pageTransition,
} from "../utils/animations";

const featureSections = [
  {
    title: "Smart AI Interview Engine",
    subtitle: "Context-aware intelligence",
    desc: "Adaptive AI-generated interviews based on role and performance.",
    icon: "🤖",
  },
  {
    title: "Real-Time Feedback",
    subtitle: "Live evaluation",
    desc: "Instant answer scoring and structured feedback.",
    icon: "⚡",
  },
  {
    title: "Advanced Analytics",
    subtitle: "Data-driven growth",
    desc: "Track trends and improvement areas over time.",
    icon: "📊",
  },
  {
    title: "Personalized Coaching",
    subtitle: "AI recommendation engine",
    desc: "Next-step guidance to improve interviews.",
    icon: "🎯",
  },
];

const LearnMore = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4">
        
        {/* Sidebar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <SidebarNav />
        </motion.div>

        {/* Main */}
        <div className="space-y-16 lg:col-span-3">
          
          {/* Hero */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            id="hero"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-indigo-400">
              Product Deep Dive
            </p>

            <h1 className="mt-4 text-5xl font-bold md:text-6xl">
              Enterprise AI
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Interview Platform
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Premium SaaS experience with intelligent analytics.
            </p>
          </motion.section>

          {/* Features */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2"
          >
            {featureSections.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
              >
                <FeatureCard {...item} />
              </motion.div>
            ))}
          </motion.section>

          {/* Analytics */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnalyticsPanel />
          </motion.div>

          {/* CTA */}
          <motion.div
           variants={fadeUp}
                initial="hidden"
            whileInView="visible"
           viewport={{ once: true }}
            >
               <CTASection />
              </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LearnMore;