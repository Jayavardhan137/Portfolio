"use client";

import React, { useState } from "react";
import { CinematicLoader } from "@/components/ui/CinematicLoader";
import { Navbar } from "@/components/navigation/Navbar";
import { PendulumHero } from "@/components/echo/PendulumHero";
import { ScrollExpandMedia } from "@/components/echo/ScrollExpandMedia";
import { ExperienceSpatial } from "@/components/echo/ExperienceSpatial";
import { FeaturedProjectsCarousel } from "@/components/echo/FeaturedProjectsCarousel";
import { WorksWheelDrum } from "@/components/echo/WorksWheelDrum";
import { ServicesAccordion } from "@/components/echo/ServicesAccordion";
import { FooterContact } from "@/components/echo/FooterContact";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState("Landing Page Design");

  const openContact = (service?: string) => {
    if (service) setPrefilledService(service);
    setContactModalOpen(true);
  };

  return (
    <>
      {/* Orbital ECHO Preloader */}
      <CinematicLoader />

      <main className="relative min-h-screen bg-[#050507] text-white flex flex-col selection:bg-white selection:text-black">
        {/* Navigation Bar */}
        <Navbar />

        {/* Cinematic Kinetic Pendulum Hero Section (ADITHYA Reference Video Exact Architecture) */}
        <PendulumHero />

        {/* About Section: ScrollExpandMedia Kinetic Canvas */}
        <ScrollExpandMedia onOpenContact={() => openContact()} />

        {/* Experience Section: Where I've Been Horizontal Spatial Canvas */}
        <ExperienceSpatial />

        {/* Featured Projects Carousel (Curved Liquid View + Modal) */}
        <FeaturedProjectsCarousel />

        {/* Landing Pages Section: WorksWheel 3D Drum Reel */}
        <WorksWheelDrum />

        {/* The Services We Provide Accordion */}
        <ServicesAccordion onInquire={(service) => openContact(service)} />

        {/* Footer: Let's Talk & Interactive Contact Modal */}
        <FooterContact
          isModalOpen={contactModalOpen}
          onCloseModal={() => setContactModalOpen(false)}
          onOpenModal={() => setContactModalOpen(true)}
          prefilledService={prefilledService}
        />
      </main>
    </>
  );
}
