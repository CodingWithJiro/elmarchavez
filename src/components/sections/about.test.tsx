import { render, screen } from '@testing-library/react';
import About from './about';

describe('About section', () => {
  test('renders About heading', () => {
    render(<About />);
    const title = screen.getByRole('heading', { name: /about/i });
    expect(title).toBeInTheDocument();
  });
  test('renders developer introduction', () => {
    render(<About />);
    const introduction = screen.getByText(
      /licensed civil engineer turned full stack developer/i,
    );
    expect(introduction).toBeInTheDocument();
  });
});
