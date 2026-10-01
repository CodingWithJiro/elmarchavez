import { workExperiences } from '@/data/experiences';
import ViewAllLink from '../ui/view-all-link';

const Experience = () => {
  return (
    <section className="border-border/40 bg-card rounded-lg border p-4 transition-colors duration-150 ease-in-out">
      <header className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold">Experience</h2>
        <ViewAllLink href="/experience" />
      </header>

      <ul className="mx-auto flex w-fit flex-col gap-4 md:w-auto md:gap-6">
        {workExperiences.map(
          ({ id, startDate, endDate, position, companyName, location }) => {
            return (
              <li
                className="before:border-border before:bg-background first:before:bg-foreground after:bg-border/50 hover:before:bg-foreground relative pl-4.5 before:absolute before:top-1 before:left-0 before:h-3 before:w-3 before:rounded-full before:border-2 before:transition-colors before:duration-150 before:ease-in-out after:absolute after:top-4 after:-bottom-6 after:left-1.5 after:w-px last:after:hidden md:pl-6 md:after:-bottom-8"
                key={id}
              >
                <p className="mb-1 text-base font-semibold">{position}</p>
                <p className="text-[0.75rem]">{`${companyName} · ${location}`}</p>
                <p className="text-muted-foreground text-[0.75rem]">{`${startDate} - ${endDate}`}</p>
              </li>
            );
          },
        )}
      </ul>
    </section>
  );
};

export default Experience;
