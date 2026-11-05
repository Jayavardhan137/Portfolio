"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring physics for outer ring
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Detect hovered element types
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, input, textarea, [data-cursor-interactive], [role='button']");
      const textCursor = target.closest("[data-cursor-text]");

      if (textCursor) {
        setIsHovered(true);
        setHoverText(textCursor.getAttribute("data-cursor-text"));
      } else if (interactive) {
        setIsHovered(true);
        setHoverText(null);
      } else {
        setIsHovered(false);
        setHoverText(null);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer Smooth Lagging Ring / Halo */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hoverText ? 84 : isHovered ? 52 : 32,
          height: hoverText ? 84 : isHovered ? 52 : 32,
          scale: isClicking ? 0.85 : 1,
          backgroundColor: hoverText
            ? "rgba(255, 255, 255, 0.95)"
            : isHovered
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(255, 255, 255, 0)",
          borderColor: hoverText
            ? "transparent"
            : isHovered
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(255, 255, 255, 0.35)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
        className="rounded-full border flex items-center justify-center backdrop-blur-[1px] transition-colors"
      >
        {hoverText && (
          <span className="text-[10px] font-mono font-bold tracking-wider text-black uppercase">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hoverText ? 0 : isHovered ? 0 : 1,
          opacity: hoverText ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
      />
    </div>
  );
}

