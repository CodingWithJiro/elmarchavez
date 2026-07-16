import { FiExternalLink } from 'react-icons/fi';
import { workExperiences, certificates } from '@/data/experiences';

const Experience = () => {
  return (
    <section className="border-border/40 bg-card flex shrink-0 flex-col gap-4 rounded-lg border p-4 transition-colors duration-150 ease-in-out min-[488px]:flex-row md:max-w-[clamp(16rem,-12rem+50vw,20rem)] md:flex-col md:gap-8">
      <article>
        <h2 className="mb-3 text-lg font-bold">Experience</h2>

        <ul className="flex flex-col gap-4 md:gap-8">
          {workExperiences.map(
            ({ id, startDate, endDate, position, companyName, location }) => {
              return (
                <li
                  className="before:border-border before:bg-background first:before:bg-foreground after:bg-border/50 hover:before:bg-foreground relative pl-4.5 before:absolute before:top-1 before:left-0 before:h-3 before:w-3 before:rounded-full before:border-2 before:transition-colors before:duration-150 before:ease-in-out after:absolute after:top-4 after:-bottom-6 after:left-1.5 after:w-px last:after:hidden md:pl-6 md:after:-bottom-10"
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
      </article>

      <article>
        <h2 className="mb-3 text-lg font-bold">Certificates</h2>

        <ul className="flex flex-col gap-4">
          {certificates.map(
            ({ id, title, institution, dateReceived, urlLink }) => {
              return (
                <li
                  className="before:border-border before:bg-background first:before:bg-foreground after:bg-border/50 hover:before:bg-foreground relative pl-4.5 before:absolute before:top-1 before:left-0 before:h-3 before:w-3 before:rounded-full before:border-2 before:transition-colors before:duration-150 before:ease-in-out after:absolute after:top-4 after:-bottom-6 after:left-1.5 after:w-px after:transition-colors after:duration-150 after:ease-in-out last:after:hidden md:pl-6"
                  key={id}
                >
                  <a
                    className="group decoration-muted-foreground relative mb-1 inline-block text-[0.85rem] font-semibold decoration-1 underline-offset-4 outline-0 hover:underline focus-visible:underline"
                    href={urlLink}
                    target="_blank"
                    aria-label={`Open ${title} certificate`}
                  >
                    {title}
                    <FiExternalLink className="group-focus-visible:text-foreground text-muted-foreground group-hover:text-foreground absolute top-px -right-5" />
                  </a>
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
      </article>
    </section>
  );
};

export default Experience;
