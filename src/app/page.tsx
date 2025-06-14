import HeroSlider from "@/components/HeroSlider";
import LegacySection from "@/components/LegacySection";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

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
