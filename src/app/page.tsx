"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import LegacySection from "@/components/LegacySection";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import PageLoader from "@/components/PageLoader";

const HeroSlider = dynamic(() => import("@/components/HeroSlider"), {
  ssr: false,
});

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <PageLoader onLoadComplete={() => setIsLoaded(true)} />
      <main style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
        <HeroSlider />
        <LegacySection />
        <Reviews />
        <Contact />
      </main>
    </>
  );
}
