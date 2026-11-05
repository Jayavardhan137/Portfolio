"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Cpu, Layers, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { StarrySwirlTexture } from "@/components/ui/StarrySwirlTexture";
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
      className="relative min-h-screen bg-[#050505] text-white overflow-hidden"
    >
      {/* 1. Dramatic Starry Swirls Etching Banner with Centered "ABOUT ME" (Video Frame 03 Inspiration) */}
      <div className="relative w-full h-80 sm:h-96 md:h-[420px] flex items-center justify-center overflow-hidden border-b border-white/10">
        <StarrySwirlTexture className="absolute inset-0 h-full" />

        {/* Center Floating "ABOUT ME" Dark Rounded Card (Frame 03 Exact Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 px-8 py-5 sm:px-12 sm:py-7 rounded-2xl border border-white/25 bg-[#0a0a0e]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center text-center group"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase mb-1">
            EXPLORE IDENTITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-sans uppercase tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            ABOUT ME
          </h2>
          <div className="w-8 h-[2px] bg-white mt-2 group-hover:w-16 transition-all duration-300" />
        </motion.div>
      </div>

      {/* 2. Main About Content Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 md:py-28 flex flex-col gap-16 md:gap-24">
        {/* Editorial Subheader */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>ORIGIN & FOUNDATIONS</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-sans text-white uppercase max-w-3xl">
              CURIOUS MIND. CREATIVE THINKER.
              <br />
              <span className="text-neutral-400">TECHNOLOGY BUILDER.</span>
            </h3>
          </div>

          <div className="text-left md:text-right font-mono text-xs text-neutral-400 tracking-widest">
            <span className="text-white font-bold">[ JAYAVARDHAN MALAMANTI ]</span>
            <br />
            <span>B.TECH CSE (AI & ML)</span>
          </div>
        </div>

        {/* 3. Spotlight Feature Card with Floating Silhouette (Video Frame 04 & 05 Exact Style) */}
        <motion.div
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${-cardMouse.y * 0.35}deg) rotateY(${cardMouse.x * 0.35}deg)`,
            transition: "transform 0.15s ease-out",
          }}
          className="relative rounded-2xl md:rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900/80 via-[#0a0a0c] to-[#050505] p-8 sm:p-12 md:p-16 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
        >
          {/* Angled Overhead Volumetric Beam */}
          <div
            className="absolute -top-32 right-1/4 w-[500px] h-[550px] pointer-events-none opacity-35 blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at 80% 0%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.12) 40%, transparent 70%)",
            }}
          />

          {/* Top Card Meta Bar (Frame 04 Exact Layout) */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <span className="text-xs sm:text-sm font-mono tracking-[0.18em] uppercase font-bold text-white max-w-lg">
              TURNING VISIONARY IDEAS INTO FAST, DISTINCTIVE DIGITAL EXPERIENCES
            </span>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>BASED IN INDIA • WORLDWIDE</span>
            </div>
          </div>

          {/* Floating Levitating Silhouette Under Dramatic Spotlight (Video Frame 04 & 05) */}
          <div className="relative z-10 my-10 md:my-16 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md h-64 sm:h-72 flex items-center justify-center">
              {/* Conical Angled Light Rays from Top-Right (as shown in Frame 05) */}
              <div
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{
                  background:
                    "conic-gradient(from 225deg at 75% 0%, rgba(255,255,255,0.35) 0deg, rgba(255,255,255,0.02) 45deg, transparent 65deg, transparent 310deg, rgba(255,255,255,0.02) 325deg, rgba(255,255,255,0.35) 360deg)",
                  filter: "blur(10px)",
                }}
              />

              {/* Floating Silhouette SVG (Frame 04 recreation) */}
              <motion.svg
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                viewBox="0 0 320 220"
                className="w-72 sm:w-88 h-auto drop-shadow-[0_0_35px_rgba(255,255,255,0.55)]"
                fill="none"
              >
                <defs>
                  <linearGradient id="levitateBody" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                    <stop offset="55%" stopColor="#e5e5e5" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#737373" stopOpacity="0.45" />
                  </linearGradient>
                </defs>

                {/* Head */}
                <circle cx="120" cy="60" r="19" fill="url(#levitateBody)" />

                {/* Arched Spine & Levitating Torso */}
                <path
                  d="M120 80 C140 90 160 110 175 130 C190 150 200 170 215 190 L190 195 C175 172 165 152 150 132 C137 114 122 98 105 88 Z"
                  fill="url(#levitateBody)"
                />

                {/* Trailing Arms */}
                <path
                  d="M117 90 C105 105 90 125 75 140 L65 135 C80 117 95 100 110 85 Z"
                  fill="url(#levitateBody)"
                />
                <path
                  d="M130 95 C145 110 165 125 185 135 L190 130 C170 115 150 100 135 90 Z"
                  fill="url(#levitateBody)"
                />

                {/* Legs floating back in zero-g */}
                <path
                  d="M175 130 C190 145 210 165 230 185 L223 190 C203 170 185 150 170 135 Z"
                  fill="url(#levitateBody)"
                />
              </motion.svg>
            </div>
          </div>

          {/* Bottom Card Bar (Frame 04 Exact Layout) */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-2 max-w-lg">
              <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                DISCIPLINE & CRAFT — AI/ML • FULL-STACK • CREATIVE CODE
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                I specialize in building bespoke digital products where purposeful editorial design
                meets robust engineering. Creating experiences with intentional motion,
                systematic rigor, and measurable impact.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <MagneticButton
                href="/contact"
                onClick={playClick}
                dataCursorText="CONTACT"
                className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-mono font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors shadow-sm"
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

        {/* 4. Narrative Columns & Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 uppercase">
              <Compass className="w-4 h-4 text-white" />
              <span>THE PERSPECTIVE</span>
            </div>

            <div className="flex flex-col gap-6 text-neutral-300 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              <p>{PERSONAL_INFO.bioParagraphs[0]}</p>
              <p className="text-neutral-400">{PERSONAL_INFO.bioParagraphs[1]}</p>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-2">
              <div className="flex flex-col">
                <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                  ACADEMIC
                </span>
                <span className="text-sm font-bold text-white mt-1">
                  B.Tech CSE (AI & ML)
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                  ORIGIN
                </span>
                <span className="text-sm font-bold text-white mt-1">
                  India • Worldwide
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

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-white uppercase">
                <Cpu className="w-4 h-4" />
                <span>PRIMARY SPECIALIZATION</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {PERSONAL_INFO.focusAreas.map((area, i) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 text-sm text-neutral-300 font-mono tracking-wide"
                  >
                    <span className="text-xs text-neutral-500 font-bold">0{i + 1}</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-white uppercase">
                <Layers className="w-4 h-4" />
                <span>INTERESTS & INNOVATION</span>
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
