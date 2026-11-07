"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Trophy,
  BookOpen,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
  GitBranch,
  ExternalLink,
  Compass,
  FileText,
  Boxes,
  Zap,
} from "lucide-react";

interface JourneyChapterProps {
  number: string;
  eyebrow: string;
  title: string;
  timecode?: string;
  children: React.ReactNode;
}

function ChapterCard({
  number,
  eyebrow,
  title,
  timecode,
  children,
}: JourneyChapterProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl border border-white/[0.08] bg-white/[0.015] hover:bg-white/[0.025] hover:border-white/15 transition-all duration-300 p-6 sm:p-8 md:p-12 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-sm"
    >
      {/* Subtle Ambient Background Watermark Number */}
      <span
        aria-hidden="true"
        className="absolute -top-6 right-4 sm:right-8 text-7xl sm:text-9xl md:text-[11rem] font-black text-white/[0.025] select-none pointer-events-none font-mono"
      >
        {number}
      </span>

      {/* Chapter Top Meta Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-md bg-white/10 border border-white/20 text-white font-mono text-xs font-bold tracking-widest uppercase">
            {number}
          </span>
          <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase font-semibold">
            {eyebrow}
          </span>
        </div>

        {timecode && (
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/5">
            {timecode}
          </span>
        )}
      </div>

      {/* Chapter Heading */}
      <div className="relative z-10 mb-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white font-sans leading-tight">
          {title}
        </h3>
      </div>

      {/* Chapter Content Body */}
      <div className="relative z-10 space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans font-normal">
        {children}
      </div>
    </motion.article>
  );
}

