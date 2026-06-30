/* Updates <lastmod> dates in sitemap.xml to today's date on every build */
const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const today = new Date().toISOString().split('T')[0];

let content = fs.readFileSync(sitemapPath, 'utf8');
content = content.replace(/<lastmod>[\d-]+<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
fs.writeFileSync(sitemapPath, content);

console.log(`Sitemap dates updated to ${today}`);
