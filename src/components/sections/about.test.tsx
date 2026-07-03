import { render, screen } from '@testing-library/react';
import About from './about';

describe('About section', () => {
  test('renders heading title', () => {
    render(<About />);
    const title = screen.getByRole('heading', { name: /about/i });
    expect(title).toBeInTheDocument();
  });
});
