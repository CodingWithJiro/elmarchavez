import { render, screen } from '@testing-library/react';
import Breadcrumb from './breadcrumb';
import type { BreadcrumbItem } from '@/types/breadcrumb-item';

describe('Breadcrumb', () => {
  const items: BreadcrumbItem[] = [
    { label: 'Blog', href: '/blog' },
    { label: 'Technology', href: '/blog/technology' },
  ];
  test('renders the Home link', () => {
    render(<Breadcrumb items={items} currentLabel="Current Article" />);
    const link = screen.getByRole('link', { name: 'Home' });
    expect(link).toHaveAttribute('href', '/');
  });
  test('renders all succeeding breadcrumb item links', () => {
    render(<Breadcrumb items={items} currentLabel="Current Article" />);
    items.forEach(({ label, href }) => {
      const link = screen.getByRole('link', { name: label });
      expect(link).toHaveAttribute('href', href);
    });
  });
  test('renders an accessible breadcrumb navigation', () => {
    render(<Breadcrumb items={items} currentLabel="Current Article" />);
    const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
    expect(nav).toBeInTheDocument();
  });
  test('renders the current page with aria-current', () => {
    render(<Breadcrumb items={items} currentLabel="Current Article" />);
    const currentPage = screen.getByText('Current Article');
    expect(currentPage).toHaveAttribute('aria-current', 'page');
  });
});
