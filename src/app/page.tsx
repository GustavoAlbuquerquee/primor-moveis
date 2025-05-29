import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
// O Header e Footer já devem estar no seu src/app/layout.tsx

export default function HomePage() {
  return (
    <>
      {/* O Header é renderizado pelo layout.tsx */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Reviews />
        <Contact />
      </main>
      {/* O Footer é renderizado pelo layout.tsx */}
    </>
  );
}