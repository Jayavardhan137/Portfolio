"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PortraitSilhouette } from "@/components/ui/PortraitSilhouette";
import { useAudio } from "@/hooks/useAudio";

export function HeroSection() {
  const { playHover, playClick } = useAudio();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 20;
    const y = ((clientY - top) / height - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-6 sm:px-8 md:px-12 bg-[#f4f4f6] text-[#0a0a0c] overflow-hidden select-none"
    >
      {/* Subtle Warm Vignette / Ambient Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(220,220,225,0.4) 60%, transparent 80%)",
          }}
        />
      </div>

      {/* Center Display Headline Behind & Flanking Silhouette (Frame 02 Style) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto pt-6 pb-2 flex flex-col items-center text-center">
        {/* Massive Dual-Tier Typography */}
        <div className="relative w-full flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[11vw] font-black tracking-tight font-sans uppercase text-[#0d0d10] leading-[0.88]"
          >
            EXPLORE MY
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[11vw] font-black tracking-tight font-sans uppercase leading-[0.88] text-transparent bg-clip-text bg-gradient-to-b from-[#141416] via-[#262629] to-[#73737a]/30">
              PORTFOLIO
            </h2>
          </motion.div>
        </div>

        {/* Center Back-Lit Monochrome Silhouette Portrait (Frame 02 Exact Composition) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 0.15}deg) rotateX(${-mousePos.y * 0.15}deg)`,
            transition: "transform 0.15s ease-out",
          }}
          className="relative z-20 -mt-16 sm:-mt-24 md:-mt-36 w-full max-w-md flex justify-center"
        >
          <PortraitSilhouette className="w-full" />
        </motion.div>
      </div>

      {/* Bottom Editorial Meta Bar (Frame 02 Exact Layout) */}
      <div className="relative z-30 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-4 border-t border-neutral-300 text-xs font-mono">
        {/* Left: Designer Est. 2026 + Circle Arrow Button */}
        <div className="md:col-span-4 flex items-center gap-4">
          <MagneticButton
            href="#about"
            onClick={playClick}
            dataCursorText="SCROLL"
            className="w-11 h-11 rounded-full border border-neutral-400/80 bg-white shadow-sm flex items-center justify-center hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
          >
            <ArrowDownRight className="w-5 h-5 text-current" />
          </MagneticButton>

          <div className="flex flex-col">
            <span className="font-bold tracking-widest text-neutral-900 uppercase">
              AI/ML DEVELOPER EST.2026
            </span>
            <span className="text-[10px] text-neutral-500 tracking-wider">
              JAYAVARDHAN MALAMANTI // INDIA
            </span>
          </div>
        </div>

        {/* Center: Live Coordinates / Status Pill */}
        <div className="md:col-span-4 flex justify-start md:justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 bg-white/80 backdrop-blur-sm text-[11px] font-mono tracking-wider text-neutral-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AVAILABLE FOR WORK • 2026</span>
          </div>
        </div>

        {/* Right: Personal Statement & Tech Stack Disciplines (Frame 02 Style) */}
        <div className="md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right gap-2">
          <p className="text-[11px] sm:text-xs text-neutral-700 font-sans leading-relaxed max-w-xs uppercase font-medium">
            Transforming complex problems into useful digital experiences through AI, modern software, and creative experimentation.
          </p>
          <div className="flex flex-wrap gap-2 text-[10px] font-mono tracking-widest text-neutral-600 uppercase font-bold">
            <span className="px-2 py-0.5 rounded bg-neutral-200/80">AI/ML</span>
            <span className="px-2 py-0.5 rounded bg-neutral-200/80">WEB DESIGN</span>
            <span className="px-2 py-0.5 rounded bg-neutral-200/80">LANDING PAGE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
