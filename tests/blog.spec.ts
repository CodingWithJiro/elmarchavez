import { test, expect } from '@playwright/test';
import { blogList } from '@/data/blog-list';

test('visitor can open a blog link in a new tab', async ({ page }) => {
  await page.goto('/');
  const blog = blogList[0];
  expect(blog).toBeDefined();
  const link = page.getByRole('link', {
    name: `Read more about ${blog.title}`,
  });
  const newPagePromise = page.waitForEvent('popup');
  await link.click();
  const newPage = await newPagePromise;
  await expect(newPage).toHaveURL(blog.blogUrl);
});
