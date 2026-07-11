import type { Page, Locator } from '@playwright/test';

export async function tabUntilFocused(
  page: Page,
  element: Locator,
  name: string,
): Promise<void> {
  for (let tries = 0; tries < 50; tries++) {
    const isFocused = await element.evaluate(
      (e) => e === document.activeElement,
    );
    if (isFocused) return;
    await page.keyboard.press('Tab');
  }

  throw new Error(`Unable to reach ${name} after 50 Tab presses.`);
}
