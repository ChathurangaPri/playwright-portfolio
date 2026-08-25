import {test,expect,Locator} from "@playwright/test";

test("Verify CSS LOcators ID", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");

    // ID attribute - tag#id or #id
    await expect(page.locator("input#small-searchterms")).toBeVisible();
    await page.locator("#small-searchterms").fill("tshirt");
    // await page.locator("#small-searchterms").fill("tshirt");
    // await page.waitForTimeout(5000); // To see the exact actions in the headed mode gave a 5s timeout otherwise it is too fast

    // Class attribute - tag.class or .class
    await expect(page.locator("input.search-box-text")).toBeVisible();
    await page.locator(".search-box-text").fill("Watch");
    // await page.waitForTimeout(5000);

    // Attribute - tag[attribute="value"] or [attribute=value]
    await expect(page.locator("input[name=\"q\"]")).toBeVisible();
    await page.locator("[name=q]").fill("Denim");
    // await page.waitForTimeout(5000);

    // tag.class Attribute - tag.class[attribute="value"] or .class[attribute=value]
    await expect(page.locator("input.search-box-text[name=q]")).toBeVisible();
    await page.locator(".search-box-text[name=q]").fill("Blouse");
    await page.waitForTimeout(5000);
})