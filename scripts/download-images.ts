#!/usr/bin/env npx tsx

import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const BLOG_DIR = join(import.meta.dirname, "../src/content/blog");
const PUBLIC_DIR = join(import.meta.dirname, "../public/images");

const IMAGE_URL_RE = /https?:\/\/[^\s"'>]+?\.(png|jpg|jpeg|gif|webp|svg)(?:\?[^\s"'>]*)?/gi;

async function downloadImage(
  url: string,
  destDir: string,
  index: number
): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`  ✗ ${url} (${res.status})`);
      return null;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const parsed = new URL(url);
    const ext = extname(parsed.pathname) || ".png";
    const filename = `${index}${ext}`;
    const dest = join(destDir, filename);
    await writeFile(dest, buf);
    console.log(`  ✓ ${url} → ${filename} (${buf.length} bytes)`);
    return filename;
  } catch (e: any) {
    console.error(`  ✗ ${url} (${e.message})`);
    return null;
  }
}

async function processPost(filePath: string) {
  const slug = basename(filePath, ".md");
  let content = await readFile(filePath, "utf-8");

  const urls = [...new Set(content.match(IMAGE_URL_RE) || [])];
  if (urls.length === 0) return;

  console.log(`\n${slug}: ${urls.length} external image(s)`);

  const destDir = join(PUBLIC_DIR, slug);
  await mkdir(destDir, { recursive: true });

  const urlMap = new Map<string, string>();
  for (let i = 0; i < urls.length; i++) {
    const filename = await downloadImage(urls[i], destDir, i);
    if (filename) {
      urlMap.set(urls[i], `/images/${slug}/${filename}`);
    }
  }

  for (const [url, localPath] of urlMap) {
    content = content.replaceAll(url, localPath);
  }

  await writeFile(filePath, content);
  console.log(`  → ${slug}.md updated (${urlMap.size} URLs replaced)`);
}

async function main() {
  const files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith(".md"));
  console.log(`Found ${files.length} blog posts`);

  for (const file of files) {
    await processPost(join(BLOG_DIR, file));
  }

  console.log("\nDone!");
}

main();
