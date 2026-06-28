import { projectList } from './project-list';

describe('Project List data', () => {
  test('every project uses a valid HTTPS URL', () => {
    const isValid = projectList.every(({ siteUrl }) => {
      try {
        return new URL(siteUrl).protocol === 'https:';
      } catch {
        return false;
      }
    });
    expect(isValid).toBe(true);
  });
  test('every project has a non-empty image path', () => {
    const imgUrls = projectList.map(({ imgUrl }) => imgUrl);
    const imgUrlsDark = projectList.map(({ imgUrlDark }) => imgUrlDark);
    const allImgUrls = [...imgUrls, ...imgUrlsDark];
    const isNotEmpty = allImgUrls.every((imgUrl) => imgUrl.trim().length > 0);

    expect(isNotEmpty).toBe(true);
  });
});
