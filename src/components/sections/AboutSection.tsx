"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Cpu, Layers, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useAudio } from "@/hooks/useAudio";

export function AboutSection() {
  const { playHover, playClick } = useAudio();
  const [cardMouse, setCardMouse] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCardMouse({ x: x * 20, y: y * 20 });
  };

  const handleCardMouseLeave = () => {
    setCardMouse({ x: 0, y: 0 });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 md:py-36 px-6 sm:px-8 md:px-12 bg-[#050505] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background Subtle Typography Watermark */}
      <div className="absolute right-0 top-1/4 -translate-y-1/2 pointer-events-none select-none opacity-[0.025] font-black font-sans text-[18vw] leading-none text-white whitespace-nowrap">
        PHILOSOPHY
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>01 // ORIGIN & FOUNDATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-white uppercase">
              CURIOUS MIND.
              <br />
              <span className="text-neutral-400">CREATIVE THINKER.</span>
              <br />
              TECHNOLOGY BUILDER.
            </h2>
          </div>

          <div className="text-right font-mono text-xs text-neutral-400 tracking-widest hidden md:block">
            <span>[ JAYAVARDHAN MALAMANTI ]</span>
            <br />
            <span className="text-neutral-200">B.TECH CSE (AI & ML)</span>
          </div>
        </div>

        {/* Cinematic Spotlight Feature Card (Direct inspiration from video frame_04) */}
        <motion.div
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${-cardMouse.y * 0.4}deg) rotateY(${cardMouse.x * 0.4}deg)`,
            transition: "transform 0.15s ease-out",
          }}
          className="relative rounded-2xl md:rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900/60 via-black to-[#080808] p-8 sm:p-12 md:p-16 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        >
          {/* Internal Volumetric Cone of Light */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 md:w-[600px] h-[500px] pointer-events-none opacity-30 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)",
            }}
          />

          {/* Top Card Meta */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <span className="text-xs sm:text-sm font-mono tracking-[0.2em] uppercase font-bold text-white max-w-md">
              TURNING VISIONARY IDEAS INTO FAST, DISTINCTIVE DIGITAL EXPERIENCES
            </span>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>BASED IN INDIA • WORLDWIDE</span>
            </div>
          </div>

          {/* Floating Human Levitating Silhouette Under Spotlight (frame_04 recreation) */}
          <div className="relative z-10 my-12 md:my-16 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm h-64 sm:h-72 flex items-center justify-center">
              {/* Radial Light Rays */}
              <div
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 10%, rgba(255,255,255,0.25) 0deg, rgba(255,255,255,0.02) 45deg, transparent 60deg, transparent 300deg, rgba(255,255,255,0.02) 315deg, rgba(255,255,255,0.25) 360deg)",
                  filter: "blur(8px)",
                }}
              />

              {/* Floating Silhouette SVG */}
              <motion.svg
                animate={{
                  y: [-8, 8, -8],
                  rotate: [-1.5, 1.5, -1.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                viewBox="0 0 300 200"
                className="w-64 sm:w-80 h-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                fill="none"
              >
                {/* Abstract Leaning/Levitating Human Silhouette (as seen in video frame_04) */}
                <defs>
                  <linearGradient id="bodyBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                    <stop offset="60%" stopColor="#e5e5e5" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#737373" stopOpacity="0.5" />
                  </linearGradient>
                </defs>

                {/* Head */}
                <circle cx="115" cy="55" r="18" fill="url(#bodyBeam)" />

                {/* Torso arched gracefully */}
                <path
                  d="M115 75 C135 85 155 105 170 125 C185 145 195 165 210 185 L185 190 C170 168 160 148 145 128 C132 110 118 95 100 85 Z"
                  fill="url(#bodyBeam)"
                />

                {/* Extended arms in flight / suspension */}
                <path
                  d="M112 85 C100 100 85 120 70 135 L60 130 C75 112 90 95 105 80 Z"
                  fill="url(#bodyBeam)"
                />
                <path
                  d="M125 90 C140 105 160 120 180 130 L185 125 C165 110 145 95 130 85 Z"
                  fill="url(#bodyBeam)"
                />

                {/* Lower legs trailing in space */}
                <path
                  d="M170 125 C185 140 205 160 225 180 L218 185 C198 165 180 145 165 130 Z"
                  fill="url(#bodyBeam)"
                />
              </motion.svg>
            </div>
          </div>

          {/* Bottom Card Controls & Information */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-2 max-w-lg">
              <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                DISCIPLINE & CRAFT — AI/ML • FULL-STACK • CREATIVE CODE
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                I specialize in building bespoke digital products where purposeful editorial design
                meets robust AI engineering, creating experiences with intentional motion,
                rigorous architecture, and tangible real-world utility.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <MagneticButton
                href="#contact"
                onClick={playClick}
                dataCursorText="TALK"
                className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-mono font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors"
              >
                GET IN TOUCH →
              </MagneticButton>
              <MagneticButton
                href="#services"
                onClick={playClick}
                dataCursorText="SERVICES"
                className="px-6 py-2.5 rounded-full border border-white/20 text-white text-xs font-mono font-bold tracking-widest uppercase hover:border-white/50 transition-colors"
              >
                SERVICES
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Focus Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase">
              <Compass className="w-4 h-4 text-white" />
              <span>THE PERSPECTIVE</span>
            </div>

            <div className="flex flex-col gap-6 text-neutral-300 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              <p>
                {PERSONAL_INFO.bioParagraphs[0]}
              </p>
              <p className="text-neutral-400">
                {PERSONAL_INFO.bioParagraphs[1]}
              </p>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-4">
              <div className="flex flex-col">
                <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                  EDUCATION
                </span>
                <span className="text-sm font-bold text-white mt-1">
                  B.Tech CSE (AI & ML)
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                  LOCATION
                </span>
                <span className="text-sm font-bold text-white mt-1">
                  India (Global Work)
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                  STATUS
                </span>
                <span className="text-sm font-bold text-emerald-400 mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available 2026
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus & Core Interests */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Primary Focus */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-white uppercase">
                <Cpu className="w-4 h-4" />
                <span>PRIMARY FOCUS</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {PERSONAL_INFO.focusAreas.map((area, i) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 text-sm text-neutral-300 font-mono tracking-wide"
                  >
                    <span className="text-xs text-neutral-400">0{i + 1}</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Interests */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-white uppercase">
                <Layers className="w-4 h-4" />
                <span>CORE INTERESTS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.interests.map((interest) => (
                  <span
                    key={interest}
                    onMouseEnter={playHover}
                    className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-neutral-300 hover:text-white hover:border-white/30 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

