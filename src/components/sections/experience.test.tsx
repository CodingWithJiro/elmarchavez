import { render, screen } from '@testing-library/react';
import { workExperiences } from '@/data/experiences';
import Experience from './experience';

describe('Experience section', () => {
  test('renders Experience heading', () => {
    render(<Experience />);
    const title = screen.getByRole('heading', { name: /experience/i });
    expect(title).toBeInTheDocument();
  });
  test('renders every work experience', () => {
    render(<Experience />);
    const experiences = screen.getAllByRole('listitem');
    expect(experiences).toHaveLength(workExperiences.length);
  });
});
