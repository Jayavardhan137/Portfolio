"use client";

import React, { useState } from "react";
import { CinematicLoader } from "@/components/ui/CinematicLoader";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <>
      {/* Cinematic Studio Entrance Loader */}
      <CinematicLoader onComplete={() => setLoaderComplete(true)} />

      <main className="relative min-h-screen bg-[#050505] text-[#f5f5f7] flex flex-col selection:bg-white selection:text-black">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills / Technical Discipline */}
        <SkillsSection />

        {/* Selected Work / Projects */}
        <WorkSection />

        {/* Journey / Experience Timeline */}
        <ExperienceSection />

        {/* Services & Offerings */}
        <ServicesSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

