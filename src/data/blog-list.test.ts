import { BLOGS } from './blog-list';
import { isNotEmpty, isValidUrl } from '@/tests/utils';

describe('Blog list data', () => {
  test('every blog has a non-empty title', () => {
    const titles = BLOGS.map(({ title }) => title);
    expect(isNotEmpty(titles)).toBe(true);
  });
  test('every blog has a non-empty description', () => {
    const descriptions = BLOGS.map(({ description }) => description);
    expect(isNotEmpty(descriptions)).toBe(true);
  });
  test('every blog uses a valid HTTPS URL', () => {
    const urls = BLOGS.map(({ blogUrl }) => blogUrl);
    expect(isValidUrl(urls)).toBe(true);
  });
  test('every blog has a non-empty img alt description', () => {
    const imgAlts = BLOGS.map(({ imgAlt }) => imgAlt);
    expect(isNotEmpty(imgAlts)).toBe(true);
  });
  test('every blog has a non-empty image path', () => {
    const imgUrls = BLOGS.map(({ imgUrl }) => imgUrl);
    expect(isNotEmpty(imgUrls)).toBe(true);
  });
  test('every blog has at least three tags', () => {
    const tagList = BLOGS.map(({ tags }) => tags);
    const hasThreeTags = tagList.every((tags) => tags.length >= 3);
    expect(hasThreeTags).toBe(true);
  });
  test('every blog has non-empty tag names', () => {
    const tagList = BLOGS.map(({ tags }) => tags);
    const hasNonEmptyTags = tagList.every((tags) => isNotEmpty(tags));
    expect(hasNonEmptyTags).toBe(true);
  });
});
