import { screen, render } from '@testing-library/react';
import SkipLink from './skip-link';

test('renders a skip link to the main content', () => {
  render(<SkipLink />);
  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', '#main');
});
