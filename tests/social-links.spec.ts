import { test, expect } from '@playwright/test';

test('visitor can open a hero social link in a new tab', async ({ page }) => {
  await page.goto('/');
  const hero = page.getByRole('banner');
  const link = hero.getByRole('link', { name: /visit my github profile/i });
  const newPagePromise = page.waitForEvent('popup');
  await link.click();
  const newPage = await newPagePromise;
  await expect(newPage).toHaveURL('https://github.com/CodingWithJiro');
});
