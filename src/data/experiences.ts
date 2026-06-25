import { WorkExperience, Certificate } from '@/types/experience';

export const workExperiences: WorkExperience[] = [
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

export const certificates: Certificate[] = [
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
