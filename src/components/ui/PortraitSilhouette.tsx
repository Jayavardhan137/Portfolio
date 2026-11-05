"use client";

import React from "react";
import { motion } from "framer-motion";

export function PortraitSilhouette({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Backlit Glow Halo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-neutral-300/40 rounded-full blur-3xl pointer-events-none" />

      {/* High-Contrast Rim-Lit Portrait Silhouette (Video Frame 02 Exact Style) */}
      <svg
        viewBox="0 0 400 480"
        className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] h-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.18)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle rim-light highlight */}
          <linearGradient id="rimLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#404040" />
            <stop offset="35%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>

          {/* Fade to bottom */}
          <linearGradient id="fadeDown" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#171717" stopOpacity="1" />
            <stop offset="70%" stopColor="#171717" stopOpacity="0.95" />
            <stop offset="92%" stopColor="#171717" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#171717" stopOpacity="0" />
          </linearGradient>

          {/* Hair strands rim light */}
          <linearGradient id="hairRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#525252" />
            <stop offset="50%" stopColor="#737373" />
            <stop offset="100%" stopColor="#525252" />
          </linearGradient>
        </defs>

        {/* Head & Wavy/Messy Hair Silhouette */}
        <g fill="url(#fadeDown)">
          {/* Hair crown with textured locks */}
          <path d="M150 160 C130 145 130 110 145 90 C155 75 170 65 190 60 C210 55 235 60 250 72 C265 82 275 100 275 120 C278 135 272 150 260 160 C258 152 250 145 240 140 C230 135 210 135 195 138 C180 140 165 150 150 160 Z" />

          {/* Stylized wavy strands on top */}
          <path d="M165 78 C158 65 170 52 185 50 C195 48 205 52 215 48 C228 44 240 50 248 60 C258 55 268 65 265 78 C275 88 280 102 278 118 C282 130 280 142 272 152 C268 158 262 162 258 165 C265 152 265 135 260 120 C255 105 245 95 230 90 C215 85 200 88 185 92 C172 95 162 105 155 118 C150 130 152 145 150 160 C142 148 140 132 142 118 C145 102 152 88 165 78 Z" />

          {/* Face Profile / Jaw Silhouette */}
          <path d="M160 155 C160 185 170 215 195 228 C205 233 215 233 225 228 C250 215 260 185 260 155 C255 165 245 172 235 175 C220 178 200 178 185 175 C175 172 165 165 160 155 Z" />

          {/* Neck */}
          <path d="M182 225 L182 265 C182 270 185 275 190 278 L210 278 C215 275 218 270 218 265 L218 225 Z" />

          {/* Collar Shirt & Shoulders (Frame 02 Style) */}
          <path d="M190 275 L155 310 L185 315 L200 285 L215 315 L245 310 L210 275 Z" />

          {/* Broad Shoulders tapering downward with bottom fade */}
          <path d="M155 310 C120 325 85 350 70 395 C62 420 58 450 55 480 L345 480 C342 450 338 420 330 395 C315 350 280 325 245 310 L215 315 L200 340 L185 315 Z" />
        </g>

        {/* Subtle Collar Line Accents */}
        <path
          d="M175 315 L200 360 L225 315"
          stroke="#404040"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M200 360 L200 440"
          stroke="#333333"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Rim Light Accents on Shoulders */}
        <path
          d="M80 410 C92 370 120 340 155 320"
          stroke="url(#hairRim)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M320 410 C308 370 280 340 245 320"
          stroke="url(#hairRim)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
