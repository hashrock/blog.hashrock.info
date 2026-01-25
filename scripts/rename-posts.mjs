#!/usr/bin/env node

import { rename, readFile, writeFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const BLOG_DIR = new URL("../src/content/blog", import.meta.url).pathname;
const mapping = JSON.parse(
  await readFile(new URL("./slug-mapping.json", import.meta.url), "utf-8")
);

// 1. ファイルをリネーム
console.log("Renaming files...\n");
for (const [oldSlug, newSlug] of Object.entries(mapping)) {
  const oldPath = join(BLOG_DIR, `${oldSlug}.md`);
  const newPath = join(BLOG_DIR, `${newSlug}.md`);
  try {
    await rename(oldPath, newPath);
    console.log(`${oldSlug}.md → ${newSlug}.md`);
  } catch (e) {
    console.error(`Failed: ${oldSlug} - ${e.message}`);
  }
}

// 2. 記事内の内部リンクを更新
console.log("\nUpdating internal links...\n");
const files = await readdir(BLOG_DIR);
const mdFiles = files.filter((f) => f.endsWith(".md"));

let linksUpdated = 0;
for (const file of mdFiles) {
  const filePath = join(BLOG_DIR, file);
  let content = await readFile(filePath, "utf-8");
  let modified = false;

  for (const [oldSlug, newSlug] of Object.entries(mapping)) {
    // /blog/old-slug や /old-slug のようなリンクを更新
    const patterns = [
      new RegExp(`/blog/${oldSlug}(?=[/"'\\s)]|$)`, "g"),
      new RegExp(`\\(${oldSlug}\\)`, "g"),
    ];
    for (const pattern of patterns) {
      if (pattern.test(content)) {
        content = content.replace(pattern, (match) =>
          match.replace(oldSlug, newSlug)
        );
        modified = true;
        linksUpdated++;
      }
    }
  }

  if (modified) {
    await writeFile(filePath, content, "utf-8");
    console.log(`Updated links in: ${file}`);
  }
}

console.log(`\nDone! Renamed ${Object.keys(mapping).length} files.`);
if (linksUpdated > 0) {
  console.log(`Updated ${linksUpdated} internal links.`);
}
