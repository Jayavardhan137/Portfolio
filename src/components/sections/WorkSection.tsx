"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  QrCode,
  Radio,
  FileText,
  Cpu,
  Layers,
  ChevronRight,
  ChevronLeft,
  Volume2,
  Database,
  Users,
  Compass,
  RotateCw,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS, Project } from "@/data/portfolioData";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useAudio } from "@/hooks/useAudio";
import { WorkDrumShowcase } from "./WorkDrumShowcase";

export function WorkSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"editorial" | "drum">("editorial");
  const { playHover, playClick } = useAudio();
  const currentProject = PROJECTS[selectedIdx];

  const nextProject = () => {
    playClick();
    setSelectedIdx((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    playClick();
    setSelectedIdx((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section
      id="work"
      className="relative min-h-screen py-24 md:py-36 px-6 sm:px-8 md:px-12 bg-[#050505] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02] font-black font-sans text-[25vw] leading-none text-white whitespace-nowrap">
        SHOWCASE
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>03 // SELECTED ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans text-white uppercase">
              FEATURED
              <br />
              <span className="text-neutral-400">ENGINEERING WORK.</span>
            </h2>
          </div>

          {/* View Mode Toggle (Editorial vs 3D Drum) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                playClick();
                setViewMode("editorial");
              }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-colors ${
                viewMode === "editorial"
                  ? "bg-white text-black font-bold"
                  : "border border-white/20 text-neutral-400 hover:text-white"
              }`}
            >
              EDITORIAL
            </button>
            <button
              type="button"
              onClick={() => {
                playClick();
                setViewMode("drum");
              }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-colors flex items-center gap-1.5 ${
                viewMode === "drum"
                  ? "bg-white text-black font-bold"
                  : "border border-white/20 text-neutral-400 hover:text-white"
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>3D DRUM</span>
            </button>
          </div>
        </div>

        {/* View Mode Switch */}
        {viewMode === "drum" ? (
          <WorkDrumShowcase />
        ) : (
          <>
            {/* Project Selector Pills */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                {PROJECTS.map((proj, idx) => (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => {
                      playClick();
                      setSelectedIdx(idx);
                    }}
                    onMouseEnter={playHover}
                    className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 ${
                      selectedIdx === idx
                        ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                        : "border border-white/15 bg-white/[0.03] text-neutral-400 hover:text-white"
                    }`}
                  >
                    <span>{proj.number}</span>
                    <span>•</span>
                    <span>{proj.title}</span>
                  </button>
                ))}
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono tracking-widest text-neutral-400">
                  0{selectedIdx + 1} / 0{PROJECTS.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevProject}
                    onMouseEnter={playHover}
                    className="p-3 rounded-full border border-white/20 hover:border-white hover:bg-white/10 transition-colors"
                    aria-label="Previous Project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextProject}
                    onMouseEnter={playHover}
                    className="p-3 rounded-full border border-white/20 hover:border-white hover:bg-white/10 transition-colors"
                    aria-label="Next Project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dynamic Project Stage: 3D Curved Editorial Frame (Video frame_08 inspiration) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Left: Project Narrative & Specifications */}
                <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/20 bg-white/5 text-neutral-300 tracking-widest uppercase">
                      PROJECT {currentProject.number}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                      {currentProject.category}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-3xl sm:text-5xl font-black font-sans uppercase tracking-tight text-white">
                      {currentProject.title}
                    </h3>
                    <p className="text-sm font-mono tracking-wider text-neutral-300 uppercase">
                      {currentProject.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                    {currentProject.description}
                  </p>

                  {/* Key Features Checklist */}
                  <div className="flex flex-col gap-3 py-4 border-y border-white/10">
                    <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                      CORE CAPABILITIES & ARCHITECTURE
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentProject.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-center gap-2 text-xs font-mono text-neutral-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-mono tracking-wider text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Demo & GitHub */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <MagneticButton
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={playClick}
                      dataCursorText="LAUNCH"
                      className="px-6 py-3 rounded-full bg-white text-black text-xs font-mono font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                      <span>LIVE REPO / DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </MagneticButton>

                    <MagneticButton
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={playClick}
                      dataCursorText="SOURCE"
                      className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white text-xs font-mono font-bold tracking-widest uppercase hover:border-white/50 transition-colors flex items-center gap-2"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>VIEW CODE</span>
                    </MagneticButton>
                  </div>
                </div>

                {/* Right: Curved 3D Interactive Project Preview Mask (Video Inspiration) */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <div
                    className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-neutral-900/90 to-black p-6 sm:p-8 md:p-10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
                    }}
                  >
                    {/* Visual Preview Container */}
                    {currentProject.visualType === "queue" ? (
                      <QueueAiVisual />
                    ) : (
                      <StudyAssistantVisual />
                    )}

                    {/* Bottom Card Bar */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span className="tracking-widest uppercase">
                        SYSTEM STATUS: ACTIVE
                      </span>
                      <span className="text-white font-semibold tracking-wider">
                        PRODUCTION ARCHITECTURE
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
}

{/* Bespoke Interactive Monochrome Visual for QFlow AI */}
function QueueAiVisual() {
  const [activeToken, setActiveToken] = useState(42);

  return (
    <div className="relative w-full aspect-[16/10] bg-[#0c0c0e] rounded-2xl border border-white/10 p-5 sm:p-6 flex flex-col justify-between overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2 font-mono text-xs text-white">
          <Radio className="w-3.5 h-3.5 text-white animate-pulse" />
          <span className="font-bold tracking-wider">QFLOW AI // ENGINE</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>REAL-TIME QUEUE SYNC</span>
        </div>
      </div>

      {/* Main Queue Dashboard Preview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto py-4">
        {/* Token Card */}
        <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] flex flex-col items-center justify-center text-center">
          <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
            SERVING NOW
          </span>
          <span className="text-4xl sm:text-5xl font-black font-mono text-white mt-2">
            #{activeToken.toString().padStart(3, "0")}
          </span>
          <span className="text-[10px] font-mono text-neutral-400 mt-2">
            COUNTER 03 • GENERAL
          </span>
        </div>

        {/* QR & Mobile Check-in */}
        <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] flex flex-col items-center justify-center text-center">
          <QrCode className="w-12 h-12 text-white stroke-[1.2]" />
          <span className="text-[10px] font-mono text-neutral-300 mt-2 font-semibold">
            SCAN TO BOOK TOKEN
          </span>
          <span className="text-[9px] font-mono text-neutral-400">
            Zero App Download Required
          </span>
        </div>

        {/* AI Voice & Wait Estimates */}
        <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-neutral-400 uppercase">
              EST. WAIT
            </span>
            <span className="text-xs font-mono font-bold text-white">
              06 MINS
            </span>
          </div>

          <div className="flex flex-col gap-1.5 my-2">
            <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-300">
              <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
              <span>AI Voice Broadcast</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white w-2/3 animate-pulse" />
            </div>
          </div>

          <span className="text-[9px] font-mono text-neutral-400">
            Hospitals • Banks • Retail
          </span>
        </div>
      </div>

      {/* Interactive Controls Simulation */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[10px] font-mono">
        <span className="text-neutral-400">
          ADMIN DISPATCH CONSOLE
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setActiveToken((prev) => prev + 1)}
            className="px-2.5 py-1 rounded bg-white text-black font-bold uppercase hover:bg-neutral-200 transition-colors"
          >
            NEXT TOKEN +
          </button>
        </div>
      </div>
    </div>
  );
}

{/* Bespoke Interactive Monochrome Visual for StudyAssistant */}
function StudyAssistantVisual() {
  const [activePersona, setActivePersona] = useState<"Professor" | "Socratic" | "Mentor">("Socratic");

  return (
    <div className="relative w-full aspect-[16/10] bg-[#0c0c0e] rounded-2xl border border-white/10 p-5 sm:p-6 flex flex-col justify-between overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2 font-mono text-xs text-white">
          <Database className="w-3.5 h-3.5 text-white" />
          <span className="font-bold tracking-wider">RAG RETRIEVAL ENGINE</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>CHROMADB VECTOR STORE CONNECTED</span>
        </div>
      </div>

      {/* RAG Context Query Simulation */}
      <div className="flex flex-col gap-3 my-auto py-2">
        {/* Document Ingestion Chip */}
        <div className="flex items-center justify-between p-2.5 rounded-lg border border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
            <FileText className="w-3.5 h-3.5 text-white" />
            <span>Document: Algorithms_and_AI_Systems.pdf</span>
          </div>
          <span className="text-[10px] font-mono text-neutral-400">
            128 Chunks Embedded
          </span>
        </div>

        {/* Persona Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-neutral-400 uppercase">
            PERSONA:
          </span>
          {(["Professor", "Socratic", "Mentor"] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setActivePersona(p)}
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono uppercase transition-colors ${
                activePersona === p
                  ? "bg-white text-black font-bold"
                  : "border border-white/10 text-neutral-400 hover:text-white"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Mock Dialogue Response Grounded in Context */}
        <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-mono flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[10px] text-neutral-400">
            <span>STUDYASSISTANT [{activePersona.toUpperCase()}]</span>
            <span className="text-emerald-400">GROUNDED 100% IN CONTEXT</span>
          </div>
          <p className="text-neutral-200 text-xs font-sans leading-relaxed">
            {activePersona === "Socratic"
              ? "“What trade-offs occur when scaling vector dimensionality in ChromaDB vs query latency in live conversational pipelines?”"
              : activePersona === "Professor"
              ? "“Based on Section 4.2 of your uploaded paper, RAG mitigates hallucinations by constraining the generative token distribution to retrieved chunks.”"
              : "“Let's break this concept down simply: think of the vector database as an instant semantic index that finds exact matching concepts!”"}
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[10px] font-mono text-neutral-400">
        <span>LANGCHAIN • CHROMADB • HUGGING FACE</span>
        <span className="text-white">ZERO HALLUCINATION PIPELINE</span>
      </div>
    </div>
  );
}
