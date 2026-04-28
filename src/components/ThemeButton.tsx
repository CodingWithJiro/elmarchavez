import type { ThemeMode } from '../types/theme';

type ThemeButtonProps = {
  onThemeChange: () => void;
  theme: ThemeMode;
};

const ThemeButton = ({ onThemeChange, theme }: ThemeButtonProps) => {
  const isLightTheme = theme === 'light';
  const isPressed = !isLightTheme;
  const label = `Switch to ${isLightTheme ? 'dark' : 'light'} theme`;

  return (
    <button
      className={`relative flex h-6 w-10 cursor-pointer items-center rounded-full border border-solid border-(--BORDER-COLOR-THEME-BUTTON) bg-(--BGCOLOR-THEME-BUTTON) after:absolute after:top-[0.225rem] after:bottom-[0.225rem] after:left-0 after:w-4 after:transform-[translateX(0.2rem)] after:rounded-full after:bg-(--BGCOLOR-THEME-BUTTON-AFTER) after:content-[""] motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out motion-safe:after:[transition-property:transform,background-color] motion-safe:after:duration-[150ms,300ms] motion-safe:after:ease-in-out ${isPressed ? 'after:transform-[translateX(1.1rem)]' : ''}`}
      type="button"
      aria-label={label}
      aria-pressed={isPressed}
      onClick={onThemeChange}
    ></button>
  );
};

export default ThemeButton;
