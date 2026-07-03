import { render, screen } from '@testing-library/react';
import TechStack from './tech-stack';

describe('Tech Stack section', () => {
  test('renders Tech Stack heading', () => {
    render(<TechStack />);
    const title = screen.getByRole('heading', { name: /tech stack/i });
    expect(title).toBeInTheDocument();
  });
});
