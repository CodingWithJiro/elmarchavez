import { render, screen, within } from '@testing-library/react';
import { workExperiences, certificates } from '@/data/experiences';
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
  test('renders every work experience', () => {
    render(<Experience />);
    const title = screen.getByRole('heading', { name: /experience/i });
    const article = title.closest('article')!;
    const experienceSection = within(article);
    const experiences = experienceSection.getAllByRole('listitem');
    expect(experiences).toHaveLength(workExperiences.length);
  });
});
