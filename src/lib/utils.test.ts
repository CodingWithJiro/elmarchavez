import { getBlogMeta, getSlug } from './utils';
import { BLOGS } from '@/data/blog-list';

describe('getSlug', () => {
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
describe('getBlogMeta', () => {
  test('returns blog metadata for a valid slug', () => {
    const blogTitle =
      'How I Contributed to a Laravel Application Without Knowing Laravel';
    const blogSlug = getSlug(blogTitle);
    const blogMeta = BLOGS.find(({ title }) => title === blogTitle);
    expect(blogMeta).toEqual(getBlogMeta(blogSlug));
  });
  test('returns the fallback not found blog metadata for an invalid slug', () => {
    const blogSlug = 'this-is-an-invalid-article-slug';
    const blogMeta = getBlogMeta(blogSlug);
    expect(blogMeta.id).toBe(-99);
    expect(blogMeta.title).toBe('Blog not found');
  });
});
