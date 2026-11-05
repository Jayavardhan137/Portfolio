"use client";

import React, { useState } from "react";
import { X, Send, Check } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

interface FooterContactProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
  onOpenModal?: () => void;
  prefilledService?: string;
}

export function FooterContact({
  isModalOpen = false,
  onCloseModal,
  onOpenModal,
  prefilledService,
}: FooterContactProps) {
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: prefilledService || "Landing Page Design",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const showModal = isModalOpen || internalModalOpen;
  const handleClose = () => {
    if (onCloseModal) onCloseModal();
    setInternalModalOpen(false);
  };
  const handleOpen = () => {
    if (onOpenModal) onOpenModal();
    setInternalModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      handleClose();
      setFormData({ name: "", email: "", service: "Landing Page Design", message: "" });
    }, 2500);
  };

  return (
    <>
      {/* BEGIN: Contact / Let's Talk Footer (ECHO exact style) */}
      <footer
        id="contact"
        data-purpose="footer-section"
        className="w-full bg-[#0D0D0D] text-white pt-20 pb-12 mt-12 select-none"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 flex flex-col items-center">
          {/* Metallic Callout Headline (Frame 20 Exact Match) */}
          <div className="w-full text-center py-6 md:py-10">
            <h2
              onClick={handleOpen}
              className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-black uppercase leading-none tracking-tight footer-metallic-title select-none cursor-pointer font-sans"
            >
              LET'S TALK
            </h2>
          </div>

          {/* Action Button Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8 mb-20 font-mono text-xs">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-400 font-medium tracking-wider uppercase transition text-neutral-300 hover:text-white"
            >
              INSTAGRAM
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-400 font-medium tracking-wider uppercase transition text-neutral-300 hover:text-white"
            >
              TWITTER
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-400 font-medium tracking-wider uppercase transition text-neutral-300 hover:text-white flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-400 font-medium tracking-wider uppercase transition text-neutral-300 hover:text-white flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>

            <button
              type="button"
              onClick={handleOpen}
              className="px-7 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold tracking-wider uppercase transition transform hover:scale-105 shadow-md"
            >
              CONTACT ME
            </button>
          </div>

          {/* Bottom Credits Bar */}
          <div className="w-full pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-widest uppercase text-neutral-500 font-mono font-semibold gap-4">
            <div>PORTFOLIO. ALL RIGHTS RESERVED</div>
            <div>DESIGN BY JAYAVARDHAN MALAMANTI</div>
          </div>
        </div>
      </footer>

      {/* MODAL: Contact Form Modal (ECHO Exact Match) */}
      {showModal && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative text-black"
          >
            <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400 block">
                  START A CONVERSATION
                </span>
                <h3 className="text-xl font-black uppercase text-neutral-900 font-sans">
                  LET'S BUILD SOMETHING
                </h3>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-black hover:text-black"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-left">
              <div>
                <label className="block text-xs font-bold font-mono uppercase tracking-wider text-neutral-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold font-mono uppercase tracking-wider text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold font-mono uppercase tracking-wider text-neutral-700 mb-1">
                  Service Required
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm bg-white"
                >
                  <option value="Landing Page Design">Landing Page Design</option>
                  <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                  <option value="AI-Powered Applications">AI-Powered Applications</option>
                  <option value="RAG-Based AI Solutions">RAG-Based AI Solutions</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Other">Other / Full Project</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold font-mono uppercase tracking-wider text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell me about your project, goals, and timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white rounded-xl text-xs font-mono font-bold tracking-widest uppercase hover:bg-neutral-800 transition flex items-center justify-center gap-2"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {submitted && (
                <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-50 text-emerald-700 text-xs font-mono flex items-center gap-2 mt-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Message dispatched successfully! I will reply within 24 hours.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

