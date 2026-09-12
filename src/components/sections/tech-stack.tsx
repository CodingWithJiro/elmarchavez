import { backend, devOps, frontend } from '@/data/tech-stack';
import ViewAllLink from '../ui/view-all-link';
import TechList from './tech-list';

const TechStack = () => {
  return (
    <section className="border-border/40 bg-card flex flex-col gap-3 rounded-lg border p-4 transition-colors duration-150 ease-in-out">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Tech Stack</h2>
        <ViewAllLink href="/tech-stack" />
      </header>
      <TechList category="Frontend" technologies={frontend} />
      <TechList category="Backend" technologies={backend} />
      <TechList category="DevOps" technologies={devOps} />
    </section>
  );
};

export default TechStack;
