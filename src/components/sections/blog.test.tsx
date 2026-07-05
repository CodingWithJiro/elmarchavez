import { render, screen } from '@testing-library/react';
import Blog from './blog';

describe('Blog section', () => {
  test('renders Blog heading', () => {
    render(<Blog />);
    const title = screen.getByRole('heading', { name: /blog/i });
    expect(title).toBeInTheDocument();
  });
});
