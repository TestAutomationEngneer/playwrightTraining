import type {PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';


const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('./global-setup.ts'),

  //globalTeardown: require.resolve('./global-teardown.ts'),

  testDir: './tests',

  timeout: 30 * 1000, 

  expect: {
     timeout: 6000,
    },
 
  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: 1,

  reporter: 'html',

  use: {
    browserName: 'chromium',
    baseURL: 'http://www.automationpractice.pl/index.php',
    ignoreHTTPSErrors: true,
    storageState: 'state.json',
    headless: false,
    trace: 'retain-on-failure',
    screenshot: 'off',
    launchOptions:{
      slowMo: 1000,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        headless: false,
        ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { 
    //     headless: false,
    //     ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     headless: false,
    //     ...devices['Desktop Safari'] },
    // },
  ],
};

export default config;
