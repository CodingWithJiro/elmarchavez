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
              <li className="pl-4.5 md:pl-6" key={id}>
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
