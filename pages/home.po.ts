import { Page } from 'playwright';

export default class HomePage{

    constructor(public page: Page) {}

    async clickOnSignInButton() {
        await this.page.click('text=Sign in');
        await this.page.waitForLoadState('domcontentloaded');
    }
}