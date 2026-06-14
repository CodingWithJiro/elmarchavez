import { FiExternalLink } from 'react-icons/fi';

type WorkExperience = {
  id: number;
  startDate: string;
  endDate: string;
  position: string;
  companyName: string;
  location: string;
};

type Certificate = {
  id: number;
  title: string;
  institution: string;
  dateReceived: string;
  urlLink: string;
};

const workExperiences: WorkExperience[] = [
  {
    id: 3,
    startDate: 'June 2026',
    endDate: 'Present',
    position: 'Full Stack Developer',
    companyName: 'CALEC',
    location: 'New York, USA (Remote)',
  },
  {
    id: 2,
    startDate: 'June 2026',
    endDate: 'Present',
    position: 'Front End Developer',
    companyName: 'KeelWorks',
    location: 'Washington, USA (Remote)',
  },
  {
    id: 1,
    startDate: 'March 2025',
    endDate: 'June 2026',
    position: 'Full Stack Developer',
    companyName: 'Freelance',
    location: 'Philippines',
  },
];

const certificates: Certificate[] = [
  {
    id: 3,
    title: 'Relational Databases',
    institution: 'freeCodeCamp',
    dateReceived: 'May 2026',
    urlLink:
      'https://www.freecodecamp.org/certification/codingwithjiro/relational-databases-v9',
  },
  {
    id: 2,
    title: 'JavaScript',
    institution: 'freeCodeCamp',
    dateReceived: 'Dec 2025',
    urlLink:
      'https://www.freecodecamp.org/certification/codingwithjiro/javascript-v9',
  },
  {
    id: 1,
    title: 'Responsive Web Design',
    institution: 'freeCodeCamp',
    dateReceived: 'Dec 2025',
    urlLink:
      'https://www.freecodecamp.org/certification/codingwithjiro/responsive-web-design-v9',
  },
];

const Experience = () => {
  return (
    <section className="border-border/40 bg-card flex shrink-0 flex-col gap-6 rounded-lg border p-4 transition-colors duration-150 ease-in-out min-[488px]:flex-row md:max-w-[clamp(16rem,-12rem+50vw,20rem)] md:flex-col">
      <article className="flex-1">
        <h2 className="mb-3 text-lg font-bold">Experience</h2>

        <ul className="flex flex-col gap-4">
          {workExperiences.map(
            ({ id, startDate, endDate, position, companyName, location }) => {
              return (
                <li
                  className="before:border-border before:bg-background first:before:bg-foreground after:bg-border/50 hover:before:bg-foreground relative pl-6 before:absolute before:top-1 before:left-0 before:h-3 before:w-3 before:rounded-full before:border-2 before:transition-colors before:duration-150 before:ease-in-out after:absolute after:top-4 after:-bottom-4 after:left-1.5 after:w-px last:after:hidden"
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

      <article className="flex-1">
        <h2 className="mb-3 text-lg font-bold">Certificates</h2>

        <ul className="flex flex-col gap-3">
          {certificates.map(
            ({ id, title, institution, dateReceived, urlLink }) => {
              return (
                <li
                  className="before:border-border before:bg-background first:before:bg-foreground after:bg-border/50 hover:before:bg-foreground relative pl-6 before:absolute before:top-1 before:left-0 before:h-3 before:w-3 before:rounded-full before:border-2 before:transition-colors before:duration-150 before:ease-in-out after:absolute after:top-4 after:-bottom-4 after:left-1.5 after:w-px after:transition-colors after:duration-150 after:ease-in-out last:after:hidden"
                  key={id}
                >
                  <p className="focus-within:underline-red-500 decoration-muted-foreground relative mb-1 inline-block text-[0.85rem] font-semibold decoration-1 underline-offset-4 focus-within:underline">
                    {title}
                    <a
                      className="text-muted-foreground hover:text-foreground focus-visible:text-foreground"
                      href={urlLink}
                      target="_blank"
                    >
                      <FiExternalLink className="absolute top-px -right-5" />
                    </a>
                  </p>
                  <p className="text-[0.75rem]">
                    {institution}
                    {' · '}
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
