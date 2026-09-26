import { test, expect } from '@playwright/test';
import { certificates } from '@/data/experiences';

test.describe('Certificates', () => {
  test('visitor can see the Certificates section', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { name: /^certificates$/i });
    await expect(heading).toBeVisible();
  });
  test('visitor can view the Certificates page', async ({ page }) => {
    await page.goto('/');
    const viewAllLink = page.locator('a[href="/certificates"]');
    await viewAllLink.click();
    await expect(page).toHaveURL('/certificates');
  });
  test('visitor can open certificate link in a new tab', async ({ page }) => {
    await page.goto('/');
    const certificate = certificates[0];
    const certificateLink = page.getByRole('link', {
      name: `Open ${certificate.title} certificate`,
    });
    const newPagePromise = page.waitForEvent('popup');
    await certificateLink.click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL(certificate.urlLink);
  });
  test('visitor can see the Certificate page contents', async ({ page }) => {
    await page.goto('/certificates');
    const heading = page.getByRole('heading', { name: /^certificates$/i });
    await expect(heading).toBeVisible();
    const description = page.getByText(
      /^list of all my professional certifications to date.$/i,
    );
    await expect(description).toBeVisible();
  });
});
