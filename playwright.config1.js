// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 *
 */
module.exports = defineConfig({
  testDir: './tests',
  retries:1,
  /* Maximum time one test can run for. */
  timeout: 20 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },

 
  reporter: 'html',
  projects: [
    {
      name:'safari',
      use: {

        browserName:'webkit',
        headless: false,
        screenshot:'off',
        trace:'retain-on-failure',
        ...devices['iPhone 11']
      },

    },
    {
      name:'chrome',
      use: {


        browserName:'chromium',
        headless: false,
        screenshot:'on',
        trace:'retain-on-failure',
        viewport:{width:720,height:720},
       // video:'retain-on-failure',
        ignoreHTTPSErrors:true,
        permissions:['geolocation'],
      },

    }

   
  

  ]
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
 
 


});

