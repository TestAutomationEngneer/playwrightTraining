import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
    const { baseURL, storageState } = config.projects[0].use;

    const browser = await chromium.launch();
    const page = await browser.newPage({
        ignoreHTTPSErrors: true,
    });

    await page.goto(baseURL!);

}

export default globalSetup;