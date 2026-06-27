import { socialLinks } from './social-links';

describe('Social Links data', () => {
  test('every social link uses a valid HTTPS URL', () => {
    const isValid = socialLinks.every(({ url }) => {
      try {
        return new URL(url).protocol === 'https:';
      } catch {
        return false;
      }
    });
    expect(isValid).toBe(true);
  });
});
