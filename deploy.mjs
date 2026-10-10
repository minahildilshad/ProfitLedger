import { mkdirSync, copyFileSync, readFileSync } from 'node:fs';
const page = new URL('./index.html', import.meta.url);
const html = readFileSync(page, 'utf8');
if (!html.includes('<div id="root"></div>') || !html.includes('<script>')) {
  throw new Error('index.html must contain the bundled app. Run npm run build after editing source.');
}
const output = new URL('./dist/', import.meta.url);
mkdirSync(output, { recursive: true });
copyFileSync(page, new URL('index.html', output));
console.log('Prepared bundled ProfitLedger in dist/');
