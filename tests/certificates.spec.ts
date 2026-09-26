import { test, expect } from '@playwright/test';
import { certificates, CERTIFICATES } from '@/data/experiences';

test.describe('Certificates', () => {
  test('visitor can see the Certificates section', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { name: /^certificates$/i });
    await expect(heading).toBeVisible();
  });
  test('visitor can view the Certificates page', async ({ page }) => {
    await page.goto('/');
    const viewAllLink = page.locator('a[href="/certificates"]');
    await viewAllLink.click();
    await expect(page).toHaveURL('/certificates');
  });
  test('visitor can open certificate link in a new tab', async ({ page }) => {
    await page.goto('/');
    const certificate = certificates[0];
    const certificateLink = page.getByRole('link', {
      name: `Open ${certificate.title} certificate`,
    });
    const newPagePromise = page.waitForEvent('popup');
    await certificateLink.click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL(certificate.urlLink);
  });
  test('visitor can see the Certificates page contents', async ({ page }) => {
    await page.goto('/certificates');
    const heading = page.getByRole('heading', { name: /^certificates$/i });
    await expect(heading).toBeVisible();
    const description = page.getByText(
      /^list of all my professional certifications to date.$/i,
    );
    await expect(description).toBeVisible();
  });
  test('visitor can see the latest certificate entry in Certificates page', async ({
    page,
  }) => {
    await page.goto('/certificates');
    const latestCertificate = CERTIFICATES.at(-1)!;
    const { title, urlLink } = latestCertificate;
    const heading = page.getByRole('heading', { name: title });
    await expect(heading).toBeVisible();
    const link = page.getByRole('link', {
      name: `See Elmar Chavez's ${title} certificate in new tab`,
    });
    await expect(link).toHaveAttribute('href', urlLink);
  });
  test('visitor can open the latest certificate link in new tab', async ({
    page,
  }) => {
    await page.goto('/certificates');
    const latestCertificate = CERTIFICATES.at(-1)!;
    const { title, urlLink } = latestCertificate;
    const link = page.getByRole('link', {
      name: `See Elmar Chavez's ${title} certificate in new tab`,
    });
    const newPagePromise = page.waitForEvent('popup');
    await link.click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL(urlLink);
  });
  test('visitor can view enlarged image of the latest certificate entry', async ({
    page,
  }) => {
    await page.goto('/certificates');
    const latestCertificate = CERTIFICATES.at(-1)!;
    const { title, urlLink } = latestCertificate;
    const imageButton = page.getByRole('button', {
      name: `Enlarge and view ${title} certificate.`,
    });
    await imageButton.click();
    const closeButton = page.getByRole('button', { name: /close/i });
    await expect(closeButton).toBeVisible();
  });
});
