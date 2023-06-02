const {test, expect, request}=require('@playwright/test');



test('Browser Playwright test',async ({browser}) => 
{
        //********jscode*****

       

        // invoke browser 
        const context= await browser.newContext();
        const page=await context.newPage();

        //page.route('**/*.{jpg,png,jpeg}',route=> route.abort());

        // invoke website
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await page.title())

         // craedted variable to store path
         const userName=page.locator("[name='username']")
         const signIn=page.locator("#signInBtn")
         const allTitles=page.locator(".card-body a")

         page.on('request',request=>console.log(request.url()))
         page.on('response',response=>console.log(response.url(),response.status()))

       //css xpath
       await userName.type("rahulshetty")
       await page.locator("[type='password']").type("learning")
       await signIn.click()     
       console.log(await page.locator("[style*='block']").textContent())
       await expect(page.locator("[style*='block']")).toContainText("Incorrect")

       //type and fill used to fill the text
       await userName.fill("")
       await userName.fill("rahulshettyacademy")

       await Promise.all(

        [
                 page.waitForNavigation(),
                  signIn.click()


        ])
       


      // await page.locator("[type='password']").type("learning")
       
        //get multiple index element 
        //     to get first number element  
        console.log(await allTitles.first().textContent())
        // to get nth element
       console.log(await allTitles.nth(0).textContent())
        // to get all element (text)
        console.log(await allTitles.allTextContents())



            
});

test('UI controls',async ({page}) => 
{
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")


        const documentLink=page.locator("[href*='documents-request']")

       // await userName.type("rahulshetty")
      //  await page.locator("[type='password']").type("learning")
        await page.locator("select.form-control").selectOption("consult")
        await page.locator(".radiotextsty").last().click()
        await page.locator("button#okayBtn").click()

        // check the assertion for radio cheked or not
        expect(page.locator(".radiotextsty").last()).toBeChecked()
        // Print the value of cheked or not(t/f)
        const isCheked=await page.locator(".radiotextsty").last().isChecked()
        console.log(isCheked)

        await page.locator("#terms").click()
        await expect(page.locator("#terms")).toBeChecked()
        await page.locator("#terms").uncheck()
        expect(await page.locator("#terms").isChecked()).toBeFalsy()

        await expect(documentLink).toHaveAttribute("class","blinkingText")
        // It is used for puse the page
       // await page.pause()


});

test('Child window handling',async ({browser}) =>
{
        const context= await browser.newContext()
        const page=await context.newPage()
      //  const page=newPage()

        await page.goto("https://rahulshettyacademy.com/loginpagePractise/")


        const documentLink= page.locator("[href*='documents-request']")

       const [newPage] = await Promise.all([

                 context.waitForEvent('page'),
                 documentLink.click(),

         ])

        const text= await newPage.locator(".red").textContent()
        const arrayText=text.split("@")
        const domain =arrayText[1].split(" ")
        console.log(domain[0])

        await page.locator("#username").type(domain[0])
      //  await page.pause()
        console.log(await page.locator("#username").textContent()) 
        //await page.locator()
         
        



});        


// test.only('Rahul shetty registration page',async({page})=>{
//         // rahul shetty registration page assignment

//         await page.goto("https://rahulshettyacademy.com/client")
//        // await page.goto("https://rahulshettyacademy.com/client/auth/register")

//        //click on register page
//        await page.locator("[class='btn1']").click()
//        await page.locator("input#firstName").fill("Rahul")
//        await page.locator("input#lastName").fill("Shetty") 
//        await page.locator("input#userEmail").fill("rahulshetty@gmail.com")  
//        await page.locator("input#userMobile").fill("4905149051") 
//        await page.locator("[class='custom-select ng-untouched ng-pristine ng-valid']").selectOption('Doctor')
//        await page.locator("[type='radio']").first().click()
//        await page.locator("#userPassword").fill("learning") 
//        await page.locator("#confirmPassword").fill("learning") 
//        await page.locator("[type='checkbox']").click()
//        await page.locator("#login").click()

       
// });

test('Page Playwright test',async ({page}) => 
{
        //jscode
        // const context= await browser.newContext();
        // const page=await context.newPage();
        // await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

        await page.goto("https://google.com")
        console.log(await page.title())
        await expect(page).toHaveTitle("Google")
    
});

test('test', async ({ page }) => {
        await page.goto('https://www.google.com/');
        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill('rahulshetty');
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');
        await page.getByRole('link', { name: 'Practice Page' }).click();
        await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').check();
        await page.locator('label').filter({ hasText: 'Radio2' }).getByRole('radio').check();
        await page.locator('#dropdown-class-example').selectOption('option2');
        await page.locator('#checkBoxOption2').check();
        await page.getByPlaceholder('Enter Your Name').click();
        await page.getByPlaceholder('Enter Your Name').fill('Pankaj');
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('button', { name: 'Open Window' }).click();
        const page1 = await page1Promise;
        await page1.getByRole('link', { name: 'Home', exact: true }).click();
        page.once('dialog', dialog => {
          console.log(`Dialog message: ${dialog.message()}`);
          dialog.dismiss().catch(() => {});
        });
        await page.getByRole('button', { name: 'Alert' }).click();
      });