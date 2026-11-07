"use client";

import React, { useState } from "react";
import { CinematicLoader } from "@/components/ui/CinematicLoader";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/echo/HeroSection";
import { ScrollExpandMedia } from "@/components/echo/ScrollExpandMedia";
import { MyJourneySection } from "@/components/echo/MyJourneySection";
import { FeaturedProjectsCarousel } from "@/components/echo/FeaturedProjectsCarousel";
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

      <main className="relative min-h-screen bg-[#FAFAFA] text-[#121212] flex flex-col selection:bg-black selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          onOpenContact={() => openContact()}
          onSelectService={(idx) => {
            const services = ["UI/UX", "Web Design", "Landing Page Design", "AI-Powered Applications"];
            openContact(services[idx] || "Landing Page Design");
          }}
        />

        {/* About Section: ScrollExpandMedia Kinetic Canvas */}
        <ScrollExpandMedia onOpenContact={() => openContact()} />

        {/* My Journey Section: Editorial Narrative of B.Tech CSE (AI & ML) Growth */}
        <MyJourneySection />

        {/* Featured Projects Carousel (Curved Liquid View + Modal) */}
        <FeaturedProjectsCarousel />

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
