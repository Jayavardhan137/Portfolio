"use client";

import React, { useEffect, useRef, useState } from "react";

export function ExperienceSpatial() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const scrolled = -rect.top;
      const p = Math.min(Math.max(scrolled / total, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpTo = (targetProgress: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const targetY = window.scrollY + rect.top + targetProgress * total;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  // 0% -> 0vw, 100% -> -190vw
  const stageTranslateX = progress * 190;
  const isFreelance = progress > 0.55;

  return (
    <section
      ref={sectionRef}
      id="experience"
      data-purpose="experience-section"
      className="relative w-full bg-[#070709] text-white overflow-visible select-none scroll-mt-24 md:scroll-mt-28"
      style={{ height: "280vh" }}
    >
      {/* Sticky 100vh Theater / Viewport Window */}
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-[#070709] flex flex-col justify-between select-none">
        {/* Layer 0: Background Cinematic Ambience & Atmospheric Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Layer 0B: Massive Ambient Horizontal Running Tickers */}
        <div className="absolute inset-0 flex flex-col justify-around pointer-events-none overflow-hidden opacity-[0.035]">
          <div
            className="whitespace-nowrap font-black uppercase text-[14vw] tracking-tighter leading-none"
            style={{
              transform: `translateX(-${(progress * 150) % 100}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            CREATIVE TECHNOLOGIST &nbsp;&nbsp; FULL STACK ARCHITECTURE &nbsp;&nbsp; AI/ML ENGINEERING &nbsp;&nbsp; RAG PIPELINES &nbsp;&nbsp;
          </div>
          <div
            className="whitespace-nowrap font-black uppercase text-[14vw] tracking-tighter leading-none"
            style={{
              transform: `translateX(${(progress * 150) % 100}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            2023 &nbsp;&nbsp; B.TECH CSE (AI & ML) &nbsp;&nbsp; 2026 &nbsp;&nbsp; FULL-STACK SYSTEMS &nbsp;&nbsp; 2026 &nbsp;&nbsp; FREELANCE &nbsp;&nbsp;
          </div>
        </div>

        {/* Top Minimalist Editorial HUD Bar (positioned cleanly below fixed navbar) */}
        <header className="relative z-30 w-full px-6 md:px-14 pt-20 md:pt-24 pb-4 flex items-center justify-between border-b border-white/[0.08] backdrop-blur-md bg-[#070709]/80">
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 font-mono">
              {isFreelance ? "FREELANCE / INDEPENDENT" : "B.TECH CSE & SELF-DIRECTED LEARNING"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-24 sm:w-36 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-75"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <span className="text-[10px] font-mono text-neutral-500">
              {Math.round(progress * 100)}%
            </span>
          </div>
        </header>

        {/* Center: Massive Horizontal Spatial Canvas */}
        <div className="relative z-20 flex-1 w-full overflow-hidden flex items-center">
          <div
            className="flex items-center h-full will-change-transform transition-none"
            style={{
              width: "290vw",
              transform: `translate3d(-${stageTranslateX}vw, 0, 0)`,
            }}
          >
            {/* ================= INTRO ENVIRONMENT (0vw - 90vw) ================= */}
            <div className="flex-shrink-0 w-[95vw] md:w-[85vw] px-8 md:px-16 lg:px-24 flex flex-col justify-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] text-[10px] font-semibold tracking-widest uppercase text-neutral-300 mb-6 font-mono">
                  <span>FOUNDATION & JOURNEY</span>
                </div>
                <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.88] mb-8 font-sans">
                  WHERE<br />I'VE BEEN
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-xl font-normal font-sans">
                  My technical and engineering progression through academic foundations, full-stack architectures, and AI systems.
                </p>
              </div>
            </div>

            {/* ================= CHAPTER 01: LEARNING (90vw - 190vw) ================= */}
            <div className="relative flex-shrink-0 w-[105vw] md:w-[100vw] px-8 md:px-16 lg:px-24 flex flex-col justify-center">
              <div className="absolute -top-8 right-12 md:right-28 text-[12vw] md:text-[14vw] font-black uppercase text-white/[0.04] tracking-tighter select-none pointer-events-none font-sans">
                2023 — 2025
              </div>

              <div className="relative z-10 max-w-4xl">
                <div className="flex items-center gap-4 mb-4 font-mono text-xs">
                  <span className="text-neutral-400">2023 — 2025</span>
                  <span className="h-[1px] w-12 bg-white/20" />
                  <span className="font-bold text-white uppercase tracking-wider">
                    ACADEMIC & DEEP LEARNING
                  </span>
                </div>

                <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] mb-6 font-sans">
                  CREATIVE<br />TECHNOLOGIST
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8 font-sans">
                  Specializing in Artificial Intelligence and Machine Learning at B.Tech CSE level, exploring foundational data structures, generative AI, and modern web frameworks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-3xl mb-8 font-mono">
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5">
                      MILESTONE 01
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      500+ hours hands-on AI & full-stack development
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5">
                      MILESTONE 02
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Mastered React, Next.js, Node.js, and TypeScript
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5">
                      MILESTONE 03
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Engineered RAG pipelines with LangChain & ChromaDB
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= CHAPTER 02: FREELANCE (190vw - 290vw) ================= */}
            <div className="relative flex-shrink-0 w-[105vw] md:w-[100vw] px-8 md:px-16 lg:px-24 flex flex-col justify-center">
              <div className="absolute -top-8 right-12 md:right-28 text-[12vw] md:text-[14vw] font-black uppercase text-white/[0.04] tracking-tighter select-none pointer-events-none font-sans">
                2026 — PRESENT
              </div>

              <div className="relative z-10 max-w-4xl">
                <div className="flex items-center gap-4 mb-4 font-mono text-xs">
                  <span className="text-neutral-400">2026 — PRESENT</span>
                  <span className="h-[1px] w-12 bg-white/20" />
                  <span className="font-bold text-white uppercase tracking-wider">
                    FREELANCE / INDEPENDENT
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full border border-white/20 text-[10px] font-semibold uppercase text-neutral-300">
                    COMMERCIAL
                  </span>
                </div>

                <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] mb-6 font-sans">
                  FULL STACK<br />DEVELOPER
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8 font-sans">
                  Building premium web experiences and AI systems. Specializing in interactive frontends, scalable backends, and zero-hallucination RAG applications.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-3xl mb-8 font-mono">
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5">
                      DELIVERY
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Production platforms including QFLOW AI & StudyAssistant
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5">
                      INFRASTRUCTURE
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Integrated Supabase, REST APIs & Vector Database Stores
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5">
                      INTELLIGENCE
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                      Voice synthesis & context-grounded AI agent pipelines
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Minimalist Editorial Navigation */}
        <footer className="relative z-30 w-full px-6 md:px-14 py-4 flex items-center justify-between border-t border-white/[0.08] backdrop-blur-md bg-[#070709]/80 font-mono">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => jumpTo(0.3)}
              className={`text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border transition-all ${
                !isFreelance
                  ? "border-white/30 text-white bg-white/10"
                  : "border-white/5 text-neutral-500 hover:text-white"
              }`}
            >
              LEARNING
            </button>
            <button
              type="button"
              onClick={() => jumpTo(0.8)}
              className={`text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border transition-all ${
                isFreelance
                  ? "border-white/30 text-white bg-white/10"
                  : "border-white/5 text-neutral-500 hover:text-white"
              }`}
            >
              FREELANCE
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

