import ThemeIcon from './ThemeIcon';
import ThemeButton from './ThemeButton';
import useTheme from '../hooks/useTheme';

const Theme = () => {
  const { theme, handleThemeChange } = useTheme();

  return (
    <div className="absolute top-4 right-4 flex items-center justify-center gap-2 rounded-full bg-transparent px-4 py-2 shadow-(--BOX-SHADOW-THEME) motion-safe:transition-shadow motion-safe:duration-300 motion-safe:ease-in-out md:top-13 md:right-13">
      <ThemeIcon theme={theme} />
      <ThemeButton onThemeChange={handleThemeChange} theme={theme} />
    </div>
  );
};

export default Theme;
