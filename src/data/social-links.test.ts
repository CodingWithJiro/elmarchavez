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
  test('every social link has a unique id', () => {
    const ids = socialLinks.map(({ id }) => id);
    const uniqueIds = new Set(ids);
    expect(socialLinks.length).toBe(uniqueIds.size);
  });
  test('every label is non-empty', () => {
    const labels = socialLinks.map(({ label }) => label);
    const hasProperLabels = labels.every((label) => label.trim().length > 0);
    expect(hasProperLabels).toBe(true);
  });
});
