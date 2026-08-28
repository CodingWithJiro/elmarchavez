import { test, expect } from '@playwright/test';
import { blogList } from '@/data/blog-list';

test.describe('Blog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('visitor can see the Blog section', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /^blog$/i });
    await expect(heading).toBeVisible();
  });
  test('blog article link has correct href', async ({ page }) => {
    const blog = blogList[0];
    expect(blog).toBeDefined();
    const link = page.getByRole('link', {
      name: `Read more about ${blog.title}`,
    });
    await expect(link).toHaveAttribute('href', blog.blogUrl);
  });
  test('visitor can view the Blog page', async ({ page }) => {
    await page.goto('/blog');
    const heading = page.getByRole('heading', { name: /^blog$/i });
    await expect(heading).toBeVisible();
  });
  test('visitor can view a blog article', async ({ page }) => {
    const blog = blogList[0];
    expect(blog).toBeDefined();
    await page.goto(blog.blogUrl);
    const blogTitle = page.getByRole('heading', { name: blog.title });
    await expect(blogTitle).toBeVisible();
  });
});
