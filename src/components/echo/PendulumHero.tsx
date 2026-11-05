"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCw, ArrowDown, Sparkles, User, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useAudio } from "@/hooks/useAudio";

const NAME_LETTERS = "JAYAVARDHAN".split("");
const PORTFOLIO_LETTERS = "PORTFOLIO".split("");

// Angles matching the 11 letter slots from left to right (-50deg to +50deg)
const NAME_ANGLES = [-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50];

export function PendulumHero() {
  const { playPendulumTick, playHover, playClick, playCinematicRise } = useAudio();

  // Animation states
  const [stage, setStage] = useState<"idle" | "typing" | "name_complete" | "morphing" | "portfolio_complete">("typing");
  const [activeWord, setActiveWord] = useState<"JAYAVARDHAN" | "PORTFOLIO">("JAYAVARDHAN");
  const [revealedCount, setRevealedCount] = useState<number>(0);
  const [currentAngle, setCurrentAngle] = useState<number>(-50);
  const [isArmVisible, setIsArmVisible] = useState<boolean>(true);
  const [showPortrait, setShowPortrait] = useState<boolean>(false);
  const [displayLetters, setDisplayLetters] = useState<string[]>([]);

  const animationTimeoutRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = () => {
    animationTimeoutRef.current.forEach((t) => clearTimeout(t));
    animationTimeoutRef.current = [];
  };

  // Start the pendulum typing sequence
  const startPendulumSequence = useCallback(() => {
    clearAllTimeouts();
    setStage("typing");
    setActiveWord("JAYAVARDHAN");
    setRevealedCount(0);
    setIsArmVisible(true);
    setCurrentAngle(-52);
    setDisplayLetters(new Array(NAME_LETTERS.length).fill(""));

    // Rhythmic metronome letter reveals
    NAME_LETTERS.forEach((letter, idx) => {
      const delay = 350 + idx * 160; // 160ms per swing strike
      const t = setTimeout(() => {
        setCurrentAngle(NAME_ANGLES[idx]);
        setRevealedCount(idx + 1);
        setDisplayLetters((prev) => {
          const next = [...prev];
          next[idx] = letter;
          return next;
        });
        playPendulumTick(0.85 + (idx / NAME_LETTERS.length) * 0.4);
      }, delay);
      animationTimeoutRef.current.push(t);
    });

    // Name fully formed
    const completeDelay = 350 + NAME_LETTERS.length * 160 + 200;
    const tComplete = setTimeout(() => {
      setStage("name_complete");
      // Damped return to center
      setCurrentAngle(0);
      playCinematicRise();

      // Soft arm fade
      const tFade = setTimeout(() => {
        setIsArmVisible(false);
      }, 500);
      animationTimeoutRef.current.push(tFade);

      // Morph into PORTFOLIO after 1.8 seconds (exact timing from video)
      const tMorph = setTimeout(() => {
        startMorphToPortfolio();
      }, 1900);
      animationTimeoutRef.current.push(tMorph);
    }, completeDelay);
    animationTimeoutRef.current.push(tComplete);
  }, [playPendulumTick, playCinematicRise]);

  // Scramble morph sequence into PORTFOLIO
  const startMorphToPortfolio = () => {
    setStage("morphing");
    const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#_/";
    let frames = 0;
    const maxFrames = 12;

    const interval = setInterval(() => {
      frames++;
      if (frames < maxFrames) {
        setDisplayLetters(
          PORTFOLIO_LETTERS.map(() => GLYPHS[Math.floor(Math.random() * GLYPHS.length)])
        );
      } else {
        clearInterval(interval);
        setDisplayLetters(PORTFOLIO_LETTERS);
        setActiveWord("PORTFOLIO");
        setStage("portfolio_complete");
        playCinematicRise();
      }
    }, 45);
  };

  // Toggle directly between JAYAVARDHAN and PORTFOLIO
  const toggleWord = () => {
    playClick();
    if (activeWord === "JAYAVARDHAN") {
      startMorphToPortfolio();
    } else {
      startPendulumSequence();
    }
  };

  useEffect(() => {
    startPendulumSequence();
    return () => clearAllTimeouts();
  }, [startPendulumSequence]);

  return (
    <section
      id="home"
      data-purpose="hero-section"
      className="relative min-h-[92vh] md:min-h-screen w-full bg-[#050507] text-white flex flex-col items-center justify-between overflow-hidden select-none px-4 pt-24 pb-12"
    >
      {/* ================= BACKGROUND: CELESTIAL STARDUST & SPOTLIGHT ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep radial spotlight behind typography (exact matching reference video) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full pointer-events-none transition-opacity duration-1000"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)",
          }}
        />

        {/* Ambient Floating Dust Particles */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(28)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${(i * 13) % 100}%`,
                left: `${(i * 23) % 100}%`,
                opacity: (i % 5) * 0.15 + 0.1,
                animationDuration: `${3 + (i % 4)}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ================= TOP HUD TELEMETRY ================= */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between text-xs font-mono text-neutral-400 z-10 px-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-widest uppercase">EST. 2026 // AI ARCHITECT</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[11px] tracking-wider text-neutral-500">
          <span>MALAMANTI // INDIA</span>
          <span>•</span>
          <span>AUTONOMOUS KINETIC HERO</span>
        </div>
      </div>

      {/* ================= CENTER STAGE: METRONOME & METALLIC TYPOGRAPHY ================= */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto flex flex-col items-center justify-center z-10 my-auto py-8">
        {/* Optional Studio Silhouette Overlay behind or floating */}
        <AnimatePresence>
          {showPortrait && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 0.35, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[440px] md:w-[480px] md:h-[580px] pointer-events-none hero-portrait-mask"
            >
              <img
                src="/assets/hero_portrait.png"
                alt="Jayavardhan Malamanti"
                className="w-full h-full object-contain object-bottom select-none"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= THE WORDS CONTAINER ================= */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Main Giant Metallic Title */}
          <div className="relative flex items-center justify-center flex-wrap px-2">
            <h1 className="text-[12.5vw] sm:text-[11vw] md:text-[8.5rem] lg:text-[10.5rem] font-black uppercase tracking-[-0.04em] leading-[0.85] font-sans flex items-center justify-center">
              {displayLetters.map((char, idx) => (
                <span
                  key={idx}
                  className={`inline-block transition-all duration-150 ${
                    char ? "opacity-100 transform scale-100" : "opacity-0 transform scale-90"
                  }`}
                  style={{
                    background: "linear-gradient(180deg, #FFFFFF 0%, #E4E4E7 40%, #A1A1AA 70%, #52525B 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.22))",
                    minWidth: char === " " ? "0.3em" : "auto",
                  }}
                >
                  {char || "\u00A0"}
                </span>
              ))}
            </h1>
          </div>

          {/* Subtitle Section (Revealed when PORTFOLIO is reached, or below JAYAVARDHAN) */}
          <div className="min-h-[48px] mt-4 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {stage === "portfolio_complete" ? (
                <motion.div
                  key="portfolio-subtitle"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  {/* Large Tracked Subtitle: AI Architect (Exactly as seen in reference video) */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-sans tracking-wide text-white drop-shadow-md">
                    AI Architect
                  </h2>
                  <p className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase">
                    FULL-STACK DEVELOPER • CREATIVE TECHNOLOGIST
                  </p>
                </motion.div>
              ) : stage === "name_complete" ? (
                <motion.div
                  key="name-subtitle"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="text-xs sm:text-sm font-mono tracking-[0.3em] text-neutral-400 uppercase"
                >
                  COMPUTER SCIENCE (AI & ML) • PRODUCT ENGINEER
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>

        {/* ================= THE KINETIC PENDULUM MECHANISM ================= */}
        {/* Originates from the bottom pivot ball below the letters */}
        <div className="relative w-full max-w-lg h-28 md:h-36 flex items-end justify-center pointer-events-none mt-2">
          {/* Pendulum Swing Arm Container */}
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center origin-bottom transition-transform duration-150 ease-out"
            style={{
              transform: `translateX(-50%) rotate(${currentAngle}deg)`,
              opacity: isArmVisible ? 1 : 0,
              transition: isArmVisible ? "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease" : "opacity 0.6s ease",
            }}
          >
            {/* White glowing rod */}
            <div className="w-[3px] md:w-[4px] h-24 md:h-32 bg-gradient-to-t from-white via-white to-white/90 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.9)]" />
            
            {/* Top Tip Spotlight Dot */}
            <div className="w-2 h-2 rounded-full bg-white -mt-1 shadow-[0_0_12px_rgba(255,255,255,1)]" />
          </div>

          {/* Pendulum Base Pivot Dot (The persistent white circle seen in the video) */}
          <div className="relative z-20 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.95)] border border-neutral-300" />
        </div>
      </div>

      {/* ================= BOTTOM INTERACTIVE CONTROLS & SCROLL TRIGGER ================= */}
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 z-10 px-4 pt-4 border-t border-white/[0.08]">
        {/* Left: Replay & Switch Word Interactive Pills */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={startPendulumSequence}
            onMouseEnter={playHover}
            className="px-4 py-2 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/15 hover:border-white text-xs font-mono tracking-wider uppercase text-neutral-300 hover:text-white transition-all flex items-center gap-2 group"
          >
            <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
            <span>REPLAY PENDULUM</span>
          </button>

          <button
            type="button"
            onClick={toggleWord}
            onMouseEnter={playHover}
            className="px-4 py-2 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/15 hover:border-white text-xs font-mono tracking-wider uppercase text-neutral-300 hover:text-white transition-all"
          >
            <span>{activeWord === "JAYAVARDHAN" ? "SHOW PORTFOLIO" : "SHOW JAYAVARDHAN"}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              playClick();
              setShowPortrait(!showPortrait);
            }}
            onMouseEnter={playHover}
            className={`px-3 py-2 rounded-full border text-xs font-mono tracking-wider uppercase transition-all hidden sm:inline-flex items-center gap-1.5 ${
              showPortrait
                ? "bg-white text-black border-white"
                : "border-white/20 bg-white/[0.05] hover:bg-white/15 text-neutral-400 hover:text-white"
            }`}
            title="Toggle Studio Silhouette"
          >
            <User className="w-3.5 h-3.5" />
            <span>PORTRAIT</span>
          </button>
        </div>

        {/* Center / Right: Scroll Down Action into Portfolio */}
        <a
          href="#about"
          onMouseEnter={playHover}
          onClick={playClick}
          className="group flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
        >
          <span>EXPLORE ARCHIVE</span>
          <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  );
}

