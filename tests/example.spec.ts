import { test, expect, chromium } from '@playwright/test';

test('has title1', async () => {
  const browser = await chromium.launch(
    {
      headless: false,
      slowMo: 1000
    }
  );
  const browserInstance = await browser.newContext();
  const page = await browserInstance.newPage();

  await page.goto('http://www.automationpractice.pl/index.php');

  //locator WOMEN category
  //await page.getByText('Women').first().click();

  //locator DRESSES category - problem
  //await page.getByTitle('Dresses').first().click();

  //locator Sign in link
  await page.getByText('Sign in').first().click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/My Shop/);
  await browser.close();
});


//korzystam z page jako fixture od playwright
test('has title2', async ({page}) => {

  await page.goto('http://www.automationpractice.pl/index.php', { waitUntil: 'domcontentloaded' });

  //locator Sign in link
  await page.getByText('Sign in').first().click();

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/My Shop/);
  await expect(page).toHaveTitle("Login - My Shop");
  await page.close();

  //page loading theory
  //https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
  //w koncoli przeglądarki wpisz document.readyState
});


test('assertions for Tops subcategorie', async ({page}) => {

  await page.goto('http://www.automationpractice.pl/index.php', { waitUntil: 'domcontentloaded' });

  //locator WOMEN category
  await page.getByText('Women').first().click();

  //check if subcategories exists

  //1. Tops
  //await expect(page.getByText('Tops')).toBeVisible();  //jest error
  //element jest nieunikalny, widać na stronie 4 takie elementy. 
  //Trzeba użyć lepszego lokatora. 
  await expect(page.getByRole('link', { name: 'Tops', exact: true })).toBeVisible();

  await page.close();

});

test('assertions for all subcategories - PASS', async ({page}) => {

  await page.goto('http://www.automationpractice.pl/index.php', { waitUntil: 'domcontentloaded' });

  //locator WOMEN category
  await page.getByText('Women').first().click();

  //check if subcategories exists

  //1. Tops
  await expect(page.getByRole('link', { name: 'Tops', exact: true })).toBeVisible();

  
  //2. Dresses
  await expect(page.getByRole('link', { name: 'Dresses', exact: true }).first()).toBeVisible();


  await expect(page).toHaveTitle("Women - My Shop");
  await page.close();
});

test('assertions for all subcategories - soft assertions', async ({page}) => {
  //use case
  //sprawdzamy czy wszystkie subkategorie są widoczne jeśli nie to zwracamy błąd i druga asercja nie jest sprawdzana
  //rozwiązanie - soft assertions
 
  await page.goto('http://www.automationpractice.pl/index.php', { waitUntil: 'domcontentloaded' });

  //locator WOMEN category
  await page.getByText('Women').first().click();

  //check if subcategories exists

  //1. Tops  //celowy błąd
  await expect.soft(page.getByRole('link', { name: 'pierwszy celowy_blad', exact: true })).toBeVisible();

  
  //2. Dresses
  await expect.soft(page.getByRole('link', { name: 'drugi celowy blad', exact: true }).first()).toBeVisible();


  await expect(page).toHaveTitle("Women - My Shop");
  await page.close();

  //!!!!! uruchomić test w terminau i zobaczyć wynik
  //npx playwright test -g "assertions for all subcategories - soft assertions"
});
