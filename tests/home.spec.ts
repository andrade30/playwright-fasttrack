import { test, expect } from '@playwright/test';

test('Aplicação deve estar no ar', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Account Login');
});
