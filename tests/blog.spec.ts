import { test, expect } from '@playwright/test';
import { blogList } from '@/data/blog-list';

test.describe('Blog', () => {
  test('visitor can see the Blog section', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { name: /^blog$/i });
    await expect(heading).toBeVisible();
  });
  test('blog article link has correct href', async ({ page }) => {
    await page.goto('/');
    const blog = blogList[0];
    expect(blog).toBeDefined();
    const link = page.getByRole('link', {
      name: `Read more about ${blog.title}`,
    });
    await expect(link).toHaveAttribute('href', blog.blogUrl);
  });
  test('visitor can view the Blog page', async ({ page }) => {
    await page.goto('/');
    const viewAllLink = page.locator('a[href="/blog"]');
    await viewAllLink.click();
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
  test('visitor can see a blog article item on the Blog page', async ({
    page,
  }) => {
    const blog = blogList[0];
    expect(blog).toBeDefined();
    await page.goto('/blog');
    const heading = page.getByRole('heading', { name: blog.title });
    const description = page.getByText(blog.description);
    await expect(heading).toBeVisible();
    await expect(description).toBeVisible();
  });
  test('visitor sees the Blog not found page for an invalid article', async ({
    page,
  }) => {
    await page.goto('/blog/this-article-does-not-exist');
    const heading = page.getByRole('heading', { name: /^blog not found$/i });
    const description = page.getByText(/^seems like this file doesn't exist/i);
    await expect(heading).toBeVisible();
    await expect(description).toBeVisible();
  });
  test('visitor can go back to Home page when clicking the home link in breadcrumb', async ({
    page,
  }) => {
    await page.goto('/blog');
    const homeLink = page.getByRole('link', { name: /home/i });
    await homeLink.click();
    await expect(page).toHaveURL('/');
  });
  test('visitor can go back to Home page from an article page', async ({
    page,
  }) => {
    const blogMeta = blogList[0];
    await page.goto(blogMeta.blogUrl);
    const homeLink = page.getByRole('link', { name: /^home$/i });
    await homeLink.click();
    await expect(page).toHaveURL('/');
  });
  test('visitor can go back to Blog page from an article page', async ({
    page,
  }) => {
    const blogMeta = blogList[0];
    await page.goto(blogMeta.blogUrl);
    const blogLink = page.getByRole('link', { name: /^blog$/i });
    await blogLink.click();
    await expect(page).toHaveURL('/blog');
  });
  test('visitor can go back to Blog page from an article page using Read more articles link', async ({
    page,
  }) => {
    const blogMeta = blogList[0];
    await page.goto(blogMeta.blogUrl);
    const blogLink = page.getByRole('link', { name: /read more articles/i });
    await blogLink.click();
    await expect(page).toHaveURL('/blog');
  });
  test('visitors can go back to homepage using the Back to homepage link', async ({
    page,
  }) => {
    const blogMeta = blogList[0];
    await page.goto(blogMeta.blogUrl);
    const backToHomeLink = page.getByRole('link', {
      name: /back to homepage/i,
    });
    await backToHomeLink.click();
    await expect(page).toHaveURL('/');
  });
});
