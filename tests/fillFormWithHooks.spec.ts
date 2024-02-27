import { test, expect, chromium } from '@playwright/test';

test('fill form with hooks', async ({ page }) => {


    //await page.goto('http://www.automationpractice.pl/index.php', { waitUntil: 'domcontentloaded' });

    //click on contact us link
    await test.step('Click on contact us link', async () => {
        await page.getByText('Contact us').first().click();
    });

    //fill form
    //select subject heading
    await test.step('Select subject heading', async () => {
        await page.selectOption('id=id_contact', 'Customer service');
    });

    //fill email
    await test.step('Fill email', async () => {
        await page.fill('id=email', 'customer@op.pl');
    });

    //fill order reference
    await test.step('Fill order reference', async () => {
        await page.fill('id=id_order', '1234');
    });

    //upload file
    await test.step('Upload file', async () => {
        const input = await page.$('id=fileUpload');
        await input.setInputFiles('C:\\test.txt');
    });

    //fill message
    await test.step('Fill message', async () => {
        await page.fill('id=message', 'This is my message');
    });

    //click send button
    await test.step('Click send button', async () => {
        await page.click('id=submitMessage');
    });

    //assertion - check if message was sent
    await test.step('Check if message was sent', async () => {
        await expect(page.locator('.alert-success')).toHaveText('Your message has been successfully sent to our team.');
    });

    await page.close();

    //wykonać z terminala
    //npx playwright test -g "fill form with steps"
});