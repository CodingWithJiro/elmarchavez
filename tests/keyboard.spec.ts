import { test, expect } from '@playwright/test';
import { tabUntilFocused } from './utils/keyboard';
import { projectList } from '@/data/project-list';
import { blogList } from '@/data/blog-list';
import { certificates } from '@/data/experiences';

test.describe('Keyboard Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('visitor tabs into skip link first', async ({ page, browserName }) => {
    test.skip(
      browserName === 'webkit',
      'WebKit on Windows does not focus the skip link on initial Tab.',
    );
    const skipLink = page.getByRole('link', { name: /skip to main content/i });
    await page.keyboard.press('Tab');
    await expect(skipLink).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#main$/);
  });
  test('visitor can tab into theme toggle and open theme options', async ({
    page,
  }) => {
    const themeToggle = page.getByRole('button', { name: /toggle theme/i });
    await tabUntilFocused(page, themeToggle, 'Theme Toggle');
    await expect(themeToggle).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('menuitem', { name: /dark/i })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: /light/i })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: /system/i })).toBeVisible();
  });
  test('visitor can tab into a project and open it in a new tab', async ({
    page,
    browserName,
  }) => {
    test.skip(
      browserName === 'webkit',
      'WebKit on Windows does not traverse focus order correctly.',
    );
    const project = projectList[0];
    const link = page.getByRole('link', { name: project.title });
    await tabUntilFocused(page, link, 'First Project');
    await expect(link).toBeFocused();
    const newPagePromise = page.waitForEvent('popup');
    await page.keyboard.press('Enter');
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL(project.siteUrl);
  });
  test('visitor can tab to a hero social link and open in a new tab', async ({
    page,
    browserName,
  }) => {
    test.skip(
      browserName === 'webkit',
      'WebKit on Windows does not traverse focus order correctly.',
    );
    const hero = page.locator('header');
    const link = hero.getByRole('link', { name: /visit my github profile/i });
    await tabUntilFocused(page, link, 'GitHub Link');
    await expect(link).toBeFocused();
    const newPagePromise = page.waitForEvent('popup');
    await page.keyboard.press('Enter');
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL('https://github.com/CodingWithJiro');
  });
  test('visitor can tab to a footer social link and open in a new tab', async ({
    page,
    browserName,
  }) => {
    test.skip(
      browserName === 'webkit',
      'WebKit on Windows does not traverse focus order correctly.',
    );
    const footer = page.locator('footer');
    const link = footer.getByRole('link', { name: /visit my github profile/i });
    await tabUntilFocused(page, link, 'GitHub Link');
    await expect(link).toBeFocused();
    const newPagePromise = page.waitForEvent('popup');
    await page.keyboard.press('Enter');
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL('https://github.com/CodingWithJiro');
  });
  test('visitor can tab to blog link and open in a new tab', async ({
    page,
    browserName,
  }) => {
    test.skip(
      browserName === 'webkit',
      'WebKit on Windows does not traverse focus order correctly.',
    );
    const blog = blogList[0];
    const link = page.getByRole('link', { name: blog.title });
    await tabUntilFocused(page, link, blog.title);
    expect(link).toBeFocused();
    const newPagePromise = page.waitForEvent('popup');
    await page.keyboard.press('Enter');
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL(blog.blogUrl);
  });
  test('visitor can tab to a certificate link and open in a new tab', async ({
    page,
    browserName,
  }) => {
    test.skip(
      browserName === 'webkit',
      'WebKit on Windows does not traverse focus order correctly.',
    );
    const certificate = certificates[0];
    const link = page.getByRole('link', { name: certificate.title });
    await tabUntilFocused(page, link, certificate.title);
    expect(link).toBeFocused();
    const newPagePromise = page.waitForEvent('popup');
    await page.keyboard.press('Enter');
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL(certificate.urlLink);
  });
});
