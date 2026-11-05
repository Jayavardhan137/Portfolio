"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ScrollExpandMediaProps {
  onOpenContact?: () => void;
}

export function ScrollExpandMedia({ onOpenContact }: ScrollExpandMediaProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalDist = rect.height - windowH;

      if (totalDist <= 0) return;

      const scrolled = -rect.top;
      const rawProgress = scrolled / totalDist;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const ASPECT_RATIO = 1024 / 546;

  const startW = isMobile ? 280 : 300;
  const startH = isMobile ? 360 : 400;

  const maxWByViewport = typeof window !== "undefined" ? window.innerWidth * 0.94 : 1200;
  const maxWByHeight = typeof window !== "undefined" ? (window.innerHeight * 0.86) * ASPECT_RATIO : 1000;
  const endW = Math.min(maxWByViewport, maxWByHeight);
  const endH = endW / ASPECT_RATIO;

  const currentW = startW + progress * (endW - startW);
  const currentH = startH + progress * (endH - startH);

  const textTranslateX = progress * (isMobile ? 180 : 160);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-[#0D0D0D] text-white"
      style={{ height: "230vh" }}
    >
      {/* Sticky 100dvh Viewport Window */}
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-start z-10 select-none">
        {/* Starry Night Castle Background with dynamic opacity */}
        <div
          className="absolute inset-0 z-0 h-full w-full pointer-events-none transition-opacity duration-150 ease-out"
          style={{ opacity: Math.max(0, 1 - progress * 1.2) }}
        >
          <img
            src="/assets/about_starry_castle_hq.jpg"
            alt="Monochrome Starry Night Castle Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Centered Interactive Stage Container */}
        <div className="container mx-auto flex flex-col items-center justify-start relative z-10 w-full h-full">
          <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
            {/* Expanding Media Card */}
            <div
              className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-2xl bg-[#07090E]"
              style={{
                width: `${currentW}px`,
                height: `${currentH}px`,
                maxWidth: "96vw",
                maxHeight: "88vh",
                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9)",
                borderColor: `rgba(255,255,255,${0.1 + (1 - progress) * 0.25})`,
                borderWidth: "1px",
              }}
            >
              {/* Media Image Container */}
              <div className="relative w-full h-full overflow-hidden rounded-xl flex items-center justify-center bg-[#07090E]">
                {/* Crisp Base Image */}
                <img
                  src="/assets/about_floating_light_hq.png"
                  alt="Jayavardhan Malamanti - Ascendance & Digital Craft"
                  className="w-full h-full object-cover rounded-xl"
                  style={{ transform: "scale(1.02)" }}
                />

                {/* Pre-blurred Layer for Unblur effect */}
                <img
                  src="/assets/about_floating_light_hq.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl pointer-events-none transition-opacity duration-200"
                  style={{
                    filter: "blur(18px)",
                    transform: "scale(1.08)",
                    opacity: Math.max(0, 1 - progress * 2.2),
                    display: progress > 0.5 ? "none" : "block",
                  }}
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/85 rounded-xl pointer-events-none" />

                {/* Minimal Aesthetic About Info - Perimeter Layout with Empty Center */}
                <div
                  className="absolute inset-0 z-20 flex flex-col justify-between p-5 sm:p-7 md:p-9 transition-all duration-300"
                  style={{
                    opacity: progress > 0.65 ? (progress - 0.65) / 0.35 : 0,
                    pointerEvents: progress > 0.85 ? "auto" : "none",
                  }}
                >
                  {/* Top Perimeter */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-3">
                    <h3 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-tight text-white max-w-xl">
                      TURNING VISIONARY IDEAS INTO FAST, DISTINCTIVE DIGITAL EXPERIENCES
                    </h3>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 shrink-0">
                      BASED IN INDIA • WORLDWIDE
                    </span>
                  </div>

                  {/* Center Zone: OPEN & EMPTY */}
                  <div className="flex-1 pointer-events-none min-h-[120px] md:min-h-[180px]" />

                  {/* Bottom Perimeter */}
                  <div className="pt-3 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="max-w-xl space-y-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-300">
                          DISCIPLINE & CRAFT
                        </span>
                        <div className="h-px bg-white/15 w-6" />
                        <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                          AI/ML • FULL-STACK • CREATIVE CODE
                        </span>
                      </div>
                      <p className="text-xs sm:text-[12px] font-medium leading-relaxed tracking-wider uppercase text-neutral-300">
                        {PERSONAL_INFO.bioParagraphs[0]}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 pt-1 md:pt-0">
                      <button
                        type="button"
                        onClick={onOpenContact}
                        className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-2"
                      >
                        <span>GET IN TOUCH</span>
                        <ArrowRight className="w-3.5 h-3.5 text-black" />
                      </button>
                      <a
                        href="#services"
                        className="px-5 py-2.5 rounded-full border border-neutral-500 hover:border-white text-white text-xs font-bold tracking-wider uppercase transition-all duration-200"
                      >
                        SERVICES
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtitles when closed */}
            <div
              className="flex flex-col items-center text-center relative z-10 mt-4 pointer-events-none transition-opacity duration-200"
              style={{ opacity: Math.max(0, 1 - progress * 2.5) }}
            >
              <p className="text-xl md:text-2xl text-neutral-300 font-semibold tracking-wider uppercase drop-shadow">
                BACKGROUND & VISION
              </p>
              <p className="text-neutral-400 font-medium text-xs tracking-widest uppercase mt-1 drop-shadow">
                SCROLL TO EXPAND
              </p>
            </div>

            {/* Splitting Title Header: ABOUT translates left, ME translates right */}
            <div className="flex items-center justify-center text-center gap-2 sm:gap-4 w-full relative z-10 pointer-events-none flex-col mt-4">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight drop-shadow-2xl transition-transform"
                style={{
                  transform: `translateX(-${textTranslateX}px)`,
                  opacity: Math.max(0, 1 - progress * 1.5),
                }}
              >
                ABOUT
              </h2>
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight drop-shadow-2xl transition-transform"
                style={{
                  transform: `translateX(${textTranslateX}px)`,
                  opacity: Math.max(0, 1 - progress * 1.5),
                }}
              >
                ME
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

