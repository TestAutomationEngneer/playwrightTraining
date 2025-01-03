import { test as baseTest } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();
type MyFixtures = {

};

export const test = baseTest.extend<MyFixtures>({
    contextOptions: async ({contextOptions}, use) => {
        contextOptions.baseURL = "http://www.automationpractice.pl/index.php";
        await use(contextOptions);
}

});

export { expect } from 'playwright/test';