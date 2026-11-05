"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useAudio } from "@/hooks/useAudio";

export function Footer() {
  const { playHover, playClick } = useAudio();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 sm:px-8 md:px-12 bg-[#030303] text-white border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
        {/* Left: Copyright & Name */}
        <div className="flex items-center gap-3">
          <span className="text-white font-bold">{PERSONAL_INFO.shortName}.</span>
          <span>© 2026 {PERSONAL_INFO.name}.</span>
          <span className="hidden sm:inline text-neutral-400">
            ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Center: Live Time IST */}
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-neutral-400" />
          <span>HYDERABAD, IN // {time || "12:30:00 PM"} IST</span>
        </div>

        {/* Right: Back to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          onMouseEnter={playHover}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors uppercase tracking-widest group"
        >
          <span>BACK TO SUMMIT</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
}

