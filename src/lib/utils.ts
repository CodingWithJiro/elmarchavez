import { BLOGS } from '@/data/blog-list';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

export function getBlogMeta(slug: string) {
  const blog = BLOGS.find(({ blogUrl }) => blogUrl.endsWith(getSlug(slug)));

  if (!blog) {
    return {
      id: -99,
      title: 'Blog not found',
      description: 'No description.',
      publishDate: 'No publish date.',
      readTime: 'No read time.',
      tags: [],
      blogUrl: 'No blog URL.',
      imgUrl: 'No image URL.',
      imgAlt: 'No image alt text.',
    };
  }

  return blog;
}

export async function getBlogArticle(id: number) {
  const article = await import(`@/content/blog/blog-${id}.mdx`);
  return article.default;
}
