import type {PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';


const config: PlaywrightTestConfig = {
  testDir: './tests',

  timeout: 30 * 1000,

  expect: {
     timeout: 6000,
    },
 
  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    headless: false,
    trace: 'on-first-retry',
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

    {
      name: 'firefox',
      use: { 
        headless: false,
        ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: {
        headless: false,
        ...devices['Desktop Safari'] },
    },
  ],
};

export default config;
