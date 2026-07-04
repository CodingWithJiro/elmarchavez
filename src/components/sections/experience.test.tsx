import { render, screen } from '@testing-library/react';
import Experience from './experience';

describe('Experience section', () => {
  test('renders Experience heading', () => {
    render(<Experience />);
    const title = screen.getByRole('heading', { name: /experience/i });
    expect(title).toBeInTheDocument();
  });
  test('renders Certificates heading', () => {
    render(<Experience />);
    const title = screen.getByRole('heading', { name: /certificates/i });
    expect(title).toBeInTheDocument();
  });
});
