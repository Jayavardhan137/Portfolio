"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface CinematicLoaderProps {
  onComplete?: () => void;
}

// Procedural Web Audio Synthesizer for Cinematic Loader
class LoaderSoundEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  constructor() {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("jm_sound_enabled");
      // Default to sound enabled unless explicitly set to false
      this.enabled = saved !== "false";
    }
  }

  public init() {
    if (typeof window === "undefined") return;
    try {
      if (!this.ctx) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume();
      }
    } catch {
      // Audio context initialization fallback
    }
  }

  public setEnabled(val: boolean) {
    this.enabled = val;
    if (typeof window !== "undefined") {
      localStorage.setItem("jm_sound_enabled", String(val));
    }
    if (val) this.init();
  }

  // 1. Tactile bounce & landing impacts
  public playBounce(pitch = 220, decay = 0.09, volume = 0.07) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(pitch, t);
      osc.frequency.exponentialRampToValueAtTime(32, t + decay);
      gain.gain.setValueAtTime(volume, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + decay);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + decay);
    } catch {}
  }

  // 2. Rising charging whoosh when stick morphs and spins
  public playCharge() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(130, t);
      osc.frequency.exponentialRampToValueAtTime(540, t + 0.65);
      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.035, t + 0.35);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.7);
    } catch {}
  }

  // 3. Crisp mechanical typewriter/metallic letter snap
  public playLetterSnap(pitch = 850) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(pitch, t);
      osc.frequency.exponentialRampToValueAtTime(140, t + 0.045);
      gain.gain.setValueAtTime(0.035, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.045);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.045);
    } catch {}
  }

  // 4. Subtle mechanical split-flap/cipher decryption click
  public playScrambleTick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      const randomFreq = 1800 + Math.random() * 900;
      osc.frequency.setValueAtTime(randomFreq, t);
      gain.gain.setValueAtTime(0.012, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.022);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.022);
    } catch {}
  }

  // 5. Grand harmonic chime when PORTFOLIO and AI Engineer settle
  public playGrandChime() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      // Resonant harmonic chord: G3, C4, E4, G4, C5
      const freqs = [196.0, 261.63, 329.63, 392.0, 523.25];
      freqs.forEach((f, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(f, t + idx * 0.035);
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.linearRampToValueAtTime(0.025, t + 0.08 + idx * 0.035);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.25);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(t + idx * 0.035);
        osc.stop(t + 1.3);
      });
    } catch {}
  }

  // 6. Ethereal sub bass whoosh for curtain lift
  public playWhoosh() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(130, t);
      osc.frequency.exponentialRampToValueAtTime(45, t + 0.5);
      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.5);
    } catch {}
  }
}

