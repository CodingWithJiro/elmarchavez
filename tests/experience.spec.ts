import { WORK_EXPERIENCES } from '@/data/experiences';
import { test, expect } from '@playwright/test';

test.describe('Experience', () => {
  test('visitor can see the Experience section', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { name: /^experience$/i });
    await expect(heading).toBeVisible();
  });
  test('visitor can view the Experience page', async ({ page }) => {
    await page.goto('/');
    const viewAllLink = page.locator('a[href="/experience"]');
    await viewAllLink.click();
    await expect(page).toHaveURL('/experience');
  });
  test.only('visitor can see the Experience page contents', async ({
    page,
  }) => {
    await page.goto('/experience');
    const heading = page.getByRole('heading', { name: /^experience$/i });
    await expect(heading).toBeVisible();
    const description = page.getByText(
      /^my professional experience as a software engineer.$/i,
    );
    await expect(description).toBeVisible();
  });
});
