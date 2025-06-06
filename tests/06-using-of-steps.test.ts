import { test, expect, Page, Locator } from "@playwright/test";

interface Elements {
	locator: (page: Page) => Locator;
	elementName: string;
	text?: string;
	attribute?: {
		type: string;
		value: string;
	};
}

const elements: Elements[] = [
  {
    locator: (page: Page): Locator =>
      page.getByRole("link", { name: "Playwright logo Playwright" }),
    elementName: "Playwright logo link",
    text: "Playwright",
    attribute: {
      type: "href",
      value: "/",
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole("link", { name: "Docs" }),
    elementName: "Docs link",
    text: "Docs",
    attribute: {
      type: "href",
      value: "/docs/intro",
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole("link", { name: "API" }),
    elementName: "API link",
    text: "API",
    attribute: {
      type: "href",
      value: "/docs/api/class-playwright",
    },
  },
  {
    locator: (page: Page): Locator =>
      page.getByRole("button", { name: "Node.js" }),
    elementName: "Node.js btn",
    text: "Node.js",
  },
  {
    locator: (page: Page): Locator =>
      page.getByRole("link", { name: "Community" }),
    elementName: "Community link",
    text: "Community",
    attribute: {
      type: "href",
      value: "/community/welcome",
    },
  },
  {
    locator: (page: Page): Locator =>
      page.getByRole("link", { name: "GitHub repository" }),
    elementName: "GitHub repository link",
    attribute: {
      type: "href",
      value: "https://github.com/microsoft/playwright",
    },
  },
  {
    locator: (page: Page): Locator =>
      page.getByRole("link", { name: "Discord server" }),
    elementName: "Discord server link",
    attribute: {
      type: "href",
      value: "https://aka.ms/playwright/discord",
    },
  },
  {
    locator: (page: Page): Locator =>
      page.getByRole("button", {
        name: "Switch between dark and light",
      }),
    elementName: "Lightmode btn",
  },
  {
    locator: (page: Page): Locator =>
      page.getByRole("button", { name: "Search (Ctrl+K)" }),
    elementName: "Search btn",
    text: "Search",
  },
];

test.describe("Main page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });
  test("Header elements visibility assertion", async ({ page }) => {
    elements.forEach(({ locator, elementName }) => {
      test.step(`${elementName} visibility assertion`, async () => {
        await expect(locator(page)).toBeVisible();
      });
    });
  });

  test("Header elements naming assertion", async ({ page }) => {
    elements.forEach(({ locator, elementName, text }) => {
      if (text) {
        test.step(`${elementName} element name assertion`, async () => {
          await expect(locator(page)).toContainText(text);
        });
      }
    });
  });
  test('Atributes "href" values assertion', async ({ page }) => {
    elements.forEach(({ locator, elementName, attribute }) => {
      if (attribute) {
        test.step(`${elementName} "href" attribute value assertion`, async () => {
          await expect(locator(page)).toHaveAttribute(
            attribute.type,
            attribute.value
          );
        });
      }
    });
  });
});
