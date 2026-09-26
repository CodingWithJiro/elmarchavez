import { test, expect } from '@playwright/test';
import { certificates } from '@/data/experiences';

test.describe('Certificates', () => {
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
});
