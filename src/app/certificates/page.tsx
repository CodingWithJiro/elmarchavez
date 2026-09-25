import Breadcrumb from '@/components/sections/breadcrumb';
import ThemeToggle from '@/components/theme/theme-toggle';
import { CERTIFICATES } from '@/data/experiences';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

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

      <ul className="grid grid-cols-1 gap-y-3">
        {CERTIFICATES.map(
          ({
            id,
            title,
            institution,
            dateReceived,
            urlLink,
            imgUrl,
            description,
          }) => {
            return (
              <li
                className="border-ring/80 focus-within:border-foreground has-hover:border-foreground bg-background text-foreground mx-auto flex max-w-60 flex-col rounded-lg border p-2 transition-colors duration-150 ease-in-out min-[850px]:max-w-70"
                key={id}
              >
                <Image
                  className="border-ring/20 mb-4 border"
                  src={imgUrl}
                  alt={`Elmar Chavez's certificate for ${title}.`}
                  width={1250}
                  height={830}
                  loading="eager"
                />

                <Link
                  className="group mb-1 flex items-center gap-1 outline-0"
                  href={urlLink}
                  target="_blank"
                  aria-label={`See Elmar Chavez's ${title} certificate in new tab`}
                >
                  <h3 className="text-foreground text-sm font-semibold decoration-1 underline-offset-4 transition-colors duration-150 ease-in-out group-hover:underline group-focus-visible:underline">
                    {title}
                  </h3>
                  <FiExternalLink
                    className="text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground relative bottom-px transition-colors duration-150 ease-in-out"
                    size={14}
                  />
                </Link>

                <p className="text-foreground text-[0.75rem] transition-colors duration-150 ease-in-out">
                  {institution}
                </p>
                <p className="text-muted-foreground mb-2 text-[0.70rem] transition-colors duration-150 ease-in-out">
                  Issued {dateReceived}
                </p>
                <p className="text-muted-foreground text-[0.70rem] transition-colors duration-150 ease-in-out">
                  {description}
                </p>
              </li>
            );
          },
        )}
      </ul>
    </main>
  );
}
