import { screen, render } from '@testing-library/react';
import { socialLinks } from '@/data/social-links';
import Hero from './hero';

describe('Hero section', () => {
  test('renders developer name and role', () => {
    render(<Hero />);
    const name = screen.getByRole('heading', { name: 'Elmar Chavez' });
    const role = screen.getByText(/full stack developer/i);
    expect(name).toBeInTheDocument();
    expect(role).toBeInTheDocument();
  });
  test('renders every social link', () => {
    render(<Hero />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(socialLinks.length);
  });
  test('every social link has an accessible name', () => {
    render(<Hero />);
    const links = screen.getAllByRole('link', { name: /.+/ });
    expect(links).toHaveLength(socialLinks.length);
  });
});
