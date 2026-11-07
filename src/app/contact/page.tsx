"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { PERSONAL_INFO, SERVICES } from "@/data/portfolioData";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import { useAudio } from "@/hooks/useAudio";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "Full-Stack Web Development";

  const { playHover, playClick } = useAudio();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: preselectedService,
    timeline: "1-2 Months",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (searchParams.get("service")) {
      setFormData((prev) => ({
        ...prev,
        service: searchParams.get("service") || prev.service,
      }));
    }
  }, [searchParams]);

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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        service: "Full-Stack Web Development",
        timeline: "1-2 Months",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 7000);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f5f7] flex flex-col justify-between selection:bg-white selection:text-black overflow-x-hidden">
      {/* Top Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 sm:px-8 md:px-12 bg-[#050505]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/#home"
            onMouseEnter={playHover}
            onClick={() => {
              playClick();
              try {
                sessionStorage.setItem("portfolio_loader_shown", "true");
              } catch (e) {}
            }}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>RETURN TO PORTFOLIO</span>
          </a>

          <a
            href="/#home"
            onClick={() => {
              try {
                sessionStorage.setItem("portfolio_loader_shown", "true");
              } catch (e) {}
            }}
            className="font-mono text-sm font-bold tracking-[0.2em] text-white"
          >
            {PERSONAL_INFO.shortName} •
          </a>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono tracking-wider text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE '26</span>
          </div>
        </div>
      </header>

      {/* Main Contact Container */}
      <main className="max-w-7xl w-full mx-auto px-6 sm:px-8 md:px-12 pt-36 pb-24 relative z-10 flex flex-col gap-16 md:gap-24">
        {/* Massive Editorial Header */}
        <div className="flex flex-col gap-6 max-w-5xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-neutral-400 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>DIRECT ENGAGEMENT // CONTACT PORTAL</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-sans uppercase tracking-tight text-white leading-[0.92]">
            LET'S BUILD{" "}
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)] hover:text-white transition-colors duration-500">
              SOMETHING
            </span>
            <br />
            EXTRAORDINARY.
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-mono tracking-wider text-neutral-300 uppercase max-w-2xl leading-relaxed">
            Have an idea? Let's turn it into something real. Whether discussing full-stack architecture, RAG pipelines, or bespoke web design — reach out below.
          </p>
        </div>

        {/* Two-Column Layout: Form & Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Comprehensive Contact Form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase">
                TRANSMIT PROJECT BRIEF
              </span>
              <span className="text-[11px] font-mono text-neutral-500">
                RESPONSE TIME: &lt; 24 HOURS
              </span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-mono tracking-wider text-neutral-300 uppercase"
                  >
                    YOUR NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-neutral-500 text-sm font-sans focus:outline-none focus:border-white focus:bg-white/[0.08] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-mono tracking-wider text-neutral-300 uppercase"
                  >
                    YOUR EMAIL *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="elena@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-neutral-500 text-sm font-sans focus:outline-none focus:border-white focus:bg-white/[0.08] transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-service"
                    className="text-xs font-mono tracking-wider text-neutral-300 uppercase"
                  >
                    DOMAIN / SERVICE
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/15 text-white text-sm font-sans focus:outline-none focus:border-white transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.number} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Exploration">
                      General Exploration / Mentorship
                    </option>
                  </select>
                </div>

                {/* Target Timeline */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-timeline"
                    className="text-xs font-mono tracking-wider text-neutral-300 uppercase"
                  >
                    EXPECTED TIMELINE
                  </label>
                  <select
                    id="contact-timeline"
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0c] border border-white/15 text-white text-sm font-sans focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Immediate / Urgent">Immediate / Urgent (&lt; 2 Weeks)</option>
                    <option value="1-2 Months">1 — 2 Months</option>
                    <option value="3+ Months">3+ Months / Ongoing</option>
                    <option value="Flexible">Flexible Exploration</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-mono tracking-wider text-neutral-300 uppercase"
                >
                  PROJECT DETAILS / BRIEF *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Outline your project scope, problems you want to solve, and goals..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-neutral-500 text-sm font-sans focus:outline-none focus:border-white focus:bg-white/[0.08] transition-colors resize-none"
                />
              </div>

              {/* Submit & NDA Guarantee */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <MagneticButton
                  onClick={() => {}}
                  className="px-8 py-3.5 rounded-full bg-white text-black font-mono text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.4)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>TRANSMIT DISPATCH</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </MagneticButton>

                <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-neutral-300" />
                  <span>CONFIDENTIAL • DIRECT RESPONSE</span>
                </div>
              </div>

              {/* Confirmation Toast */}
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
                      Message received! Thank you, Jayavardhan will review your brief and reply within 24 hours.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Right Column: Direct Info & Social Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 sm:p-8 rounded-2xl border border-white/15 bg-white/[0.02] flex flex-col gap-4">
              <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                DIRECT INBOX
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-bold font-mono text-white hover:underline break-all"
              >
                {PERSONAL_INFO.email}
              </a>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  onMouseEnter={playHover}
                  className="px-4 py-2 rounded-full bg-white text-black text-xs font-mono font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors flex items-center gap-2 shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onMouseEnter={playHover}
                  className="px-4 py-2 rounded-full border border-white/20 text-white text-xs font-mono tracking-widest uppercase hover:border-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>MAIL CLIENT</span>
                </a>
              </div>
            </div>

            {/* Location & Timezone Details */}
            <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-4 font-mono text-xs">
              <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
                STUDIO LOCATION
              </span>

              <div className="flex items-start gap-3 text-neutral-300">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">
                    Hyderabad, India
                  </span>
                  <span className="text-neutral-400 text-[11px]">
                    Available for Remote Engagements Worldwide
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-neutral-300 pt-2 border-t border-white/10">
                <Clock className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block">
                    IST (UTC +5:30)
                  </span>
                  <span className="text-neutral-400 text-[11px]">
                    Standard Operating Window: 09:00 — 21:00 IST
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels (Frame 20 Style) */}
            <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col gap-4">
              <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
                NETWORK PROFILES
              </span>

              <div className="flex flex-col gap-3 font-mono text-xs">
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHover}
                  className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <TwitterIcon className="w-4 h-4 text-neutral-300 group-hover:text-white" />
                    <span>X (TWITTER) // @Jayavardhan8141</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHover}
                  className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-neutral-300 group-hover:text-white" />
                    <span>LINKEDIN // Jayavardhan Malamanti</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHover}
                  className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-neutral-300 group-hover:text-white" />
                    <span>GITHUB // @Jayavardhan137</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Frame 20 Exact Footer */}
      <footer className="max-w-7xl w-full mx-auto px-6 sm:px-8 md:px-12 py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs font-mono text-neutral-400">
        <span className="uppercase tracking-widest">
          PORTFOLIO // ALL RIGHTS RESERVED
        </span>
        <span className="uppercase tracking-widest text-white font-semibold">
          DESIGN BY JAYAVARDHAN MALAMANTI
        </span>
      </footer>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050505] text-white p-12 font-mono">LOADING PORTAL...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}

