import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  fullyParallel: false,
  retries: 1,
  workers: 1,
  reporter: [['line'], ['allure-playwright']],
  globalTimeout: 20000,

  use: {
    trace: 'on-first-retry',
    headless: true
  },

  projects: [
    {
      name: 'api',
      testDir: './tests/specs/api',
      use: { browserName: undefined }
    },
    {
      name: 'visual',
      testDir: './tests/specs/visual',
      use: { browserName: undefined }
    },
    {
      name: 'chromium',
      testDir: './tests/specs/ui',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      testDir: './tests/specs/ui',
      use: { ...devices['Desktop Firefox'] }
    }
  ]
});
