import { test, expect } from '@playwright/test';
import { certificates } from '@/data/experiences';

test('visitor can open certificate link in a new tab', async ({ page }) => {
  await page.goto('/');
  const link = page.getByRole('link', { name: /relational databases/i });
  const certificate = certificates.find(
    ({ title }) => title === 'Relational Databases',
  )!;
  expect(certificate).toBeDefined();
  const newPagePromise = page.waitForEvent('popup');
  await link.scrollIntoViewIfNeeded();
  await link.click();
  const newPage = await newPagePromise;
  await expect(newPage).toHaveURL(certificate.urlLink);
});
