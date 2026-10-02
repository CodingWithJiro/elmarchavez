import { CERTIFICATES } from './certificates';
import { isNotEmpty, isValidUrl } from '@/tests/utils';

describe('Certificats data', () => {
  test('every certificate has a non-empty title', () => {
    const titles = CERTIFICATES.map(({ title }) => title);
    expect(isNotEmpty(titles)).toBe(true);
  });
  test('every certificate has a non-empty institution', () => {
    const institutions = CERTIFICATES.map(({ institution }) => institution);
    expect(isNotEmpty(institutions)).toBe(true);
  });
  test('every certificate uses a valid HTTPS URL', () => {
    const urls = CERTIFICATES.map(({ urlLink }) => urlLink);
    expect(isValidUrl(urls)).toBe(true);
  });
});
