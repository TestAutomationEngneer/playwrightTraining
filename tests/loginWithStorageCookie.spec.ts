import { test, expect, chromium, FullConfig } from '@playwright/test';

test('login to app using credentials', async ({ page }) => {

    // app url to login: https://practice.expandtesting.com/login
    // username:  practice
    // password:  SuperSecretPassword!

    await page.goto('https://practice.expandtesting.com/login', { waitUntil: 'domcontentloaded' });

    //logout if already logged in
    await test.step('logout if already logged in', async () => {
        //check if logout button is visible
        const logoutButton = await page.isVisible('.radius');
        if (logoutButton) {
            await page.click('.radius');
            await page.waitForLoadState('domcontentloaded');
        }
    });

    //fill in username
    await test.step('fill in username', async () => {
        await page.fill('input[id="username"]', 'practice');
    });

    //fill in password
    await test.step('fill in password', async () => {
        await page.fill('input[id="password"]', 'SuperSecretPassword!');
    });

    //click on Login button
        await test.step('click on sign in button', async () => {
            await page.click('button[type="submit"]');
            await page.waitForLoadState('domcontentloaded');
        });     

        //assertion - check account name
        await test.step('assertion - check account name', async () => {
            const text = await page.innerText('.subheader');
            expect(text).toBe('Welcome to the Secure Area. When you are done click logout below.');
           
        });

    //save the state of the browser
    await page.context().storageState({ path: 'state.json' });
    await page.close();
});

test('login to app using cookie', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/login', { waitUntil: 'domcontentloaded' });

     //assertion - check account name
    await test.step('assertion - check account name', async () => {
        const text = await page.innerText('.subheader');
        expect(text).toBe('Welcome to the Secure Area. When you are done click logout below.');
           
    });

    await page.close();
});