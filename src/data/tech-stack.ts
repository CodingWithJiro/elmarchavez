export const FRONTEND: string[] = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'React Router',
  'Styled Components',
  'HTML',
  'CSS',
  'Vite',
  'Responsive Web Design',
];
export const BACKEND: string[] = ['Node.js', 'Express.js', 'PostgreSQL'];
export const TESTING_AND_QUALITY: string[] = [
  'Vitest',
  'React Testing Library',
  'MSW',
  'Playwright',
  'Axe DevTools',
  'Lighthouse',
  'ESLint',
  'Prettier',
];
export const DEVOPS: string[] = ['GitHub Actions', 'Docker'];
export const CONTENT: string[] = ['MDX', 'Tailwind CSS Typography'];
export const TOOLS: string[] = [
  'Git',
  'GitHub',
  'VS Code',
  'Slack',
  'Discord',
  'Teams',
];

export const frontend = FRONTEND.slice(0, 5);
export const backend = BACKEND.slice(0, 5);
export const devOps = DEVOPS.slice(0, 5);

export const TECH_STACK = [
  {
    category: 'Frontend',
    technologies: FRONTEND,
  },
  {
    category: 'Backend',
    technologies: BACKEND,
  },
  {
    category: 'DevOps',
    technologies: DEVOPS,
  },
  {
    category: 'Testing & Quality',
    technologies: TESTING_AND_QUALITY,
  },
  {
    category: 'Content',
    technologies: CONTENT,
  },
  {
    category: 'Tools',
    technologies: TOOLS,
  },
];
