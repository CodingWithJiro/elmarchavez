import { BlogType } from '@/types/blog';

export const BLOGS: BlogType[] = [
  {
    id: 1,
    title:
      'Should you use Gemma 4 for your Development? A Multiversal Analysis to Determine if Gemma 4 is Right for You!',
    description:
      "AI tools are becoming increasingly common in modern development workflows. In this article, we share our experience using Google's Gemma 4 through local setup with Ollama, hallucination testing, output evaluation, and AI-agent experimentation.",
    publishDate: 'May 2026',
    readTime: '19 min read',
    tags: ['#llm', '#ollama', '#gemma4'],
    blogUrl:
      'https://dev.to/devengers/should-you-use-gemma-4-for-your-development-a-multiversal-analysis-to-determine-if-gemma-4-is-2iol',
    imgUrl: '/img/blog-1.webp',
  },
  {
    id: 2,
    title:
      'Two Devs and a Copilot Created ClassifierAI: A Prototype Chrome Extension that Automatically Detects AI-Generated Content on DEV!',
    description:
      'We revived an unfinished project and turned it into ClassifierAI, a prototype Chrome extension that detects AI-generated content on DEV using machine learning.',
    publishDate: 'June 2026',
    readTime: '15 min read',
    tags: ['#opensource', '#machinelearning', '#copilot'],
    blogUrl:
      'https://dev.to/devengers/two-devs-and-a-copilot-created-classifierai-a-prototype-chrome-extension-that-automatically-4fge',
    imgUrl: '/img/blog-2.webp',
  },
  {
    id: 3,
    title: 'Why Every Software Engineer Should Read "The Psychology of Money"',
    description:
      'Inspired by "The Psychology of Money", I explored why financial literacy is one of the most underrated career skills software engineers need in the tech industry.',
    publishDate: 'June 2026',
    readTime: '3 min read',
    tags: ['#career', '#productivity', '#finances'],
    blogUrl:
      'https://dev.to/devengers/why-every-software-engineer-should-read-the-psychology-of-money-2b6e',
    imgUrl: '/img/blog-3.jpg',
  },
  {
    id: 4,
    title: 'How I Contributed to a Laravel Application Without Knowing Laravel',
    description:
      'Lessons from contributing to a Laravel application, where I discovered that recognizing familiar patterns is often more valuable than starting over.',
    publishDate: 'August 2026',
    readTime: '4 min read',
    tags: ['#laravel', '#learning', '#webdev'],
    blogUrl:
      'https://dev.to/devengers/how-i-contributed-to-a-laravel-application-without-knowing-laravel-1dkl',
    imgUrl: '/img/blog-4.jpg',
  },
];

export const blogList: BlogType[] = BLOGS.slice(-3).reverse();
