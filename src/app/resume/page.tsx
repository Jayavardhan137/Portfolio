"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code2,
  BrainCircuit,
  MapPin,
  Mail,
  Phone,
  Terminal,
  Award,
  Eye,
  Check,
  Copy,
  Sparkles,
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
    <div className="min-h-screen bg-[#070709] text-white selection:bg-white selection:text-black">
      {/* Top Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-14 bg-[#070709]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-mono font-bold tracking-wider uppercase hover:bg-neutral-200 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>VIEW RESUME</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Stage */}
      <main className="pt-28 pb-20 px-6 md:px-14 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-12 border-b border-white/10 pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-neutral-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CURRICULUM VITAE // ABOUT ME</span>
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

          {/* Action Buttons: View Resume, Download, Contact */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all shadow-lg hover:shadow-white/10"
            >
              <Eye className="w-4 h-4" />
              <span>VIEW RESUME (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="/resume.pdf"
              download="Jayavardhan_Malamanti_Resume.pdf"
              onMouseEnter={playHover}
              onClick={playClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/[0.03] text-white font-mono text-xs font-bold tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <Link
              href="/contact"
              onMouseEnter={playHover}
              onClick={playClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-transparent text-neutral-300 font-mono text-xs font-bold tracking-widest uppercase hover:text-white hover:border-white transition-all ml-auto"
            >
              <span>GET IN TOUCH</span>
              <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5 font-mono text-xs">
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

        {/* 2-Column Layout: Left (Brief About Me & Details) / Right (Resume PDF Preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Brief About Me & Highlights */}
          <div className="lg:col-span-7 space-y-10">
            {/* Professional Summary */}
            <section>
              <div className="flex items-center gap-2 mb-3 font-mono text-xs text-neutral-400 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>BRIEF ABOUT ME // PROFESSIONAL SUMMARY</span>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] relative">
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-sans mb-4">
                  Second-year B.Tech student at <strong className="text-white">AMET University</strong> with
                  hands-on experience building AI-powered applications, including a{" "}
                  <strong className="text-white">RAG chatbot</strong> and a{" "}
                  <strong className="text-white">study assistant chatbot</strong>. Skilled in Python,
                  C++, and full-stack development with React.js, Node.js, and MongoDB, with working
                  knowledge of LLM fine-tuning (LoRA), Hugging Face, and local model deployment.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Seeking AI, Software Engineer, and Full-Stack Developer internship roles</span>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center gap-2 mb-3 font-mono text-xs text-neutral-400 uppercase tracking-widest">
                <GraduationCap className="w-4 h-4 text-white" />
                <span>EDUCATION</span>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2 font-mono">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                      AMET University
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-sans">
                      B.Tech in Computer Science and Engineering (C.S.E) — 2nd Year
                    </p>
                  </div>
                  <span className="text-xs text-neutral-400 border border-white/10 px-2.5 py-0.5 rounded-full">
                    Aug 2025 – Present
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-sans mt-2">
                  Specializing in AI &amp; Machine Learning, Core Data Structures &amp; Algorithms, and Modern Software Engineering.
                </p>
              </div>
            </section>

            {/* Technical Skills Matrix */}
            <section>
              <div className="flex items-center gap-2 mb-3 font-mono text-xs text-neutral-400 uppercase tracking-widest">
                <Code2 className="w-4 h-4 text-white" />
                <span>TECHNICAL SKILLS</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-neutral-400 block text-[10px] uppercase tracking-wider mb-2">
                    Programming Languages
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "C++"].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-md bg-white/10 text-white font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-neutral-400 block text-[10px] uppercase tracking-wider mb-2">
                    Frontend &amp; Backend Development
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "JavaScript (ES6)",
                      "Tailwind CSS",
                      "HTML5 & CSS3",
                      "Node.js",
                      "REST APIs",
                    ].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-md border border-white/10 bg-white/[0.02] text-neutral-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-neutral-400 block text-[10px] uppercase tracking-wider mb-2">
                    AI / Machine Learning &amp; Databases
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "RAG Pipelines",
                      "LangChain",
                      "LoRA Fine-Tuning",
                      "Hugging Face",
                      "Local Model Deployment",
                      "ChromaDB",
                      "MongoDB",
                      "SQL",
                      "Supabase",
                    ].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-md border border-white/10 bg-white/[0.02] text-neutral-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-neutral-400 block text-[10px] uppercase tracking-wider mb-2">
                    Tools &amp; Core Concepts
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Git & GitHub",
                      "VS Code",
                      "Data Structures & Algorithms",
                      "OOP",
                      "Problem Solving",
                      "Responsive Web Design",
                    ].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-md border border-white/10 bg-white/[0.02] text-neutral-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Key Projects */}
            <section>
              <div className="flex items-center gap-2 mb-3 font-mono text-xs text-neutral-400 uppercase tracking-widest">
                <Briefcase className="w-4 h-4 text-white" />
                <span>KEY PROJECTS</span>
              </div>

              <div className="space-y-4">
                {/* Queue Management System */}
                <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono">
                    <h3 className="text-sm sm:text-base font-bold text-white font-sans flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Queue Management System — Smart Queue SaaS
                    </h3>
                    <div className="flex items-center gap-2 text-[10px]">
                      <a
                        href="https://queue-management-system-vert-iota.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-full bg-white text-black font-bold uppercase hover:bg-neutral-200 transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href="https://github.com/Jayavardhan137/Queue-management-system"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-full border border-white/20 text-neutral-300 uppercase hover:border-white transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                  <ul className="text-xs sm:text-sm text-neutral-300 font-sans space-y-1.5 list-disc list-inside">
                    <li>Built a smart queue management SaaS with QR code token generation, live queue tracking, real-time notifications, and role-based access control.</li>
                    <li>Developed backend logic and REST APIs for adding, serving, and monitoring queue entries.</li>
                    <li>Created a responsive interface for smooth use across devices.</li>
                  </ul>
                </div>

                {/* RAG Chatbot */}
                <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono">
                    <h3 className="text-sm sm:text-base font-bold text-white font-sans flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      RAG Chatbot — Document Q&amp;A
                    </h3>
                    <span className="text-[10px] text-neutral-400 uppercase font-mono">
                      Python • LangChain • Vector DB • LLM
                    </span>
                  </div>
                  <ul className="text-xs sm:text-sm text-neutral-300 font-sans space-y-1.5 list-disc list-inside">
                    <li>Built a Retrieval-Augmented Generation chatbot that answers questions grounded in custom documents rather than relying only on a model&apos;s built-in knowledge.</li>
                    <li>Implemented document ingestion, chunking, embedding, and semantic retrieval pipelines using LangChain.</li>
                    <li>Designed prompts and retrieval logic to produce accurate, context-aware responses.</li>
                  </ul>
                </div>

                {/* Study Assistant Chatbot */}
                <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono">
                    <h3 className="text-sm sm:text-base font-bold text-white font-sans flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      Study Assistant Chatbot
                    </h3>
                    <span className="text-[10px] text-neutral-400 uppercase font-mono">
                      Python • LLM
                    </span>
                  </div>
                  <ul className="text-xs sm:text-sm text-neutral-300 font-sans space-y-1.5 list-disc list-inside">
                    <li>Developed an AI study assistant that helps students understand topics, answer questions, and revise concepts.</li>
                    <li>Integrated a language model with a user-friendly interface for interactive, conversational learning.</li>
                    <li>Focused on clear, helpful responses tailored to student queries.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Additional Experience & Coding Practice */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-white font-bold font-sans text-sm mb-2">
                  <BrainCircuit className="w-4 h-4 text-cyan-400" />
                  <span>Additional Experience</span>
                </div>
                <ul className="text-xs text-neutral-300 font-sans space-y-1.5 list-disc list-inside">
                  <li>Explored fine-tuning of language models using LoRA for efficient, low-resource customization.</li>
                  <li>Experimented with deploying and running AI models locally with Hugging Face.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-white font-bold font-sans text-sm mb-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Coding Practice</span>
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-2">
                  Completed the <strong>30-Day LeetCode Challenge</strong>, solving Data Structures &amp; Algorithms problems to strengthen computational problem-solving.
                </p>
                <a
                  href="https://leetcode.com/u/Aig0bDIRyp"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400 hover:underline"
                >
                  <span>leetcode.com/u/Aig0bDIRyp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </section>
          </div>

          {/* Right Column: Live Embedded PDF Viewer & Quick Actions */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl border border-white/15 bg-white/[0.02] p-4 flex flex-col shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-white" />
                  <span className="font-bold text-white tracking-wider">RESUME PREVIEW</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open PDF in new window"
                    className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="/resume.pdf"
                    download="Jayavardhan_Malamanti_Resume.pdf"
                    title="Download PDF"
                    className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Embedded PDF Canvas / Viewer */}
              <div className="relative w-full h-[620px] rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                <iframe
                  src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                  title="Jayavardhan Malamanti Resume"
                  className="w-full h-full border-0"
                />
              </div>

              {/* Viewer Footer */}
              <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>PDF Document (1 Page)</span>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>Open Full Screen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
