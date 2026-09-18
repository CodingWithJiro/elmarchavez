import { WorkExperience, Certificate } from '@/types/experience';

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 1,
    startDate: 'March 2025',
    endDate: 'June 2026',
    position: 'Full Stack Developer',
    companyName: 'Freelance',
    location: 'Philippines',
    responsibilities: [
      'Managed and reviewed pull requests, approving and merging changes into main and staging branches.',
      'Resolved application issues in Laravel and Livewire by tracing generated markup and debugging.',
      'Improved WCAG accessibility across the Ri2L web application by auditing pages with Axe DevTools.',
      'Established a Laravel development environment with WSL2, Docker, PHP, Composer, Node.js, and Ubuntu.',
    ],
  },
  {
    id: 2,
    startDate: 'June 2026',
    endDate: 'Present',
    position: 'Full Stack Developer',
    companyName: 'CALEC',
    location: 'New York, USA (Remote)',
    responsibilities: [
      'Developed modern Next.js and React applications using JavaScript, TypeScript, and Tailwind CSS.',
      'Implemented client-side routing, state management, and API integration in React-based projects.',
      'Built testing workflows using Vitest, Playwright, React Testing Library, and Mock Service Worker (MSW).',
      'Collaborated on open-source projects using Git, GitHub, pull requests, and code review workflows.',
    ],
  },
];

export const workExperiences: WorkExperience[] =
  WORK_EXPERIENCES.slice(-2).reverse();

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: 'Responsive Web Design',
    institution: 'freeCodeCamp',
    dateReceived: 'Dec 2025',
    urlLink:
      'https://www.freecodecamp.org/certification/codingwithjiro/responsive-web-design-v9',
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
    id: 3,
    title: 'Relational Databases',
    institution: 'freeCodeCamp',
    dateReceived: 'May 2026',
    urlLink:
      'https://www.freecodecamp.org/certification/codingwithjiro/relational-databases-v9',
  },
  {
    id: 4,
    title: 'Front-End Libraries',
    institution: 'freeCodeCamp',
    dateReceived: 'September 2026',
    urlLink:
      'https://www.freecodecamp.org/certification/codingwithjiro/front-end-development-libraries-v9',
  },
];

export const certificates: Certificate[] = CERTIFICATES.slice(-3).reverse();
