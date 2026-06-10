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
    endDate: 'June 2025',
    position: 'Full Stack Developer',
    companyName: 'Freelance',
    location: 'Philippines',
  },
];

const Experience = () => {
  return (
    <section>
      <h2>Experience</h2>

      <ul>
        {workExperiences.map(
          ({ id, startDate, endDate, position, companyName, location }) => {
            return (
              <li key={id}>
                <p>{position}</p>
                <p>{`${companyName} · ${location}`}</p>
                <p>{`${startDate} - ${endDate}`}</p>
              </li>
            );
          },
        )}
      </ul>
    </section>
  );
};

export default Experience;
