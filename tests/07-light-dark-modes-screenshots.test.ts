import { test, expect } from "@playwright/test";

test.describe("Light and dark modes switch tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });
  
  const lightModes =  ["light", "dark"];

  test("Switch between light and dark modes assertion", async ({ page }) => {
    await expect(page.locator("html")).toHaveAttribute(
      "data-theme-choice",
      "system"
    );
    await page
      .getByRole("button", { name: "Switch between dark and light" })
      .click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await page
      .getByRole("button", { name: "Switch between dark and light" })
      .click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  });

  // Using of the .toHaveScreenshot() method to check switching beetwen light and dark modes.
    lightModes.forEach((value) => {
    test(`Active ${value} mode styles checking`, async ({ page }) => {
      await page.evaluate((value) => {
        document.querySelector("html")?.setAttribute("data-theme", value);
      }, value);
      await expect(page).toHaveScreenshot(`page-view-${value}-mode.png`);
    });
  });
});
