"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Trophy,
  ArrowUpRight,
  Terminal,
  ExternalLink,
  CheckCircle2,
  GitBranch,
  Zap,
  Boxes,
  Compass,
} from "lucide-react";

export function MyJourneySection() {
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

  // Total horizontal stage width = 590vw.
  // Stage translates from 0vw to -(590 - 100)vw = -490vw.
  const stageTranslateX = progress * 490;

  // Determine active chapter label based on scroll progress
  let activeChapter = "MY JOURNEY // OVERVIEW";
  if (progress > 0.12 && progress <= 0.28) {
    activeChapter = "CH. 01 — THE BEGINNING";
  } else if (progress > 0.28 && progress <= 0.44) {
    activeChapter = "CH. 02 — EXPLORING DEVELOPMENT";
  } else if (progress > 0.44 && progress <= 0.6) {
    activeChapter = "CH. 03 — DISCOVERING AI & ML";
  } else if (progress > 0.6 && progress <= 0.76) {
    activeChapter = "CH. 04 — LEARNING BY BUILDING";
  } else if (progress > 0.76 && progress <= 0.88) {
    activeChapter = "CH. 05 — HACKATHONS & CHALLENGES";
  } else if (progress > 0.88) {
    activeChapter = "CH. 06 & 07 — CURRENT FOCUS & HORIZON";
  }

  const devTech = [
    "HTML & CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "C++",
  ];

  const aiTech = [
    { name: "LangChain", tag: "LLM Pipelines" },
    { name: "Hugging Face", tag: "Models & Embeddings" },
    { name: "ChromaDB", tag: "Vector Store" },
    { name: "Gemini API", tag: "Multimodal AI" },
    { name: "OpenRouter", tag: "Model Routing" },
    { name: "Supabase", tag: "Postgres & pgvector" },
  ];

  return (
    <section
      ref={sectionRef}
      id="journey"
      data-purpose="my-journey-horizontal-section"
      className="relative w-full bg-[#070709] text-white overflow-visible select-none scroll-mt-24 md:scroll-mt-28"
      style={{ height: "460vh" }}
    >
      {/* Invisible anchor for backward compatibility with #experience */}
      <span id="experience" aria-hidden="true" className="absolute -top-28" />

      {/* Sticky 100vh Theater Viewport Canvas */}
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

        {/* Layer 0B: Massive Ambient Horizontal Running Tickers (Like Before) */}
        <div className="absolute inset-0 flex flex-col justify-around pointer-events-none overflow-hidden opacity-[0.032]">
          <div
            className="whitespace-nowrap font-black uppercase text-[13vw] tracking-tighter leading-none"
            style={{
              transform: `translateX(-${(progress * 280) % 100}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            LEARNING &nbsp;&bull;&nbsp; BUILDING &nbsp;&bull;&nbsp; EVOLVING &nbsp;&bull;&nbsp; B.TECH CSE (AI &amp; ML) &nbsp;&bull;&nbsp; MY JOURNEY &nbsp;&bull;&nbsp; CREATIVE TECHNOLOGIST &nbsp;&bull;&nbsp;
          </div>
          <div
            className="whitespace-nowrap font-black uppercase text-[13vw] tracking-tighter leading-none"
            style={{
              transform: `translateX(${(progress * 280) % 100}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            01 THE BEGINNING &nbsp;&bull;&nbsp; 02 DEVELOPMENT &nbsp;&bull;&nbsp; 03 AI DISCOVERY &nbsp;&bull;&nbsp; 04 PROJECTS &nbsp;&bull;&nbsp; 05 HACKATHONS &nbsp;&bull;&nbsp; 06 CURRENT FOCUS &nbsp;&bull;&nbsp; 07 HORIZON &nbsp;&bull;&nbsp;
          </div>
        </div>

        {/* Top Minimalist Editorial HUD Bar */}
        <header className="relative z-30 w-full px-6 md:px-14 pt-20 md:pt-24 pb-4 flex items-center justify-between border-b border-white/[0.08] backdrop-blur-md bg-[#070709]/80">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-neutral-300 font-mono">
              {activeChapter}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-24 sm:w-36 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-75"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <span className="text-[10px] font-mono text-neutral-400">
              {Math.round(progress * 100)}%
            </span>
          </div>
        </header>

        {/* Center: Massive Horizontal Spatial Canvas */}
        <div className="relative z-20 flex-1 w-full overflow-hidden flex items-center">
          <div
            className="flex items-center h-full will-change-transform transition-none"
            style={{
              width: "590vw",
              transform: `translate3d(-${stageTranslateX}vw, 0, 0)`,
            }}
          >
            {/* =================================================================
                ENVIRONMENT 0: COVER / INTRO (0vw - 85vw)
            ================================================================== */}
            <div className="flex-shrink-0 w-[95vw] md:w-[85vw] px-8 md:px-16 lg:px-24 flex flex-col justify-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.03] text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-neutral-300 mb-6 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>LEARNING • BUILDING • EVOLVING</span>
                </div>

                <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.88] mb-6 font-sans">
                  MY<br />JOURNEY
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-xl font-normal font-sans mb-8">
                  My path as a B.Tech Computer Science student specializing in
                  Artificial Intelligence &amp; Machine Learning. From writing my
                  first lines of code to engineering AI platforms and competing
                  in hackathons — this is how I learn, build, and evolve.
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 tracking-widest uppercase border border-white/10 px-4 py-2 rounded-full bg-white/[0.02]">
                  <span>SCROLL DOWN TO PROGRESS THROUGH STORY</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </div>

            {/* =================================================================
                ENVIRONMENT 1: 01 THE BEGINNING & 02 EXPLORING DEV (85vw - 185vw)
            ================================================================== */}
            <div className="relative flex-shrink-0 w-[105vw] md:w-[100vw] px-8 md:px-16 lg:px-20 flex flex-col justify-center">
              {/* Giant Background Number Watermark */}
              <div
                aria-hidden="true"
                className="absolute -top-8 right-12 md:right-24 text-[12vw] md:text-[14vw] font-black uppercase text-white/[0.03] tracking-tighter select-none pointer-events-none font-mono"
              >
                01 &bull; 02
              </div>

              <div className="relative z-10 max-w-4xl max-h-[78vh] overflow-y-auto pr-2">
                {/* Chapter 01 */}
                <div className="mb-8 pb-8 border-b border-white/10">
                  <div className="flex items-center gap-3 mb-3 font-mono text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-white/10 text-white font-bold">
                      01
                    </span>
                    <span className="text-neutral-400 uppercase tracking-widest">
                      FOUNDATION & FIRST PRINCIPLES
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-sans mb-3">
                    THE BEGINNING
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-sans mb-4">
                    I started my journey in computer science driven by pure
                    curiosity about how software works. Exploring the core
                    fundamentals of web development —{" "}
                    <strong className="text-white">HTML, CSS, and JavaScript</strong>{" "}
                    — helped me understand how websites render, handle user
                    inputs, and structure information. Gradually, writing markup
                    evolved into an appetite for building interactive
                    websites and exploring deeper computing systems.
                  </p>

                  <div className="grid grid-cols-3 gap-2 font-mono text-[11px]">
                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02]">
                      <span className="text-white font-bold block">HTML5 &amp; CSS3</span>
                      <span className="text-neutral-400 text-[10px] font-sans">Semantics &amp; Layouts</span>
                    </div>
                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02]">
                      <span className="text-white font-bold block">JavaScript</span>
                      <span className="text-neutral-400 text-[10px] font-sans">DOM &amp; Logic Design</span>
                    </div>
                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02]">
                      <span className="text-white font-bold block">First Builds</span>
                      <span className="text-neutral-400 text-[10px] font-sans">Interactive Websites</span>
                    </div>
                  </div>
                </div>

                {/* Chapter 02 */}
                <div>
                  <div className="flex items-center gap-3 mb-3 font-mono text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-white/10 text-white font-bold">
                      02
                    </span>
                    <span className="text-neutral-400 uppercase tracking-widest">
                      EXPANDING THE TOOLKIT
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-sans mb-3">
                    EXPLORING DEVELOPMENT
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-sans mb-3">
                    As my foundation solidified, I expanded my technical
                    knowledge across the software stack. I firmly believe in{" "}
                    <strong className="text-white">
                      learning by building practical websites rather than
                      only studying theory
                    </strong>
                    . Moving to React, Tailwind CSS, and Node.js gave me end-to-end
                    perspective, while C++ and Python deepened my algorithmic
                    discipline.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                    {devTech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================================
                ENVIRONMENT 2: 03 DISCOVERING AI & MACHINE LEARNING (185vw - 285vw)
            ================================================================== */}
            <div className="relative flex-shrink-0 w-[105vw] md:w-[100vw] px-8 md:px-16 lg:px-20 flex flex-col justify-center">
              {/* Giant Background Number Watermark */}
              <div
                aria-hidden="true"
                className="absolute -top-8 right-12 md:right-24 text-[12vw] md:text-[14vw] font-black uppercase text-white/[0.03] tracking-tighter select-none pointer-events-none font-mono"
              >
                03 &bull; AI
              </div>

              <div className="relative z-10 max-w-4xl max-h-[78vh] overflow-y-auto pr-2">
                <div className="flex items-center gap-3 mb-3 font-mono text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-white/10 text-white font-bold">
                    03
                  </span>
                  <span className="text-neutral-400 uppercase tracking-widest">
                    MACHINE INTELLIGENCE
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-sans mb-4">
                  DISCOVERING AI &amp;<br />MACHINE LEARNING
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-sans mb-5">
                  Specializing in AI &amp; Machine Learning during my B.Tech studies
                  was a transformative turning point. I became fascinated by how
                  AI can solve complex real-world problems. I dove into machine
                  learning, Large Language Models (LLMs), high-dimensional
                  embeddings, vector databases, and{" "}
                  <strong className="text-white">
                    Retrieval-Augmented Generation (RAG)
                  </strong>{" "}
                  to build systems grounded in facts rather than hallucinations.
                </p>

                {/* AI Tools Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5 font-mono text-xs">
                  {aiTech.map((ai) => (
                    <div
                      key={ai.name}
                      className="p-3 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between"
                    >
                      <div>
                        <span className="text-white font-bold block">
                          {ai.name}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-sans">
                          {ai.tag}
                        </span>
                      </div>
                      <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
                    </div>
                  ))}
                </div>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <span className="text-white font-bold block mb-1">
                      RAG Pipelines
                    </span>
                    <p className="text-neutral-400 text-[11px] font-sans">
                      Document ingestion, chunking, and semantic context retrieval.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <span className="text-white font-bold block mb-1">
                      Vector Search
                    </span>
                    <p className="text-neutral-400 text-[11px] font-sans">
                      ChromaDB &amp; Supabase pgvector for sub-second similarity matching.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <span className="text-white font-bold block mb-1">
                      Model Orchestration
                    </span>
                    <p className="text-neutral-400 text-[11px] font-sans">
                      LangChain chains, Gemini API, and dynamic AI persona agents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================================
                ENVIRONMENT 3: 04 LEARNING BY BUILDING (285vw - 395vw)
            ================================================================== */}
            <div className="relative flex-shrink-0 w-[110vw] md:w-[105vw] px-8 md:px-16 lg:px-20 flex flex-col justify-center">
              {/* Giant Background Number Watermark */}
              <div
                aria-hidden="true"
                className="absolute -top-8 right-12 md:right-24 text-[12vw] md:text-[14vw] font-black uppercase text-white/[0.03] tracking-tighter select-none pointer-events-none font-mono"
              >
                04 &bull; BUILDS
              </div>

              <div className="relative z-10 max-w-4xl max-h-[78vh] overflow-y-auto pr-2">
                <div className="flex items-center gap-3 mb-2 font-mono text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-white/10 text-white font-bold">
                    04
                  </span>
                  <span className="text-neutral-400 uppercase tracking-widest">
                    PROJECT MILESTONES
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-sans mb-3">
                  LEARNING BY BUILDING
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mb-4">
                  For me, projects are not just showcases; they are the
                  milestones where theoretical concepts solidify into real
                  engineering competence:
                </p>

                {/* 3 Milestone Projects Cards */}
                <div className="space-y-3.5">
                  {/* Project 1: QueueFlow AI */}
                  <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 font-mono">
                      <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        1. QueueFlow AI (QFlow AI)
                      </span>
                      <a
                        href="https://queue-management-system-vert-iota.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold tracking-wider uppercase hover:bg-neutral-200 transition-colors"
                      >
                        <span>LIVE SITE</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                      An intelligent QR-based queue management platform for
                      hospitals, banks, supermarkets, and clinics to eliminate
                      physical queues with real-time tracking, wait estimation,
                      and AI voice announcements.
                    </p>
                  </div>

                  {/* Project 2: StudyAssistant */}
                  <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-2 mb-1.5 font-mono">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        2. StudyAssistant
                      </span>
                      <span className="text-[10px] text-neutral-400 ml-auto uppercase">
                        RAG COPILOT
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                      An AI study assistant equipped with distinct conversational
                      personalities. Ingests academic literature and textbooks
                      using ChromaDB and LangChain to synthesize grounded tutoring
                      and interactive question-answering.
                    </p>
                  </div>

                  {/* Project 3: RAG-based Financial Advisor */}
                  <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-2 mb-1.5 font-mono">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        3. RAG-Based Financial Advisor AI
                      </span>
                      <span className="text-[10px] text-neutral-400 ml-auto uppercase">
                        DOCUMENT AI
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                      A specialized Retrieval-Augmented Generation financial
                      advisor that ingests regulatory documents and tax codes to
                      provide exact, grounded answers regarding GST, taxation
                      slabs, and deductions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================================
                ENVIRONMENT 4: 05 HACKATHONS & CHALLENGES (395vw - 495vw)
            ================================================================== */}
            <div className="relative flex-shrink-0 w-[105vw] md:w-[100vw] px-8 md:px-16 lg:px-20 flex flex-col justify-center">
              {/* Giant Background Number Watermark */}
              <div
                aria-hidden="true"
                className="absolute -top-8 right-12 md:right-24 text-[12vw] md:text-[14vw] font-black uppercase text-white/[0.03] tracking-tighter select-none pointer-events-none font-mono"
              >
                05 &bull; SPRINT
              </div>

              <div className="relative z-10 max-w-4xl max-h-[78vh] overflow-y-auto pr-2">
                <div className="flex items-center gap-3 mb-2 font-mono text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-white/10 text-white font-bold">
                    05
                  </span>
                  <span className="text-neutral-400 uppercase tracking-widest">
                    PRESSURE-TESTING SKILLS
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-sans mb-3">
                  HACKATHONS &amp;<br />CHALLENGES
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-sans mb-5">
                  Testing skills under strict time limits and collaborating with
                  passionate peers has been one of the fastest catalysts for my
                  growth. Hackathons taught me how to make pragmatic technical
                  trade-offs and execute rapidly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs mb-4">
                  <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-2 text-white font-bold mb-1">
                      <Trophy className="w-4 h-4 text-amber-400" />
                      <span>Takeover Hackathon 2K26 Finals</span>
                    </div>
                    <p className="text-neutral-400 text-[11px] font-sans">
                      Qualified and competed in the finals, architecting and
                      pitching a functional prototype under intense sprint pressure.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-2 text-white font-bold mb-1">
                      <GitBranch className="w-4 h-4 text-cyan-400" />
                      <span>College Hackathons</span>
                    </div>
                    <p className="text-neutral-400 text-[11px] font-sans">
                      Collaborated on 24-48 hour sprints, building functional
                      software and learning cross-functional team workflows.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-2 text-white font-bold mb-1">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span>30 Days of LeetCode Challenge</span>
                    </div>
                    <p className="text-neutral-400 text-[11px] font-sans">
                      Daily problem-solving practice to build consistency,
                      algorithmic speed, and computational discipline.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex items-center gap-2 text-white font-bold mb-1">
                      <Zap className="w-4 h-4 text-purple-400" />
                      <span>Rapid Prototyping Under Constraints</span>
                    </div>
                    <p className="text-neutral-400 text-[11px] font-sans">
                      Turning concepts into deployable code quickly, debugging on
                      the fly, and prioritizing high-impact features.
                    </p>
                  </div>
                </div>

                <p className="text-[11px] font-mono text-neutral-400 pt-2 border-t border-white/10">
                  CORE LESSON: Teamwork, communication, and clear technical
                  thinking matter just as much as writing code.
                </p>
              </div>
            </div>

            {/* =================================================================
                ENVIRONMENT 5: 06 CURRENT FOCUS & 07 HORIZON (495vw - 590vw)
            ================================================================== */}
            <div className="relative flex-shrink-0 w-[100vw] md:w-[95vw] px-8 md:px-16 lg:px-20 flex flex-col justify-center">
              {/* Giant Background Number Watermark */}
              <div
                aria-hidden="true"
                className="absolute -top-8 right-12 md:right-24 text-[12vw] md:text-[14vw] font-black uppercase text-white/[0.03] tracking-tighter select-none pointer-events-none font-mono"
              >
                06 &bull; 07
              </div>

              <div className="relative z-10 max-w-4xl max-h-[78vh] overflow-y-auto pr-2">
                {/* 06: Currently Learning */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3 mb-2 font-mono text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-white/10 text-white font-bold">
                      06
                    </span>
                    <span className="text-neutral-400 uppercase tracking-widest">
                      ACTIVE EXPANSION
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans mb-3">
                    CURRENTLY LEARNING
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-[11px]">
                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02]">
                      <span className="text-white font-bold block">1. DSA</span>
                      <span className="text-neutral-400 text-[10px] font-sans">Algorithms &amp; Complexity</span>
                    </div>
                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02]">
                      <span className="text-white font-bold block">2. C++ &amp; Python</span>
                      <span className="text-neutral-400 text-[10px] font-sans">Systems &amp; ML Tooling</span>
                    </div>
                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02]">
                      <span className="text-white font-bold block">3. Full-Stack</span>
                      <span className="text-neutral-400 text-[10px] font-sans">React &amp; Web Architecture</span>
                    </div>
                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02]">
                      <span className="text-white font-bold block">4. AI Engineering</span>
                      <span className="text-neutral-400 text-[10px] font-sans">LLMs &amp; Vector Stores</span>
                    </div>
                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02]">
                      <span className="text-white font-bold block">5. Practical Websites</span>
                      <span className="text-neutral-400 text-[10px] font-sans">Real-World Web Platforms</span>
                    </div>
                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.02]">
                      <span className="text-white font-bold block">6. Fundamentals</span>
                      <span className="text-neutral-400 text-[10px] font-sans">Clean Code &amp; Design</span>
                    </div>
                  </div>
                </div>

                {/* 07: What's Next Statement */}
                <div>
                  <div className="flex items-center gap-3 mb-2 font-mono text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-white/10 text-white font-bold">
                      07
                    </span>
                    <span className="text-neutral-400 uppercase tracking-widest">
                      WHAT&apos;S NEXT?
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 rounded-2xl border border-white/15 bg-white/[0.03] relative border-l-4 border-l-white mb-4">
                    <blockquote className="text-sm sm:text-base md:text-lg text-white font-sans font-medium leading-relaxed italic">
                      &ldquo;I&apos;m still at the beginning of my journey. Every
                      project, every bug, every challenge, and every new
                      technology teaches me something valuable. My goal is to
                      become a skilled AI engineer who builds meaningful products
                      that solve real-world problems. This journey is just
                      getting started.&rdquo;
                    </blockquote>
                  </div>

                  <div className="text-center sm:text-left">
                    <span className="inline-block text-[11px] sm:text-xs font-mono font-bold tracking-[0.3em] text-neutral-300 uppercase py-2 px-5 rounded-full border border-white/10 bg-white/[0.02]">
                      STILL LEARNING. STILL BUILDING. ALWAYS EVOLVING.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Minimalist Editorial Navigation HUD */}
        <footer className="relative z-30 w-full px-6 md:px-14 py-3.5 flex flex-wrap items-center justify-between border-t border-white/[0.08] backdrop-blur-md bg-[#070709]/80 font-mono text-xs">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => jumpTo(0)}
              className={`text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border transition-all ${
                progress <= 0.12
                  ? "border-white/40 text-white bg-white/10"
                  : "border-white/5 text-neutral-500 hover:text-white"
              }`}
            >
              START
            </button>
            <button
              type="button"
              onClick={() => jumpTo(0.22)}
              className={`text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border transition-all ${
                progress > 0.12 && progress <= 0.36
                  ? "border-white/40 text-white bg-white/10"
                  : "border-white/5 text-neutral-500 hover:text-white"
              }`}
            >
              01-02 DEV
            </button>
            <button
              type="button"
              onClick={() => jumpTo(0.52)}
              className={`text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border transition-all ${
                progress > 0.36 && progress <= 0.6
                  ? "border-white/40 text-white bg-white/10"
                  : "border-white/5 text-neutral-500 hover:text-white"
              }`}
            >
              03 AI/ML
            </button>
            <button
              type="button"
              onClick={() => jumpTo(0.7)}
              className={`text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border transition-all ${
                progress > 0.6 && progress <= 0.8
                  ? "border-white/40 text-white bg-white/10"
                  : "border-white/5 text-neutral-500 hover:text-white"
              }`}
            >
              04 BUILDS
            </button>
            <button
              type="button"
              onClick={() => jumpTo(0.84)}
              className={`text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border transition-all ${
                progress > 0.8 && progress <= 0.92
                  ? "border-white/40 text-white bg-white/10"
                  : "border-white/5 text-neutral-500 hover:text-white"
              }`}
            >
              05 HACKATHONS
            </button>
            <button
              type="button"
              onClick={() => jumpTo(0.98)}
              className={`text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border transition-all ${
                progress > 0.92
                  ? "border-white/40 text-white bg-white/10"
                  : "border-white/5 text-neutral-500 hover:text-white"
              }`}
            >
              06-07 HORIZON
            </button>
          </div>

          <span className="hidden md:inline-block text-[10px] text-neutral-500 tracking-widest uppercase">
            JAYAVARDHAN MALAMANTI &bull; B.TECH CSE (AI &amp; ML)
          </span>
        </footer>
      </div>
    </section>
  );
}
