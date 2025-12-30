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
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
