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
  return blog;
}

export async function getBlogArticle(id: number) {
  const article = await import(`@/content/blog/blog-${id}.mdx`);
  return article.default;
}
