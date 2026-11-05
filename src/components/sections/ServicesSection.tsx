"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { SERVICES, Service } from "@/data/portfolioData";
import { useAudio } from "@/hooks/useAudio";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { playHover, playClick } = useAudio();

  const toggleService = (idx: number) => {
    playClick();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="services"
      className="relative min-h-screen py-24 md:py-36 px-6 sm:px-8 md:px-12 bg-[#050505] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute left-0 top-1/3 -translate-y-1/2 pointer-events-none select-none opacity-[0.02] font-black font-sans text-[22vw] leading-none text-white whitespace-nowrap">
        OFFERINGS
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-14 md:gap-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>05 // BESPOKE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-white uppercase">
              SERVICES &
              <br />
              <span className="text-neutral-400">ENGINEERING SOLUTIONS.</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-neutral-400 tracking-widest hidden md:block">
            <span>[ DISCIPLINE & PRECISION ]</span>
          </div>
        </div>

        {/* Editorial Accordion Items (Inspired by Video frame_14) */}
        <div className="flex flex-col gap-3">
          {SERVICES.map((srv, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={srv.number}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "border-white/40 bg-[#0c0c0e] shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                {/* Header row */}
                <button
                  type="button"
                  onClick={() => toggleService(idx)}
                  onMouseEnter={playHover}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left transition-colors"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="font-mono text-sm sm:text-base text-neutral-400 font-bold">
                      {srv.number}
                    </span>
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-black font-sans uppercase tracking-tight text-white">
                      {srv.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline text-xs font-mono tracking-widest text-neutral-400 uppercase">
                      {srv.tag}
                    </span>
                    <div
                      className={`p-2 rounded-full border transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-white text-black border-white"
                          : "border-white/20 text-neutral-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Drawer Details (frame_14 style) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/10 flex flex-col gap-6">
                        <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed max-w-3xl">
                          {srv.description}
                        </p>

                        {/* Deliverables Readout */}
                        <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                              CORE DELIVERABLES
                            </span>
                            <span className="text-xs font-mono text-white">
                              {srv.deliverables.join(" • ")}
                            </span>
                          </div>

                          <div className="flex-shrink-0">
                            <MagneticButton
                              href={`#contact?service=${encodeURIComponent(srv.title)}`}
                              onClick={playClick}
                              dataCursorText="INQUIRE"
                              className="px-5 py-2 rounded-full bg-white text-black text-xs font-mono font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                            >
                              <span>INQUIRE</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </MagneticButton>
                          </div>
                        </div>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-mono text-neutral-400 uppercase mr-2">
                            STACK:
                          </span>
                          {srv.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[11px] font-mono text-neutral-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

