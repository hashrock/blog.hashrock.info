#!/usr/bin/env npx tsx

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const BLOG_DIR = join(import.meta.dirname, "../src/content/blog");

// Match [URL](URL) where link text = href (raw URL links)
const RAW_LINK_RE = /\[(https?:\/\/[^\]]+)\]\((https?:\/\/[^\)]+)\)/g;

const titleCache = new Map<string, string | null>();

async function fetchTitle(url: string): Promise<string | null> {
  if (titleCache.has(url)) return titleCache.get(url)!;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "Mozilla/5.0 (compatible; BlogBot/1.0)" },
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!res.ok) {
      titleCache.set(url, null);
      return null;
    }

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) {
      titleCache.set(url, null);
      return null;
    }

    // Read only first 10KB to find <title>
    const reader = res.body?.getReader();
    if (!reader) return null;

    let html = "";
    const decoder = new TextDecoder();
    while (html.length < 10000) {
      const { done, value } = await reader.read();
      if (done) break;
      html += decoder.decode(value, { stream: true });
    }
    reader.cancel();

    const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (!match) {
      titleCache.set(url, null);
      return null;
    }

    const title = match[1]
      .replace(/\s+/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&#x2F;/g, "/")
      .trim();

    if (!title) {
      titleCache.set(url, null);
      return null;
    }

    titleCache.set(url, title);
    return title;
  } catch {
    titleCache.set(url, null);
    return null;
  }
}

async function processPost(filePath: string): Promise<number> {
  const content = await readFile(filePath, "utf-8");

  const matches = [...content.matchAll(RAW_LINK_RE)].filter(
    (m) => m[1] === m[2]
  );
  if (matches.length === 0) return 0;

  let updated = content;
  let count = 0;

  for (const match of matches) {
    const url = match[1];
    // Skip t.co short links, image links, twitter status links
    if (/t\.co\//.test(url)) continue;
    if (/\.(png|jpg|jpeg|gif|webp|svg)$/i.test(url)) continue;
    if (/twitter\.com\/.*\/status\//.test(url)) continue;

    const title = await fetchTitle(url);
    if (title) {
      const original = `[${url}](${url})`;
      const replacement = `[${title}](${url})`;
      updated = updated.replace(original, replacement);
      console.log(`  ${url} → ${title}`);
      count++;
    } else {
      console.log(`  ${url} → (skip: no title)`);
    }
  }

  if (count > 0) {
    await writeFile(filePath, updated);
  }
  return count;
}

async function main() {
  const files = (await readdir(BLOG_DIR))
    .filter((f) => f.endsWith(".md"))
    .sort();
  console.log(`Scanning ${files.length} blog posts...\n`);

  let total = 0;
  for (const file of files) {
    const path = join(BLOG_DIR, file);
    const content = await readFile(path, "utf-8");
    const hasRawLinks = RAW_LINK_RE.test(content);
    RAW_LINK_RE.lastIndex = 0;
    if (!hasRawLinks) continue;

    console.log(file);
    const count = await processPost(path);
    total += count;
  }

  console.log(`\nDone! ${total} links updated with titles.`);
}

main();
