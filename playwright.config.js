// @ts-check
import { defineConfig, devices } from '@playwright/test';

// ✅ Load .env ONLY for local runs
if (!process.env.CI) {
  require('dotenv').config();
}

export default defineConfig({
  testDir: './tests',
  timeout: 60000,

  fullyParallel: false,
  retries: process.env.CI ? 0 : 0,
  workers: 1,

  reporter: [['html', { open: 'never' }]],

  use: {
    baseURL: 'https://infinity.starlajewels.com',
    trace: 'on-first-retry',
  },

  // ✅ ONLY Chrome
  projects: [
    //{
      //name: 'chromium',
     // use: { ...devices['Desktop Chrome'] },
    //},
    {
      name: 'Desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'Tablet',
      use: {
        ...devices['iPad (gen 7)'],
        viewport: { width: 768, height: 1024 },
      },
    },
    {
      name: 'Mobile',
      use: {
        ...devices['iPhone 12'],
        viewport: { width: 390, height: 844 },
      },
    }
  ],
});
