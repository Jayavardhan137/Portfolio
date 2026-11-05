"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { SERVICES, Service } from "@/data/portfolioData";
import { useAudio } from "@/hooks/useAudio";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2); // Default to item 3 open like in frame 14
  const { playHover, playClick } = useAudio();

  const toggleService = (idx: number) => {
    playClick();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="services"
      className="relative min-h-screen py-24 md:py-36 px-6 sm:px-8 md:px-12 bg-[#f4f4f6] text-[#0a0a0c] border-t border-neutral-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Section Header (Frame 14 & 18 Exact Style) */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span>DISCIPLINE & CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-neutral-900 uppercase">
            THE SERVICES WE PROVIDE
          </h2>

          <p className="text-xs sm:text-sm font-mono tracking-wider text-neutral-600 uppercase max-w-2xl leading-relaxed">
            CREATING VISUALLY APPEALING AND FUNCTIONAL DIGITAL EXPERIENCES TAILORED TO RIGOROUS ARCHITECTURAL GOALS. PROVIDING A CONSISTENT USER EXPERIENCE ACROSS PLATFORMS.
          </p>
        </div>

        {/* Editorial Accordion Items (Frame 14 & 18 Exact Style) */}
        <div className="flex flex-col gap-3">
          {SERVICES.map((srv, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={srv.number}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0d0d10] text-white shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-neutral-800"
                    : "bg-white/80 hover:bg-white text-neutral-900 border border-neutral-300/80 shadow-sm"
                }`}
              >
                {/* Header Row */}
                <button
                  type="button"
                  onClick={() => toggleService(idx)}
                  onMouseEnter={playHover}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left transition-colors"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span
                      className={`font-mono text-sm sm:text-base font-bold ${
                        isOpen ? "text-neutral-500" : "text-neutral-400"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <h3 className="text-base sm:text-xl md:text-2xl font-black font-sans uppercase tracking-tight">
                      {srv.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className={`hidden sm:inline text-xs font-mono tracking-widest uppercase ${
                        isOpen ? "text-neutral-400" : "text-neutral-500"
                      }`}
                    >
                      {srv.tag}
                    </span>
                    <div
                      className={`p-2 rounded-full transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-white text-black"
                          : "bg-neutral-100 text-neutral-700"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Drawer Details (Frame 14 Exact Style) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-1 border-t border-neutral-800 flex flex-col gap-6 text-neutral-300">
                        <p className="text-sm sm:text-base font-sans leading-relaxed text-neutral-300 max-w-3xl">
                          {srv.description}
                        </p>

                        {/* Deliverables Readout & Inquire Action (Frame 14) */}
                        <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                              DELIVERABLES:
                            </span>
                            <span className="text-xs font-mono text-white">
                              {srv.deliverables.join(", ").toUpperCase()}
                            </span>
                          </div>

                          <div className="flex-shrink-0">
                            <MagneticButton
                              href={`/contact?service=${encodeURIComponent(srv.title)}`}
                              onClick={playClick}
                              dataCursorText="INQUIRE"
                              className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-mono font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                            >
                              <span>INQUIRE</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </MagneticButton>
                          </div>
                        </div>

                        {/* Tech Stack Chips */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-mono text-neutral-500 uppercase mr-2">
                            STACK:
                          </span>
                          {srv.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md border border-neutral-800 bg-neutral-900 text-[11px] font-mono text-neutral-300"
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
