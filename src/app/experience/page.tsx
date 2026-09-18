import Breadcrumb from '@/components/sections/breadcrumb';
import ThemeToggle from '@/components/theme/theme-toggle';
import { WORK_EXPERIENCES } from '@/data/experiences';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

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

      <ul className="before:bg-border/50 relative mx-auto flex max-w-125 flex-col gap-4 before:absolute before:top-4 before:bottom-4 before:left-1 before:w-px md:gap-8">
        {WORK_EXPERIENCES.slice()
          .reverse()
          .map(
            (
              {
                id,
                startDate,
                endDate,
                position,
                companyName,
                companyUrl,
                location,
                responsibilities,
              },
              index,
            ) => {
              return (
                <li className="group relative pl-5" key={id}>
                  <span
                    className={`border-border group-hover:bg-foreground absolute top-3 -left-1 size-4 rounded-full border-2 transition-colors duration-150 ease-in-out ${index === 0 ? 'bg-foreground' : 'bg-background'}`}
                    aria-hidden="true"
                  />

                  <article className="border-border/40 bg-card group-hover:border-border rounded-lg border p-4 transition-colors duration-150">
                    <h3 className="mb-2 text-base font-semibold">{position}</h3>
                    <div className="mb-1 flex items-center gap-1 text-sm">
                      <Link
                        className="flex items-center gap-0.5 underline-offset-4 hover:underline"
                        href={companyUrl}
                      >
                        <span className="">{companyName}</span>
                        <FiExternalLink className="text-foreground relative -top-0.5 size-4" />
                      </Link>
                      <span>·</span>
                      <p className="text-[0.75rem] font-light">{location}</p>
                    </div>
                    <p className="text-muted-foreground mb-4 text-[0.75rem]">{`${startDate} - ${endDate}`}</p>

                    <ul className="flex list-disc flex-col gap-2 text-[0.75rem] leading-4.5 tracking-wide">
                      {responsibilities.map((responsibility) => {
                        return (
                          <li className="ml-4" key={responsibility}>
                            {responsibility}
                          </li>
                        );
                      })}
                    </ul>
                  </article>
                </li>
              );
            },
          )}
      </ul>
    </main>
  );
}
