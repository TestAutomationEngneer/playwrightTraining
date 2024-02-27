import { test, expect, chromium } from '@playwright/test';

test('login to app', async ({ page }) => {

    //brad.pitt@op.pl
    //haslo123

    await page.goto('http://www.automationpractice.pl/index.php', { waitUntil: 'domcontentloaded' });

   //click on sign in button
   await test.step('click on sign in button', async () => {
    await page.click('text=Sign in');
    await page.waitForLoadState('domcontentloaded');
   });

    //fill in email
    await test.step('fill in email', async () => {
        await page.fill('input[name="email"]', 'brad.pitt@op.pl');
    });

    //fill in password
    await test.step('fill in password', async () => {
        await page.fill('input[name="passwd"]', 'haslo123');
    });

    //click on sign in button
    await test.step('click on sign in button', async () => {
        await page.click('button[name="SubmitLogin"]');
        await page.waitForLoadState('domcontentloaded');
    });     

    //assertion - check account name
    await test.step('assertion - check account name', async () => {
        const text = await page.innerText('.account');
        expect(text).toBe('Brad Pitt');
    });


    await page.close();
});