import { test, expect } from "@playwright/test";

test.describe("Mobile menu @ 390px", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("open, navigate, close, scroll lock", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    const menuBtn = page.getByRole("button", { name: /^Menu$/ });
    const menu = page.locator("#mobile-menu");

    await menuBtn.click();
    await expect(menu).toHaveAttribute("aria-hidden", "false");
    await expect(page.locator("body")).toHaveCSS("overflow", "hidden");

    await page.locator('#mobile-menu a[href="#skills"]').click();
    await expect(page.locator("#skills")).toBeInViewport();
    await expect(menu).toHaveAttribute("aria-hidden", "true");

    await menuBtn.click();
    await expect(menu).toHaveAttribute("aria-hidden", "false");
    await page.keyboard.press("Escape");
    await expect(menu).toHaveAttribute("aria-hidden", "true");
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  });
});
