import {test, expect, Locator} from "@playwright/test";

test("Verify title", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");
    //page.getByTitle("Demo Web Shop");

    /* // absolute xpath locator
    const logo: Locator = page.locator("//html/body/div[4]/div/div/div/a/img");
    await expect(logo).toBeVisible();

    // Relative xpath
    const relativeLogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible(); */

    // contains
    let products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
    const count: number =await products.count();
    expect(count).toBeGreaterThan(0);

    /* console.log(await products.nth(1).textContent());
    console.log(await products.allTextContents());
    
    // await products.click(); // error: strict mode violation - due to performing action on group of objects
    await products.nth(1).click();
    await page.goBack();

    // starts-with()
    const buildingproducts = page.locator("//h2/a[starts-with(@href,'/build')]");
    const couns:number = await buildingproducts.count();
    expect(couns).toBeGreaterThan(0);
    expect(couns).toBe(3);

    // text()
    let registerLink =  page.locator("//a[text()='Register']");
    await expect(registerLink).toBeVisible(); */

    // xpath with last
    // let wishList= page.locator("//div[@class='column my-account']/li").last();
    /* const wishListText:String= await page.locator("//div[@class='column my-account']/li[last()]").textContent();
    expect(wishListText).toBe("Wishlist"); */

    // xpath with position
    const link;String = await page.locator("//div[@class='column my-account']/ul/li[position()=3]").textContent();
    expect(link).toBe("Addresses");
})