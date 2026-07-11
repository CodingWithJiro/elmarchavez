import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer section', () => {
  test('renders copyright information', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const info = screen.getByText(
      `© ${currentYear} Elmar Chavez. All rights reserved.`,
    );
    expect(info).toBeInTheDocument();
  });
});
