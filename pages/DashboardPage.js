const { expect } = require('@playwright/test');

class DashboardPage {
  constructor(page) {
    this.page = page;
        //await expect(this.page.getByText('Infinity')).toBeVisible();

    this.infinityLogo = page.getByRole('heading', { name: 'Infinity' });
    this.username = page.locator('.username');
    this.inventoryLink = page.getByRole('link', { name: 'Inventory' });
    this.catalogLink = page.getByRole('link', { name: 'Catalog' });
  }

  async verifyDashboardElements() {
    await expect(this.page).toHaveURL(/dashboard/);
    await expect(this.infinityLogo).toBeVisible();
    await expect(this.username).toBeVisible();
    await expect(this.username).toContainText('Hi,');
  }

  async verifyMenuItems() {
    await expect(this.inventoryLink).toBeVisible();
    await expect(this.catalogLink).toBeVisible();
  }
}

module.exports = { DashboardPage };
