"use client";

import dynamic from "next/dynamic";
import LegacySection from "@/components/LegacySection";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

const HeroSlider = dynamic(() => import("@/components/HeroSlider"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <LegacySection />
      <Reviews />
      <Contact />
    </main>
  );
}
