import { workExperiences, certificates } from './experiences';

const isNotEmpty = (items: string[]) => {
  return items.every((item) => item.trim().length > 0);
};

describe('Work Experiences and Certificates data', () => {
  test('every work experience has a non-empty position', () => {
    const positions = workExperiences.map(({ position }) => position);
    expect(isNotEmpty(positions)).toBe(true);
  });
  test('every work experience has a non-empty company name', () => {
    const companyNames = workExperiences.map(({ companyName }) => companyName);
    expect(isNotEmpty(companyNames)).toBe(true);
  });
  test('every certificate has a non-empty title', () => {
    const titles = certificates.map(({ title }) => title);
    expect(isNotEmpty(titles)).toBe(true);
  });
  test('every certificate has a non-empty institution', () => {
    const institutions = certificates.map(({ institution }) => institution);
    expect(isNotEmpty(institutions)).toBe(true);
  });
  test('every certificate uses a valid HTTPS URL', () => {
    const isValid = certificates.every(({ urlLink }) => {
      try {
        return new URL(urlLink).protocol === 'https:';
      } catch {
        return false;
      }
    });
    expect(isValid).toBe(true);
  });
});
