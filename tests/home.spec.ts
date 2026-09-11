import { test, expect } from '@playwright/test';

test('visitor can open the portfolio homepage', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: /elmar chavez/i }),
  ).toBeVisible();
});
test('visitor sees a 404 Page not found when going to an unknown page', async ({
  page,
}) => {
  await page.goto('/non-existent-page');
  const heading = page.getByRole('heading', { name: /^page not found$/i });
  await expect(heading).toBeVisible();
});
