import { render, screen } from '@testing-library/react';
import { projectList } from '@/data/project-list';
import Projects from './projects';

describe('Projects section', () => {
  test('renders Projects heading', () => {
    render(<Projects />);
    const title = screen.getByRole('heading', { name: /projects/i });
    expect(title).toBeInTheDocument();
  });
  test('renders every project item', () => {
    render(<Projects />);
    const projects = screen.getAllByRole('listitem');
    expect(projects).toHaveLength(projectList.length);
  });
  test('renders every project link', () => {
    render(<Projects />);
    const projectLinks = screen.getAllByRole('link');
    expect(projectLinks).toHaveLength(projectList.length);
  });
});
