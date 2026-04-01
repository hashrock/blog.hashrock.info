#!/usr/bin/env npx tsx

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import TurndownService from "turndown";

const BLOG_DIR = join(import.meta.dirname, "../src/content/blog");

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
  emDelimiter: "*",
  strongDelimiter: "**",
});

// Handle hatena fotolife <span> wrappers - unwrap to just the img
turndown.addRule("hatena-fotolife-span", {
  filter: (node) => {
    return (
      node.nodeName === "SPAN" &&
      node.getAttribute("itemtype") === "http://schema.org/Photograph"
    );
  },
  replacement: (_content, node) => {
    const img = (node as HTMLElement).querySelector("img");
    if (!img) return _content;
    const src = img.getAttribute("src") || "";
    const alt = img.getAttribute("alt") || "";
    return `![${alt}](${src})`;
  },
});

// Handle <pre class="code"> blocks from hatena
turndown.addRule("hatena-code-block", {
  filter: (node) => {
    return node.nodeName === "PRE" && node.classList.contains("code");
  },
  replacement: (_content, node) => {
    const lang = (node as HTMLElement).getAttribute("data-lang") || "";
    const text = (node as HTMLElement).textContent || "";
    // Remove trailing newline inside pre
    const trimmed = text.replace(/\n$/, "");
    return `\n\`\`\`${lang}\n${trimmed}\n\`\`\`\n`;
  },
});

// Handle image links (a > img pattern)
turndown.addRule("image-link", {
  filter: (node) => {
    return (
      node.nodeName === "A" &&
      node.childNodes.length === 1 &&
      (node.firstChild as Element)?.nodeName === "IMG"
    );
  },
  replacement: (_content, node) => {
    const img = (node as HTMLElement).querySelector("img")!;
    const src = img.getAttribute("src") || "";
    const alt = img.getAttribute("alt") || "";
    return `![${alt}](${src})`;
  },
});

// Decode HTML entities
function decodeEntities(text: string): string {
  return text
    .replace(/&#39;/g, "'")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"');
}

async function processPost(filePath: string) {
  const content = await readFile(filePath, "utf-8");

  // Split frontmatter and body
  const match = content.match(/^(---\n[\s\S]*?\n---\n)([\s\S]*)$/);
  if (!match) return;

  const [, frontmatter, body] = match;

  // Skip if body has no HTML tags (already markdown)
  if (!/<[a-z][\s\S]*>/i.test(body)) return;

  // Convert HTML to markdown
  let markdown = turndown.turndown(body);

  // Decode HTML entities in code blocks
  markdown = markdown.replace(/```[\s\S]*?```/g, (block) =>
    decodeEntities(block)
  );

  // Clean up excessive blank lines
  markdown = markdown.replace(/\n{3,}/g, "\n\n");

  // Trim trailing whitespace on each line
  markdown = markdown
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n");

  // Ensure single trailing newline
  markdown = markdown.trim() + "\n";

  const result = frontmatter + "\n" + markdown;
  await writeFile(filePath, result);

  const slug = filePath.split("/").pop();
  console.log(`✓ ${slug}`);
}

async function main() {
  const files = (await readdir(BLOG_DIR))
    .filter((f) => f.endsWith(".md"))
    .sort();
  console.log(`Processing ${files.length} blog posts...\n`);

  let converted = 0;
  for (const file of files) {
    const before = await readFile(join(BLOG_DIR, file), "utf-8");
    await processPost(join(BLOG_DIR, file));
    const after = await readFile(join(BLOG_DIR, file), "utf-8");
    if (before !== after) converted++;
  }

  console.log(`\nDone! ${converted} posts converted.`);
}

main();
