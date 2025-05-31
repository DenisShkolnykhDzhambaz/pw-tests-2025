import { chromium, test } from "@playwright/test"

test('Launch Browser', async () => {
    const browser = await chromium.launch({
        // When we don't indicate it in the playwright.config.ts.
        headless: false,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/docs/intro');
    // Waiting for 3 sec to check the page loading.
    await page.waitForTimeout(3000);
    await browser.close();
})