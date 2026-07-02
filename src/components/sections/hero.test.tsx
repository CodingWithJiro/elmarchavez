import { screen, render } from '@testing-library/react';
import Hero from './hero';

describe('Hero section', () => {
  test('renders developer name and role', () => {
    render(<Hero />);
    const name = screen.getByRole('heading', { name: 'Elmar Chavez' });
    const role = screen.getByText(/full stack developer/i);
    expect(name).toBeInTheDocument();
    expect(role).toBeInTheDocument();
  });
});
