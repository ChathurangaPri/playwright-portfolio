import {test, expect, Locator} from "@playwright/test";

test("Verify title", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");
    //page.getByTitle("Demo Web Shop");

    // absolute xpath locator
    const logo: Locator = page.locator("//html/body/div[4]/div/div/div/a/img");
    await expect(logo).toBeVisible();

    // Relative xpath
    const relativeLogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();
})