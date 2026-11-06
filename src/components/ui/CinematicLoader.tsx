"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KEY_CLIPS } from "./loaderAudioClips";

interface CinematicLoaderProps {
  onComplete?: () => void;
}

export function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const [isFinished, setIsFinished] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const stemRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const wordRef = useRef<HTMLDivElement | null>(null);
  const subRef = useRef<HTMLDivElement | null>(null);

  const runIdRef = useRef(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const keyBuffersRef = useRef<AudioBuffer[]>([]);
  const lastKeyIdxRef = useRef<number>(-1);

  // Audio Context getter
  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtxClass =
        typeof window !== "undefined"
          ? window.AudioContext || (window as any).webkitAudioContext
          : null;
      if (AudioCtxClass) {
        audioCtxRef.current = new AudioCtxClass();
      }
    }
    return audioCtxRef.current;
  }, []);

  // Safe decoder for base64 WAV key clips
  const loadKeys = useCallback(async () => {
    if (keyBuffersRef.current.length > 0) return keyBuffersRef.current;
    try {
      const a = getAudioContext();
      if (!a) return [];

      const buffers = await Promise.all(
        KEY_CLIPS.map(async (b) => {
          const bin = atob(b);
          const u = new Uint8Array(bin.length);
          for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
          return await a.decodeAudioData(u.buffer.slice(0));
        })
      );
      keyBuffersRef.current = buffers;
      return buffers;
    } catch (e) {
      return [];
    }
  }, [getAudioContext]);

  // Whoosh sound
  const whoosh = useCallback(
    (vol = 1) => {
      try {
        const a = getAudioContext();
        if (!a) return;
        const t = a.currentTime;
        const n = a.createBuffer(1, Math.floor(a.sampleRate * 0.5), a.sampleRate);
        const d = n.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
        const s = a.createBufferSource();
        s.buffer = n;
        const bp = a.createBiquadFilter();
        bp.type = "bandpass";
        bp.Q.value = 1.2;
        bp.frequency.setValueAtTime(300, t);
        bp.frequency.exponentialRampToValueAtTime(3200, t + 0.4);
        const g = a.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.35 * vol, t + 0.18);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
        s.connect(bp).connect(g).connect(a.destination);
        s.start(t);
      } catch (e) {}
    },
    [getAudioContext]
  );

  // Boom sub-bass impact
  const boom = useCallback(() => {
    try {
      const a = getAudioContext();
      if (!a) return;
      const t = a.currentTime;
      const o = a.createOscillator();
      const g = a.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(75, t);
      o.frequency.exponentialRampToValueAtTime(32, t + 0.9);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.7, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
      o.connect(g).connect(a.destination);
      o.start(t);
      o.stop(t + 1.2);
    } catch (e) {}
  }, [getAudioContext]);

  // Bounce sound
  const bounce = useCallback(
    (vol = 1, f = 170) => {
      try {
        const a = getAudioContext();
        if (!a) return;
        const t = a.currentTime;
        const o = a.createOscillator();
        const g = a.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(f * 2, t);
        o.frequency.exponentialRampToValueAtTime(f * 0.45, t + 0.14);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.6 * vol, t + 0.006);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
        o.connect(g).connect(a.destination);
        o.start(t);
        o.stop(t + 0.22);
      } catch (e) {}
    },
    [getAudioContext]
  );

  // Mechanical typing sounds
  const keySynth = useCallback(
    (vol = 1) => {
      try {
        const a = getAudioContext();
        if (!a) return;
        const t = a.currentTime;
        const click = (at: number, len: number, freq: number, q: number, gain: number) => {
          const n = a.createBuffer(1, Math.floor(a.sampleRate * len), a.sampleRate);
          const d = n.getChannelData(0);
          for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2.5);
          const s = a.createBufferSource();
          s.buffer = n;
          const f = a.createBiquadFilter();
          f.type = "bandpass";
          f.frequency.value = freq;
          f.Q.value = q;
          const g = a.createGain();
          g.gain.value = gain * vol;
          s.connect(f).connect(g).connect(a.destination);
          s.start(at);
        };
        click(t, 0.03, 2400 + Math.random() * 1200, 1.4, 1.1);
        click(t + 0.004, 0.05, 700 + Math.random() * 200, 0.8, 0.6);
        click(t + 0.07 + Math.random() * 0.02, 0.02, 3600 + Math.random() * 800, 1.2, 0.45);
      } catch (e) {}
    },
    [getAudioContext]
  );

  const keySound = useCallback(
    (vol = 1) => {
      const KB = keyBuffersRef.current;
      if (!KB.length) return keySynth(vol);
      try {
        const a = getAudioContext();
        if (!a) return;
        let i: number;
        do {
          i = Math.floor(Math.random() * KB.length);
        } while (i === lastKeyIdxRef.current && KB.length > 1);
        lastKeyIdxRef.current = i;

        const s = a.createBufferSource();
        s.buffer = KB[i];
        s.playbackRate.value = 0.95 + Math.random() * 0.12;
        const g = a.createGain();
        g.gain.value = Math.min(1.8, 1.4 * vol);
        s.connect(g).connect(a.destination);
        s.start();
      } catch (e) {}
    },
    [getAudioContext, keySynth]
  );

  const finish = useCallback(() => {
    runIdRef.current++;
    setIsFinished(true);
    if (onComplete) onComplete();
  }, [onComplete]);

  // Main playback routine
  const play = useCallback(async () => {
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

    dot.style.background = "";
    dot.style.boxShadow = "";
    word.querySelectorAll(".loader-l").forEach((e) => e.remove());

    const FROM = "JAYAVARDHAN";
    const TO = "PORTFOLIO";
    const HOLD = 900;
    const STAGGER = 65;
    const SCRAMBLE = 280;

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

    // Ensure audio clips are decoded and ready
    await loadKeys();

    const L = build(FROM);
    await (document as any).fonts?.ready?.catch(() => {});
    if (!live()) return;
    const H = window.innerHeight;

    // 1. Dot falls in and lands with a glow pulse
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
      { duration: 1200 }
    );

    [
      [360, 1, 170],
      [912, 0.6, 210],
      [1152, 0.3, 260],
    ].forEach(([t, v, f]) => setTimeout(() => { if (live()) bounce(v, f); }, t));

    await wait(370);
    if (!live()) return;
    boom();
    anim(glow, [{ opacity: 0, transform: "scale(.3)" }, { opacity: 1, transform: "scale(1)" }], {
      duration: 700,
      easing: "ease-out",
    });

    await wait(880);
    if (!live()) return;

    // 2. The bouncing ball morphs into a stick (circle -> pill)
    whoosh(0.8);
    await anim(
      dot,
      [
        { width: "16px", height: "16px", marginLeft: "-8px", marginTop: "-8px", borderRadius: "50%" },
        { width: "14px", height: "120px", marginLeft: "-7px", marginTop: "-60px", borderRadius: "7px" },
      ],
      { duration: 420, easing: "cubic-bezier(.3,1.5,.5,1)" }
    );

    await wait(180);
    if (!live()) return;

    // 3. ONE bar travels letter to letter and builds each letter as it passes
    const stage = stageRef.current;
    if (!stage) return;
    const st = stage.getBoundingClientRect();
    const sx = st.left + st.width / 2;
    const sy = st.top + st.height / 2;
    const fr = (x: number, y: number, w: number, h: number, r: string, o: number) => ({
      transform: `translate(${x}px,${y}px)`,
      width: w + "px",
      height: h + "px",
      marginLeft: -w / 2 + "px",
      marginTop: -h / 2 + "px",
      borderRadius: r,
      opacity: o,
    });

    let prev = fr(0, 0, 14, 120, "7px", 1);
    anim(glow, [{ opacity: 1 }, { opacity: 0.2 }], { duration: 1600, delay: 300 });

    for (let i = 0; i < L.length; i++) {
      const r = L[i].getBoundingClientRect();
      const x = r.left + r.width / 2 - sx;
      const y = r.top + r.height / 2 - sy + r.height * 0.04;
      const aw = r.width * 0.72;
      const ah = r.height * 0.74;
      const toStick = fr(x, y, 14, ah * 1.25, "7px", 1);
      const toLetter = fr(x, y, aw, ah, "4px", 0.45);

      await anim(dot, [prev, toStick], { duration: i ? 85 : 280, easing: "cubic-bezier(.5,0,.2,1)" });
      if (!live()) return;
      await anim(dot, [toStick, toLetter], { duration: 85, easing: "ease-out" });
      if (!live()) return;

      anim(
        L[i],
        [
          { opacity: 0, transform: "scale(1.25)", filter: "blur(5px)" },
          { opacity: 1, transform: "scale(1)", filter: "blur(0)" },
        ],
        { duration: 240, easing: "cubic-bezier(.2,.8,.2,1)" }
      );
      keySound();
      prev = toLetter;
    }

    await anim(dot, [prev, { ...prev, opacity: 0 }], { duration: 250 });
    if (!live()) return;
    await wait(HOLD);
    if (!live()) return;

    // 4. Morph: each letter flickers through random glyphs, left -> right
    whoosh(0.6);
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
            keySound(0.25);
            s.style.transform = `translateY(${(Math.random() - 0.5) * 6}px)`;
            await wait(45);
            if (!live()) return;
          }
          s.style.transform = "";
          if (target) {
            s.textContent = target;
            keySound(0.8);
            anim(s, [{ transform: "scale(1.15)" }, { transform: "scale(1)" }], { duration: 180 });
          } else {
            // Extra letters collapse away when TO is shorter than FROM
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

    // 5. Tag line fades in under the word, left aligned to it
    const w = word.getBoundingClientRect();
    sub.style.setProperty("--w", w.width + "px");
    sub.style.textAlign = "left";

    anim(
      sub,
      [
        { opacity: 0, transform: "translate(-50%,8px)" },
        { opacity: 0.95, transform: "translate(-50%,0)" },
      ],
      { duration: 700, easing: "ease-out" }
    );

    // 6. Transition into portfolio
    await wait(2400);
    if (!live()) return;
    finish();
  }, [bounce, boom, finish, isFinished, keySound, loadKeys, whoosh]);

  const startExperience = useCallback(async () => {
    if (hasStarted) return;
    setHasStarted(true);

    const a = getAudioContext();
    if (a && a.state === "suspended") {
      try {
        await a.resume();
      } catch (e) {}
    }

    await loadKeys();
    play();
  }, [getAudioContext, hasStarted, loadKeys, play]);

  // Handle single tap anywhere on screen to unlock audio and trigger intro
  useEffect(() => {
    const a = getAudioContext();
    // If browser already has active audio authorization (e.g. returning visitor with MEI), start automatically
    if (a && a.state === "running") {
      startExperience();
      return;
    }

    const onUserGesture = () => {
      startExperience();
    };

    window.addEventListener("pointerdown", onUserGesture, { once: true });
    window.addEventListener("touchstart", onUserGesture, { once: true });
    window.addEventListener("click", onUserGesture, { once: true });
    window.addEventListener("keydown", onUserGesture, { once: true });

    return () => {
      window.removeEventListener("pointerdown", onUserGesture);
      window.removeEventListener("touchstart", onUserGesture);
      window.removeEventListener("click", onUserGesture);
      window.removeEventListener("keydown", onUserGesture);
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
      }
    };
  }, [getAudioContext, startExperience]);

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
          onClick={startExperience}
          onTouchStart={startExperience}
          className="fixed inset-0 z-[99999] bg-[#05060b] flex flex-col justify-between overflow-hidden select-none cursor-pointer"
        >
          {/* Top Bar with Brand & Skip Button */}
          <div className="absolute top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-auto">
            <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
              JAYAVARDHAN • EST. 2026
            </span>

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

          {/* Kinetic Morph Stage */}
          <div id="stage" ref={stageRef} className="loader-stage pointer-events-none">
            <div id="glow" ref={glowRef} className="loader-glow" />
            <div id="stem" ref={stemRef} className="loader-stem" />
            <div id="dot" ref={dotRef} className="loader-dot" />
            <div id="word" ref={wordRef} className="loader-word" />
            <div id="sub" ref={subRef} className="loader-sub">
              <span>AI</span> <i>Engineer</i>
            </div>
          </div>

          {/* Centered / Bottom Tap-To-Enter Prompt */}
          {!hasStarted && (
            <div className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none">
              <div className="flex flex-col items-center gap-4 mt-40">
                <div className="w-14 h-14 rounded-full border border-white/25 bg-white/[0.08] backdrop-blur-md flex items-center justify-center text-white text-base shadow-[0_0_30px_rgba(190,200,255,0.35)] animate-pulse">
                  ▶
                </div>
                <span className="text-[12px] font-mono tracking-[0.25em] text-neutral-300 uppercase">
                  TAP ANYWHERE TO ENTER
                </span>
              </div>
            </div>
          )}

          {/* Subtle Bottom Meta */}
          <div className="absolute bottom-6 left-6 z-40 hidden md:flex items-center text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase pointer-events-none">
            <span>FULL-STACK & AI SYSTEMS • EDITORIAL ARCHIVE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
