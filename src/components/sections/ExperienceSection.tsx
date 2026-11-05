"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Code, Sparkles, Trophy, Rocket, ChevronRight } from "lucide-react";
import { TIMELINE } from "@/data/portfolioData";
import { useAudio } from "@/hooks/useAudio";

const ICONS = [GraduationCap, Code, Sparkles, Trophy, Rocket];

export function ExperienceSection() {
  const [activeItem, setActiveItem] = useState(0);
  const { playHover, playClick } = useAudio();

  return (
    <section
      id="journey"
      className="relative min-h-screen py-24 md:py-36 px-6 sm:px-8 md:px-12 bg-[#050505] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02] font-black font-sans text-[22vw] leading-none text-white whitespace-nowrap">
        TRAJECTORY
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-14 md:gap-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>04 // EVOLUTION & TRAJECTORY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-white uppercase">
              EXPERIENCE &
              <br />
              <span className="text-neutral-400">ENGINEERING JOURNEY.</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-neutral-400 tracking-widest hidden md:block">
            <span>[ SYSTEMATIC GROWTH ]</span>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Vertical Guide Line for Desktop */}
          <div className="lg:col-span-12 relative flex flex-col gap-6">
            {TIMELINE.map((item, idx) => {
              const Icon = ICONS[idx % ICONS.length];
              const isSelected = activeItem === idx;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onClick={() => {
                    playClick();
                    setActiveItem(idx);
                  }}
                  onMouseEnter={playHover}
                  className={`group relative rounded-2xl md:rounded-3xl border transition-all duration-300 p-6 sm:p-8 md:p-10 cursor-pointer overflow-hidden ${
                    isSelected
                      ? "border-white/40 bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-transparent shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Left Accent Bar on Active */}
                  {isSelected && (
                    <motion.div
                      layoutId="timelineActiveBar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                    />
                  )}

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    {/* Left: Icon & Meta */}
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-2xl border transition-colors ${
                          isSelected
                            ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                            : "bg-white/5 text-neutral-400 border-white/10 group-hover:text-white group-hover:border-white/30"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
                            {item.period}
                          </span>
                          <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-neutral-300 uppercase">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-sans uppercase tracking-tight text-white mt-1 group-hover:text-neutral-100 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Step Index */}
                    <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase self-start md:self-auto">
                      PHASE 0{idx + 1}
                    </span>
                  </div>

                  {/* Description & Detailed Highlights */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-4">
                    <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed max-w-4xl">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                      {item.highlights.map((high) => (
                        <div
                          key={high}
                          className="flex items-center gap-2.5 text-xs font-mono text-neutral-300 p-2.5 rounded-xl border border-white/5 bg-white/[0.02]"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-white flex-shrink-0" />
                          <span>{high}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

