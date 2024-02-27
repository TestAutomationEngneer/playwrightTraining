import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login.po";
import AccountPage from "../pages/account.po";
import HomePage from "../pages/home.po";

test("login with POM", async ({ page }) => {
   //brad.pitt@op.pl
    //haslo123
    const email: string = 'brad.pitt@op.pl';
    const password: string = 'haslo123';
    const expectedAccountName: String = 'Brad Pitt';
    const loginPage = new LoginPage(page);
    const accountPage = new AccountPage(page);
    const homePage = new HomePage(page);

await test.step('login to an account', async () => {
   
    await page.goto('http://www.automationpractice.pl/index.php', { waitUntil: 'domcontentloaded' });
    await homePage.clickOnSignInButton();
    await loginPage.login(email, password);
    const accountName = await accountPage.getAccountName();

    expect(accountName).toBe(expectedAccountName);
    await page.close();
});
});