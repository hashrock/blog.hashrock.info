#!/usr/bin/env node

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const BLOG_DIR = new URL("../src/content/blog", import.meta.url).pathname;

// はてなキーワードリンクの正規表現
// <a class="keyword" href="http(s)://d.hatena.ne.jp/keyword/...">テキスト</a> → テキスト
const HATENA_KEYWORD_LINK_REGEX =
  /<a\s+class="keyword"\s+href="https?:\/\/d\.hatena\.ne\.jp\/keyword\/[^"]*">([^<]*)<\/a>/g;

async function processFile(filePath) {
  const content = await readFile(filePath, "utf-8");
  const newContent = content.replace(HATENA_KEYWORD_LINK_REGEX, "$1");

  if (content !== newContent) {
    await writeFile(filePath, newContent, "utf-8");
    const matchCount = (content.match(HATENA_KEYWORD_LINK_REGEX) || []).length;
    console.log(`Updated: ${filePath} (${matchCount} links removed)`);
    return matchCount;
  }
  return 0;
}

async function main() {
  const files = await readdir(BLOG_DIR);
  const mdFiles = files.filter((f) => f.endsWith(".md"));

  let totalRemoved = 0;
  let filesUpdated = 0;

  for (const file of mdFiles) {
    const filePath = join(BLOG_DIR, file);
    const removed = await processFile(filePath);
    if (removed > 0) {
      totalRemoved += removed;
      filesUpdated++;
    }
  }

  console.log(`\nDone! Removed ${totalRemoved} links from ${filesUpdated} files.`);
}

main().catch(console.error);
