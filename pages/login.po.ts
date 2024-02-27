import { Page } from 'playwright';

export default class LoginPage {

   //constructor
    constructor(public page: Page) {}

    async login(email: string, password: string) {
        await this.page.fill('input[name="email"]', email);
        await this.page.fill('input[name="passwd"]', password);
        await this.page.click('button[name="SubmitLogin"]');
       
    }
}
