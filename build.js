const fs = require('fs');
const path = require('path');

const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url) {
  throw new Error('Missing Supabase URL. Set SUPABASE_URL in Netlify environment variables.');
}
if (!key) {
  throw new Error('Missing Supabase anon key. Set SUPABASE_ANON_KEY in Netlify environment variables.');
}

const templatePath = path.join(__dirname, 'StockTeam_v6_netlify_template.html');
const distDir = path.join(__dirname, 'dist');
const outPath = path.join(distDir, 'index.html');

let html = fs.readFileSync(templatePath, 'utf8');
html = html
  .replaceAll('__SUPABASE_URL__', url)
  .replaceAll('__SUPABASE_ANON_KEY__', key);

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(outPath, html, 'utf8');
console.log('Built dist/index.html with Netlify Supabase environment variables.');
