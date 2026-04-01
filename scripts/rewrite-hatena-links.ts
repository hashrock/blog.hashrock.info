#!/usr/bin/env npx tsx

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const BLOG_DIR = join(import.meta.dirname, "../src/content/blog");

async function main() {
  const files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith(".md")).sort();

  // Build date -> slug map
  const dateToSlug = new Map<string, string>();
  for (const file of files) {
    const content = await readFile(join(BLOG_DIR, file), "utf-8");
    const match = content.match(/pubDate:\s*'(.+?)'/);
    if (!match) continue;
    const date = new Date(match[1]);
    const key = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`;
    const slug = file.replace(/\.md$/, "");
    dateToSlug.set(key, slug);
  }

  console.log(`Built date map: ${dateToSlug.size} entries\n`);

  const hatenaRe = /https?:\/\/hashrock\.hatenablog\.com\/entry\/(\d{4})\/(\d{2})\/(\d{2})\/\d+/g;

  let totalReplaced = 0;
  for (const file of files) {
    const path = join(BLOG_DIR, file);
    const content = await readFile(path, "utf-8");

    if (!hatenaRe.test(content)) continue;
    hatenaRe.lastIndex = 0;

    let updated = content;
    let count = 0;

    for (const m of content.matchAll(hatenaRe)) {
      const dateKey = `${m[1]}/${m[2]}/${m[3]}`;
      const slug = dateToSlug.get(dateKey);
      if (slug) {
        updated = updated.replaceAll(m[0], `/${slug}`);
        console.log(`  ${m[0]} → /${slug}`);
        count++;
      } else {
        console.log(`  ${m[0]} → (no match)`);
      }
    }

    if (count > 0) {
      await writeFile(path, updated);
      console.log(`  → ${file} updated (${count} links)\n`);
      totalReplaced += count;
    }
  }

  console.log(`Done! ${totalReplaced} links rewritten.`);
}

main();
