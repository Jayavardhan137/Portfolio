"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useAudio } from "@/hooks/useAudio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT ME", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "LANDING PAGES", href: "#landing-pages" },
  { label: "SERVICES", href: "#services" },
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
        data-purpose="site-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? "py-3 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-sm"
            : "pt-6 pb-4 bg-[#FAFAFA]"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 flex items-center justify-between">
          {/* Brand Wordmark with expanding dot */}
          <a
            href="#home"
            onMouseEnter={playHover}
            onClick={playClick}
            className="group font-black text-xl tracking-tight text-black flex items-center select-none"
          >
            <span>{PERSONAL_INFO.shortName}</span>
            <span className="inline-block w-2 h-2 bg-black rounded-full ml-1 transition-transform group-hover:scale-150 duration-200" />
          </a>

          {/* Center Navigation Links: Pill with no unwanted wrapping (ECHO Exact Style) */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-white/95 border border-[#E2E2E2] rounded-full shadow-sm text-xs font-semibold tracking-wider text-neutral-600">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.label}
                id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                href={item.href}
                onMouseEnter={playHover}
                onClick={playClick}
                className={`px-4 py-2 rounded-full border transition whitespace-nowrap ${
                  idx === 0
                    ? "border-neutral-300 text-black hover:border-black"
                    : "border-transparent hover:border-neutral-200 hover:text-black"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Social & Menu Links (ECHO Exact Layout) */}
          <div className="flex items-center gap-1.5 md:gap-2 p-1.5 bg-white/95 border border-[#E2E2E2] rounded-full shadow-sm">
            {/* Instagram */}
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 transition text-neutral-700 hover:text-black"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect height="18" rx="5" ry="5" width="18" x="3" y="3" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 transition text-neutral-700 hover:text-black"
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 transition text-neutral-700 hover:text-black"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            {/* GitHub */}
            <a
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 transition text-neutral-700 hover:text-black"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Audio Toggle */}
            <button
              type="button"
              onClick={() => {
                playClick();
                toggleSound();
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 transition text-neutral-700 hover:text-black"
              title={isSoundOn ? "Sound On" : "Sound Off"}
            >
              {isSoundOn ? <Volume2 className="w-3.5 h-3.5 text-black animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Contact Page Link Pill */}
            <a
              href="/contact"
              onMouseEnter={playHover}
              onClick={playClick}
              className="px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-mono tracking-wider font-semibold hover:bg-neutral-800 transition shadow-sm ml-1 hidden sm:inline-block"
            >
              CONTACT
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Open Menu"
              className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center hover:bg-neutral-100 transition text-neutral-700 ml-1"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (ECHO Exact Style) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
              className="w-4/5 max-w-sm bg-white h-full p-8 flex flex-col justify-between shadow-2xl text-black"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
                  <span className="font-black text-lg tracking-tight font-sans">
                    {PERSONAL_INFO.shortName}•
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-black"
                  >
                    ✕
                  </button>
                </div>
                <nav className="flex flex-col gap-4 mt-8 text-base font-bold tracking-wider font-mono">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 border-b border-neutral-100 hover:text-neutral-500"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 text-black hover:underline"
                  >
                    CONTACT PAGE
                  </a>
                </nav>
              </div>

              <div className="pt-6 border-t border-neutral-200 font-mono">
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2 font-bold">
                  {PERSONAL_INFO.name}
                </p>
                <p className="text-xs text-neutral-600">
                  B.Tech CSE (AI & ML) • Full-Stack Developer
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
