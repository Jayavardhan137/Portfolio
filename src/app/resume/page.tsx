"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  Eye,
  Check,
  Copy,
  Sparkles,
  Code2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import { useAudio } from "@/hooks/useAudio";

export default function ResumePage() {
  const { playHover, playClick } = useAudio();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    playClick();
    navigator.clipboard.writeText("7780508404");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-white selection:text-black flex flex-col justify-between">
      {/* Top Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-14 bg-[#070709]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            onMouseEnter={playHover}
            onClick={playClick}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO PORTFOLIO</span>
          </Link>

          <Link
            href="/"
            className="font-mono text-sm font-bold tracking-[0.2em] text-white hover:text-neutral-300 transition-colors"
          >
            {PERSONAL_INFO.shortName} •
          </Link>
        </div>
      </header>

      {/* Main Content Stage */}
      <main className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto w-full">
        {/* Hero Section */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-neutral-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ABOUT ME // RESUME</span>
            </div>

            <span className="text-xs font-mono text-neutral-400">
              UPDATED: NOVEMBER 2026
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-sans mb-3">
            JAYAVARDHAN MALAMANTI
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-sans font-light mb-6">
            B.Tech Student <span className="text-neutral-500">•</span> Aspiring AI &amp; Full-Stack Developer
          </p>

          {/* Quick Contact & Info Bar */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-mono text-neutral-300 mb-8">
            <div className="flex items-center gap-1.5 text-neutral-400">
              <MapPin className="w-4 h-4 text-neutral-400" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>

            <button
              type="button"
              onClick={copyPhone}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-neutral-400" />
              <span>+91 7780508404</span>
              {copiedPhone ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3 text-neutral-400" />
              )}
            </button>

            <button
              type="button"
              onClick={copyEmail}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-neutral-400" />
              <span>jayavardhanmalmanti143@gmail.com</span>
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3 text-neutral-400" />
              )}
            </button>
          </div>

          {/* Single Prominent View Resume Button */}
          <div className="mb-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all shadow-xl hover:shadow-white/10 group"
            >
              <Eye className="w-4 h-4" />
              <span>VIEW RESUME</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/5 font-mono text-xs">
            <span className="text-neutral-500 uppercase tracking-widest text-[11px]">PROFILES:</span>
            <a
              href="https://github.com/Jayavardhan137"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white px-3 py-1 rounded-md border border-white/10 bg-white/[0.02]"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jayavardhan-malamanti-000011380"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white px-3 py-1 rounded-md border border-white/10 bg-white/[0.02]"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/Aig0bDIRyp"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white px-3 py-1 rounded-md border border-white/10 bg-white/[0.02]"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>LeetCode</span>
            </a>
            <a
              href="https://x.com/Jayavardhan8141"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white px-3 py-1 rounded-md border border-white/10 bg-white/[0.02]"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
              <span>X (Twitter)</span>
            </a>
          </div>
        </div>

        {/* Brief About Me Section */}
        <section className="pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 mb-4 font-mono text-xs text-neutral-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>BRIEF ABOUT ME</span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] relative space-y-4">
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-sans font-light">
              Second-year B.Tech student in Computer Science and Engineering at{" "}
              <strong className="text-white font-medium">AMET University</strong> with hands-on experience
              building AI-powered applications, including a{" "}
              <strong className="text-white font-medium">RAG chatbot</strong> and a{" "}
              <strong className="text-white font-medium">study assistant chatbot</strong>. Skilled in
              Python, C++, and full-stack development with React.js, Node.js, and MongoDB, with working
              knowledge of LLM fine-tuning (LoRA), Hugging Face, and local model deployment.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Seeking AI, Software Engineer &amp; Full-Stack Developer internship roles</span>
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="py-6 border-t border-white/10 text-center text-xs font-mono text-neutral-500">
        <span>{PERSONAL_INFO.name} • 2026</span>
      </footer>
    </div>
  );
}
