import { test, expect } from "@playwright/test";
import path from "path";

const QA_DIR = path.join("tests", "artifacts", "qa");
const PREFIX = process.env.QA_PREFIX ?? "after";

const VIEWPORTS = [
  { label: "1440x900", width: 1440, height: 900 },
  { label: "1024x768", width: 1024, height: 768 },
  { label: "768x1024", width: 768, height: 1024 },
  { label: "390x844", width: 390, height: 844 },
] as const;

const SECTIONS = ["hero", "about", "skills", "domains", "work", "experience", "contact"] as const;

for (const vp of VIEWPORTS) {
  test.describe(`QA ${vp.label}`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    test("layout, assets, nav, sections", async ({ page }) => {
      const consoleErrors: string[] = [];
      const failedRequests: string[] = [];

      page.on("console", (msg) => {
        if (msg.type() === "error") consoleErrors.push(msg.text());
      });
      page.on("response", (res) => {
        const url = res.url();
        if (res.status() >= 400 && !url.includes("favicon")) {
          failedRequests.push(`${res.status()} ${url}`);
        }
      });

      await page.goto("/");
      await page.waitForLoadState("networkidle");

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1,
      );
      expect(overflow, "horizontal scroll").toBe(false);

      const video = page.locator("#hero video");
      if (await video.count()) {
        const src = await video.getAttribute("src");
        expect(src).toContain("/talking-portfolio/media/intro.mp4");
        const poster = await video.getAttribute("poster");
        expect(poster).toContain("/talking-portfolio/media/intro-poster");
      }

      const portrait = page.locator('#about img[src*="portrait-bust"]');
      await expect(portrait).toBeVisible();

      const isDesktop = vp.width >= 768;
      const desktopNav = page.locator('header nav[aria-label="Primary"]');
      const menuBtn = page.getByRole("button", { name: /^(Menu|Close)$/ });

      if (isDesktop) {
        await expect(desktopNav).toBeVisible();
        await expect(menuBtn).toBeHidden();
      } else {
        await expect(menuBtn).toBeVisible();
      }

      if (!isDesktop) {
        await menuBtn.click();
        await expect(page.locator("#mobile-menu")).toHaveAttribute("aria-hidden", "false");
        await page.locator('#mobile-menu a[href="#contact"]').click();
        await expect(page.locator("#contact")).toBeInViewport();
        await menuBtn.click();
      }

      for (const id of SECTIONS) {
        const el = page.locator(`#${id}`);
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(250);
        await page.screenshot({
          path: path.join(QA_DIR, `${PREFIX}-${vp.label}-${id}.png`),
          fullPage: false,
        });
      }

      await page.screenshot({
        path: path.join(QA_DIR, `${PREFIX}-${vp.label}-full.png`),
        fullPage: true,
      });

      expect(failedRequests, "failed network").toEqual([]);
      expect(consoleErrors.filter((e) => !e.includes("favicon")), "console errors").toEqual([]);
    });
  });
}
