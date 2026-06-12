require("dotenv").config();
const { Builder, By, until } = require("selenium-webdriver");

const USERNAME = process.env.BROWSERSTACK_USERNAME;
const ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY;

const GRID_URL = `https://${USERNAME}:${ACCESS_KEY}@hub-cloud.browserstack.com/wd/hub`;

// Common test function
async function runTest(browser, os, osVersion) {
  let driver = await new Builder()
    .usingServer(GRID_URL)
    .withCapabilities({
      browserName: browser,
      "bstack:options": {
        os: os,
        osVersion: osVersion,
        projectName: "Cross Browser Testing Task",
        buildName: "Login Test Build",
        sessionName: `Test on ${browser}`,
        consoleLogs: "info",
        debug: true
      }
    })
    .build();

  try {
    // Open SauceDemo website
    await driver.get("https://www.saucedemo.com/");

    // Wait until page loads
    await driver.wait(until.titleContains("Swag Labs"), 15000);

    // Login steps
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // Wait for inventory page
    await driver.wait(until.urlContains("inventory"), 15000);

    console.log(`Test passed on ${browser}`);
  } catch (err) {
    console.log(`Test failed on ${browser}`);
    console.log(err);
  } finally {
    await driver.quit();
  }
}

// Run all browsers including Safari
(async () => {
  await runTest("chrome", "Windows", "10");
  await runTest("firefox", "Windows", "11");
  await runTest("edge", "Windows", "10");

  // Safari (Mac cloud)
  await runTest("safari", "OS X", "Sonoma");
   console.log("\nView your test results on BrowserStack:");
  console.log("https://automate.browserstack.com/dashboard\n");
})();