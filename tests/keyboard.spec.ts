import { test, expect } from '@playwright/test';

test.describe('Keyboard Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('visitor tabs into skip link first', async ({ page, browserName }) => {
    test.skip(
      browserName === 'webkit',
      'WebKit on Windows does not focus the skip link on initial Tab.',
    );
    const skipLink = page.getByRole('link', { name: /skip to main content/i });
    await page.keyboard.press('Tab');
    await expect(skipLink).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#main$/);
  });
});