export function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const [isFinished, setIsFinished] = useState(false);
  const [soundActive, setSoundActive] = useState(true);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const stemRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const wordRef = useRef<HTMLDivElement | null>(null);
  const subRef = useRef<HTMLDivElement | null>(null);
  const runIdRef = useRef(0);
  const soundEngineRef = useRef<LoaderSoundEngine | null>(null);

  if (!soundEngineRef.current && typeof window !== "undefined") {
    soundEngineRef.current = new LoaderSoundEngine();
  }

  const toggleSound = () => {
    if (!soundEngineRef.current) return;
    const nextState = !soundActive;
    setSoundActive(nextState);
    soundEngineRef.current.setEnabled(nextState);
    if (nextState) {
      soundEngineRef.current.playLetterSnap(600);
    }
  };

  const finish = useCallback(() => {
    runIdRef.current++;
    if (soundEngineRef.current) {
      soundEngineRef.current.playWhoosh();
    }
    setIsFinished(true);
    if (onComplete) onComplete();
  }, [onComplete]);

  useEffect(() => {
    const sound = soundEngineRef.current;
    const FROM = "JAYAVARDHAN";
    const TO = "PORTFOLIO";
    const HOLD = 1300; // ms the name stays before morphing
    const STAGGER = 95; // ms between each letter's morph start
    const SCRAMBLE = 380; // ms each letter flickers before settling

    const dot = dotRef.current;
    const stem = stemRef.current;
    const glow = glowRef.current;
    const word = wordRef.current;
    const sub = subRef.current;

    if (!dot || !stem || !glow || !word || !sub) return;

    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const rnd = () => A[Math.floor(Math.random() * A.length)];
    const anim = (
      el: HTMLElement | null | undefined,
      kf: Keyframe[] | PropertyIndexedKeyframes,
      o: KeyframeAnimationOptions
    ): Promise<Animation | null> => {
      if (!el) return Promise.resolve(null);
      return el.animate(kf, { fill: "forwards", ...o }).finished;
    };

    function build(text: string) {
      if (!word) return [];
      word.innerHTML = "";
      return [...text].map((ch) => {
        const s = document.createElement("span");
        s.className = "loader-l";
        s.textContent = ch;
        word.appendChild(s);
        return s;
      });
    }

    async function play() {
      const dot = dotRef.current;
      const stem = stemRef.current;
      const glow = glowRef.current;
      const word = wordRef.current;
      const sub = subRef.current;

      if (!dot || !stem || !glow || !word || !sub) return;

      const id = ++runIdRef.current;
      const live = () => id === runIdRef.current && !isFinished;

      [dot, stem, glow, sub].forEach((e) => {
        if (!e) return;
        e.getAnimations().forEach((a) => a.cancel());
        e.style.opacity = "0";
      });

      const L = build(FROM);
      await (document as any).fonts?.ready?.catch(() => {});
      if (!live()) return;
      const H = window.innerHeight;

      // 1. Dot falls in and lands with a glow pulse & tactile sound effects
      const fall = "cubic-bezier(.55,0,.9,.6)";
      const rise = "cubic-bezier(.1,.5,.4,1)";
      anim(
        dot,
        [
          { transform: `translateY(${-H * 0.45}px) scale(.85,1.4)`, opacity: 1, offset: 0, easing: fall },
          { transform: "translateY(0) scale(.9,1.2)", opacity: 1, offset: 0.3 },
          { transform: "translateY(3px) scale(1.7,.5)", opacity: 1, offset: 0.325, easing: rise },
          { transform: `translateY(${-H * 0.17}px) scale(.9,1.15)`, opacity: 1, offset: 0.56, easing: fall },
          { transform: "translateY(0) scale(.95,1.1)", opacity: 1, offset: 0.76 },
          { transform: "translateY(2px) scale(1.4,.65)", opacity: 1, offset: 0.785, easing: rise },
          { transform: `translateY(${-H * 0.055}px) scale(1)`, opacity: 1, offset: 0.89, easing: fall },
          { transform: "translateY(0) scale(1.15,.85)", opacity: 1, offset: 0.96 },
          { transform: "translateY(0) scale(1)", opacity: 1, offset: 1 },
        ],
        { duration: 1700 }
      );

      // Sound impact 1: Initial heavy drop & glow pulse
      await wait(520);
      if (!live()) return;
      sound?.playBounce(220, 0.12, 0.08);
      anim(glow, [{ opacity: 0, transform: "scale(.3)" }, { opacity: 1, transform: "scale(1)" }], {
        duration: 700,
        easing: "ease-out",
      });

      // Sound impact 2: Second bounce
      await wait(750);
      if (!live()) return;
      sound?.playBounce(320, 0.07, 0.04);

      // Sound impact 3: Micro bounce settle
      await wait(350);
      if (!live()) return;
      sound?.playBounce(440, 0.04, 0.02);

      await wait(150);
      if (!live()) return;

      // 2. The bouncing ball morphs into a stick, spins and travels with charge audio
      sound?.playCharge();
      await anim(
        dot,
        [
          { width: "16px", height: "16px", marginLeft: "-8px", marginTop: "-8px", borderRadius: "50%" },
          { width: "14px", height: "120px", marginLeft: "-7px", marginTop: "-60px", borderRadius: "7px" },
        ],
        { duration: 560, easing: "cubic-bezier(.3,1.5,.5,1)" }
      );

      await wait(320);
      if (!live()) return;

      // 3. Letters burst out from the centre, tumbling, staggered
      const wr = word.getBoundingClientRect();
      const cx = wr.left + wr.width / 2;
      const cy = wr.top + wr.height / 2;
      const K = FROM.indexOf("A");
      const targetA = L[K];

      if (!targetA) return;
      const ar = targetA.getBoundingClientRect();
      const adx = ar.left + ar.width / 2 - cx;
      const ady = ar.top + ar.height / 2 - cy + ar.height * 0.04;
      const aw = ar.width * 0.72;
      const ah = ar.height * 0.74;

      await anim(
        dot,
        [
          {
            transform: "translate(0,0) rotate(0deg)",
            width: "14px",
            height: "120px",
            marginLeft: "-7px",
            marginTop: "-60px",
            borderRadius: "7px",
          },
          {
            transform: `translate(${adx}px,${ady}px) rotate(-360deg)`,
            width: aw + "px",
            height: ah + "px",
            marginLeft: -aw / 2 + "px",
            marginTop: -ah / 2 + "px",
            borderRadius: "4px",
          },
        ],
        { duration: 750, easing: "cubic-bezier(.6,0,.2,1)" }
      );

      sound?.playLetterSnap(1100);
      anim(targetA, [{ opacity: 1, transform: "scale(1.3)" }, { opacity: 1, transform: "scale(1)" }], {
        duration: 340,
        easing: "ease-out",
      });
      anim(dot, [{ opacity: 1 }, { opacity: 0 }], { duration: 160 });

      const jobs = L.map((s, i) => {
        if (i === K) return Promise.resolve();
        const r = s.getBoundingClientRect();
        const dx = cx - (r.left + r.width / 2);
        const dy = cy - (r.top + r.height / 2);
        const rot = (Math.random() < 0.5 ? -1 : 1) * (120 + Math.random() * 240);
        return wait((i < K ? i : i - 1) * 110).then(() => {
          sound?.playLetterSnap(600 + Math.random() * 350);
          return anim(
            s,
            [
              { opacity: 0, transform: `translate(${dx}px,${dy}px) rotate(${rot}deg) scale(.15)` },
              { opacity: 1, transform: "translate(0,0) rotate(0) scale(1.18)", offset: 0.75 },
              { opacity: 1, transform: "translate(0,0) rotate(0) scale(1)" },
            ],
            { duration: 620, easing: "cubic-bezier(.2,.8,.2,1)" }
          );
        });
      });

      anim(glow, [{ opacity: 1 }, { opacity: 0.12 }], { duration: 1400, delay: 400 });
      await Promise.all(jobs);
      if (!live()) return;

      await wait(HOLD);
      if (!live()) return;

      // 4. Morph: each letter flickers through random glyphs, left -> right with cipher clicks
      const n = Math.max(FROM.length, TO.length);
      const tasks = [];
      for (let i = 0; i < n; i++) {
        tasks.push(
          (async () => {
            await wait(i * STAGGER);
            if (!live()) return;
            const s = L[i];
            if (!s) return;
            const target = TO[i];
            const t0 = performance.now();
            while (performance.now() - t0 < SCRAMBLE) {
              s.textContent = rnd();
              s.style.transform = `translateY(${(Math.random() - 0.5) * 6}px)`;
              sound?.playScrambleTick();
              await wait(45);
              if (!live()) return;
            }
            s.style.transform = "";
            if (target) {
              s.textContent = target;
              sound?.playLetterSnap(800 + i * 50);
              anim(s, [{ transform: "scale(1.15)" }, { transform: "scale(1)" }], { duration: 180 });
            } else {
              await anim(s, [{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(.2)" }], {
                duration: 260,
              });
              s.style.display = "none";
            }
          })()
        );
      }
      await Promise.all(tasks);
      if (!live()) return;

      if (TO.length > FROM.length) {
        build(TO).forEach((s) => (s.style.opacity = "1"));
      }

      // 5. Tagline fades in with grand harmonic chime
      const finalWordRect = word.getBoundingClientRect();
      sub.style.setProperty("--w", finalWordRect.width + "px");
      sub.style.textAlign = "left";

      sound?.playGrandChime();
      await anim(
        sub,
        [{ opacity: 0, transform: "translate(-50%,8px)" }, { opacity: 0.95, transform: "translate(-50%,0)" }],
        { duration: 700, easing: "ease-out" }
      );

      // 6. Hold final state then smoothly transition out into the portfolio
      await wait(1100);
      if (!live()) return;
      finish();
    }

    // Initialize audio context on stage click to comply with browser autoplay permissions
    const handleStageInteract = () => {
      sound?.init();
    };

    const stageEl = stageRef.current;
    if (stageEl) {
      stageEl.addEventListener("pointerdown", handleStageInteract, { once: true });
    }

    play();

    return () => {
      runIdRef.current++;
      if (stageEl) {
        stageEl.removeEventListener("pointerdown", handleStageInteract);
      }
    };
  }, [finish, isFinished]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="cinematic-morph-preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            opacity: 0.9,
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] bg-[#05060b] flex flex-col justify-between overflow-hidden select-none cursor-pointer"
          onClick={() => soundEngineRef.current?.init()}
        >
          {/* Top Bar with Sound Toggle & Skip Button */}
          <div className="absolute top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-auto">
            <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
              JAYAVARDHAN • EST. 2026
            </span>

            <div className="flex items-center gap-2.5">
              {/* Sound Toggle Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSound();
                }}
                className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-[11px] font-mono tracking-wider text-neutral-300 hover:text-white transition-all uppercase flex items-center gap-1.5"
                title={soundActive ? "Mute Loading Sound" : "Enable Loading Sound"}
              >
                {soundActive ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-white" />
                    <span className="hidden sm:inline">SOUND ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="hidden sm:inline">MUTED</span>
                  </>
                )}
              </button>

              {/* Skip Intro */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  finish();
                }}
                className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-[11px] font-mono tracking-widest text-neutral-300 hover:text-white transition-all uppercase"
              >
                SKIP INTRO ↗
              </button>
            </div>
          </div>

          {/* Kinetic Morph Stage */}
          <div ref={stageRef} className="loader-stage">
            <div ref={glowRef} className="loader-glow" />
            <div ref={stemRef} className="loader-stem" />
            <div ref={dotRef} className="loader-dot" />
            <div ref={wordRef} className="loader-word" />
            <div ref={subRef} className="loader-sub">
              <span>AI</span> <i>Engineer</i>
            </div>
          </div>

          {/* Subtle Bottom Meta */}
          <div className="absolute bottom-6 left-6 right-6 z-40 flex items-center justify-between text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase pointer-events-none">
            <span>FULL-STACK & AI SYSTEMS</span>
            <span>HYPER-EDITORIAL ARCHIVE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
