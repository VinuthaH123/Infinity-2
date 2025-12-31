const { expect } = require('@playwright/test');
const user = require('../auth/user.json');

class AuthUtil {
  static async login(page) {
    // Clear cookies and storage before login
    await page.context().clearCookies();
    await page.context().clearPermissions();

    await page.goto('/login', { waitUntil: 'domcontentloaded' });

    await page.fill('#user_email', user.email);
    await page.fill('#password', user.password);
    await page.click('button[type="submit"]');

    // Wait for dashboard to load with extended timeout
    //await page.waitForURL('**/dashboard',  { waitUntil: 'domcontentloaded' });
       await page.locator('.username').waitFor();

  }

  static async logout(page) {
    await page.click('text=Logout');
    await page.waitForURL('**/login');
  }
}

module.exports = { AuthUtil };
