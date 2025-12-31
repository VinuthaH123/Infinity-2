const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 0,
  workers: 1,

  use: {
    baseURL: 'https://infinity.starlajewels.com',  // <-- base URL here
    browserName: 'chromium',
    headless: true
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: { viewport: { width: 1920, height: 1080 } }
    },
    /*{
      name: 'Tablet Chrome',
      use: { viewport: { width: 768, height: 1024 } }
    },
    {
      name: 'Mobile Chrome',
      use: { viewport: { width: 375, height: 667 } }
    }*/
  ],

  reporter: [['html', { open: 'never' }]]
});
