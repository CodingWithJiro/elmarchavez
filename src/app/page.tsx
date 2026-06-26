import About from '@/components/sections/about';
import Blog from '@/components/sections/blog';
import Experience from '@/components/sections/experience';
import Footer from '@/components/sections/footer';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import TechStack from '@/components/sections/tech-stack';

export default function Home() {
  return (
    <div className="mx-auto max-w-130 px-4 py-8 md:max-w-4xl">
      <Hero />
      <div className="mb-4 flex flex-col gap-4 md:flex-row">
        <About />
        <TechStack />
      </div>
      <div className="gap 4 mb-4 flex flex-col gap-4 md:flex-row">
        <Experience />
        <Projects />
      </div>
      <Blog />
      <Footer />
    </div>
  );
}
