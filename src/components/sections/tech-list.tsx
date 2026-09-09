interface TechListProps {
  category: string;
  technologies: string[];
}

export default function TechList({ category, technologies }: TechListProps) {
  return (
    <section>
      <h3 className="mb-1 text-base font-semibold">{category}</h3>

      <ul className="gap flex flex-wrap gap-2">
        {technologies.map((tech) => {
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
  );
}
