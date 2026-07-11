import { projectList } from './project-list';
import { isNotEmpty, isValidUrl } from '@/tests/utils';

describe('Project List data', () => {
  test('every project uses a valid HTTPS URL', () => {
    const siteUrls = projectList.map(({ siteUrl }) => siteUrl);
    expect(isValidUrl(siteUrls)).toBe(true);
  });
  test('every project has a non-empty image path', () => {
    const imgUrls = projectList.map(({ imgUrl }) => imgUrl);
    const imgUrlsDark = projectList.map(({ imgUrlDark }) => imgUrlDark);
    const allImgUrls = [...imgUrls, ...imgUrlsDark];
    expect(isNotEmpty(allImgUrls)).toBe(true);
  });
  test('every project has a non-empty title', () => {
    const titles = projectList.map(({ title }) => title);
    expect(isNotEmpty(titles)).toBe(true);
  });
  test('every project has a non-empty description', () => {
    const descriptions = projectList.map(({ description }) => description);
    expect(isNotEmpty(descriptions)).toBe(true);
  });
});
