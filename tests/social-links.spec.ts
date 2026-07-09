import { test, expect } from '@playwright/test';

test.describe('Social Links', () => {
  test.beforeEach(({ page }) => {
    page.goto('/');
  });
  test('visitor can open a hero social link in a new tab', async ({ page }) => {
    const hero = page.getByRole('banner');
    const link = hero.getByRole('link', { name: /visit my github profile/i });
    const newPagePromise = page.waitForEvent('popup');
    await link.click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL('https://github.com/CodingWithJiro');
  });
  test('visitor can open a footer social link in a new tab', async ({
    page,
  }) => {
    const footer = page.getByRole('contentinfo');
    const link = footer.getByRole('link', { name: /visit my github profile/i });
    const newPagePromise = page.waitForEvent('popup');
    await link.click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL('https://github.com/CodingWithJiro');
  });
});
