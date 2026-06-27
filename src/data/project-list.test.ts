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
});
