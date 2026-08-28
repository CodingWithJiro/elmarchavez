import { getSlug } from './utils';

describe('Utility functions', () => {
  test('generates a URL slug from a title', () => {
    const result = getSlug(
      'How I Contributed to a Laravel Application Without Knowing Laravel',
    );
    expect(result).toBe(
      'how-i-contributed-to-a-laravel-application-without-knowing-laravel',
    );
  });
});
