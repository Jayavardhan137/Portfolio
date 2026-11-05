"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useAudio } from "@/hooks/useAudio";

export function HeroSection() {
  const { playHover, playClick } = useAudio();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 30;
    const y = ((clientY - top) / height - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-8 md:px-12 bg-[#050505] text-white overflow-hidden select-none"
    >
      {/* Background Volumetric Lighting & Atmospheric Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Overhead Conical Spotlight */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[800px] opacity-25 blur-3xl rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 40%, rgba(0,0,0,0) 70%)",
            transform: `translate(calc(-50% + ${mousePos.x * 0.5}px), ${mousePos.y * 0.3}px)`,
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        {/* Ambient Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Top Editorial Meta Strip */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-b border-white/10 pb-4 text-neutral-400 font-mono text-xs tracking-[0.2em]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="uppercase text-neutral-300">EST. 2026 // STUDIO ARCHIVE</span>
        </div>
        <div className="flex items-center gap-6 text-[11px]">
          <span className="hidden sm:inline text-neutral-300">
            LOC: 17.3850° N, 78.4867° E (INDIA)
          </span>
          <span className="text-white border-l border-white/20 pl-4 uppercase font-semibold">
            {PERSONAL_INFO.education}
          </span>
        </div>
      </div>

      {/* Main Central Cinematic Composition */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12 flex flex-col items-center text-center">
        {/* Name Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
          <span className="text-xs font-mono font-medium tracking-[0.25em] text-neutral-200 uppercase">
            {PERSONAL_INFO.name}
          </span>
        </motion.div>

        {/* Massive Headline: "BUILDING BEYOND THE ORDINARY." */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.92] text-white uppercase font-sans">
            BUILDING{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)] hover:text-white transition-colors duration-500">
              BEYOND
            </span>
            <br />
            THE ORDINARY.
          </h1>
        </motion.div>

        {/* Subtitle / Role Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 max-w-2xl"
        >
          <p className="text-xs sm:text-sm md:text-base font-mono tracking-[0.22em] text-neutral-300 uppercase leading-relaxed">
            {PERSONAL_INFO.role}
          </p>
        </motion.div>

        {/* Center Human Silhouette & Volumetric Beam Composition (Video Inspiration) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.55 }}
          className="relative w-full max-w-md h-52 sm:h-64 mt-6 flex items-center justify-center overflow-visible"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 0.2}deg) rotateX(${-mousePos.y * 0.2}deg)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          {/* Volumetric Light Cone Rays */}
          <div
            className="absolute -top-12 inset-x-0 h-72 pointer-events-none opacity-40"
            style={{
              background:
                "polygon(50% 0%, 15% 100%, 85% 100%)",
              backgroundClip: "content-box",
              backgroundImage:
                "conic-gradient(from 180deg at 50% 0%, rgba(255,255,255,0.3) 0deg, rgba(255,255,255,0.02) 40deg, transparent 60deg, rgba(255,255,255,0.02) 300deg, rgba(255,255,255,0.3) 360deg)",
              filter: "blur(12px)",
            }}
          />

          {/* Silhouette SVG figure bathed in atmospheric spotlight */}
          <div className="relative z-10 flex flex-col items-center">
            <svg
              viewBox="0 0 200 240"
              className="w-36 sm:w-44 h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Silhouette head and torso with cinematic gradient & glow */}
              <defs>
                <linearGradient id="bodyGrad" x1="100" y1="0" x2="100" y2="240" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="45%" stopColor="#a3a3a3" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#050505" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="haloGrad" cx="50%" cy="30%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Halo around head */}
              <circle cx="100" cy="55" r="42" fill="url(#haloGrad)" />

              {/* Head Silhouette */}
              <path
                d="M100 25 C82 25 72 38 72 58 C72 78 84 90 100 90 C116 90 128 78 128 58 C128 38 118 25 100 25 Z"
                fill="url(#bodyGrad)"
              />

              {/* Neck */}
              <path d="M91 85 L91 105 L109 105 L109 85 Z" fill="url(#bodyGrad)" />

              {/* Shoulders & Torso tapering down */}
              <path
                d="M100 105 C75 105 45 120 32 155 C26 172 20 205 18 240 L182 240 C180 205 174 172 168 155 C155 120 125 105 100 105 Z"
                fill="url(#bodyGrad)"
              />

              {/* Collar detail */}
              <path
                d="M86 105 L100 135 L114 105"
                stroke="#171717"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Bottom blur fog mask so it melts seamlessly into the floor */}
            <div className="w-56 h-12 -mt-6 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Action CTAs: Magnetic Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <MagneticButton
            href="#work"
            onClick={playClick}
            dataCursorText="EXPLORE"
            className="group px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] flex items-center gap-2"
          >
            <span>SELECTED WORK</span>
            <span className="text-black group-hover:translate-y-0.5 transition-transform duration-300">↓</span>
          </MagneticButton>

          <MagneticButton
            href="#contact"
            onClick={playClick}
            dataCursorText="CONNECT"
            className="group px-7 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-mono text-xs font-bold tracking-[0.2em] uppercase hover:border-white/50 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <span>START A PROJECT</span>
            <span className="text-neutral-400 group-hover:translate-x-0.5 group-hover:text-white transition-all duration-300">→</span>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Bottom Status & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-mono tracking-widest text-neutral-400">
        <div className="flex items-center gap-2.5">
          <Terminal className="w-3.5 h-3.5 text-neutral-300" />
          <span className="text-neutral-300">
            SPECIALIZATION: ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
          </span>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          onMouseEnter={playHover}
          onClick={playClick}
          className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="text-[11px] tracking-[0.25em] uppercase">SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

