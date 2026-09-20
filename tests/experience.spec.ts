import { test, expect } from '@playwright/test';

test.describe('Experience', () => {
  test('visitor can see the experience section', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { name: /^experience$/i });
    await expect(heading).toBeVisible();
  });
});
