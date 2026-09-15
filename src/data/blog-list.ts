import { getSlug } from '@/lib/utils';
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
    imgAlt:
      'A collection of anime characters for a multiversal collaboration for an article.',
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
    imgAlt:
      'A funny backgroups GIF image where Elmar and Francis are dancing with strange creatures.',
  },
  {
    id: 3,
    title: 'Why Every Software Engineer Should Read "The Psychology of Money"',
    description:
      'Inspired by "The Psychology of Money", I explored why financial literacy is one of the most underrated career skills software engineers need in the tech industry.',
    publishDate: 'June 2026',
    readTime: '3 min read',
    tags: ['#career', '#productivity', '#finances'],
    blogUrl: `/blog/${getSlug('Why Every Software Engineer Should Read "The Psychology of Money"')}`,
    imgUrl: '/img/blog-3.jpg',
    imgAlt: 'A meme image for stonks.',
  },
  {
    id: 4,
    title: 'How I Contributed to a Laravel Application Without Knowing Laravel',
    description:
      'Lessons from contributing to a Laravel application, where I discovered that recognizing familiar patterns is often more valuable than starting over.',
    publishDate: 'August 2026',
    readTime: '4 min read',
    tags: ['#laravel', '#learning', '#webdev'],
    blogUrl: `/blog/${getSlug('How I Contributed to a Laravel Application Without Knowing Laravel')}`,
    imgUrl: '/img/blog-4.jpg',
    imgAlt: 'Keyboard caps laid down on a white table.',
  },
  {
    id: 5,
    title: 'The Slow and Quiet Cognitive Atrophy of a Modern Software Engineer',
    description:
      'My thoughts on AI dependency and why struggling through problems is still one of the best ways to combat cognitive atrophy and become a better engineer.',
    publishDate: 'September 2026',
    readTime: '8 min read',
    tags: ['#ai', '#programming', '#software'],
    blogUrl: `/blog/${getSlug('The Slow and Quiet Cognitive Atrophy of a Modern Software Engineer')}`,
    imgUrl: '/img/blog-5.webp',
    imgAlt:
      'A painting of six blind men stumbling, depicting of a tragedy when following without thinking.',
  },
];

export const blogList: BlogType[] = BLOGS.slice(-3).reverse();
