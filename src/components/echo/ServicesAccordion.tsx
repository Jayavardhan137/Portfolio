"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/portfolioData";

interface ServicesAccordionProps {
  onInquire?: (serviceName: string) => void;
}

export function ServicesAccordion({ onInquire }: ServicesAccordionProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(2); // Item 3 active by default (Frame 14)

  const toggle = (idx: number) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <section
      id="services"
      data-purpose="services-section"
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-20 bg-[#FAFAFA]"
    >
      {/* Centered Header (ECHO index.html exact) */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 mb-4 font-sans">
          THE SERVICES WE PROVIDE
        </h2>
        <p className="text-xs uppercase font-medium leading-relaxed tracking-wider text-neutral-500 font-mono">
          CREATING VISUALLY APPEALING AND FUNCTIONAL WEBSITES TAILORED TO THE CLIENT'S NEEDS AND GOALS. PROVIDING A CONSISTENT USER EXPERIENCE ACROSS PLATFORMS.
        </p>
      </div>

      {/* Service Pill Rows Accordion */}
      <div className="max-w-4xl mx-auto flex flex-col space-y-3.5">
        {SERVICES.map((srv, idx) => {
          const isOpen = activeIdx === idx;

          return (
            <div
              key={srv.number}
              onClick={() => toggle(idx)}
              className={`w-full flex flex-col px-6 py-4 rounded-3xl transition-all cursor-pointer ${
                isOpen
                  ? "bg-black text-white shadow-xl transform scale-[1.01]"
                  : "bg-white border border-neutral-300 text-neutral-900 hover:border-black"
              }`}
            >
              {/* Header Row */}
              <div className="flex items-center justify-between">
                <span
                  className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-mono font-medium ${
                    isOpen
                      ? "border-neutral-700 text-neutral-300"
                      : "border-neutral-300 text-neutral-700"
                  }`}
                >
                  {idx + 1}
                </span>

                <span
                  className={`text-xs md:text-sm font-bold tracking-widest uppercase font-mono ${
                    isOpen ? "text-white" : "text-neutral-800"
                  }`}
                >
                  {srv.title}
                </span>

                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform ${
                    isOpen
                      ? "border-neutral-700 text-white rotate-180"
                      : "border-neutral-300 text-neutral-700"
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Drawer Content */}
              {isOpen && (
                <div className="mt-4 pt-3 border-t border-neutral-800 text-xs animate-in fade-in duration-200">
                  <p className="text-neutral-300 leading-relaxed max-w-2xl mb-4 font-sans text-xs sm:text-sm">
                    {srv.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-neutral-900">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase">
                      DELIVERABLES: {srv.deliverables.join(", ")}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onInquire) {
                          onInquire(srv.title);
                        } else {
                          window.location.href = `/contact?service=${encodeURIComponent(srv.title)}`;
                        }
                      }}
                      className="text-xs font-bold underline text-white hover:text-neutral-300 uppercase font-mono flex items-center gap-1 self-start sm:self-auto"
                    >
                      <span>INQUIRE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

