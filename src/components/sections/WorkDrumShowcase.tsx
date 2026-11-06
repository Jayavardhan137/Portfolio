"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolioData";
import { useAudio } from "@/hooks/useAudio";
import { RotateCw, QrCode, Sparkles, ExternalLink } from "lucide-react";

export function WorkDrumShowcase() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { playHover, playClick } = useAudio();

  // 6 drum positions (60 deg each for hexagon wheel like frame_10)
  const items = [
    { title: "QUEUEFLOW AI", sub: "Cloud Platform", type: "01", tag: "AI SYSTEM" },
    { title: "QR TOKEN ENGINE", sub: "Instant Check-in", type: "02", tag: "QR ENGINE" },
    { title: "LIVE TELEMETRY", sub: "Real-time Tracker", type: "03", tag: "ACTIVE TICKET" },
    { title: "AI ANNOUNCER", sub: "Voice Notification", type: "04", tag: "AUDIO AI" },
    { title: "MULTI-TENANT", sub: "Org Management", type: "05", tag: "ENTERPRISE" },
    { title: "ADMIN CONSOLE", sub: "Queue Control UI", type: "06", tag: "DASHBOARD" },
  ];

  const rotateDrum = (direction: 1 | -1) => {
    playClick();
    setRotationAngle((prev) => prev + direction * 60);
    setSelectedIdx((prev) => (prev + direction + items.length) % items.length);
  };

  return (
    <div className="relative w-full rounded-3xl border border-white/15 bg-gradient-to-b from-[#0e0e12] to-[#050505] p-6 sm:p-10 md:p-14 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
      {/* Top Meta */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400">
          <RotateCw className="w-3.5 h-3.5 text-white animate-spin-slow" />
          <span>3D DRUM INTERACTIVE MATRIX</span>
        </div>
        <span className="text-xs font-mono text-neutral-400">
          WORKS '26 // INTERACTIVE SECTOR
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px]">
        {/* Left / Center: 3D Polygonal Drum Wheel (Inspired by video frame_10) */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center relative select-none">
          {/* Central Label */}
          <div className="absolute z-20 flex flex-col items-center pointer-events-none">
            <span className="text-2xl sm:text-3xl font-black font-sans tracking-widest text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]">
              WORKS '26
            </span>
            <span className="text-[10px] font-mono text-neutral-400 tracking-[0.2em] mt-1">
              CLICK CARDS TO CYCLE
            </span>
          </div>

          {/* Rotating Ring Container */}
          <div className="relative w-[300px] sm:w-[380px] md:w-[440px] h-[300px] sm:h-[380px] md:h-[440px] flex items-center justify-center">
            {items.map((item, i) => {
              const baseAngle = i * 60;
              const currentAngle = (baseAngle + rotationAngle) % 360;
              const rad = (currentAngle * Math.PI) / 180;
              const radius = 150; // px
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isFront = Math.abs(currentAngle) < 45 || Math.abs(currentAngle - 360) < 45;

              return (
                <motion.div
                  key={item.title}
                  onClick={() => {
                    playClick();
                    setSelectedIdx(i);
                    setRotationAngle(-i * 60);
                  }}
                  onMouseEnter={playHover}
                  animate={{
                    x,
                    y,
                    scale: isFront ? 1.05 : 0.82,
                    opacity: isFront ? 1 : 0.45,
                    zIndex: isFront ? 30 : 10,
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 22 }}
                  className={`absolute w-32 sm:w-36 h-24 sm:h-28 rounded-xl border p-3 flex flex-col justify-between cursor-pointer backdrop-blur-md transition-shadow ${
                    selectedIdx === i
                      ? "border-white bg-white/15 shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                      : "border-white/10 bg-[#0a0a0c]/85 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-neutral-400">
                      {item.type}
                    </span>
                    <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold font-sans text-white uppercase truncate">
                      {item.title}
                    </h4>
                    <p className="text-[9px] font-mono text-neutral-400 truncate">
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Drum Drag/Scroll Guide text */}
          <div className="flex items-center gap-4 mt-6">
            <button
              type="button"
              onClick={() => rotateDrum(-1)}
              onMouseEnter={playHover}
              className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono text-neutral-300 hover:text-white hover:border-white transition-colors"
            >
              ← ROTATE PREV
            </button>
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              ↓ SCROLL OR CLICK DRUM TO CYCLE
            </span>
            <button
              type="button"
              onClick={() => rotateDrum(1)}
              onMouseEnter={playHover}
              className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono text-neutral-300 hover:text-white hover:border-white transition-colors"
            >
              ROTATE NEXT →
            </button>
          </div>
        </div>

        {/* Right: Project Index Selector (frame_10 right side) */}
        <div className="lg:col-span-4 flex flex-col gap-3 border-l border-white/10 pl-0 lg:pl-8">
          <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
            ARCHIVE DIRECTORY
          </span>

          <div className="flex flex-col gap-2 font-mono text-xs">
            {items.map((it, idx) => (
              <button
                key={it.title}
                type="button"
                onClick={() => {
                  playClick();
                  setSelectedIdx(idx);
                  setRotationAngle(-idx * 60);
                }}
                onMouseEnter={playHover}
                className={`flex items-center justify-between p-2.5 rounded-lg text-left transition-colors ${
                  selectedIdx === idx
                    ? "bg-white text-black font-bold"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{it.title}</span>
                <span className="text-[10px] opacity-70">{it.type}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col gap-2">
            <span className="text-[10px] font-mono text-neutral-400 uppercase">
              SECTOR PROFILE:
            </span>
            <span className="text-xs font-bold text-white uppercase font-sans">
              {items[selectedIdx].title}
            </span>
            <p className="text-[11px] text-neutral-300 font-sans leading-normal">
              {selectedIdx === 0
                ? "Flagship intelligent queue management platform with QR ticketing, waiting estimates and AI voice broadcast."
                : selectedIdx === 1
                ? "RAG-driven contextual learning assistant with multi-personality tutoring and zero hallucination retrieval."
                : "Modular component engineering for high-throughput enterprise and consumer web applications."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

