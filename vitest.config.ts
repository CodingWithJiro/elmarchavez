import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.ts',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'tests/**',
        '**/*.test.*',
        'src/components/ui/**',
        'setupTests.ts',
        'src/app/**',
        'src/types/**',
      ],
    },
  },
});
