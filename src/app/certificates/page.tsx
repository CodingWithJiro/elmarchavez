import Breadcrumb from '@/components/sections/breadcrumb';
import ThemeToggle from '@/components/theme/theme-toggle';
import { CERTIFICATES } from '@/data/experiences';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <main
      id="main"
      className="mx-auto min-h-screen max-w-130 px-4 py-8 md:max-w-4xl"
    >
      <header className="mb-8 flex items-center justify-between">
        <Breadcrumb items={[]} currentLabel="Certificates" />
        <ThemeToggle />
      </header>

      <section className="mb-8">
        <h1 className="mb-1 text-lg font-bold md:text-3xl">Certificates</h1>
        <h2 className="mb-6 text-sm font-medium md:text-base">
          List of all my professional certifications to date.
        </h2>
      </section>

      <ul>
        {CERTIFICATES.map(
          ({ id, title, institution, dateReceived, urlLink }) => {
            return (
              <li
                className="before:border-border before:bg-background first:before:bg-foreground after:bg-border/50 hover:before:bg-foreground relative pl-4.5 before:absolute before:top-1 before:left-0 before:h-3 before:w-3 before:rounded-full before:border-2 before:transition-colors before:duration-150 before:ease-in-out after:absolute after:top-4 after:-bottom-6 after:left-1.5 after:w-px after:transition-colors after:duration-150 after:ease-in-out last:after:hidden md:pl-6"
                key={id}
              >
                <Link
                  className="group decoration-muted-foreground relative mb-1 inline-block text-[0.85rem] font-semibold decoration-1 underline-offset-4 outline-0 hover:underline focus-visible:underline"
                  href={urlLink}
                  target="_blank"
                  aria-label={`Open ${title} certificate`}
                >
                  {title}
                  <FiExternalLink className="group-focus-visible:text-foreground text-muted-foreground group-hover:text-foreground absolute top-px -right-5" />
                </Link>
                <p className="flex flex-col text-[0.75rem]">
                  <span>{institution}</span>
                  <span className="text-muted-foreground text-[0.70rem]">
                    {`Issued ${dateReceived}`}
                  </span>
                </p>
              </li>
            );
          },
        )}
      </ul>
    </main>
  );
}
