import { test, expect } from '@playwright/test';

test.describe('Theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('visitor can open theme menu', async ({ page }) => {
    const themeButton = page.getByRole('button', { name: /toggle theme/i });
    await themeButton.click();
    await expect(page.getByRole('menuitem', { name: /dark/i })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: /light/i })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: /system/i })).toBeVisible();
  });
  test('visitor can switch to dark theme', async ({ page }) => {
    const themeButton = page.getByRole('button', { name: /toggle theme/i });
    await themeButton.click();
    const darkOption = page.getByRole('menuitem', { name: /dark/i });
    await darkOption.click();
    const root = page.locator('html');
    await expect(root).toHaveClass(/dark/);
    await page.reload();
    await expect(root).toHaveClass(/dark/);
  });
  test('visitor can switch to light theme', async ({ page }) => {
    const themeButton = page.getByRole('button', { name: /toggle theme/i });
    await themeButton.click();
    const lightOption = page.getByRole('menuitem', { name: /light/i });
    await lightOption.click();
    const root = page.locator('html');
    await expect(root).not.toHaveClass(/dark/);
    await page.reload();
    await expect(root).not.toHaveClass(/dark/);
  });
});
