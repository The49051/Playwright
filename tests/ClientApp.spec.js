const {test,expect}=require('@playwright/test')

test('@Web Client app login', async ({page})=>
//Browser context validating test

{
    const email="anshika@gmail.com"
    const products=page.locator(".card-body")
    const productName="zara coat 3"

    await page.goto("https://rahulshettyacademy.com/client")

    await page.locator("input#userEmail").fill("anshika@gmail.com")
    await page.locator("#userPassword").fill("Iamking@000")
    await page.locator("[value='Login']").click()
    await page.waitForLoadState('networkidle')
    const titles=  await products.allTextContents()
    console.log(titles)

    const count=await products.count()
    for(let i=0; i<count; ++i)
    {
        
        if(await products.nth(i).locator("b").textContent()===productName){

            await products.nth(i).locator("text= Add to cart").click()
            break
        }

    }
    await page.locator("[routerlink*='/cart']").click()
    await page.locator("div li").first().waitFor()
    const bool=await page.locator("h3:has-text('zara coat 3')").isVisible()
    expect(bool).toBeTruthy()

    //await page.pause()
    await page.locator("text=Checkout").click()
    await page.locator("[placeholder*='Country']").type("ind",{delay:100})
    //await page.getByPlaceholder('Select Country').fill('ind');
   await page.getByRole('button', { name: ' India' }).click()

    
   // const dropdown= page.locator(".ta-results")
   // const dropdown=page.locator("[class*='ta-results list-group ng-star-inserted']")
    
    // await dropdown.waitFor();
     
    // await dropdown.selectOption(" India")
    // optionsCount= await dropdown.locator("button").count();

    // for(let i=0;i< optionsCount;++i){

    //     text= await dropdown.locator("button").nth(i).textContent()

    //    if(text ===" India")
    //    {
    //      await dropdown.locator("button").nth(i).click()
    //      break
    //    }
    // }

   
 
    // await expect(page.locator(".user__name [type='text']")).toHaveText(email)
    //console.log(await page.locator(".user__name [type='text']").textContent())
   // await page.locator("input[class='input txt text-validated ng-pristine ng-valid ng-touched']").textContent()

    await page.locator(".action__submit").click()
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
    const orderID= await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    console.log(orderID)
    
    await page.locator("button[routerlink*='/dashboard/myorders']").click()
    
   // const [orderH]=await page.locator("[scope*='row']").allTextContents()
   await page.locator("tbody").waitFor()
   const rows=await page.locator("tbody tr")
    
    for(let i=0;i<rows.count();++i){

        const rowsOrderId=await rows.nth(i).locator("th").textContent()
        if(orderID.includes(rowsOrderId)){
            console.log("Happy")
            await rows.nth(i).locator("button").first().click()
            break
        }

       // const orderDetails=await page.locator("tbody tr").textContent()
    }
    
    const orderDetails=await page.locator(".col-text").textContent()

});


// test('test', async ({ page }) => {
//     await page.goto('https://rahulshettyacademy.com/client/');
//     await page.goto('https://rahulshettyacademy.com/client/auth/login');
//     await page.getByPlaceholder('email@example.com').click();
//     await page.getByPlaceholder('email@example.com').fill('anshika@gmail.com');
//     await page.getByPlaceholder('enter your passsword').click();
//     await page.getByPlaceholder('enter your passsword').fill('Iamking@000');
//     await page.getByRole('button', { name: 'Login' }).click();
//     await page.locator('button:nth-child(4)').first().click();
//     await page.getByRole('button', { name: ' Cart 1' }).click();
//     await page.getByRole('button', { name: 'Checkout❯' }).click();
//     await page.getByPlaceholder('Select Country').click();
//     await page.getByPlaceholder('Select Country').fill('ind');
//     await page.getByRole('button', { name: ' India' }).click();
//     await page.getByText('Place Order').click();
//     await page.getByText('| 6423f881568c3e9fb141ec45 |').click();
//   });



