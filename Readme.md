# Task-04: Cross-Browser Testing with BrowserStack

## Project Overview

This project demonstrates automated cross-browser testing using **BrowserStack Selenium Grid**.  
The main goal is to ensure that a web application works correctly across multiple browsers and operating systems.

We performed automated login testing on the demo application:

👉 https://www.saucedemo.com/

---

## Objectives

- Perform automated cross-browser testing using BrowserStack
- Execute test scripts on multiple browsers (Chrome, Firefox, Edge, Safari)
- Validate login functionality
- Ensure application compatibility across different environments

---

## Tools & Technologies Used

- Node.js
- Selenium WebDriver
- BrowserStack Automate (Cloud Testing Platform)
- JavaScript
- dotenv (for environment variables)

---

## Browsers Tested

- Google Chrome (Windows 10)
- Mozilla Firefox (Windows 11)
- Microsoft Edge (Windows 10)
- Safari (macOS - BrowserStack Cloud)

---

## Test Scenario

###  Login Functionality Test

### Steps:
1. Open https://www.saucedemo.com/
2. Enter username: `standard_user`
3. Enter password: `secret_sauce`
4. Click on Login button
5. Verify successful login by checking inventory page

---

## Test Execution Details

The automation scripts were executed using **Selenium WebDriver** integrated with **BrowserStack Cloud Grid**.

Each test was run on different browsers using desired capabilities (`bstack:options`) to simulate real user environments.

---

## Test Results

All tests executed successfully across multiple browsers:
