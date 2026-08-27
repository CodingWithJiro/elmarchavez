import { test, expect } from '@playwright/test';
import { blogList } from '@/data/blog-list';

test('blog article link has correct href', async ({ page }) => {
  await page.goto('/');
  const blog = blogList[0];
  expect(blog).toBeDefined();
  const link = page.getByRole('link', {
    name: `Read more about ${blog.title}`,
  });
  await expect(link).toHaveAttribute('href', blog.blogUrl);
});
