// Prints /cv/ to dist/cv/Leonardo-Porro-CV.pdf after `astro build`.
// dist/ is served over a throwaway local HTTP server because Astro's asset paths are absolute
// (/_astro/...), which file:// cannot resolve. Locally it drives the installed Edge; in CI it
// uses Playwright's own Chromium.
import { chromium } from "playwright";
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, extname, join, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const out = resolve(dist, "cv/Leonardo-Porro-CV.pdf");
if (!existsSync(join(dist, "cv/index.html"))) throw new Error("run astro build first: dist/cv/index.html is missing");

const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".woff2": "font/woff2", ".woff": "font/woff", ".svg": "image/svg+xml", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (path.endsWith("/")) path += "index.html";
  const file = join(dist, path);
  if (!file.startsWith(dist) || !existsSync(file) || statSync(file).isDirectory()) { res.statusCode = 404; return res.end(); }
  res.setHeader("content-type", types[extname(file)] ?? "application/octet-stream");
  createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const url = `http://127.0.0.1:${server.address().port}/cv/`;

const browser = await chromium.launch(process.env.CI ? {} : { channel: "msedge" });
try {
  const tab = await browser.newPage();
  await tab.goto(url, { waitUntil: "networkidle" });
  await tab.emulateMedia({ media: "print", colorScheme: "light" });
  await tab.evaluate(() => document.fonts.ready);
  await tab.pdf({ path: out, format: "Letter", printBackground: true, preferCSSPageSize: true });
  console.log(`wrote ${out}`);
} finally {
  await browser.close();
  server.close();
}
