import ThemeIconLight from './ThemeIconLight';
import ThemeIconDark from './ThemeIconDark';
import type { ThemeMode } from '../types/theme';

type ThemeIconProps = {
  theme: ThemeMode;
};

const ThemeIcon = ({ theme }: ThemeIconProps) => {
  const isLightTheme = theme === 'light';
  return <>{isLightTheme ? <ThemeIconLight /> : <ThemeIconDark />}</>;
};

export default ThemeIcon;
