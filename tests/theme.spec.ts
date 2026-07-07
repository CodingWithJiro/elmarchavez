import { test, expect } from '@playwright/test';

test('visitor can open theme menu', async ({ page }) => {
  await page.goto('/');
  const themeButton = page.getByRole('button', { name: /toggle theme/i });
  await themeButton.click();
  await expect(page.getByRole('menuitem', { name: /dark/i })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: /light/i })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: /system/i })).toBeVisible();
});
