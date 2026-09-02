import type { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    description: 'Learn about JavaScript for web development!',
    imgUrl: '/projects/javascript-fundamentals.png',
    imgUrlDark: '/projects/javascript-fundamentals-dark.png',
    siteUrl: 'https://javascript-fundamentals-jiro.netlify.app/',
    githubUrl:
      'https://github.com/CodingWithJiro/w3schools-js-tutorial-clone-site',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Veil and Visions',
    description: 'Draw three cards to reveal your past, present, and future!',
    imgUrl: '/projects/veil-and-visions.png',
    imgUrlDark: '/projects/veil-and-visions-dark.png',
    siteUrl: 'https://veil-and-visions-fcc-jiro.netlify.app/',
    githubUrl:
      'https://github.com/CodingWithJiro/freecodecamp-js-fortune-teller',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    title: 'No One Asked',
    description: 'Get a random advice, copy it or share it in X!',
    imgUrl: '/projects/no-one-asked.png',
    imgUrlDark: '/projects/no-one-asked-dark.png',
    siteUrl: 'https://no-one-asked-fcc-jiro.netlify.app/',
    githubUrl: 'https://github.com/CodingWithJiro/freecodecamp-js-no-one-asked',
    technologies: ['JavaScript', 'API', 'Figma'],
  },
  {
    id: 4,
    title: 'TickTock',
    description: 'Know the time and date from anywhere!',
    imgUrl: '/projects/ticktock.png',
    imgUrlDark: '/projects/ticktock-dark.png',
    siteUrl: 'https://ticktock-jiro.netlify.app/',
    githubUrl: 'https://github.com/CodingWithJiro/wesbos-js-30-clock',
    technologies: ['JavaScript', 'API', 'Figma'],
  },
  {
    id: 5,
    title: 'Keyboard Warrior',
    description: 'Smash the keys, feel the beat!',
    imgUrl: '/projects/keyboard-warriors.png',
    imgUrlDark: '/projects/keyboard-warriors-dark.png',
    siteUrl: 'https://keyboard-warrior-jiro.netlify.app/',
    githubUrl: 'https://github.com/CodingWithJiro/wesbos-js-30-drumkit',
    technologies: ['JavaScript', 'CSS', 'Figma'],
  },
  {
    id: 6,
    title: 'Base Apparel',
    description: 'Sign-up your email, subscribe to Base Apparel!',
    imgUrl: '/projects/base-apparel.png',
    imgUrlDark: '/projects/base-apparel-dark.png',
    siteUrl: 'https://base-apparel-fm-jiro.netlify.app/',
    githubUrl:
      'https://github.com/CodingWithJiro/frontend-mentor-base-apparel-coming-soon',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    id: 7,
    title: 'Extensions Manager',
    description: 'Manage your favorite browser extensions!',
    imgUrl: '/projects/extensions-manager.png',
    imgUrlDark: '/projects/extensions-manager-dark.png',
    siteUrl: 'https://browser-extension-fm-jiro.netlify.app/',
    githubUrl:
      'https://github.com/CodingWithJiro/frontend-mentor-browser-extension-manager',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    id: 8,
    title: 'Where in the World',
    description: 'Search a country and find relevant info!',
    imgUrl: '/projects/where-in-the-world.png',
    imgUrlDark: '/projects/where-in-the-world-dark.png',
    siteUrl: 'https://where-in-the-world-fm-jiro.netlify.app/',
    githubUrl:
      'https://github.com/CodingWithJiro/frontend-mentor-where-in-the-world',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
  },
];

export const projectList: Project[] = PROJECTS.filter(({ id }) =>
  [1, 2, 7, 8].includes(id),
);
