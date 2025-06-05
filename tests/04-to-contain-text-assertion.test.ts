import { test, expect } from '@playwright/test'

test('ToContainText assertion regarding an h1 element', async({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect.soft(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
});

test('ToContainText assertion concerning a div element', async({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    // await expect.soft(page.getByRole('banner')).toContainText('Get started');
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', '/docs/intro');
});