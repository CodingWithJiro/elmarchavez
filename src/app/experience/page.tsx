import Breadcrumb from '@/components/sections/breadcrumb';
import ThemeToggle from '@/components/theme/theme-toggle';
import { WORK_EXPERIENCES } from '@/data/experiences';

export default function ExperiencePage() {
  return (
    <main
      id="main"
      className="mx-auto min-h-screen max-w-130 px-4 py-8 md:max-w-4xl"
    >
      <header className="mb-8 flex items-center justify-between">
        <Breadcrumb items={[]} currentLabel="Experience" />
        <ThemeToggle />
      </header>

      <section className="mb-8">
        <h1 className="mb-1 text-lg font-bold md:text-3xl">Experience</h1>
        <h2 className="mb-6 text-sm font-medium md:text-base">
          My professional experience as a software engineer.
        </h2>
      </section>

      <ul className="flex flex-col gap-4 md:gap-8">
        {WORK_EXPERIENCES.map(
          ({
            id,
            startDate,
            endDate,
            position,
            companyName,
            location,
            responsibilities,
          }) => {
            return (
              <li
                className="before:border-border before:bg-background first:before:bg-foreground after:bg-border/50 hover:before:bg-foreground relative pl-4.5 before:absolute before:top-1 before:left-0 before:h-3 before:w-3 before:rounded-full before:border-2 before:transition-colors before:duration-150 before:ease-in-out after:absolute after:top-4 after:-bottom-6 after:left-1.5 after:w-px last:after:hidden md:pl-6 md:after:-bottom-10"
                key={id}
              >
                <p className="mb-1 text-base font-semibold">{position}</p>
                <p className="text-[0.75rem]">{`${companyName} · ${location}`}</p>
                <p className="text-muted-foreground text-[0.75rem]">{`${startDate} - ${endDate}`}</p>

                <ul>
                  {responsibilities.map((responsibility) => {
                    return <li key={responsibility}>{responsibility}</li>;
                  })}
                </ul>
              </li>
            );
          },
        )}
      </ul>
    </main>
  );
}
