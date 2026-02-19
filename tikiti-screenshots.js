const puppeteer = require('puppeteer');
const path = require('path');

const CASE_STUDY_IMAGES = '/Users/lansah/Documents/GitHub/lansah-portfolio-v2/public/images/case-studies';
const BASE = 'https://www.gettikiti.com';
const EVENT_ID = 'MNXdx4wQcn9IWU0KbQZu';

async function run() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900'],
    defaultViewport: { width: 1440, height: 900 }
  });

  const page = await browser.newPage();

  try {
    // Login
    console.log('Logging in...');
    await page.goto(BASE + '/login', { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 3000));
    await page.waitForSelector('#email', { timeout: 10000 });
    await page.type('#email', 'rashidlansahadam@gmail.com', { delay: 30 });
    await page.type('#password', 'Liyana@2026"', { delay: 30 });
    await page.click('button[type="submit"]');
    await new Promise(r => setTimeout(r, 15000));
    
    if (page.url().includes('/login')) throw new Error('Login failed');
    console.log('Logged in!\n');

    async function waitForContent(ms = 10000) {
      await new Promise(r => setTimeout(r, ms));
      try {
        await page.waitForFunction(() => {
          const skeletons = document.querySelectorAll('[class*="skeleton"], [class*="Skeleton"], [class*="animate-pulse"]');
          return skeletons.length === 0;
        }, { timeout: 10000 });
      } catch (e) {}
    }

    async function capture(urlPath, filename, wait = 10000) {
      console.log(`Capturing ${filename}...`);
      await page.goto(BASE + urlPath, { waitUntil: 'networkidle2', timeout: 60000 });
      await waitForContent(wait);
      await page.screenshot({ 
        path: path.join(CASE_STUDY_IMAGES, filename), 
        fullPage: false, type: 'png' 
      });
      console.log(`  ✓ Saved`);
    }

    // ===== SETTINGS TABS =====
    console.log('--- Settings Tabs ---');
    
    // General already captured. Now capture other tabs by clicking them.
    // Branding
    console.log('Capturing settings-branding...');
    await page.goto(BASE + '/dashboard/settings', { waitUntil: 'networkidle2', timeout: 60000 });
    await waitForContent(8000);
    // Click Branding tab
    await page.evaluate(() => {
      const tabs = document.querySelectorAll('button, a, [role="tab"]');
      for (const tab of tabs) {
        if (tab.textContent.includes('Branding')) { tab.click(); break; }
      }
    });
    await waitForContent(5000);
    await page.screenshot({ path: path.join(CASE_STUDY_IMAGES, 'tikiti-dashboard-settings-branding.png'), fullPage: false, type: 'png' });
    console.log('  ✓ Saved');

    // Notifications
    console.log('Capturing settings-notifications...');
    await page.evaluate(() => {
      const tabs = document.querySelectorAll('button, a, [role="tab"]');
      for (const tab of tabs) {
        if (tab.textContent.includes('Notifications')) { tab.click(); break; }
      }
    });
    await waitForContent(5000);
    await page.screenshot({ path: path.join(CASE_STUDY_IMAGES, 'tikiti-dashboard-settings-notifications.png'), fullPage: false, type: 'png' });
    console.log('  ✓ Saved');

    // Team
    console.log('Capturing settings-team...');
    await page.evaluate(() => {
      const tabs = document.querySelectorAll('button, a, [role="tab"]');
      for (const tab of tabs) {
        if (tab.textContent.includes('Team')) { tab.click(); break; }
      }
    });
    await waitForContent(5000);
    await page.screenshot({ path: path.join(CASE_STUDY_IMAGES, 'tikiti-dashboard-settings-team.png'), fullPage: false, type: 'png' });
    console.log('  ✓ Saved');

    // Subscription
    console.log('Capturing settings-subscription...');
    await page.evaluate(() => {
      const tabs = document.querySelectorAll('button, a, [role="tab"]');
      for (const tab of tabs) {
        if (tab.textContent.includes('Subscription')) { tab.click(); break; }
      }
    });
    await waitForContent(5000);
    await page.screenshot({ path: path.join(CASE_STUDY_IMAGES, 'tikiti-dashboard-settings-subscription.png'), fullPage: false, type: 'png' });
    console.log('  ✓ Saved');

    // ===== EVENT SUB-PAGES =====
    console.log('\n--- Event Sub-pages ---');
    const eventBase = '/dashboard/events/' + EVENT_ID;

    await capture(eventBase + '/attendees', 'tikiti-dashboard-event-attendees.png');
    await capture(eventBase + '/check-in', 'tikiti-dashboard-event-checkin.png');
    await capture(eventBase + '/messaging', 'tikiti-dashboard-event-messaging.png');
    await capture(eventBase + '/form', 'tikiti-dashboard-event-form.png');
    await capture(eventBase + '/program', 'tikiti-dashboard-event-program.png');
    await capture(eventBase + '/engagement', 'tikiti-dashboard-event-engagement.png');
    await capture(eventBase + '/surveys', 'tikiti-dashboard-event-surveys.png');
    await capture(eventBase + '/updates', 'tikiti-dashboard-event-updates.png');
    await capture(eventBase + '/reports', 'tikiti-dashboard-event-reports.png');
    await capture(eventBase + '/preview', 'tikiti-dashboard-event-preview.png');

    // ===== SPEAKER INVITE PAGE =====
    console.log('\n--- Speaker Invite Page ---');
    // We need a valid speaker token. Let's find one from the speakers page.
    console.log('Finding speaker invite token...');
    await page.goto(BASE + eventBase + '/speakers', { waitUntil: 'networkidle2', timeout: 60000 });
    await waitForContent(8000);
    
    // Look for any speaker invite links on the page
    const speakerToken = await page.evaluate(() => {
      // Check for any links containing /speaker/
      const links = document.querySelectorAll('a[href*="/speaker/"]');
      if (links.length > 0) return links[0].getAttribute('href');
      
      // Check page content for tokens
      const text = document.body.innerText;
      const match = text.match(/speaker\/([a-zA-Z0-9]+)/);
      if (match) return '/speaker/' + match[1];
      
      return null;
    });
    
    if (speakerToken) {
      console.log('Found speaker token:', speakerToken);
      await capture(speakerToken, 'tikiti-dashboard-speaker-invite.png');
    } else {
      console.log('No speaker token found on page, trying to get one from the invite flow...');
      // Try clicking Invite Speaker button to see if we can get a link
      const hasInviteBtn = await page.evaluate(() => {
        const btns = document.querySelectorAll('button');
        for (const btn of btns) {
          if (btn.textContent.includes('Invite Speaker')) { btn.click(); return true; }
        }
        return false;
      });
      
      if (hasInviteBtn) {
        await new Promise(r => setTimeout(r, 3000));
        await page.screenshot({ path: path.join(CASE_STUDY_IMAGES, 'tikiti-dashboard-speaker-invite-modal.png'), fullPage: false, type: 'png' });
        console.log('  ✓ Saved invite modal screenshot');
      }
    }

    console.log('\n✅ All screenshots captured!');

  } catch (err) {
    console.error('Error:', err.message);
    await page.screenshot({ path: '/tmp/tikiti-debug.png' });
    console.log('Debug screenshot saved');
  } finally {
    await browser.close();
  }
}

run();
