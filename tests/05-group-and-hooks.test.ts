import { test, expect } from '@playwright/test';

// A group of tests creation.
test.describe('Main page tests', () => {
    // Adding of .beforeEach() hook.
    test.beforeEach(async({ page }) => {
        await page.goto('https://playwright.dev/');
    })

    test('Header elements visibility assertion', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Community' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Search (Ctrl+K)' })).toBeVisible();
    });

    test('Header elements naming assertion', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText('Playwright');
        await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
        await expect(page.getByRole('link', { name: 'API' })).toContainText('API');
        await expect(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
        await expect(page.getByRole('link', { name: 'Community' })).toContainText('Community');
        await expect(page.getByLabel('Search (Ctrl+K)')).toContainText('Search');
    });

    test('Atributes "href" values assertion', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toHaveAttribute('href', '/');
        await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
        await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute('href', '/docs/api/class-playwright');
        await expect(page.getByRole('link', { name: 'Community' })).toHaveAttribute('href', '/community/welcome');
        await expect(page.getByRole('link', { name: 'GitHub repository' })).toHaveAttribute('href', 'https://github.com/microsoft/playwright');
        await expect(page.getByRole('link', { name: 'Discord server' })).toHaveAttribute('href', 'https://aka.ms/playwright/discord');
    });

    test('Switch between light and dark mode assertion', async({ page }) => {
        await expect(page.locator('html')).toHaveAttribute('data-theme-choice', 'system');
        await page.getByRole('button', { name: 'Switch between dark and light' }).click();
        await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
        await page.getByRole('button', { name: 'Switch between dark and light' }).click();
        await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    });

    test('ToContainText assertion regarding an h1 element', async({ page }) => {
        await expect.soft(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
        await expect.soft(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
    });

    test('ToContainText assertion concerning a div element', async({ page }) => {
        await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
        // await expect.soft(page.getByRole('banner')).toContainText('Get started');
        await expect.soft(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
        await expect.soft(page.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', '/docs/intro');
    });

});