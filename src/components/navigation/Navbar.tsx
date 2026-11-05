"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useAudio } from "@/hooks/useAudio";

const NAV_ITEMS = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5"
            : "py-6 md:py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onMouseEnter={playHover}
            onClick={playClick}
            className="group flex items-center gap-2.5 text-white tracking-[0.2em] font-mono text-sm md:text-base font-bold select-none"
          >
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse" />
            <span className="group-hover:tracking-[0.28em] transition-all duration-300 font-extrabold">
              {PERSONAL_INFO.shortName}.
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={playHover}
                onClick={playClick}
                className="text-xs font-mono tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-200 relative py-1 group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action: Sound & Availability status */}
          <div className="hidden md:flex items-center gap-6">
            {/* Audio Toggle */}
            <button
              type="button"
              onClick={() => {
                playClick();
                toggleSound();
              }}
              onMouseEnter={playHover}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 text-[11px] font-mono tracking-wider transition-all duration-200"
              title={isSoundOn ? "Mute audio" : "Enable atmospheric sound"}
            >
              {isSoundOn ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
                  <span className="text-[10px] text-white">SOUND ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="text-[10px]">SOUND OFF</span>
                </>
              )}
            </button>

            {/* Availability Pill */}
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-neutral-300 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>AVAILABLE '26</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => {
                playClick();
                toggleSound();
              }}
              className="p-2 text-neutral-400 hover:text-white"
              aria-label="Toggle Sound"
            >
              {isSoundOn ? <Volume2 className="w-4 h-4 text-white" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 text-white border border-white/10 rounded-full"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-24 md:hidden text-white"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase">
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
                    className="flex items-baseline justify-between border-b border-white/10 pb-3 text-2xl font-bold tracking-[0.1em] hover:text-neutral-300 font-sans"
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
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{PERSONAL_INFO.status}</span>
              </div>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-white"
              >
                <span>GITHUB // @Jayavardhan137</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-white"
              >
                <span>LINKEDIN // Jayavardhan Malamanti</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

