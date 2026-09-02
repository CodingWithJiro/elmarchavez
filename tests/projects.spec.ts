import { test, expect } from '@playwright/test';
import { projectList, PROJECTS } from '@/data/project-list';

test.describe('Projects', () => {
  test('visitor can see the Project section', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { name: /^projects$/i });
    await expect(heading).toBeVisible();
  });
  test('visitor can open a project in a new tab', async ({ page }) => {
    await page.goto('/');
    const project = projectList[0];
    const link = page.getByRole('link', {
      name: project.title,
    });
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
  test('visitor can see the Projects page', async ({ page }) => {
    await page.goto('/projects');
    const heading = page.getByRole('heading', { name: /^projects$/i });
    await expect(heading).toBeVisible();
    const description = page.getByText(/^things i built and worked on.$/i);
    await expect(description).toBeVisible();
    const viewAllProjects = page.getByRole('link', {
      name: /^view all projects$/i,
    });
    await expect(viewAllProjects).toBeVisible();
  });
  test('visitor can open a project website from projects page', async ({
    page,
  }) => {
    await page.goto('/projects');
    const project = PROJECTS[0];
    const projectLink = page.getByRole('link', {
      name: `Go to ${project.title}'s live website.`,
    });
    const newPagePromise = page.waitForEvent('popup');
    await projectLink.click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL(project.siteUrl);
  });
  test('visitor can open a project GitHub repository link from projects page', async ({
    page,
  }) => {
    await page.goto('/projects');
    const project = PROJECTS[0];
    const githubLink = page.getByRole('link', {
      name: `Go to ${project.title}'s GitHub repository.`,
    });
    const newPagePromise = page.waitForEvent('popup');
    await githubLink.click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL(project.githubUrl);
  });
  test('visitor can return to homepage via Back to homepage link', async ({
    page,
  }) => {
    await page.goto('/projects');
    const homeLink = page.getByRole('link', { name: /^back to homepage$/i });
    await expect(homeLink).toHaveAttribute('href', '/');
    await homeLink.click();
    await expect(page).toHaveURL('/');
  });
});
