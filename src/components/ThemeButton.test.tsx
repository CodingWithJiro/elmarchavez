import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeButton from './ThemeButton';

describe('ThemeButton', () => {
  test('shows correct label and pressed state in light theme', () => {
    render(<ThemeButton theme="light" onThemeChange={() => {}} />);

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-label', 'Switch to dark theme');
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  test('shows correct label and pressed state in dark theme', () => {
    render(<ThemeButton theme="dark" onThemeChange={() => {}} />);

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-label', 'Switch to light theme');
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  test('calls onThemeChange when button is clicked', async () => {
    const user = userEvent.setup();
    const onThemeChange = vi.fn();

    render(<ThemeButton theme="light" onThemeChange={onThemeChange} />);

    const button = screen.getByRole('button');

    await user.click(button);

    expect(onThemeChange).toHaveBeenCalledTimes(1);
  });
});
