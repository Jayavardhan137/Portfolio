"use client";

import React, { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectItem {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  link: string;
  tools: string[];
  deliverables: string[];
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    src: "/projects/queueflow-ai.png",
    alt: "QueueFlow AI - Universal Smart Queue Management Platform",
    title: "QueueFlow AI",
    subtitle: "Universal Smart Queue Management Platform",
    description: "A smart QR-based queue management platform for hospitals, banks, supermarkets, clinics, restaurants, colleges, and every business. Skip the queue and arrive when it's your turn with real-time ticket tracking, instant QR bookings, multi-organization tenant registration, and AI-powered voice announcements.",
    category: "AI SYSTEM • FULL-STACK CLOUD PLATFORM",
    link: "https://queue-management-system-vert-iota.vercel.app/",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Supabase",
      "AI Voice Synthesis",
      "QR Generation Core",
      "Vercel"
    ],
    deliverables: [
      "QR-Based Instant Token Booking",
      "Live Active Ticket Tracking Portal",
      "Multi-Organization Registration System",
      "Dynamic Estimated Waiting Time Engine",
      "AI Voice Notifications & Audio Cues",
      "Comprehensive Admin Queue Dashboard"
    ]
  }
];

export function FeaturedProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalItem, setModalItem] = useState<ProjectItem | null>(null);

  const prevItem = () => {
    setActiveIndex((prev) => (prev - 1 + ALL_PROJECTS.length) % ALL_PROJECTS.length);
  };

  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % ALL_PROJECTS.length);
  };

  const current = ALL_PROJECTS[activeIndex];

  return (
    <section
      id="projects"
      data-purpose="featured-projects"
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-16 bg-[#FAFAFA] scroll-mt-24 md:scroll-mt-28"
    >
      {/* Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 font-sans">
            FEATURED PROJECT
          </h2>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1 block">
            0{activeIndex + 1} / 0{ALL_PROJECTS.length} // CLICK CARD TO INSPECT
          </span>
        </div>

        {/* Direct Link & Controls */}
        <div className="flex items-center gap-3">
          <a
            href={current.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full border border-neutral-300 bg-white text-xs font-mono font-bold tracking-widest uppercase hover:border-black hover:text-black transition-all shadow-sm hidden sm:inline-flex items-center gap-1.5"
          >
            <span>LAUNCH APP</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {ALL_PROJECTS.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevItem}
                className="w-10 h-10 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-700 hover:border-black hover:text-black transition-all shadow-sm"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextItem}
                className="w-10 h-10 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-700 hover:border-black hover:text-black transition-all shadow-sm"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main 3D Curved Featured Project Card Stage */}
      <div
        onClick={() => setModalItem(current)}
        className="w-full rounded-3xl border border-neutral-200 bg-[#EFEFEF] overflow-hidden shadow-inner cursor-pointer relative group transition-all duration-300 hover:border-neutral-400"
        style={{ minHeight: "520px" }}
      >
        <div className="relative w-full h-[520px] flex items-center justify-center p-4 md:p-8 overflow-hidden bg-[#07070b]">
          {/* Background image preview with organic curvature */}
          <img
            src={current.src}
            alt={current.alt}
            className="w-full h-full object-contain md:object-cover object-center group-hover:scale-[1.02] transition-all duration-500 rounded-2xl"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

          {/* Floating Caption / Meta (FlexCarousel Caption Style) */}
          <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
            <div className="flex flex-col gap-1 max-w-xl text-left">
              <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-300 uppercase">
                {current.category}
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-sans tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-neutral-300 uppercase">
                {current.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 pointer-events-auto">
              <a
                href={current.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2 rounded-full border border-white/30 bg-black/60 backdrop-blur-md text-white text-xs font-mono font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all flex items-center gap-1.5"
              >
                <span>OPEN LIVE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-mono font-bold tracking-widest uppercase shadow-lg group-hover:bg-neutral-200 transition-colors">
                INSPECT ↗
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal (Frame 08 & 12 Style from index.html) */}
      {modalItem && (
        <div
          onClick={() => setModalItem(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 md:p-9 shadow-2xl border border-neutral-100 relative"
          >
            <div className="relative text-center pb-4 mb-5 border-b border-neutral-200">
              <span className="block text-[11px] font-mono font-bold tracking-widest uppercase text-neutral-400 mb-1">
                {modalItem.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-neutral-900 tracking-tight font-sans">
                {modalItem.title}
              </h3>
              <button
                type="button"
                onClick={() => setModalItem(null)}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-black hover:text-black hover:bg-neutral-50 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-6 text-sm text-neutral-700">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 max-h-64">
                <img
                  src={modalItem.src}
                  alt={modalItem.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                  OVERVIEW
                </span>
                <p className="text-sm font-sans leading-relaxed text-neutral-800">
                  {modalItem.description}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                  DELIVERABLES & SCOPE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-700">
                  {modalItem.deliverables.map((del) => (
                    <div key={del} className="flex items-center gap-2 p-2 rounded-lg bg-neutral-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-black" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {modalItem.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md border border-neutral-200 bg-neutral-50 text-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <a
                  href={modalItem.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-mono font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors flex items-center gap-2"
                >
                  <span>LIVE PLATFORM</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/Jayavardhan137"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full border border-neutral-300 text-neutral-800 text-xs font-mono font-bold tracking-widest uppercase hover:border-black transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

