import { test, expect } from '@playwright/test';
import { tabUntilFocused } from './utils/keyboard';

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
  test('visitor can tab into theme toggle and open theme options', async ({
    page,
  }) => {
    const themeToggle = page.getByRole('button', { name: /toggle theme/i });
    await tabUntilFocused(page, themeToggle, 'Theme Toggle');
    await expect(themeToggle).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('menuitem', { name: /dark/i })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: /light/i })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: /system/i })).toBeVisible();
  });
});
