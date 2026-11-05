"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useAudio } from "@/hooks/useAudio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const NAV_ITEMS = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT ME", href: "#about" },
  { label: "EXPERIENCE", href: "#journey" },
  { label: "PROJECTS", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isEnabled: isSoundOn, toggleSound, playClick, playHover } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-black/85 backdrop-blur-md border-b border-white/10 text-white"
            : "py-5 md:py-6 bg-transparent text-neutral-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Left: Brand Logo (Frame 02 Style: ECHO • / JAYAVARDHAN •) */}
          <a
            href="#hero"
            onMouseEnter={playHover}
            onClick={playClick}
            className={`group flex items-center gap-1.5 tracking-[0.2em] font-mono text-xs md:text-sm font-bold select-none transition-colors ${
              isScrolled ? "text-white" : "text-neutral-900"
            }`}
          >
            <span className="font-extrabold tracking-widest">{PERSONAL_INFO.shortName}</span>
            <span className="text-sm font-black">•</span>
          </a>

          {/* Center: Floating Capsule Navigation Pill (Frame 02 Exact Style) */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full border border-neutral-300/80 bg-white/70 backdrop-blur-md shadow-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={playHover}
                onClick={playClick}
                className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-neutral-700 hover:text-black hover:bg-neutral-200/60 transition-all duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Social & Utility Icons (Frame 02 Style) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className={`p-2 rounded-full hover:bg-neutral-200/50 transition-colors ${
                isScrolled ? "text-white hover:text-white hover:bg-white/10" : "text-neutral-700 hover:text-black"
              }`}
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className={`p-2 rounded-full hover:bg-neutral-200/50 transition-colors ${
                isScrolled ? "text-white hover:text-white hover:bg-white/10" : "text-neutral-700 hover:text-black"
              }`}
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Audio Toggle */}
            <button
              type="button"
              onClick={() => {
                playClick();
                toggleSound();
              }}
              onMouseEnter={playHover}
              className={`p-2 rounded-full hover:bg-neutral-200/50 transition-colors ${
                isScrolled ? "text-white hover:text-white hover:bg-white/10" : "text-neutral-700 hover:text-black"
              }`}
              title={isSoundOn ? "Sound On" : "Sound Off"}
            >
              {isSoundOn ? <Volume2 className="w-4 h-4 text-emerald-500 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Contact Pill */}
            <a
              href="/contact"
              onMouseEnter={playHover}
              onClick={playClick}
              className="px-4 py-1.5 rounded-full bg-neutral-900 text-white text-[11px] font-mono tracking-wider font-semibold hover:bg-black transition-colors shadow-sm"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className={`p-2 rounded-full border ${
                isScrolled ? "text-white border-white/20" : "text-neutral-900 border-neutral-300 bg-white"
              }`}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0a0a0c]/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-24 lg:hidden text-white"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase">
                INDEX NAVIGATION
              </span>
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map((item, idx) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      playClick();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-baseline justify-between border-b border-white/10 pb-3 text-2xl font-bold tracking-[0.08em] hover:text-neutral-300 font-sans"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-neutral-500 font-normal">
                      0{idx + 1}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10 text-xs font-mono text-neutral-400">
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-white text-black text-center font-bold font-mono tracking-widest uppercase"
              >
                GO TO CONTACT PAGE →
              </a>
              <div className="flex justify-between items-center pt-2">
                <span>{PERSONAL_INFO.status}</span>
                <button
                  type="button"
                  onClick={toggleSound}
                  className="text-white underline font-mono text-[11px]"
                >
                  {isSoundOn ? "MUTE AUDIO" : "ENABLE AUDIO"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
