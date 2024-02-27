import { Page } from "@playwright/test";

export default class AccountPage {

    constructor(public page: Page) {}

    async getAccountName() {
        return await this.page.innerText('.account');
    }
}