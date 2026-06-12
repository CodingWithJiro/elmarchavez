type WorkExperience = {
  id: number;
  startDate: string;
  endDate: string;
  position: string;
  companyName: string;
  location: string;
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

const Experience = () => {
  return (
    <section className="border-border/40 bg-card mb-4 rounded-lg border p-4 transition-colors duration-150 ease-in-out max-w-[20rem]">
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
    </section>
  );
};

export default Experience;
