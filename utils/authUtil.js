class AuthUtil {
  static async login(page) {
    await page.goto('/login');

    await page.getByLabel('Email').fill(process.env.INF_USER);
    await page.getByLabel('Password').fill(process.env.INF_PASS);
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for dashboard to load (NO TIMEOUTS)
    await page.waitForURL('**/dashboard');
  }
}

module.exports = { AuthUtil };
