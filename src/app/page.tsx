import About from '@/components/sections/about';
import Blog from '@/components/sections/blog';
import Certificates from '@/components/sections/certificates';
import Experience from '@/components/sections/experience';
import Footer from '@/components/sections/footer';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import TechStack from '@/components/sections/tech-stack';

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-130 px-4 py-8 md:max-w-4xl">
      <Hero />
      <div className="mb-4 flex flex-col gap-4 md:flex-row">
        <About />
        <TechStack />
      </div>
      <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-stretch">
        <div className="flex flex-col gap-4 min-[420px]:flex-row md:w-2/5 md:flex-col md:justify-between">
          <Experience />
          <Certificates />
        </div>
        <Projects />
      </div>
      <Blog />
      <Footer />
    </main>
  );
}
