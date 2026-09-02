import { PROJECTS } from './project-list';
import { isNotEmpty, isValidUrl } from '@/tests/utils';

describe('Project List data', () => {
  test('every project uses a valid HTTPS URL', () => {
    const siteUrls = PROJECTS.map(({ siteUrl }) => siteUrl);
    expect(isValidUrl(siteUrls)).toBe(true);
  });
  test('every project has a non-empty image path', () => {
    const imgUrls = PROJECTS.map(({ imgUrl }) => imgUrl);
    const imgUrlsDark = PROJECTS.map(({ imgUrlDark }) => imgUrlDark);
    const allImgUrls = [...imgUrls, ...imgUrlsDark];
    expect(isNotEmpty(allImgUrls)).toBe(true);
  });
  test('every project has a non-empty title', () => {
    const titles = PROJECTS.map(({ title }) => title);
    expect(isNotEmpty(titles)).toBe(true);
  });
  test('every project has a non-empty description', () => {
    const descriptions = PROJECTS.map(({ description }) => description);
    expect(isNotEmpty(descriptions)).toBe(true);
  });
  test('every project has a valid GitHub URL', () => {
    const githubUrls = PROJECTS.map(({ githubUrl }) => githubUrl);
    expect(isValidUrl(githubUrls)).toBe(true);
  });
  test('every project has at least three technologies', () => {
    const technologies = PROJECTS.map(({ technologies }) => technologies);
    expect(technologies.every((technology) => technology.length >= 3)).toBe(
      true,
    );
  });
});
