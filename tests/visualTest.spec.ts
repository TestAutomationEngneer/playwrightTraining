//import { test, expect } from '../fixtures/pages-fixtures';

// test.describe('Visual test', async () => {
//     test.beforeEach(async ({ page:Page }) => {
//         await page.goto('http://www.automationpractice.pl/index.php', { waitUntil: 'domcontentloaded' });
//     });

//     test('should display correct page', async ({ page: Page }) => {
//         const masking = this.page.locator('header').first();
//        await expect(page).toHaveScreenshot({mask: 'header'});
//     });
// });




import { test, expect, chromium } from '@playwright/test';

// test('visual test', async ({ page }) => {


//         await page.goto('http://www.automationpractice.pl/index.php', { waitUntil: 'domcontentloaded' });
//         const masking = this.page.locator('header').first();
//        await expect(page).toHaveScreenshot({mask: [masking]});
  
//     await page.close();
// });


test('visual test', async ({page}) => {

    await page.goto('http://www.automationpractice.pl/index.php', { waitUntil: 'domcontentloaded' });
  
    //mask
    //const masking = page.locator('header').first();
    //set mask for id=block_top_menu
    const masking = page.locator('id=block_top_menu');
  
    // Expect screenshot to match a stored image.
    await expect(page).toHaveScreenshot({mask: [masking]});
    await page.close();

  });