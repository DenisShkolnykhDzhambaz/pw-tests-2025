import { test, expect } from '@playwright/test';

test('Switch between light and dark mode assertion', async({ page }) => {
  page.goto('https://playwright.dev/');
  await expect(page.locator('html')).toHaveAttribute('data-theme-choice', 'system');
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('Switch between light and dark mode assertion, ver.2', async({ page }) => {
  page.goto('https://playwright.dev/');
  const locator = page.locator('button[class="clean-btn toggleButton_gllP"]');
  await expect(locator).toHaveAttribute('aria-label', 'Switch between dark and light mode (currently system mode)');
  await page.click('button[class="clean-btn toggleButton_gllP"]');
  await expect(locator).toHaveAttribute('aria-label', 'Switch between dark and light mode (currently light mode)');
  await page.click('button[class="clean-btn toggleButton_gllP"]');
  await expect(locator).toHaveAttribute('aria-label', 'Switch between dark and light mode (currently dark mode)');
});