import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Theme from './Theme';

describe('Theme', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      media: query,
      matches: false,
    }));
  });
  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  test('loads saved theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');

    render(<Theme />);

    const root = document.documentElement;

    expect(root).toHaveClass('dark');
  });

  test('loads prefers media theme if there is no saved theme from localStorage', () => {
    window.matchMedia = vi.fn().mockReturnValue({
      media: '(prefers-color-scheme: dark)',
      matches: true,
    });

    render(<Theme />);

    const root = document.documentElement;

    expect(root).toHaveClass('dark');
  });

  test('toggles theme to dark on button click', async () => {
    const user = userEvent.setup();

    render(<Theme />);

    const root = document.documentElement;
    const button = screen.getByRole('button');

    expect(root).not.toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('light');

    await user.click(button);

    expect(root).toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  test('toggles theme to light on button click', async () => {
    localStorage.setItem('theme', 'dark');
    const user = userEvent.setup();

    render(<Theme />);

    const root = document.documentElement;
    const button = screen.getByRole('button');

    expect(root).toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('dark');

    await user.click(button);

    expect(root).not.toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
