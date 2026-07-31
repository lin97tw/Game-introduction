import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished streamer profile", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="zh-Hant">/);
  assert.match(html, /<title>YU\.2008｜傳說對決・王者榮耀實況<\/title>/);
  assert.match(html, /穿越次元/);
  assert.match(html, /掌控野區節奏/);
  assert.match(html, /youtube\.com\/@yu\._2008-p7v/);
  assert.match(html, /tiktok\.com\/@_yu\._2008/);
  assert.match(html, /instagram\.com\/_yu\._2008/);
  assert.match(html, /property="og:image" content="\/og-v2\.png"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("keeps production assets and responsive behavior", async () => {
  const [page, css, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  await Promise.all([
    access(new URL("../public/hero-nakroth-v2.png", import.meta.url)),
    access(new URL("../public/hero-city-plate.png", import.meta.url)),
    access(new URL("../public/og-v2.png", import.meta.url)),
  ]);
  assert.match(page, /onPointerMove=\{moveScene\}/);
  assert.match(page, /className="hero-socials"/);
  assert.match(page, /socials\.map\(\(social\)/);
  assert.match(page, /pointerType === "touch"/);
  assert.match(css, /@media \(max-width: 850px\)/);
  assert.match(css, /@media \(max-width: 480px\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(layout, /summary_large_image/);
  assert.doesNotMatch(page + layout, /_sites-preview|codex-preview/);
});
