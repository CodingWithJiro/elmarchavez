import { test, expect } from '@playwright/test';
import { projectList } from '@/data/project-list';

test.describe('Projects', () => {
  test('visitor can see the Project section', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { name: /^projects$/i });
    await expect(heading).toBeVisible();
  });
  test('visitor can open a project in a new tab', async ({ page }) => {
    await page.goto('/');
    const link = page.getByRole('link', {
      name: /javascript fundamentals/i,
    });
    const project = projectList.find(
      ({ title }) => title === 'JavaScript Fundamentals',
    )!;
    expect(project).toBeDefined();
    const newPagePromise = page.waitForEvent('popup');
    await link.click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL(project.siteUrl);
  });
  test('visitor can view the Projects page', async ({ page }) => {
    await page.goto('/');
    const viewAllLink = page.locator('a[href="/projects"]');
    await viewAllLink.click();
    await expect(page).toHaveURL('/projects');
  });
});
