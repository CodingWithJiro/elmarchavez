import { render, screen } from '@testing-library/react';
import Projects from './projects';

describe('Projects section', () => {
  test('renders Projects heading', () => {
    render(<Projects />);
    const title = screen.getByRole('heading', { name: /projects/i });
    expect(title).toBeInTheDocument();
  });
});
