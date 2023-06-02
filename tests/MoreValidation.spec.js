const {test,expect}=require('@playwright/test')

//test.describe.configure({mode:'parallel'})

test("Popup validation", async ({page})=>{
    
    await page.goto("https://rahulshettyacademy.com/AutomationPractice")
    // await page.goto("https://google.com")
    // await page.goBack()
    // await page .goForward()
   // await page.pause()
    await expect(page.locator("#displayed-text")).toBeVisible()
    await page.locator("#hide-textbox").click()
    await expect(page.locator("#displayed-text")).toBeHidden()
    page.on('dialog',dialog=>dialog.accept())
    await page.locator("#confirmbtn").click()
    await page.locator("#mousehover").hover()
    const framePage=page.frameLocator("#courses-iframe")
    await framePage.locator("li a[href*='lifetime-access']:visible").click()
    const textcheck=await framePage.locator(".text h2").textContent()
    const subno=await textcheck.split(" ")[1]
    console.log( subno)
})

test("Screenshot & visual copmparison",async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice")
    await expect(page.locator("#displayed-text")).toBeVisible()
    await page.locator("#hide-textbox").click()
    await page.screenshot({path:'Screenshot.png'})
    await expect(page.locator("#displayed-text")).toBeHidden()


})

test("Screenshot & visual ... copmparison",async({page})=>
{
        await page.goto("https://rahulshettyacademy.com/AutomationPractice")
    await expect(page.locator("#displayed-text")).toBeVisible()
    await page.locator("#displayed-text").screenshot({path:'ScreenshotElement.png'})
    await page.locator("#hide-textbox").click()
   // await page.screenshot({path:'Screenshot.png'})
    
    await expect(page.locator("#displayed-text")).toBeHidden()


})
 test("Visual validation",async({page})=>
 {
    await page.goto("https://google.com")
    expect(await page.screenshot()).toMatchSnapshot('landing.png')




 })