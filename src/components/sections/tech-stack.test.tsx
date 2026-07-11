import { render, screen } from '@testing-library/react';
import { FRONTEND, BACKEND } from './tech-stack';
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
  test('renders every tech in each category', () => {
    render(<TechStack />);
    const techLists = screen.getAllByRole('listitem');
    const totalTech = FRONTEND.length + BACKEND.length;
    expect(techLists.length).toBe(totalTech);
  });
});
