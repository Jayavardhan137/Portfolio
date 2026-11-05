"use client";

import React from "react";
import { motion } from "framer-motion";

export function StarrySwirlTexture({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-black ${className}`}>
      {/* Intricate Woodcut / Etching Swirl Graphic (Frame 03 Inspiration) */}
      <svg
        viewBox="0 0 1440 600"
        className="w-full h-full object-cover opacity-80"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="star1" cx="350" cy="240" r="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#a3a3a3" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="star2" cx="1100" cy="220" r="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#a3a3a3" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="star3" cx="120" cy="280" r="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#737373" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Deep Cosmic Background */}
        <rect width="1440" height="600" fill="#08080a" />

        {/* Concentric Swirl Rings Left Star */}
        <circle cx="350" cy="240" r="120" fill="url(#star1)" />
        {[20, 35, 50, 68, 88, 110, 135].map((r, i) => (
          <circle
            key={`l_${i}`}
            cx="350"
            cy="240"
            r={r}
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeDasharray="4 6 8 4"
            opacity={0.35 + (i % 3) * 0.15}
          />
        ))}

        {/* Concentric Swirl Rings Right Star */}
        <circle cx="1100" cy="220" r="160" fill="url(#star2)" />
        {[25, 45, 65, 90, 120, 150, 185].map((r, i) => (
          <circle
            key={`r_${i}`}
            cx="1100"
            cy="220"
            r={r}
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeDasharray="5 7 10 5"
            opacity={0.4 + (i % 3) * 0.15}
          />
        ))}

        {/* Small Left Star */}
        <circle cx="120" cy="280" r="90" fill="url(#star3)" />
        {[18, 32, 52, 75].map((r, i) => (
          <circle
            key={`s_${i}`}
            cx="120"
            cy="280"
            r={r}
            stroke="#ffffff"
            strokeWidth="1"
            strokeDasharray="3 5"
            opacity="0.5"
          />
        ))}

        {/* Van Gogh-Style Dynamic Flow Waves Across Center */}
        {[
          "M0 180 C300 280, 500 120, 800 240 C1100 360, 1300 160, 1440 220",
          "M0 210 C280 310, 520 150, 820 270 C1120 390, 1320 190, 1440 250",
          "M0 240 C260 340, 540 180, 840 300 C1140 420, 1340 220, 1440 280",
          "M0 270 C240 370, 560 210, 860 330 C1160 450, 1360 250, 1440 310",
          "M0 300 C220 400, 580 240, 880 360 C1180 480, 1380 280, 1440 340",
          "M0 140 C350 220, 480 80, 780 180 C1080 280, 1280 120, 1440 180",
          "M0 100 C380 180, 500 40, 800 140 C1100 240, 1260 80, 1440 140",
          "M0 340 C250 440, 600 280, 900 400 C1200 520, 1350 320, 1440 380",
          "M0 380 C300 480, 650 320, 950 440 C1250 560, 1400 360, 1440 420",
          "M0 420 C320 520, 700 360, 1000 480 C1300 600, 1420 400, 1440 460",
        ].map((d, i) => (
          <path
            key={`wave_${i}`}
            d={d}
            stroke="#ffffff"
            strokeWidth={1 + (i % 2) * 0.6}
            strokeDasharray={i % 2 === 0 ? "8 6 12 4" : "12 8 6 8"}
            opacity={0.25 + (i % 4) * 0.12}
          />
        ))}

        {/* Silhouette Spire on Lower Left (Like Van Gogh Cypress/Spire in frame 03) */}
        <path
          d="M180 600 L220 320 L225 310 L230 320 L270 600 Z"
          fill="#000000"
          stroke="#262626"
          strokeWidth="1.5"
        />
        <path
          d="M130 600 L160 420 L165 410 L170 420 L200 600 Z"
          fill="#000000"
          stroke="#262626"
          strokeWidth="1.5"
        />

        {/* Vignette Gradients */}
        <rect
          width="1440"
          height="120"
          fill="url(#topFade)"
        />
        <rect
          y="480"
          width="1440"
          height="120"
          fill="url(#botFade)"
        />
        <defs>
          <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#050505" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="botFade" x1="0" y1="480" x2="0" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#050505" stopOpacity="0" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
