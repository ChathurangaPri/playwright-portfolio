import {test, expect, Locator} from "@playwright/test"

test.beforeEach(async({page}) => {
    await page.goto("https://sdetqa.vercel.app/filters_practice")
})

test("Verify product 2", async({page}) => {
    
    const addButton = page.getByRole("listitem")
    .filter({hasText: "Product 2"})
    .getByRole("button", {name: "Add to cart"})
    

    await expect(addButton).toBeVisible()
})

test("Products not having out of stock", async({page}) => {
    const products =  page.locator(".card").nth(1)
    .getByRole("listitem")
    .filter({hasNotText: "Out of stock"})

    await expect(products).toHaveCount(3)
})

test("By testid", async ({page}) => {
    await page.getByTestId("apple").click()
    await expect(page.getByTestId("apple")).toBeVisible()
})

test("test id count", async({page}) => {
    const testidElements = page.locator('[data-testid]')
    const firstElement = testidElements.first()
    const lastElement = testidElements.last()
    const nthElement = testidElements.nth(3)

    console.log("Elements", await firstElement.innerText(), await lastElement.innerText(), await nthElement.innerText())

    await expect(testidElements).toHaveCount(5)
})

test("Find john and click goodbye button", async({page}) => {
    const goodbyeButton = page.getByRole("listitem")
    .filter({hasText: "👤 John"})
    .getByRole("button", {name: "Say goodbye"})

    await expect(goodbyeButton).toBeVisible()
    await expect(goodbyeButton).toContainText("Say")
})

test("Find subscribe button using multiple conditions", async({page}) => {
    const subscribeButton = page.getByRole("button")
    .and(page.getByTitle("Subscribe", {exact: true}))

    await expect(subscribeButton).toHaveCount(2)
    await expect(subscribeButton.first()).toBeVisible()
    await expect(subscribeButton.last()).toBeVisible()
})

test("Find details button using filter combo", async({page}) => {
    const detailButton = page.getByRole("listitem")
    .filter({hasText: "Done"})
    .filter({hasText: "details"})

    await expect(detailButton).toHaveCount(2)
    await expect(detailButton.first()).toBeVisible()
    await expect(detailButton.last()).toBeVisible()
})

test("Verify stock status count", async({page}) => {
    const productsStock = page.getByRole("listitem")
    .filter({hasText: "In stock"})
    .or(page.getByRole("listitem")
    .filter({hasText: "Out of stock"}))

    await expect(productsStock).toHaveCount(5)
    await expect(productsStock.filter({hasText: "In stock"})).toHaveCount(3)
    await expect(productsStock.filter({hasText: "Out of stock"})).toHaveCount(2)

    const productsInStock = page.getByRole("listitem")
    .filter({hasText: "In stock"})

    const productsOutofStock = page.getByRole("listitem")
    .filter({hasText: "Out of stock"})

    await expect(productsInStock).toHaveCount(3)
    await expect(productsOutofStock).toHaveCount(2)
    
    
})

    
    

    

test.afterEach(async({page}) => {
    await page.close()
})