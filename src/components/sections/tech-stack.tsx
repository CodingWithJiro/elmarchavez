export const FRONTEND: string[] = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
];
export const BACKEND: string[] = ['Node.js', 'Express.js', 'PostgreSQL'];
export const DEVOPS: string[] = ['GitHub Actions', 'Docker'];

const TechStack = () => {
  return (
    <section className="border-border/40 bg-card flex flex-col gap-3 rounded-lg border p-4 transition-colors duration-150 ease-in-out">
      <h2 className="text-lg font-bold">Tech Stack</h2>

      <section>
        <h3 className="mb-1 text-base font-semibold">Frontend</h3>

        <ul className="gap flex flex-wrap gap-x-2 gap-y-1">
          {FRONTEND.map((tech) => {
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
          {BACKEND.map((tech) => {
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
          {DEVOPS.map((tech) => {
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
