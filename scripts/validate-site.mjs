import { readFile } from 'node:fs/promises';

const [html, landing, header, robots, sitemap] = await Promise.all([
  readFile('index.html', 'utf8'),
  readFile('src/Screens/Landing Page/LandingPage.tsx', 'utf8'),
  readFile('src/Layout/Header/Header.tsx', 'utf8'),
  readFile('public/robots.txt', 'utf8'),
  readFile('public/sitemap.xml', 'utf8'),
]);

const checks = [
  ['document language', html.includes('<html lang="es">')],
  ['canonical URL', html.includes('<link rel="canonical" href="https://beatnow.app/"')],
  ['meta description', html.includes('<meta name="description"')],
  ['Open Graph image', html.includes('property="og:image"')],
  ['single page heading', (landing.match(/<h1/g) ?? []).length === 1],
  ['registration destination source', header.includes('href={WEBAPP_URL}') && landing.includes('href={WEBAPP_URL}')],
  ['robots sitemap reference', robots.includes('https://beatnow.app/sitemap.xml')],
  ['sitemap homepage', sitemap.includes('<loc>https://beatnow.app/</loc>')],
];

const failures = checks.filter(([, passed]) => !passed);
if (failures.length) {
  for (const [name] of failures) console.error(`FAIL: ${name}`);
  process.exit(1);
}
for (const [name] of checks) console.log(`PASS: ${name}`);
