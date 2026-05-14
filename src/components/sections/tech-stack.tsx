const FRONTEND: string[] = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
];
const BACKEND: string[] = ['Node.js', 'Express', 'PostgreSQL'];

const TechStack = () => {
  return (
    <section>
      <h2>TechStack</h2>

      <div>
        <p>Frontend</p>

        <ul>
          {FRONTEND.map((tech) => {
            return <li key={tech}>{tech}</li>;
          })}
        </ul>
      </div>

      <div>
        <p>Backend</p>

        <ul>
          {BACKEND.map((tech) => {
            return <li key={tech}>{tech}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
