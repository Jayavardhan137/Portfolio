"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useAudio } from "@/hooks/useAudio";

export function ContactSection() {
  const { playHover, playClick } = useAudio();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full-Stack Web Development",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setIsSubmitting(true);

    // Simulate immediate smooth submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        service: "Full-Stack Web Development",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 md:py-36 px-6 sm:px-8 md:px-12 bg-[#050505] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background Volumetric Spotlight */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none opacity-20 blur-3xl rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 50%, transparent 80%)",
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24 relative z-10">
        {/* Huge Dramatic Typography (Video Frame_15 Inspiration) */}
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>06 // INITIATE DIALOGUE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-sans uppercase tracking-tighter leading-[0.92] text-white max-w-6xl">
            LET'S BUILD{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)] hover:text-white transition-colors duration-500">
              SOMETHING
            </span>
            <br />
            EXTRAORDINARY.
          </h2>

          <p className="text-sm sm:text-base md:text-lg font-mono tracking-widest text-neutral-300 uppercase max-w-xl">
            Have an idea? Let's turn it into something real.
          </p>

          {/* Direct Email Pill Action */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <MagneticButton
              onClick={copyEmail}
              dataCursorText="COPY"
              className="px-6 py-3.5 rounded-full bg-white text-black font-mono text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-all flex items-center gap-2.5 shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>EMAIL COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY: {PERSONAL_INFO.email}</span>
                </>
              )}
            </MagneticButton>

            <MagneticButton
              href={`mailto:${PERSONAL_INFO.email}`}
              dataCursorText="MAIL"
              className="px-6 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-mono text-xs font-bold tracking-[0.2em] uppercase hover:border-white/50 hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>OPEN DIRECT EMAIL</span>
            </MagneticButton>
          </div>
        </div>

        {/* Form & Connect Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 border-t border-white/10">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase">
              TRANSMIT A MESSAGE
            </span>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono tracking-wider text-neutral-300 uppercase"
                  >
                    YOUR NAME *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alexander Vance"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-neutral-400 text-sm font-sans focus:outline-none focus:border-white focus:bg-white/[0.08] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono tracking-wider text-neutral-300 uppercase"
                  >
                    YOUR EMAIL *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alexander@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-neutral-400 text-sm font-sans focus:outline-none focus:border-white focus:bg-white/[0.08] transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="service"
                  className="text-xs font-mono tracking-wider text-neutral-300 uppercase"
                >
                  PROJECT DOMAIN / SERVICE
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/15 text-white text-sm font-sans focus:outline-none focus:border-white transition-colors"
                >
                  <option value="Full-Stack Web Development">
                    Full-Stack Web Development
                  </option>
                  <option value="AI-Powered Applications">
                    AI-Powered Applications
                  </option>
                  <option value="RAG-Based AI Solutions">
                    RAG-Based AI Solutions
                  </option>
                  <option value="Business Website Development">
                    Business Website Development
                  </option>
                  <option value="Workflow Automation">
                    Workflow Automation
                  </option>
                  <option value="Modern UI/UX Development">
                    Modern UI/UX Development
                  </option>
                  <option value="Other Exploration">Other Exploration</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono tracking-wider text-neutral-300 uppercase"
                >
                  PROJECT DETAILS / BRIEF *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your vision, requirements, or goals..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-neutral-400 text-sm font-sans focus:outline-none focus:border-white focus:bg-white/[0.08] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={playHover}
                  className="px-8 py-3.5 rounded-full bg-white text-black font-mono text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>TRANSMIT DISPATCH</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <span className="text-[11px] font-mono text-neutral-400">
                  CONFIDENTIAL • DIRECT RESPONSE
                </span>
              </div>

              {/* Success Notification */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono flex items-center gap-3"
                  >
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>
                      Message received! Thank you. I will review and respond shortly.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Right: Direct Information & Social Pills (frame_15 style) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase">
                COORDINATES & CHANNELS
              </span>

              <div className="flex flex-col gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col gap-1">
                  <span className="text-neutral-400 uppercase">LOCATION</span>
                  <span className="text-white font-bold">
                    Hyderabad, India • Available Worldwide
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col gap-1">
                  <span className="text-neutral-400 uppercase">OFFICIAL EMAIL</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-white hover:underline font-bold"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col gap-1">
                  <span className="text-neutral-400 uppercase">STATUS</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    {PERSONAL_INFO.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Pills Bar (frame_15 recreation) */}
            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <span className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase">
                NETWORKS
              </span>

              <div className="flex flex-wrap gap-3">
                <MagneticButton
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  dataCursorText="LINKEDIN"
                  className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-mono tracking-widest uppercase hover:border-white hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </MagneticButton>

                <MagneticButton
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  dataCursorText="GITHUB"
                  className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-mono tracking-widest uppercase hover:border-white hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
