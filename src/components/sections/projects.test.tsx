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
});
