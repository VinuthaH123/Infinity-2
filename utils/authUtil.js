const user = require('../auth/user.json');

class AuthUtil {
  static async login(page) {
    if (!user.email || !user.password) {
      throw new Error('Email or password missing in user.json');
    }

    await page.goto('/login');   // relative URL, baseURL from config

    await page.fill('#user_email', user.email);
    await page.fill('#password', user.password);
    await page.click('button[type="submit"]');

    await page.waitForURL('**/dashboard');
  }
}

module.exports = { AuthUtil };
