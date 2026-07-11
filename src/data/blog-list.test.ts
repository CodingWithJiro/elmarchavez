import { blogList } from './blog-list';
import { isNotEmpty, isValidUrl } from '@/tests/utils';

describe('Blog list data', () => {
  test('every blog has a non-empty title', () => {
    const titles = blogList.map(({ title }) => title);
    expect(isNotEmpty(titles)).toBe(true);
  });
  test('every blog has a non-empty description', () => {
    const descriptions = blogList.map(({ description }) => description);
    expect(isNotEmpty(descriptions)).toBe(true);
  });
  test('every blog uses a valid HTTPS URL', () => {
    const urls = blogList.map(({ blogUrl }) => blogUrl);
    expect(isValidUrl(urls)).toBe(true);
  });
  test('every blog has a non-empty image path', () => {
    const imgUrls = blogList.map(({ imgUrl }) => imgUrl);
    expect(isNotEmpty(imgUrls)).toBe(true);
  });
  test('every blog has at least three tags', () => {
    const tagList = blogList.map(({ tags }) => tags);
    const hasThreeTags = tagList.every((tags) => tags.length >= 3);
    expect(hasThreeTags).toBe(true);
  });
  test('every blog has non-empty tag names', () => {
    const tagList = blogList.map(({ tags }) => tags);
    const hasNonEmptyTags = tagList.every((tags) => isNotEmpty(tags));
    expect(hasNonEmptyTags).toBe(true);
  });
});
