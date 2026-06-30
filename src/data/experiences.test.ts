import { workExperiences, certificates } from './experiences';

describe('Work Experiences and Certificates data', () => {
  test('every work experience has a non-empty position', () => {
    const positions = workExperiences.map(({ position }) => position);
    const isNotEmpty = positions.every(
      (position) => position.trim().length > 0,
    );
    expect(isNotEmpty).toBe(true);
  });
  test('every work experience has a non-empty company name', () => {
    const companyNames = workExperiences.map(({ companyName }) => companyName);
    const isNotEmpty = companyNames.every(
      (companyName) => companyName.trim().length > 0,
    );
    expect(isNotEmpty).toBe(true);
  });
  test('every certificate has a non-empty title', () => {
    const titles = certificates.map(({ title }) => title);
    const isNotEmpty = titles.every((title) => title.trim().length > 0);
    expect(isNotEmpty).toBe(true);
  });
  test('every certificate has a non-empty institution', () => {
    const institutions = certificates.map(({ institution }) => institution);
    const isNotEmpty = institutions.every(
      (institution) => institution.trim().length > 0,
    );
    expect(isNotEmpty).toBe(true);
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
