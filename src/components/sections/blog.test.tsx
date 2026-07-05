import { render, screen } from '@testing-library/react';
import { blogList } from '@/data/blog-list';
import Blog from './blog';

describe('Blog section', () => {
  test('renders Blog heading', () => {
    render(<Blog />);
    const title = screen.getByRole('heading', { name: /blog/i });
    expect(title).toBeInTheDocument();
  });
  test('renders every blog article', () => {
    render(<Blog />);
    const title = screen.getByRole('heading', { name: /blog/i });
    const section = title.closest('section')!;
    const blogUl = section.querySelector('ul')!;
    const blogArticles = blogUl.children;
    expect(blogArticles).toHaveLength(blogList.length);
  });
});
