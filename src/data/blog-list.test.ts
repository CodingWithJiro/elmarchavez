import { blogList } from './blog-list';
import { isNotEmpty } from '@/tests/utils';

describe('Blog list data', () => {
  test('every blog has a non-empty title', () => {
    const titles = blogList.map(({ title }) => title);
    expect(isNotEmpty(titles)).toBe(true);
  });
});
