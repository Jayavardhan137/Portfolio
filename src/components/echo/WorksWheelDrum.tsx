"use client";

import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, RotateCw } from "lucide-react";

interface DrumWork {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tools: string[];
}

const DRUM_WORKS: DrumWork[] = [
  {
    title: "Aether AI",
    subtitle: "Cognitive Workspace & Deep Reasoning",
    description: "A cognitive workspace engineered for deep systemic research, disciplined reasoning, and structural synthesis with real-time active node telemetry.",
    image: "/assets/landing/shot_5.png",
    tools: ["React", "TypeScript", "Tailwind CSS", "AI Engine"]
  },
  {
    title: "Aether Protocol",
    subtitle: "Private Preview & Monolithic Deployment",
    description: "Exclusive onboarding portal and architectural briefing interface engineered for research scientists and technical executives.",
    image: "/assets/landing/shot_6.png",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"]
  },
  {
    title: "Afterform S01",
    subtitle: "Brutalist Campaign & Visual Monograph",
    description: "A seasonal fashion campaign and visual monograph capturing structural streetwear silhouettes framed against raw monolithic concrete architecture.",
    image: "/assets/landing/shot_3.png",
    tools: ["Next.js", "Tailwind CSS", "Figma", "Lenis Scroll"]
  },
  {
    title: "Afterform System",
    subtitle: "Design Tokens & Living Monolith",
    description: "Comprehensive multi-tier component library, tokenized variable matrix, and spatial kinetic animation principles.",
    image: "/assets/landing/shot_4.png",
    tools: ["React", "TypeScript", "Tailwind CSS", "Figma"]
  },
  {
    title: "Maison Eleara",
    subtitle: "Haute Horlogerie & Digital Showcase",
    description: "Timeless luxury horology archival showcase celebrating Swiss micro-engineering through high-contrast macro photography.",
    image: "/assets/landing/shot_1.png",
    tools: ["Next.js", "Tailwind CSS", "WebGL", "Lenis"]
  },
  {
    title: "Eleara Campaign",
    subtitle: "Celestial Chronometry & Visual Archive",
    description: "Editorial digital presentation capturing celestial astronomical complications against deep obsidian cosmic textures.",
    image: "/assets/landing/shot_2.png",
    tools: ["React", "Tailwind CSS", "GSAP", "Lenis"]
  }
];

export function WorksWheelDrum() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const currentRotation = useRef(0);

  const rotateTo = (index: number) => {
    setActiveIndex(index);
    setRotation(index * -60);
    currentRotation.current = index * -60;
  };

  const nextWork = () => {
    const next = (activeIndex + 1) % DRUM_WORKS.length;
    rotateTo(next);
  };

  const prevWork = () => {
    const prev = (activeIndex - 1 + DRUM_WORKS.length) % DRUM_WORKS.length;
    rotateTo(prev);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartY.current = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaY = e.clientY - dragStartY.current;
    if (Math.abs(deltaY) > 30) {
      if (deltaY > 0) {
        prevWork();
      } else {
        nextWork();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const current = DRUM_WORKS[activeIndex];

  return (
    <section
      id="landing-pages"
      data-purpose="landing-pages-featured-projects"
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-16 bg-[#FAFAFA] select-none scroll-mt-24 md:scroll-mt-28"
    >
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 font-sans">
            LANDING PAGES
          </h2>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1 block">
            3D CYLINDRICAL DRUM REEL // SCROLL OR DRAG TO CYCLE
          </span>
        </div>
      </div>

      {/* 3D Drum Reel Stage (Frame 10 Exact Composition) */}
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="w-full relative rounded-3xl border border-neutral-200 bg-[#EFEFEF] p-6 sm:p-10 md:p-12 overflow-hidden shadow-inner flex flex-col lg:flex-row items-center justify-between gap-8 cursor-grab active:cursor-grabbing"
        style={{ minHeight: "560px" }}
      >
        {/* Left: 3D Hexagon / Cylinder Drum Stage */}
        <div className="relative flex-1 w-full h-[400px] flex items-center justify-center">
          {/* Central Label "WORKS '26" (Frame 10 Exact Style) */}
          <div className="absolute z-30 pointer-events-none flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-widest text-neutral-900 drop-shadow-sm">
              WORKS '26
            </span>
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mt-1">
              ↓ SCROLL OR DRAG DRUM TO CYCLE
            </span>
          </div>

          {/* 3D Polygonal Drum Wheel Container */}
          <div className="relative w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] flex items-center justify-center">
            {DRUM_WORKS.map((work, idx) => {
              const baseAngle = idx * 60;
              const angle = (baseAngle + rotation) % 360;
              const rad = (angle * Math.PI) / 180;
              const radius = 150;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isFront = activeIndex === idx;

              return (
                <div
                  key={work.title}
                  onClick={(e) => {
                    e.stopPropagation();
                    rotateTo(idx);
                  }}
                  style={{
                    transform: `translate(${x}px, ${y}px) scale(${isFront ? 1.08 : 0.82})`,
                    zIndex: isFront ? 40 : 10,
                    opacity: isFront ? 1 : 0.45,
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className={`absolute w-36 sm:w-44 h-24 sm:h-28 rounded-xl border p-2.5 flex flex-col justify-between cursor-pointer shadow-lg overflow-hidden ${
                    isFront
                      ? "border-black bg-white ring-2 ring-black"
                      : "border-neutral-300 bg-white/90 hover:border-neutral-500"
                  }`}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-12 sm:h-14 object-cover object-top rounded-lg opacity-90"
                  />
                  <div className="text-left mt-1">
                    <span className="text-[11px] font-bold font-sans text-neutral-900 block truncate">
                      {work.title}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-500 block truncate">
                      {work.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Project Index Selector (Frame 10 & 12 Right Side) */}
        <div className="w-full lg:w-72 flex flex-col gap-3 border-t lg:border-t-0 lg:border-l border-neutral-300 pt-6 lg:pt-0 lg:pl-8">
          <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase font-bold">
            ARCHIVE INDEX
          </span>

          <div className="flex flex-col gap-1.5 font-mono text-xs">
            {DRUM_WORKS.map((w, idx) => (
              <button
                key={w.title}
                type="button"
                onClick={() => rotateTo(idx)}
                className={`flex items-center justify-between p-2 rounded-lg text-left transition-colors ${
                  activeIndex === idx
                    ? "bg-black text-white font-bold"
                    : "text-neutral-600 hover:text-black hover:bg-neutral-200/60"
                }`}
              >
                <span>{w.title}</span>
                <span className="text-[10px] opacity-60">0{idx + 1}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-xl border border-neutral-300 bg-white flex flex-col gap-2">
            <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold">
              ACTIVE SECTOR
            </span>
            <h4 className="text-sm font-bold text-neutral-900 font-sans">
              {current.title}
            </h4>
            <p className="text-xs text-neutral-600 font-sans leading-relaxed">
              {current.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-1">
              {current.tools.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-mono text-neutral-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

