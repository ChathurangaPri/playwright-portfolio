import {test,expect} from "@playwright/test"

test("Verify page url", async ({page}) => {

    await page.goto("https://www.udemy.com/");

    let url:string = await page.url();
    console.log(url);

    await expect(page).toHaveURL("https://www.udemy.com/");
    
})