import { getSlug } from './utils';

describe('Utility functions', () => {
  test('generates a URL slug from the blog title', () => {
    const result = getSlug(
      'How I Contributed to a Laravel Application Without Knowing Laravel',
    );
    expect(result).toBe(
      'how-i-contributed-to-a-laravel-application-without-knowing-laravel',
    );
  });
  test('normalizes capitalization and whitespace from the blog title', () => {
    expect(
      getSlug(
        '  How I      Contributed to a     Laravel Application Without     Knowing    Laravel  ',
      ),
    ).toBe(
      'how-i-contributed-to-a-laravel-application-without-knowing-laravel',
    );
  });
  test('removes punctuation from the blog title', () => {
    expect(
      getSlug(
        'Why Every Software Engineer Should Read "The Psychology of Money"',
      ),
    ).toBe('why-every-software-engineer-should-read-the-psychology-of-money');
  });
});
