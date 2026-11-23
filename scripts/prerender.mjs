import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const ssrDir = path.join(rootDir, "dist-ssr");

const templateHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
const ssrEntryPath = path.join(ssrDir, "entry-server.js");
const { render, SEO_ROUTES, SITE_URL, buildHeadTagsHtml } = await import(
  pathToFileURL(ssrEntryPath).href
);

function buildPageHtml(headHtml, appHtml) {
  return templateHtml
    .replace("<!--app-head-->", headHtml)
    .replace("<!--app-html-->", appHtml);
}

// 1. Pre-render every route into memory first, then write folder-based index.html files
const renderedPages = SEO_ROUTES.map((route) => {
  const appHtml = render(route.path);
  const headHtml = buildHeadTagsHtml(route);
  const outRel =
    route.path === "/" ? "index.html" : path.join(route.path.replace(/^\/|\/$/g, ""), "index.html");
  return {
    route,
    outPath: path.join(distDir, outRel),
    html: buildPageHtml(headHtml, appHtml),
  };
});

// 2. Render branded 404.html (genuine 404 status on GitHub Pages, no soft-404 redirect)
const notFoundAppHtml = render("/404");
const notFoundHeadHtml = [
  "<title>Page Not Found | Quiet Space Chichester</title>",
  '<meta name="robots" content="noindex" />',
  '<meta name="description" content="The page you are looking for could not be found. Explore Quiet Space home organising, decluttering and property staging in Chichester." />',
].join("\n    ");
const notFoundHtml = buildPageHtml(notFoundHeadHtml, notFoundAppHtml);

for (const page of renderedPages) {
  fs.mkdirSync(path.dirname(page.outPath), { recursive: true });
  fs.writeFileSync(page.outPath, page.html, "utf-8");
  console.log(`Pre-rendered: ${page.route.path} -> ${path.relative(rootDir, page.outPath)}`);
}

fs.writeFileSync(path.join(distDir, "404.html"), notFoundHtml, "utf-8");
console.log("Pre-rendered: /404 -> dist/404.html");

// 3. Auto-generate dist/sitemap.xml from SEO_ROUTES
const today = new Date().toISOString().slice(0, 10);
const urlEntries = SEO_ROUTES.map(
  (r) => `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
).join("\n");

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf-8");
console.log(`Generated: dist/sitemap.xml (${SEO_ROUTES.length} URLs)`);

// 4. Clean up temporary SSR bundle directory
fs.rmSync(ssrDir, { recursive: true, force: true });
