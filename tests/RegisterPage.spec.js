const{test,expect}=require('@playwright/test');


test('@Web Rahul shetty registration page',async({page})=>{
    // rahul shetty registration page assignment

    await page.goto("https://rahulshettyacademy.com/client")
   // await page.goto("https://rahulshettyacademy.com/client/auth/register")

   //click on register page
   await page.locator("[class='btn1']").click()
   await page.locator("input#firstName").fill("Rahul")
   await page.locator("input#lastName").fill("Shetty") 
   await page.locator("input#userEmail").fill("rahulshetty@gmail.com")  
   await page.locator("input#userMobile").fill("4905149051") 
   await page.locator("[class='custom-select ng-untouched ng-pristine ng-valid']").selectOption('Doctor')
   await page.locator("[type='radio']").first().click()
   await page.locator("#userPassword").fill("learning") 
   await page.locator("#confirmPassword").fill("learning") 
   await page.locator("[type='checkbox']").click()
   await page.locator("#login").click()

   
});