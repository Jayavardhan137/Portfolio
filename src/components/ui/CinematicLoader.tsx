"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicLoaderProps {
  onComplete?: () => void;
}

export function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 450;
    const interval = 15;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(100, Math.floor((currentStep / steps) * 100));
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 150);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col justify-between p-8 md:p-14 text-white overflow-hidden select-none"
        >
          {/* Top meta */}
          <div className="flex justify-between items-center text-xs tracking-[0.25em] text-neutral-400 font-mono">
            <span className="uppercase">STUDIO ARCHIVE // 2026</span>
            <span className="uppercase">INITIALIZING SYSTEM</span>
          </div>

          {/* Center glowing logo with Wavy Organic Star Outline (Frame 01 Inspiration) */}
          <div className="flex flex-col items-center justify-center my-auto relative">
            {/* Organic Wavy Outline Blob (Video Frame 01) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-72 h-72 sm:w-96 sm:h-96 pointer-events-none opacity-40"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                <path
                  d="M100 15 C115 15, 122 32, 134 35 C146 38, 160 30, 170 40 C180 50, 172 64, 175 76 C178 88, 195 95, 195 110 C195 125, 178 132, 175 144 C172 156, 180 170, 170 180 C160 190, 146 182, 134 185 C122 188, 115 205, 100 205 C85 205, 78 188, 66 185 C54 182, 40 190, 30 180 C20 170, 28 156, 25 144 C22 132, 5 125, 5 110 C5 95, 22 88, 25 76 C28 64, 20 50, 30 40 C40 30, 54 38, 66 35 C78 32, 85 15, 100 15 Z"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative text-center z-10"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-[0.25em] font-sans text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]">
                JM.
              </h1>
              <p className="mt-4 text-xs md:text-sm font-mono tracking-[0.35em] text-neutral-300 uppercase">
                JAYAVARDHAN MALAMANTI
              </p>
            </motion.div>
          </div>

          {/* Bottom progress bar & counter */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end text-xs font-mono tracking-widest text-neutral-400">
              <span className="text-[11px] uppercase">
                AI/ML • FULL-STACK • CREATIVE TECH
              </span>
              <span className="text-xl md:text-2xl font-bold text-white font-mono">
                {progress.toString().padStart(3, "0")}%
              </span>
            </div>

            {/* Micro progress line */}
            <div className="w-full h-[1px] bg-neutral-800 overflow-hidden relative">
              <motion.div
                className="h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
