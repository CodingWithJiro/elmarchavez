import { test, expect } from '@playwright/test';

test('visitor can open the portfolio homepage', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: /elmar chavez/i }),
  ).toBeVisible();
});
