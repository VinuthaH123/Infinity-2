const { test, expect } = require('../fixtures/test-fixtures');

test('Verify dashboard menu elements presence', async ({ dashboard }) => {
  await dashboard.verifyDashboardElements();
  await dashboard.verifyMenuItems();
});