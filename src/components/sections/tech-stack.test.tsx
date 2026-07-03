import { render, screen } from '@testing-library/react';
import TechStack from './tech-stack';

describe('Tech Stack section', () => {
  test('renders Tech Stack heading', () => {
    render(<TechStack />);
    const title = screen.getByRole('heading', { name: /tech stack/i });
    expect(title).toBeInTheDocument();
  });
  test('renders Frontend category heading', () => {
    render(<TechStack />);
    const title = screen.getByRole('heading', { name: /frontend/i });
    expect(title).toBeInTheDocument();
  });
  test('renders Backend category heading', () => {
    render(<TechStack />);
    const title = screen.getByRole('heading', { name: /backend/i });
    expect(title).toBeInTheDocument();
  });
});
