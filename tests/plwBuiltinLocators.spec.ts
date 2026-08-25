// await has to be used only if the statement return a promise or do an action if not it is not needed ex:Line 09
// getByAltText() returns a locator so it has to be saved in a type called Locator which is a fixture
// Locator fixture has to be imported

import {test, expect, Locator} from "@playwright/test";

// Locate by alt text of images
/* test("Verify Playwright Locators", async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/");
    const logo: Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();
}) */

// Locate by visible text - When elemens are non-interactive
/* test("Verify by Visible Text", async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/");
    // Full text
    await expect(page.getByText("Welcome to our store")).toBeVisible();
    // Partial text
    await expect(page.getByText("Welcome to")).toBeVisible();
    // With regular expression \s means a space + concat i means case insensitive
    await expect(page.getByText(/Welcome\s+to\s+our\s+store/i)).toBeVisible();
}) */

// Locate by Role - When elemens are interactive
/* test("Verify by Role", async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/");
    expect(await page.getByRole("link", {name:'Register'}).click());
    expect(page.getByRole("heading",{name:'Register'})).toBeVisible();
}) */

// Locate by Label
/* test("Verify by Label", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    expect(await page.getByLabel("Email Address:").fill("Chathu@gmail.com"));
}) */

// Locate by placeholder
/* test("Verify by Placeholder", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await page.getByPlaceholder("Enter your full name").fill("Chathu");
}) */

// Locate by Title
/* test("Verify by Placeholder", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page.getByTitle("Home page link")).toHaveText("Home");
    // await expect(page.getByText("HyperText Markup Language")).toHaveText(/HTML/i);
}) */

// Locate by testID
test("Verify by testid", async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    //await page.goto("http://127.0.0.1:5500/App.html");
    await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
})