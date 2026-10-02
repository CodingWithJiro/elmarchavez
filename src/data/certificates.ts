import { Certificate } from '@/types/experience';

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: 'Responsive Web Design',
    institution: 'freeCodeCamp',
    dateReceived: 'Dec 2025',
    urlLink:
      'https://www.freecodecamp.org/certification/codingwithjiro/responsive-web-design-v9',
    imgUrl: '/certificates/responsive-web-design-certificate.webp',
    description:
      'Covers HTML, CSS, accessibility, responsive design, and modern web layouts.',
  },
  {
    id: 2,
    title: 'JavaScript',
    institution: 'freeCodeCamp',
    dateReceived: 'Dec 2025',
    urlLink:
      'https://www.freecodecamp.org/certification/codingwithjiro/javascript-v9',
    imgUrl: '/certificates/javascript-certificate.webp',
    description:
      'Covers JavaScript fundamentals, data structures, algorithms, DOM, and programming concepts.',
  },
  {
    id: 3,
    title: 'Relational Databases',
    institution: 'freeCodeCamp',
    dateReceived: 'May 2026',
    urlLink:
      'https://www.freecodecamp.org/certification/codingwithjiro/relational-databases-v9',
    imgUrl: '/certificates/relational-database-certificate.webp',
    description:
      'Covers Bash, SQL, PostgreSQL, relational databases, scripting, and Git workflows.',
  },
  {
    id: 4,
    title: 'Front-End Libraries',
    institution: 'freeCodeCamp',
    dateReceived: 'September 2026',
    urlLink:
      'https://www.freecodecamp.org/certification/codingwithjiro/front-end-development-libraries-v9',
    imgUrl: '/certificates/frontend-developement-libraries-certificate.webp',
    description:
      'Covers React, state management, routing, testing, performance, CSS frameworks, and TypeScript.',
  },
  {
    id: 5,
    title: 'Back-End & API',
    institution: 'freeCodeCamp',
    dateReceived: 'October 2026',
    urlLink:
      'https://www.freecodecamp.org/certification/codingwithjiro/back-end-development-and-apis-v9',
    imgUrl: '/certificates/backend-development-and-apis.webp',
    description:
      'Covers Node.js, npm, HTTP, Express, middleware, REST APIs, WebSockets, JWT, security, and authentication.',
  },
];

export const certificates: Certificate[] = CERTIFICATES.slice(-3).reverse();
