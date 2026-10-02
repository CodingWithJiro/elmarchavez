import { certificates } from '@/data/certificates';
import { FiExternalLink } from 'react-icons/fi';
import ViewAllLink from '../ui/view-all-link';
import Link from 'next/link';

export default function Certificates() {
  return (
    <section className="border-border/40 bg-card rounded-lg border p-4 transition-colors duration-150 ease-in-out">
      <header className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold">Certificates</h2>
        <ViewAllLink href="/certificates" />
      </header>

      <ul className="mx-auto flex w-fit flex-col gap-4 md:w-auto">
        {certificates.map(
          ({ id, title, institution, dateReceived, urlLink }) => {
            return (
              <li
                className="before:border-border before:bg-background first:before:bg-foreground after:bg-border/50 hover:before:bg-foreground relative pl-4.5 before:absolute before:top-1 before:left-0 before:h-3 before:w-3 before:rounded-full before:border-2 before:transition-colors before:duration-150 before:ease-in-out after:absolute after:top-4 after:-bottom-6 after:left-1.5 after:w-px after:transition-colors after:duration-150 after:ease-in-out last:after:hidden md:pl-6"
                key={id}
              >
                <Link
                  className="group decoration-muted-foreground mb-1 flex items-center gap-1 text-[0.85rem] font-semibold decoration-1 underline-offset-4 outline-0 hover:underline focus-visible:underline"
                  href={urlLink}
                  target="_blank"
                  aria-label={`Open ${title} certificate`}
                >
                  {title}
                  <FiExternalLink className="group-focus-visible:text-foreground text-muted-foreground group-hover:text-foreground relative bottom-px" />
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
    </section>
  );
}
