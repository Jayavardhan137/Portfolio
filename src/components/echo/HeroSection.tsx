"use client";

import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroSectionProps {
  onOpenContact?: () => void;
  onSelectService?: (idx: number) => void;
}

export function HeroSection({ onOpenContact, onSelectService }: HeroSectionProps) {
  return (
    <section
      id="home"
      data-purpose="hero-section"
      className="relative max-w-[1400px] mx-auto px-6 md:px-14 pt-28 md:pt-36 lg:pt-40 pb-16 overflow-hidden select-none bg-[#FAFAFA] scroll-mt-28"
    >
      {/* Big Title Header (Metallic Gradient for PORTFOLIO - ECHO Style) */}
      <div className="text-center w-full mb-6 md:mb-10 relative z-0">
        <h1 className="text-[9.5vw] md:text-[8rem] lg:text-[9.5rem] font-black uppercase leading-[0.85] tracking-tight font-sans">
          <span className="block text-[#121212]">EXPLORE MY</span>
          <span className="block metallic-title">PORTFOLIO</span>
        </h1>
      </div>

      {/* Center Headshot & Symmetrical Content Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-12 items-center mt-2 md:-mt-6">
        {/* Left Column: Designer info & Arrow */}
        <div className="md:col-span-3 flex flex-col items-start pl-2 md:pl-6 order-2 md:order-1 pt-6 md:pt-0">
          <span className="text-xs font-bold tracking-wider uppercase text-neutral-800 mb-6 font-mono">
            AI & DEV EST.2026
          </span>
          <a
            href="#about"
            aria-label="Scroll to About Section"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-800 hover:border-black hover:bg-neutral-100 transition-transform duration-300 hover:scale-105 shadow-sm"
          >
            <ArrowDownRight className="w-5 h-5 text-current" />
          </a>
        </div>

        {/* Center Column: Stylized Black and White Headshot (in front of text) */}
        <div className="md:col-span-6 flex justify-center order-1 md:order-2 relative z-10 -mt-16 md:-mt-36">
          <div className="relative w-[320px] h-[400px] md:w-[480px] md:h-[580px] flex items-end justify-center hero-portrait-mask">
            <img
              src="/assets/hero_portrait.png"
              alt="Jayavardhan Malamanti — Developer & Designer"
              className="w-full h-full object-contain object-bottom pointer-events-none select-none transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Right Column: Pitch and Disciplines */}
        <div className="md:col-span-3 flex flex-col items-start md:items-end text-left order-3 pt-6 md:pt-0 pr-2 md:pr-6 space-y-10">
          {/* Pitch Quote */}
          <p className="text-[11px] md:text-xs uppercase font-medium leading-relaxed tracking-wider text-neutral-700 max-w-[220px] text-left font-sans">
            I AM PASSIONATE ABOUT CREATING DIGITAL EXPERIENCES AND AI SYSTEMS THAT STAND OUT FROM THE CROWD.
          </p>

          {/* Service List with hover interaction */}
          <div className="flex flex-col space-y-3 text-[11px] md:text-xs font-semibold tracking-widest text-neutral-600 uppercase font-mono">
            <a
              href="#services"
              onClick={() => onSelectService && onSelectService(0)}
              className="hover:text-black hover:translate-x-1 md:hover:-translate-x-1 transition-all inline-flex items-center gap-1.5"
            >
              <span>UI/UX</span>
            </a>
            <a
              href="#services"
              onClick={() => onSelectService && onSelectService(1)}
              className="hover:text-black hover:translate-x-1 md:hover:-translate-x-1 transition-all inline-flex items-center gap-1.5"
            >
              <span>WEB DESIGN</span>
            </a>
            <a
              href="#services"
              onClick={() => onSelectService && onSelectService(2)}
              className="hover:text-black hover:translate-x-1 md:hover:-translate-x-1 transition-all inline-flex items-center gap-1.5 font-bold text-black"
            >
              <span>LANDING PAGE</span>
            </a>
            <a
              href="#services"
              onClick={() => onSelectService && onSelectService(3)}
              className="hover:text-black hover:translate-x-1 md:hover:-translate-x-1 transition-all inline-flex items-center gap-1.5 text-neutral-800"
            >
              <span>AI & ML APPS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

