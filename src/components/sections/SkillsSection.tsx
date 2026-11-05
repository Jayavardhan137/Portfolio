"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { useAudio } from "@/hooks/useAudio";
import { Sparkles, Terminal, Code2 } from "lucide-react";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { playHover, playClick } = useAudio();
  const currentCategory = SKILL_CATEGORIES[activeTab];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 md:py-36 px-6 sm:px-8 md:px-12 bg-[#050505] text-white border-t border-white/10 overflow-hidden select-none"
    >
      {/* Dynamic Background Watermark (Video Inspiration) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCategory.watermark}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.03, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none font-black font-sans text-[22vw] tracking-tighter text-white overflow-hidden"
        >
          {currentCategory.watermark}
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>02 // TECHNICAL DISCIPLINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-white uppercase">
              EXPERTISE &
              <br />
              <span className="text-neutral-400">CORE CAPABILITIES.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400">
            <Code2 className="w-4 h-4 text-white" />
            <span>INTERACTIVE TYPOGRAPHY EXPLORER</span>
          </div>
        </div>

        {/* Category Pill Switcher (Inspired by frame_06 tabs) */}
        <div className="flex flex-wrap items-center gap-3">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  playClick();
                  setActiveTab(idx);
                }}
                onMouseEnter={playHover}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    : "border border-white/15 bg-white/[0.03] text-neutral-400 hover:text-white hover:border-white/40"
                }`}
              >
                <span>{cat.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full border border-white -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Display: Massive Ghosted Typography & Technical Matrix */}
        <div className="relative rounded-3xl border border-white/15 bg-[#0a0a0c]/80 backdrop-blur-xl p-8 sm:p-12 md:p-16 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col gap-10 md:gap-14"
            >
              {/* Massive Typographic Headline with Ghosting / Chromatic Shadow Effect */}
              <div className="relative">
                {/* Ghost duplicate behind */}
                <h3
                  aria-hidden="true"
                  className="absolute -top-1 -left-1 text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase font-sans text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] pointer-events-none select-none blur-[1px]"
                >
                  {currentCategory.headline}
                </h3>
                {/* Foreground text */}
                <h3 className="relative text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase font-sans text-white tracking-tight leading-[0.95]">
                  {currentCategory.headline}
                </h3>
                <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300 font-sans max-w-3xl leading-relaxed">
                  {currentCategory.description}
                </p>
              </div>

              {/* Skills Interactive Typography Cloud & Cards */}
              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 mb-6 text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-neutral-200" />
                  <span>TECHNOLOGIES & PROTOCOLS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentCategory.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      onMouseEnter={playHover}
                      className="group relative p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300 flex items-center justify-between overflow-hidden cursor-default"
                    >
                      {/* Hover subtle glow accent */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                          {(i + 1).toString().padStart(2, "0")}
                        </span>
                        <span className="text-base sm:text-lg font-bold font-sans text-neutral-200 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                          {skill.name}
                        </span>
                      </div>

                      {skill.tag && (
                        <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-wider text-neutral-400 group-hover:text-neutral-200 group-hover:border-white/20 transition-colors uppercase">
                          {skill.tag}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technical Readout Matrix (frame_06 style) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10 text-xs font-mono">
                <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-neutral-400 tracking-widest uppercase">
                    PARADIGM
                  </span>
                  <span className="text-white text-sm font-semibold">
                    Declarative & Type-Safe
                  </span>
                  <span className="text-neutral-400 text-[11px]">
                    Strict interfaces, robust error boundaries
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-neutral-400 tracking-widest uppercase">
                    EXECUTION SPEED
                  </span>
                  <span className="text-white text-sm font-semibold">
                    Sub-100ms Latency Targets
                  </span>
                  <span className="text-neutral-400 text-[11px]">
                    Optimized bundles, caching & vector queries
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-neutral-400 tracking-widest uppercase">
                    INTEGRATION LEVEL
                  </span>
                  <span className="text-white text-sm font-semibold">
                    Production Full-Stack
                  </span>
                  <span className="text-neutral-400 text-[11px]">
                    Automated deployments & clean pipelines
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

