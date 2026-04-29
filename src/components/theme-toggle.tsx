'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark}
      className="rounded border px-3 py-1"
    >
      {isDark ? 'Dark' : 'Light'}
    </button>
  );
};

export default ThemeToggle;
