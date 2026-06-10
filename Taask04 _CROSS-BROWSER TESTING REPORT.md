CROSS-BROWSER TESTING REPORT

Project Name: SauceDemo Website Testing

Website URL:
https://www.saucedemo.com/

Testing Tool:
BrowserStack

Objective:
To verify that the SauceDemo website functions correctly across different browsers and devices and to identify any compatibility issues.

Browsers Tested:

1. Google Chrome
2. Mozilla Firefox
3. Microsoft Edge
4. Safari

Devices Tested:

1. Windows Laptop
2. iPhone (Safari)
3. Android Device (Chrome)

Test Credentials:

Username: standard_user
Password: secret_sauce

---

TEST CASE 1

Test Case ID: TC_001

Test Scenario:
Login with valid credentials

Steps:

1. Open SauceDemo website.
2. Enter username "standard_user".
3. Enter password "secret_sauce".
4. Click Login button.

Expected Result:
User should be redirected to Inventory Page.

Actual Result:
User successfully logged in.

Status:
PASS

---

TEST CASE 2

Test Case ID: TC_002

Test Scenario:
Login with invalid credentials

Steps:

1. Enter invalid username.
2. Enter invalid password.
3. Click Login.

Expected Result:
Error message should be displayed.

Actual Result:
Error message displayed successfully.

Status:
PASS

---

TEST CASE 3

Test Case ID: TC_003

Test Scenario:
Verify Product Listing Page

Steps:

1. Login with valid credentials.
2. Navigate to Inventory Page.

Expected Result:
All products should be displayed correctly.

Actual Result:
Products displayed properly.

Status:
PASS

---

TEST CASE 4

Test Case ID: TC_004

Test Scenario:
Add Product to Cart

Steps:

1. Select a product.
2. Click Add to Cart.

Expected Result:
Product should be added to cart.

Actual Result:
Product added successfully.

Status:
PASS

---

TEST CASE 5

Test Scenario:
Remove Product from Cart

Steps:

1. Open Cart.
2. Click Remove.

Expected Result:
Product should be removed.

Actual Result:
Product removed successfully.

Status:
PASS

---

TEST CASE 6

Test Scenario:
Checkout Process

Steps:

1. Add item to cart.
2. Open cart.
3. Click Checkout.
4. Enter First Name.
5. Enter Last Name.
6. Enter Zip Code.
7. Click Continue.

Expected Result:
User should reach Checkout Overview page.

Actual Result:
Checkout completed successfully.

Status:
PASS

---

TEST CASE 7

Test Scenario:
Complete Order

Steps:

1. Click Finish.

Expected Result:
Order confirmation message should appear.

Actual Result:
Order completed successfully.

Status:
PASS

---

TEST CASE 8

Test Scenario:
Logout

Steps:

1. Open Menu.
2. Click Logout.

Expected Result:
User should return to Login Page.

Actual Result:
Logout successful.

Status:
PASS

---

CROSS-BROWSER TEST RESULTS

| Test Case       | Chrome | Firefox | Edge | Safari |
| --------------- | ------ | ------- | ---- | ------ |
| Login           | Pass   | Pass    | Pass | Pass   |
| Invalid Login   | Pass   | Pass    | Pass | Pass   |
| Product Display | Pass   | Pass    | Pass | Pass   |
| Add To Cart     | Pass   | Pass    | Pass | Pass   |
| Remove Product  | Pass   | Pass    | Pass | Pass   |
| Checkout        | Pass   | Pass    | Pass | Pass   |
| Complete Order  | Pass   | Pass    | Pass | Pass   |
| Logout          | Pass   | Pass    | Pass | Pass   |

Issues Found:
No major cross-browser compatibility issues were observed during testing.

Conclusion:
The SauceDemo website was tested across Chrome, Firefox, Edge, Safari, and mobile devices using BrowserStack. All core functionalities including login, product listing, cart management, checkout, and logout worked successfully. The application is compatible across the tested browsers and devices.
