import About from '@/components/sections/about';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import TechStack from '@/components/sections/tech-stack';

export default function Home() {
  return (
    <div className="mx-auto max-w-130 px-4 py-8 md:max-w-4xl">
      <Hero />
      <div className="flex flex-col gap-4 md:flex-row">
        <About />
        <TechStack />
      </div>
      <Projects />
    </div>
  );
}
