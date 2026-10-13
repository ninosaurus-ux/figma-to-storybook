// Membangun dist/index.html — halaman preview token yang bisa dibuka langsung.
// Swatch warna memakai var(--...) dari variables.css, jadi kalau CSS-nya
// ke-generate dengan benar, warnanya ikut tampil. Bukti visual pipeline hidup.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(rootDir, 'dist');

const flat = new Map();

function walk(node, set, path) {
  for (const [key, val] of Object.entries(node)) {
    if (key.startsWith('$')) continue;
    const nextPath = [...path, key];
    if (val !== null && typeof val === 'object' && !Array.isArray(val) && 'value' in val) {
      flat.set(`${set}::${nextPath.join('.')}`, {
        set, path: nextPath.join('.'), type: val.type,
        value: val.value, description: val.description,
      });
    } else if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
      walk(val, set, nextPath);
    }
  }
}

// Baca tokens.json — urutan set mengikuti $metadata.tokenSetOrder
const content = JSON.parse(await readFile(join(rootDir, 'tokens.json'), 'utf-8'));

let setOrder = [];
if (content.$metadata && Array.isArray(content.$metadata.tokenSetOrder)) {
  setOrder = content.$metadata.tokenSetOrder;
}

const setNames = [];
for (const name of setOrder) {
  if (content[name] && typeof content[name] === 'object' && !name.startsWith('$')) {
    walk(content[name], name, []);
    setNames.push(name);
  }
}
for (const [name, val] of Object.entries(content)) {
  if (name.startsWith('$') || setNames.includes(name)) continue;
  if (val && typeof val === 'object') { walk(val, name, []); setNames.push(name); }
}
const orderedSets = [
  ...setOrder.filter((s) => setNames.includes(s)),
  ...setNames.filter((s) => !setOrder.includes(s)),
];

// Resolve reference {path.to.token} sampai stabil
const refRe = /\{([^}]+)\}/g;
const findToken = (refPath) => {
  for (const set of orderedSets) {
    const t = flat.get(`${set}::${refPath.trim()}`);
    if (t) return t;
  }
  return undefined;
};
for (let pass = 0; pass < 10; pass++) {
  let changed = false;
  for (const token of flat.values()) {
    if (typeof token.value !== 'string' || !token.value.includes('{')) continue;
    const next = token.value.replace(refRe, (m, refPath) => {
      const target = findToken(refPath);
      return target && typeof target.value !== 'string' ? String(target.value)
        : target && typeof target.value === 'string' && !target.value.includes('{') ? target.value : m;
    });
    if (next !== token.value) { token.value = next; changed = true; }
  }
  if (!changed) break;
}

const toVarName = (dotPath) =>
  '--' + dotPath.split('.').join('-').toLowerCase().replace(/[^a-z0-9-]/g, '');
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

let sections = '';
for (const set of orderedSets) {
  const tokens = [...flat.values()].filter((t) => t.set === set);
  if (!tokens.length) continue;
  const colors = tokens.filter((t) => t.type === 'color');
  const others = tokens.filter((t) => t.type !== 'color');
  let body = '';
  if (colors.length) {
    body += `<h3>Warna</h3><div class="swatches">` + colors.map((t) => {
      const v = toVarName(t.path);
      return `<div class="swatch-card">
        <div class="swatch" style="background: var(${v})" title="${esc(v)}"></div>
        <div class="swatch-name">${esc(t.path)}</div>
        <div class="swatch-value"><code>${esc(v)}</code> · ${esc(t.value)}</div>
        ${t.description ? `<div class="swatch-desc">${esc(t.description)}</div>` : ''}
      </div>`;
    }).join('') + `</div>`;
  }
  if (others.length) {
    body += `<h3>Token lain</h3><table><thead><tr><th>Token</th><th>CSS variable</th><th>Nilai</th><th>Tipe</th></tr></thead><tbody>` +
      others.map((t) => {
        const v = toVarName(t.path);
        return `<tr><td><code>${esc(t.path)}</code></td><td><code>${esc(v)}</code></td><td>${esc(t.value)}</td><td>${esc(t.type ?? '-')}</td></tr>`;
      }).join('') + `</tbody></table>`;
  }
  sections += `<section><h2>${esc(set)}</h2>${body}</section>`;
}

const html = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Design Tokens — Preview</title>
<link rel="stylesheet" href="variables.css">
<style>
  :root { color-scheme: light; }
  body { font-family: system-ui, -apple-system, "Segoe UI", sans-serif; margin: 0; background: #fafafa; color: #111; }
  header { background: #111827; color: #fff; padding: 28px 32px; }
  header h1 { margin: 0 0 6px; font-size: 22px; }
  header p { margin: 0; opacity: .75; font-size: 14px; }
  main { max-width: 1080px; margin: 0 auto; padding: 24px 32px 64px; }
  section { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px 24px; margin: 20px 0; }
  h2 { margin: 0 0 4px; font-size: 18px; }
  h3 { margin: 20px 0 12px; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: .04em; }
  .swatches { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; }
  .swatch-card { border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; }
  .swatch { height: 72px; border-bottom: 1px solid #e5e7eb; }
  .swatch-name { font-size: 13px; font-weight: 600; padding: 8px 10px 0; }
  .swatch-value { font-size: 12px; color: #4b5563; padding: 2px 10px; }
  .swatch-desc { font-size: 12px; color: #9ca3af; padding: 0 10px 8px; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th, td { text-align: left; padding: 8px 10px; border-bottom: 1px solid #f3f4f6; }
  th { color: #6b7280; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: .04em; }
  code { background: #f3f4f6; padding: 1px 6px; border-radius: 6px; font-size: 12px; }
  footer { text-align: center; color: #9ca3af; font-size: 12px; padding: 24px; }
</style>
</head>
<body>
<header>
  <h1>🎨 Design Tokens — Preview</h1>
  <p>Halaman ini membaca <code>variables.css</code> hasil build style-dictionary. Swatch di bawah memakai <code>var(--...)</code> langsung — kalau warnanya tampil, pipeline-nya jalan.</p>
</header>
<main>
${sections}
</main>
<footer>Dibangun otomatis dari <code>tokens.json</code> via GitHub Actions · figma-to-storybook</footer>
</body>
</html>
`;

await mkdir(distDir, { recursive: true });
await writeFile(join(distDir, 'index.html'), html, 'utf-8');
console.log(`preview ditulis: dist/index.html (${flat.size} token dari ${orderedSets.length} set)`);
