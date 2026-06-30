import { workExperiences, certificates } from './experiences';
import { isNotEmpty, isValidUrl } from '@/tests/utils';

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
    const urls = certificates.map(({ urlLink }) => urlLink);
    expect(isValidUrl(urls)).toBe(true);
  });
});