function HairlineDivider({ label }: { label?: string }) {
  return (
    <div className="relative w-full my-8 md:my-12 flex items-center justify-center">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {label && (
        <span className="px-3.5 py-1 rounded-full border border-white/10 bg-[#070709] text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
          {label}
        </span>
      )}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export function MyJourneySection() {
  const devTechnologies = [
    { name: "HTML & CSS", role: "Layout & Semantic Design" },
    { name: "JavaScript", role: "ES6+ Logic & Async Paradigms" },
    { name: "React.js", role: "Component Architecture" },
    { name: "Next.js", role: "App Router & Full-Stack Web" },
    { name: "Tailwind CSS", role: "Design Systems & Responsive UI" },
    { name: "Node.js", role: "Backend Runtimes & APIs" },
    { name: "Python", role: "AI Tooling & Automation" },
    { name: "C++", role: "Algorithms & Low-Level Discipline" },
  ];

  const aiTechnologies = [
    { name: "LangChain", tag: "LLM Orchestration" },
    { name: "Hugging Face", tag: "Models & Transformers" },
    { name: "ChromaDB", tag: "Vector Embeddings Store" },
    { name: "Gemini API", tag: "Multimodal Reasoning" },
    { name: "OpenRouter", tag: "Unified LLM Inference" },
    { name: "Supabase", tag: "Postgres & Vector Auth" },
  ];

  const learningPillars = [
    {
      title: "Data Structures & Algorithms",
      desc: "Deepening algorithmic efficiency, time/space complexity analysis, graph traversals, and dynamic programming.",
      icon: Terminal,
    },
    {
      title: "C++ & Python",
      desc: "Refining memory-aware systems programming with C++ while leveraging Python for machine learning workflows.",
      icon: Code2,
    },
    {
      title: "Full-Stack Development",
      desc: "Architecting modern web applications with Next.js App Router, TypeScript, relational databases, and serverless architectures.",
      icon: Layers,
    },
    {
      title: "AI Engineering & LLM Apps",
      desc: "Building production RAG pipelines, context engineering, tool-calling agents, and real-time inference workflows.",
      icon: Cpu,
    },
    {
      title: "Building Practical AI Products",
      desc: "Moving beyond basic API wrappers to design functional tools with measurable everyday utility for real users.",
      icon: Boxes,
    },
    {
      title: "Software Engineering Fundamentals",
      desc: "Writing modular, maintainable code, adhering to clean architecture, git workflows, and disciplined debugging.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="journey"
      data-purpose="my-journey-section"
      className="relative w-full bg-[#070709] text-white py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-14 border-t border-white/[0.08] overflow-hidden scroll-mt-24 md:scroll-mt-28"
    >
      {/* Invisible anchor for backward compatibility with #experience */}
      <span id="experience" aria-hidden="true" className="absolute -top-28" />

      {/* Subtle Background Ambience */}
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

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Editorial Section Header */}
        <header className="mb-16 md:mb-24 text-center sm:text-left">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.03] text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-neutral-300 font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>LEARNING • BUILDING • EVOLVING</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white font-sans leading-[0.92] mb-6">
            MY JOURNEY
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl font-sans font-normal">
            A personal account of my growth as a B.Tech Computer Science student
            specializing in Artificial Intelligence & Machine Learning. From
            writing my first lines of code to engineering AI platforms and
            competing in hackathons — this is how I learn, build, and evolve.
          </p>
        </header>

        {/* =========================================================================
            CHAPTER 01 — THE BEGINNING
        ========================================================================= */}
        <div className="space-y-12 md:space-y-16">
          <ChapterCard
            number="01"
            eyebrow="FOUNDATION & FIRST STEPS"
            title="THE BEGINNING"
            timecode="MILESTONE // 01"
          >
            <p className="text-neutral-300 leading-relaxed">
              I started my journey in computer science driven by a natural
              curiosity about how software powers the modern world. Exploring
              the fundamental building blocks of the web —{" "}
              <strong className="text-white font-semibold">
                HTML, CSS, and JavaScript
              </strong>{" "}
              — helped me deconstruct how websites operate under the hood, how
              browsers render layouts, and how logic drives interactivity.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Gradually, simple experiments turned into an appetite for building
              interactive applications. What began as learning syntax quickly
              became a genuine passion for problem-solving, clean code, and
              exploring more advanced computing systems.
            </p>

            {/* Visual Milestones Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 font-mono text-xs">
              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">
                  STAGE 01
                </div>
                <div className="text-white font-bold mb-1">Web Fundamentals</div>
                <p className="text-neutral-400 text-[11px] font-sans">
                  HTML5 semantics, modern CSS styling, and responsive design.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">
                  STAGE 02
                </div>
                <div className="text-white font-bold mb-1">Programming Logic</div>
                <p className="text-neutral-400 text-[11px] font-sans">
                  DOM manipulation, asynchronous JavaScript, and event loops.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">
                  STAGE 03
                </div>
                <div className="text-white font-bold mb-1">Interactive Builds</div>
                <p className="text-neutral-400 text-[11px] font-sans">
                  Transition from basic scripts to state-driven user experiences.
                </p>
              </div>
            </div>
          </ChapterCard>

          <HairlineDivider label="EXPANSION" />

          {/* =========================================================================
              CHAPTER 02 — EXPLORING DEVELOPMENT
          ========================================================================= */}
          <ChapterCard
            number="02"
            eyebrow="TECHNICAL EXPANSION"
            title="EXPLORING DEVELOPMENT"
            timecode="MILESTONE // 02"
          >
            <p className="text-neutral-300 leading-relaxed">
              As my foundation grew stronger, I expanded my technical knowledge
              across the full software engineering stack. I quickly realized
              that true mastery doesn't come from memorizing textbooks or
              passively watching tutorials — it comes from{" "}
              <strong className="text-white font-semibold">
                building practical applications
              </strong>{" "}
              and solving the unexpected bugs that arise in production code.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.03] text-neutral-200 text-sm sm:text-base italic border-l-4 border-l-white">
              &ldquo;I enjoy learning by building practical applications rather
              than only studying theory. Every real application forces you to
              understand state, architecture, performance, and user experience
              at a deeper level.&rdquo;
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase block mb-3 font-semibold">
                TECHNOLOGIES I HAVE EXPLORED & IMPLEMENTED:
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
                {devTechnologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors"
                  >
                    <span className="text-white font-bold block mb-0.5">
                      {tech.name}
                    </span>
                    <span className="text-[10px] text-neutral-400 block font-sans">
                      {tech.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ChapterCard>

          <HairlineDivider label="SPECIALIZATION" />

          {/* =========================================================================
              CHAPTER 03 — DISCOVERING AI & MACHINE LEARNING
          ========================================================================= */}
          <ChapterCard
            number="03"
            eyebrow="MACHINE INTELLIGENCE"
            title="DISCOVERING AI & MACHINE LEARNING"
            timecode="MILESTONE // 03"
          >
            <p className="text-neutral-300 leading-relaxed">
              Enrolling in my B.Tech Computer Science specialization in AI &
              Machine Learning opened up a transformative path. I became deeply
              drawn to how artificial intelligence can solve complex,
              non-deterministic real-world problems that traditional static code
              struggles to address.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Instead of looking at modern AI as a superficial buzzword, I
              focused on understanding its mechanics from the ground up: machine
              learning foundations, Large Language Models (LLMs),
              high-dimensional embeddings, vector databases, and{" "}
              <strong className="text-white font-semibold">
                Retrieval-Augmented Generation (RAG)
              </strong>
              . Grounding language models with verified documents to create
              accurate, hallucination-free applications became my core focus.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase block mb-3 font-semibold">
                AI TOOLING & ARCHITECTURES EXPLORED:
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                {aiTechnologies.map((ai) => (
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 font-mono text-xs">
              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                  PILLAR 01
                </span>
                <span className="text-white font-bold block mb-1">
                  RAG Systems
                </span>
                <p className="text-neutral-400 text-[11px] font-sans">
                  Document chunking, semantic retrieval, and factual context injection.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                  PILLAR 02
                </span>
                <span className="text-white font-bold block mb-1">
                  Vector Stores
                </span>
                <p className="text-neutral-400 text-[11px] font-sans">
                  ChromaDB & Supabase pgvector for sub-second similarity search.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                  PILLAR 03
                </span>
                <span className="text-white font-bold block mb-1">
                  AI Integrations
                </span>
                <p className="text-neutral-400 text-[11px] font-sans">
                  Orchestrating Gemini API & open-weight models via LangChain.
                </p>
              </div>
            </div>
          </ChapterCard>

          <HairlineDivider label="EXECUTION" />

          {/* =========================================================================
              CHAPTER 04 — LEARNING BY BUILDING
          ========================================================================= */}
          <ChapterCard
            number="04"
            eyebrow="MILESTONE PROJECTS"
            title="LEARNING BY BUILDING"
            timecode="MILESTONE // 04"
          >
            <p className="text-neutral-300 leading-relaxed">
              Every major leap in my engineering capability has been anchored by
              an ambitious project. By designing systems from initial concept to
              working deployment, I learned how to handle real user flows,
              database models, and complex integrations.
            </p>

            {/* 3 Milestone Projects Grid */}
            <div className="space-y-4 pt-2">
              {/* Project 1: QueueFlow AI */}
              <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono">
                  <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    1. QueueFlow AI (QFlow AI)
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-white/15 bg-white/5 text-neutral-300 uppercase">
                    AI SYSTEM • SMART INFRASTRUCTURE
                  </span>
                </div>
                <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-4">
                  An intelligent, QR-based queue management platform engineered
                  for hospitals, banks, supermarkets, clinics, restaurants, and
                  colleges to eliminate physical bottlenecks. Features real-time
                  queue tracking, multi-organization registration, dynamic wait
                  estimation, and automated AI voice announcements.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://queue-management-system-vert-iota.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-mono font-bold tracking-wider uppercase hover:bg-neutral-200 transition-colors shadow-sm"
                  >
                    <span>LIVE PLATFORM</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/15 text-neutral-300 hover:text-white text-xs font-mono tracking-wider uppercase transition-colors"
                  >
                    <span>VIEW IN PROJECTS SECTION</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Project 2: StudyAssistant */}
              <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono">
                  <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    2. StudyAssistant
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-white/15 bg-white/5 text-neutral-300 uppercase">
                    GENERATIVE AI • RAG ARCHITECTURE
                  </span>
                </div>
                <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-3">
                  An AI-powered learning copilot with distinct conversational
                  personalities. Ingests academic literature, textbooks, and
                  lecture notes using LangChain and ChromaDB to synthesize
                  grounded tutoring, explanations, and interactive question
                  answering without hallucinations.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    Vector Embeddings
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    ChromaDB
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    LangChain
                  </span>
                </div>
              </div>

              {/* Project 3: RAG-based Financial Advisor AI */}
              <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono">
                  <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    3. RAG-Based Financial Advisor AI
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-white/15 bg-white/5 text-neutral-300 uppercase">
                    DOCUMENT AI • FINANCIAL INTELLIGENCE
                  </span>
                </div>
                <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-3">
                  A specialized financial intelligence engine built on
                  Retrieval-Augmented Generation that ingests regulatory filings,
                  tax codes, and financial documents. Accurately answers complex
                  queries regarding GST, taxation slabs, exemptions, and
                  compliance by citing verified source documents.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    Document QA
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    GST & Taxation
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    Zero Hallucination
                  </span>
                </div>
              </div>
            </div>
          </ChapterCard>

          <HairlineDivider label="COLLABORATION" />

          {/* =========================================================================
              CHAPTER 05 — HACKATHONS & CHALLENGES
          ========================================================================= */}
          <ChapterCard
            number="05"
            eyebrow="PRESSURE-TESTING SKILLS"
            title="HACKATHONS & CHALLENGES"
            timecode="MILESTONE // 05"
          >
            <p className="text-neutral-300 leading-relaxed">
              Stepping outside individual study, I actively seek opportunities
              to test my skills in high-pressure collaborative environments and
              structured coding challenges. Building software under strict time
              limits has been one of the fastest catalysts for my personal and
              technical growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 font-mono text-xs">
              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>Takeover Hackathon 2K26 Finals</span>
                </div>
                <p className="text-neutral-400 text-xs font-sans">
                  Reached the finals of the Takeover Hackathon 2K26, collaborating
                  under pressure to design, build, and pitch a functional prototype.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  <span>College Hackathon Participation</span>
                </div>
                <p className="text-neutral-400 text-xs font-sans">
                  Participated in collegiate hackathons, working alongside fellow
                  engineers to build sprint projects within 24 to 48 hours.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>30 Days of LeetCode Challenge</span>
                </div>
                <p className="text-neutral-400 text-xs font-sans">
                  Completed structured daily problem-solving sprints to build
                  consistency, algorithmic speed, and computational discipline.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span>Building Under Time Constraints</span>
                </div>
                <p className="text-neutral-400 text-xs font-sans">
                  Mastered scoping features, rapid debugging, and making sensible
                  architectural trade-offs when every minute counts.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-mono pt-2 border-t border-white/10">
              CORE TAKEAWAY: Teamwork, clear technical communication, and rapid
              iteration matter just as much as writing clean code.
            </p>
          </ChapterCard>

          <HairlineDivider label="PRESENT FOCUS" />

          {/* =========================================================================
              CHAPTER 06 — CURRENTLY LEARNING
          ========================================================================= */}
          <ChapterCard
            number="06"
            eyebrow="ACTIVE EXPANSION & RIGOR"
            title="CURRENTLY LEARNING"
            timecode="MILESTONE // 06"
          >
            <p className="text-neutral-300 leading-relaxed">
              Technology evolves rapidly, and I treat learning as a daily,
              disciplined practice. My current efforts are balanced between
              strengthening foundational computer science principles and
              architecting applied, real-world AI systems:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
              {learningPillars.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm font-mono mb-2">
                        <IconComponent className="w-4 h-4 text-neutral-400" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-neutral-400 text-xs font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ChapterCard>

          <HairlineDivider label="LOOKING FORWARD" />

          {/* =========================================================================
              CHAPTER 07 — WHAT'S NEXT?
          ========================================================================= */}
          <ChapterCard
            number="07"
            eyebrow="THE HORIZON"
            title="WHAT'S NEXT?"
            timecode="MILESTONE // 07"
          >
            {/* The exact requested forward-looking personal statement */}
            <div className="relative p-6 sm:p-8 md:p-10 rounded-2xl border border-white/15 bg-white/[0.03] overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-white" />
              <blockquote className="text-lg sm:text-xl md:text-2xl text-white font-sans font-medium leading-relaxed tracking-tight mb-6">
                &ldquo;I&apos;m still at the beginning of my journey. Every project,
                every bug, every challenge, and every new technology teaches me
                something valuable. My goal is to become a skilled AI engineer
                who builds meaningful products that solve real-world problems.
                This journey is just getting started.&rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10 font-mono">
                <div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">
                    JAYAVARDHAN MALAMANTI
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    B.Tech Computer Science (AI & ML) • Builder
                  </span>
                </div>

                <div className="text-[10px] tracking-widest text-neutral-400 uppercase">
                  INDIA // GLOBAL AMBITION
                </div>
              </div>
            </div>

            {/* Closing text */}
            <div className="text-center pt-8">
              <span className="inline-block text-xs sm:text-sm font-mono font-bold tracking-[0.35em] text-neutral-300 uppercase py-2 px-6 rounded-full border border-white/10 bg-white/[0.02]">
                STILL LEARNING. STILL BUILDING. ALWAYS EVOLVING.
              </span>
            </div>
          </ChapterCard>
        </div>
      </div>
    </section>
  );
}

