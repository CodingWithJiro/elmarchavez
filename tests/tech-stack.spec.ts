import { test, expect } from '@playwright/test';

test.describe('Tech Stack', () => {
  test('visitor can see the Tech Stack section', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { name: /^tech stack$/i });
    await expect(heading).toBeVisible();
  });
  test('visitor can view the Tech Stack page', async ({ page }) => {
    await page.goto('/');
    const viewAllLink = page.locator('a[href="/tech-stack"]');
    await viewAllLink.click();
    const heading = page.getByRole('heading', { name: /^tech stack$/i });
    await expect(heading).toBeVisible();
  });
});
