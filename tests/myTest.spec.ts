import {test, expect} from "@playwright/test";

/* test case syntax
test("title", () => {

}) */

// Fixture - Are global variables accessible throughout the whole TS file
// Normally page, browser are fixtures

test("Verify page title", async ({page}) => {
    await page.goto("https://www.udemy.com/");
    let title:string =  await page.title();
    console.log(title);
    await expect(page).toHaveTitle("Udemy: Online Courses for Skills, Careers & AI");

})

