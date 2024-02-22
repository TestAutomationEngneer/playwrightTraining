import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/My Shop/);
});
