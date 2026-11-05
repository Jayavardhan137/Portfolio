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
    const duration = 1600; // ms
    const interval = 20; // ms
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
        }, 300);
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
            <span className="uppercase">PORTFOLIO // 2026</span>
            <span className="uppercase">STUDIO INITIALIZATION</span>
          </div>

          {/* Center glowing logo */}
          <div className="flex flex-col items-center justify-center my-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.6em" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative text-center"
            >
              <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-[0.3em] font-sans text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]">
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

