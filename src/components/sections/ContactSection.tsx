"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import { useAudio } from "@/hooks/useAudio";

export function ContactSection() {
  const { playHover, playClick } = useAudio();
  const [copied, setCopied] = useState(false);
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowQuickForm(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-[90vh] py-28 px-6 sm:px-8 md:px-12 bg-[#050505] text-white flex flex-col justify-between border-t border-white/10 overflow-hidden select-none"
    >
      {/* Background Volumetric Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-20 blur-3xl rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 50%, transparent 80%)",
        }}
      />

      <div className="max-w-7xl w-full mx-auto my-auto flex flex-col items-center text-center gap-10 relative z-10">
        {/* Massive Typographic Headline (Frame 20 Exact Match: "LET'S TALK") */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>INITIATE COLLABORATION</span>
          </div>

          <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[13vw] font-black font-sans uppercase tracking-tight text-white leading-none">
            LET'S TALK
          </h2>

          <p className="text-xs sm:text-sm md:text-base font-mono tracking-widest text-neutral-400 uppercase max-w-xl">
            Have a project or vision? Let's engineer something extraordinary together.
          </p>
        </motion.div>

        {/* Horizontal Social & Action Pills Bar (Frame 20 Exact Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl"
        >
          {/* Email Copy Pill */}
          <button
            type="button"
            onClick={copyEmail}
            onMouseEnter={playHover}
            className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-neutral-300 text-xs font-mono tracking-widest uppercase hover:border-white hover:text-white transition-all flex items-center gap-2"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "COPIED" : "EMAIL"}</span>
          </button>

          {/* Twitter / X Pill */}
          <a
            href={PERSONAL_INFO.twitter}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={playHover}
            onClick={playClick}
            className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-neutral-300 text-xs font-mono tracking-widest uppercase hover:border-white hover:text-white transition-all flex items-center gap-2"
          >
            <TwitterIcon className="w-3.5 h-3.5" />
            <span>X (TWITTER)</span>
          </a>

          {/* LinkedIn Pill */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={playHover}
            onClick={playClick}
            className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-neutral-300 text-xs font-mono tracking-widest uppercase hover:border-white hover:text-white transition-all flex items-center gap-2"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LINKEDIN</span>
          </a>

          {/* GitHub Pill */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={playHover}
            onClick={playClick}
            className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-neutral-300 text-xs font-mono tracking-widest uppercase hover:border-white hover:text-white transition-all flex items-center gap-2"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GITHUB</span>
          </a>

          {/* Direct Contact Page Link Button (Glowing Active Pill from Frame 20) */}
          <MagneticButton
            href="/contact"
            onClick={playClick}
            dataCursorText="OPEN"
            className="px-7 py-3 rounded-full bg-white text-black text-xs font-mono font-black tracking-widest uppercase hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.6)] flex items-center gap-2"
          >
            <span>CONTACT ME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </MagneticButton>

          {/* Quick Inline Drawer Toggle */}
          <button
            type="button"
            onClick={() => {
              playClick();
              setShowQuickForm(!showQuickForm);
            }}
            onMouseEnter={playHover}
            className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-neutral-300 text-xs font-mono tracking-widest uppercase hover:border-white hover:text-white transition-all"
          >
            {showQuickForm ? "CLOSE FORM" : "QUICK MESSAGE ↓"}
          </button>
        </motion.div>

        {/* Quick Inline Message Form Drawer */}
        <AnimatePresence>
          {showQuickForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full max-w-xl mx-auto overflow-hidden mt-4"
            >
              <form
                onSubmit={handleQuickSubmit}
                className="p-6 sm:p-8 rounded-2xl border border-white/20 bg-neutral-900/90 backdrop-blur-xl flex flex-col gap-4 text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-mono text-neutral-400 uppercase">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs font-sans focus:outline-none focus:border-white"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-mono text-neutral-400 uppercase">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs font-sans focus:outline-none focus:border-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-mono text-neutral-400 uppercase">
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Brief outline of your project or inquiry..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs font-sans focus:outline-none focus:border-white resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-white text-black text-xs font-mono font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center gap-2"
                  >
                    <span>SEND DISPATCH</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="/contact"
                    className="text-xs font-mono text-neutral-400 hover:text-white underline"
                  >
                    Open full contact page →
                  </a>
                </div>

                {submitted && (
                  <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Message dispatched successfully!</span>
                  </div>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Frame 20 Exact Footer Bar */}
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between pt-12 border-t border-white/10 text-[10px] sm:text-xs font-mono text-neutral-400">
        <span className="uppercase tracking-widest">
          PORTFOLIO // ALL RIGHTS RESERVED
        </span>
        <span className="uppercase tracking-widest text-white font-semibold">
          DESIGN BY JAYAVARDHAN MALAMANTI
        </span>
      </div>
    </section>
  );
}
