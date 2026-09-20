import { WORK_EXPERIENCES } from '@/data/experiences';
import { WorkExperience } from '@/types/experience';
import { test, expect } from '@playwright/test';

test.describe('Experience', () => {
  test('visitor can see the Experience section', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { name: /^experience$/i });
    await expect(heading).toBeVisible();
  });
  test('visitor can view the Experience page', async ({ page }) => {
    await page.goto('/');
    const viewAllLink = page.locator('a[href="/experience"]');
    await viewAllLink.click();
    await expect(page).toHaveURL('/experience');
  });
  test('visitor can see the Experience page contents', async ({ page }) => {
    await page.goto('/experience');
    const heading = page.getByRole('heading', { name: /^experience$/i });
    await expect(heading).toBeVisible();
    const description = page.getByText(
      /^my professional experience as a software engineer.$/i,
    );
    await expect(description).toBeVisible();
  });
  test('visitor can see the latest work experience in Experience page', async ({
    page,
  }) => {
    await page.goto('/experience');
    const latestWorkExperience: WorkExperience = WORK_EXPERIENCES.at(-1)!;
    const { position, companyName, companyUrl, location } =
      latestWorkExperience;
    const heading = page.getByRole('heading', { name: position }).first();
    await expect(heading).toBeVisible();
    const companyLink = page.getByRole('link', {
      name: `Open ${companyName}'s official website to new tab.`,
    });
    await expect(companyLink).toBeVisible();
    await expect(companyLink).toHaveAttribute('href', companyUrl);
    const companyLocation = page.getByText(location);
    await expect(companyLocation).toBeVisible();
  });
  test('visitor can view a company website in new tab', async ({ page }) => {
    await page.goto('/experience');
    const latestWorkExperience: WorkExperience = WORK_EXPERIENCES.at(-1)!;
    const { companyUrl, companyName } = latestWorkExperience;
    const companyLink = page.getByRole('link', {
      name: `Open ${companyName}'s official website to new tab.`,
    });
    const newPagePromise = page.waitForEvent('popup');
    await companyLink.click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL(companyUrl);
  });
});
