import HeroSlider from '@/components/HeroSlider';
import LegacySection from '@/components/LegacySection';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import About from '@/components/About';

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <LegacySection />
      <About />
      <Reviews />
      <Contact />
    </main>
  );
}