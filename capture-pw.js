const { chromium } = require('playwright');
const path = require('path');

const screenshotsDir = path.join(__dirname, 'public/images/case-studies');

async function capture() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // Go to login
  console.log('Opening login page - please log in...');
  await page.goto('http://localhost:3001/login');

  // Wait for user to log in - check for dashboard URL
  console.log('Waiting for you to log in (watching for /dashboard URL)...');
  await page.waitForURL('**/dashboard**', { timeout: 120000 });
  console.log('Logged in!');

  await page.waitForTimeout(2000);

  // Capture dashboard - wait longer for data to load
  console.log('Capturing dashboard home...');
  await page.goto('http://localhost:3001/dashboard');
  await page.waitForLoadState('domcontentloaded');
  console.log('Waiting 10 seconds for dashboard content to load...');
  await page.waitForTimeout(10000);
  await page.screenshot({ path: path.join(screenshotsDir, 'tikiti-dashboard-home.png') });
  console.log('✓ Saved tikiti-dashboard-home.png');

  // Capture analytics - wait longer for data to load
  console.log('Capturing analytics...');
  await page.goto('http://localhost:3001/dashboard/analytics');
  await page.waitForLoadState('domcontentloaded');
  console.log('Waiting 10 seconds for analytics content to load...');
  await page.waitForTimeout(10000);
  await page.screenshot({ path: path.join(screenshotsDir, 'tikiti-dashboard-analytics.png') });
  console.log('✓ Saved tikiti-dashboard-analytics.png');

  await browser.close();
  console.log('Done!');
}

capture().catch(console.error);
