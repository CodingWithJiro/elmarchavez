import About from '@/components/sections/about';
import Hero from '@/components/sections/hero';
import TechStack from '@/components/sections/tech-stack';

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Hero />
      <About />
      <TechStack />
    </div>
  );
}
