import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const IS_CI = Boolean(process.env.CI);

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests/e2e',
  timeout: 5 * 1000,
  expect: {
    timeout: 1000,
  },
  fullyParallel: true,

  forbidOnly: IS_CI,
  /* Retry on CI only. Playwright will tell us if a test is flaky */
  retries: IS_CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: IS_CI ? 1 : undefined,

  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5174/',
    trace: 'on-first-retry',
    headless: IS_CI,
  },

  projects: [
    {
      name: 'chromium',
      use: devices['Desktop Chrome'],
    },
  ],

  webServer: {
    command: 'npm run build && npm start',
    port: 5174,
    reuseExistingServer: !IS_CI,
  },
};

export default config;
