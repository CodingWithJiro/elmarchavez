import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFrontendmentor, SiDevdotto, SiCodewars } from 'react-icons/si';
import type { SocialLink } from '@/types/social-link';

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    url: 'https://github.com/CodingWithJiro',
    label: 'Visit my GitHub profile',
    Icon: FaGithub,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/elmar-chavez/',
    label: 'Connect with me in LinkedIn',
    Icon: FaLinkedin,
  },
  {
    id: 3,
    url: 'https://www.frontendmentor.io/profile/CodingWithJiro',
    label: 'See my work in Frontend Mentor',
    Icon: SiFrontendmentor,
  },
  {
    id: 4,
    url: 'https://www.codewars.com/users/CodingWithJiro',
    label: "Let's solve code challenges in CodeWars",
    Icon: SiCodewars,
  },
  {
    id: 5,
    url: 'https://dev.to/codingwithjiro',
    label: 'Follow me in dev.to',
    Icon: SiDevdotto,
  },
];
