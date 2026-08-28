import { render, screen } from '@testing-library/react';
import ArticleHeader from './article-header';
import { BreadcrumbItem } from '@/types/breadcrumb-item';
import { getSlug } from '@/lib/utils';

describe('Article Header', () => {
  const breadcrumbItems: BreadcrumbItem[] = [{ label: 'Blog', href: '/blog' }];
  const blogMeta = {
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
  };

  test('renders the article title', () => {
    render(
      <ArticleHeader breadcrumbItems={breadcrumbItems} blogMeta={blogMeta} />,
    );
    const title = screen.getByRole('heading', { name: blogMeta.title });
    expect(title).toBeInTheDocument();
  });
  test('renders the article publish date', () => {
    render(
      <ArticleHeader breadcrumbItems={breadcrumbItems} blogMeta={blogMeta} />,
    );
    const publishDate = screen.getByText(blogMeta.publishDate);
    expect(publishDate).toBeInTheDocument();
  });
  test('renders the article author', () => {
    render(
      <ArticleHeader breadcrumbItems={breadcrumbItems} blogMeta={blogMeta} />,
    );
    const authorName = screen.getByText('Elmar Chavez');
    expect(authorName).toBeInTheDocument();
  });
  test('renders the read time', () => {
    render(
      <ArticleHeader breadcrumbItems={breadcrumbItems} blogMeta={blogMeta} />,
    );
    const readTime = screen.getByText(blogMeta.readTime);
    expect(readTime).toBeInTheDocument();
  });
  test('renders all the article tags', () => {
    render(
      <ArticleHeader breadcrumbItems={breadcrumbItems} blogMeta={blogMeta} />,
    );
    blogMeta.tags.forEach((tag) => {
      const text = screen.getByText(tag);
      expect(text).toBeInTheDocument();
    });
  });
});
