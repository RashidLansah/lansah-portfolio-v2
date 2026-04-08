/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const http = require('http');
const { execFileSync } = require('child_process');
const seoRoutes = require('../src/seoRoutes.json');
const puppeteer = require('puppeteer');

const buildDir = path.join(__dirname, '..', 'build');
const host = '127.0.0.1';
const port = 45678;

const routes = seoRoutes
  .map((route) => route.path)
  .filter((route, index, allRoutes) => allRoutes.indexOf(route) === index);

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  switch (ext) {
    case '.html':
      return 'text/html; charset=utf-8';
    case '.js':
      return 'application/javascript; charset=utf-8';
    case '.css':
      return 'text/css; charset=utf-8';
    case '.json':
      return 'application/json; charset=utf-8';
    case '.svg':
      return 'image/svg+xml';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.webp':
      return 'image/webp';
    case '.ico':
      return 'image/x-icon';
    case '.txt':
      return 'text/plain; charset=utf-8';
    case '.xml':
      return 'application/xml; charset=utf-8';
    default:
      return 'application/octet-stream';
  }
}

function resolveFile(urlPath) {
  const normalizedPath = decodeURIComponent(urlPath.split('?')[0]);
  let filePath = path.join(buildDir, normalizedPath);

  if (normalizedPath.endsWith('/')) {
    filePath = path.join(buildDir, normalizedPath, 'index.html');
  }

  if (!path.extname(filePath) && fs.existsSync(`${filePath}.html`)) {
    filePath = `${filePath}.html`;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    filePath = path.join(buildDir, 'index.html');
  }

  return filePath;
}

function serveBuildDirectory() {
  return http.createServer((request, response) => {
    const filePath = resolveFile(request.url || '/');

    fs.readFile(filePath, (error, content) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('Failed to read build output.');
        return;
      }

      response.writeHead(200, { 'Content-Type': getContentType(filePath) });
      response.end(content);
    });
  });
}

function installChromeForPuppeteer() {
  const npxCommand = process.platform === 'win32' ? 'npx.cmd' : 'npx';

  console.log('Chrome not found for Puppeteer. Installing browser binary...');
  execFileSync(npxCommand, ['puppeteer', 'browsers', 'install', 'chrome'], {
    stdio: 'inherit'
  });
}

async function launchBrowser() {
  try {
    return await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  } catch (error) {
    const message = String(error && error.message ? error.message : error);
    const missingChrome =
      message.includes('Could not find Chrome') ||
      message.includes('Could not find Chromium');

    if (!missingChrome) {
      throw error;
    }

    installChromeForPuppeteer();

    return puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }
}

function outputPathForRoute(route) {
  if (route === '/') {
    return path.join(buildDir, 'index.html');
  }

  return path.join(buildDir, route.replace(/^\//, ''), 'index.html');
}

async function writePrerenderedRoute(browser, route) {
  const page = await browser.newPage();
  const routeUrl = `http://${host}:${port}${route}`;

  await page.goto(routeUrl, { waitUntil: 'networkidle0' });
  await new Promise((resolve) => setTimeout(resolve, 500));

  const html = await page.content();
  const outputPath = outputPathForRoute(route);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html);

  await page.close();
  console.log(`Prerendered ${route}`);
}

async function prerender() {
  if (!fs.existsSync(buildDir)) {
    throw new Error('Build directory does not exist. Run the production build first.');
  }

  const server = serveBuildDirectory();

  await new Promise((resolve) => server.listen(port, host, resolve));

  try {
    const browser = await launchBrowser();

    try {
      for (const route of routes) {
        await writePrerenderedRoute(browser, route);
      }
    } finally {
      await browser.close();
    }
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  }
}

prerender().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
