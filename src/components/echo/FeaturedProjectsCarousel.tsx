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
    src: "/projects/Portfolio Design.png",
    alt: "QFLOW AI",
    title: "QFLOW AI",
    subtitle: "Intelligent Queue Management Platform",
    description: "An intelligent queue management platform engineered for hospitals, banks, supermarkets, and public service organizations to eliminate physical bottlenecks with QR tokens, real-time queues, and AI-powered voice announcements.",
    category: "AI SYSTEM • FULL-STACK",
    link: "https://github.com/Jayavardhan137",
    tools: ["Next.js", "React", "Node.js", "Supabase", "AI Voice Synthesis", "Tailwind CSS"],
    deliverables: ["QR Token Booking", "Real-Time Queue Tracking", "Estimated Wait Time", "AI Voice Notifications", "Admin Dashboard"]
  },
  {
    src: "/projects/Portfolio Website.png",
    alt: "STUDYASSISTANT",
    title: "STUDYASSISTANT",
    subtitle: "RAG-Powered Intelligent Learning Assistant",
    description: "An AI-powered learning assistant built using Retrieval-Augmented Generation that ingests academic literature and documents to synthesize contextual, fact-grounded tutoring across multiple dynamic AI personalities.",
    category: "GENERATIVE AI • RAG PIPELINE",
    link: "https://github.com/Jayavardhan137",
    tools: ["Python", "LangChain", "ChromaDB", "Hugging Face", "LLM APIs", "FastAPI"],
    deliverables: ["Document-Based Question Answering", "Context-Aware Retrieval", "Multiple AI Personalities", "Vector Embeddings Store"]
  },
  {
    src: "/projects/Photographer Portfolio.png",
    alt: "Photographer Portfolio",
    title: "Julian Vance Photography",
    subtitle: "Editorial & Analog Photography Archive",
    description: "An analog & editorial photography portfolio showcasing timeless visual stories, high-contrast imagery, and editorial typography.",
    category: "EDITORIAL • CREATIVE WEB",
    link: "https://julianvance.vercel.app/",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion", "Lenis Scroll"],
    deliverables: ["Full Responsive Web Design", "Visual Monograph Experience", "High-Resolution Image System"]
  },
  {
    src: "/projects/Design Studio.png",
    alt: "Design Studio",
    title: "Design Studio",
    subtitle: "Creative Agency & Brand Identity",
    description: "A bold design studio website built to showcase creative services, brand identity, and experimental digital experiences.",
    category: "BRAND & DESIGN",
    link: "https://echo-design-studio-ex.vercel.app/",
    tools: ["React", "TypeScript", "Tailwind CSS", "WebGL"],
    deliverables: ["Interactive Portfolio", "Brand Guidelines", "Fluid Spatial Layout"]
  },
  {
    src: "/projects/Cafe Website.png",
    alt: "Cafe Website",
    title: "Mocha & Miso",
    subtitle: "Editorial Coffee House & Reservation System",
    description: "A full-stack cafe management system with customer-facing table booking, live menus, and admin reservation portal.",
    category: "FULL-STACK WEB",
    link: "https://mochaandmiso.web.app/",
    tools: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    deliverables: ["Table Reservation Portal", "Order Processing", "Admin Menu Management"]
  },
  {
    src: "/projects/Sen Cruzo-Client Portfolio.png",
    alt: "Sen Cruzo",
    title: "Sen Cruzo",
    subtitle: "Luxury Architectural & Client Portfolio",
    description: "A bespoke editorial portfolio designed for high-profile client presentation, featuring immersive layouts and architectural visual storytelling.",
    category: "LUXURY ARCHITECTURE",
    link: "https://sencruzo.web.app/",
    tools: ["Next.js", "Tailwind CSS", "GSAP", "Lenis"],
    deliverables: ["Spatial Storytelling", "High-Fidelity Lookbook", "Client Presentation"]
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

        {/* Arrow controls */}
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
      </div>

      {/* Main 3D Curved Featured Project Card Stage */}
      <div
        onClick={() => setModalItem(current)}
        className="w-full rounded-3xl border border-neutral-200 bg-[#EFEFEF] overflow-hidden shadow-inner cursor-pointer relative group transition-all duration-300 hover:border-neutral-400"
        style={{ minHeight: "520px" }}
      >
        <div className="relative w-full h-[520px] flex items-center justify-center p-6 md:p-12 overflow-hidden bg-neutral-950">
          {/* Background image preview with organic curvature */}
          <img
            src={current.src}
            alt={current.alt}
            className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500 rounded-2xl"
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
              <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-mono font-bold tracking-widest uppercase shadow-lg group-hover:bg-neutral-200 transition-colors">
                CLICK TO INSPECT ↗
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
                  <span>LIVE REPO / SITE</span>
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

