import { test, expect } from '@playwright/test';
import { projectList } from '@/data/project-list';

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
