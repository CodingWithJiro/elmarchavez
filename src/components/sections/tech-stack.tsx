import { backend, devOps, frontend } from '@/data/tech-stack';
import ViewAllLink from '../ui/view-all-link';

const TechStack = () => {
  return (
    <section className="border-border/40 bg-card flex flex-col gap-3 rounded-lg border p-4 transition-colors duration-150 ease-in-out">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Tech Stack</h2>
        <ViewAllLink href="/tech-stack" />
      </header>

      <section>
        <h3 className="mb-1 text-base font-semibold">Frontend</h3>

        <ul className="gap flex flex-wrap gap-x-2 gap-y-1">
          {frontend.map((tech) => {
            return (
              <li
                className="bg-muted/40 border-ring/20 rounded-sm border px-2 py-1.5 text-[0.85rem]"
                key={tech}
              >
                {tech}
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h3 className="mb-1 text-base font-semibold">Backend</h3>

        <ul className="gap flex flex-wrap gap-x-2 gap-y-1">
          {backend.map((tech) => {
            return (
              <li
                className="bg-muted/40 border-ring/20 rounded-sm border px-2 py-1 text-[0.85rem]"
                key={tech}
              >
                {tech}
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h3 className="mb-1 text-base font-semibold">DevOps</h3>

        <ul className="gap flex flex-wrap gap-x-2 gap-y-1">
          {devOps.map((tech) => {
            return (
              <li
                className="bg-muted/40 border-ring/20 rounded-sm border px-2 py-1 text-[0.85rem]"
                key={tech}
              >
                {tech}
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default TechStack;
