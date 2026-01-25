/**
 * MT形式のエクスポートファイルをAstroのブログ記事に変換するスクリプト
 */

import { parseMT } from "./parse-mt.ts";

const OUTPUT_DIR = "src/content/blog";

function formatDate(date: Date): string {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const month = months[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month} ${day} ${year}`;
}

function slugify(basename: string): string {
  // basename: "2024/07/02/103000" -> "2024-07-02-103000"
  return basename.replace(/\//g, "-");
}

function escapeYaml(str: string): string {
  // シングルクォートをエスケープ
  if (str.includes("'") || str.includes(":") || str.includes("#")) {
    return `"${str.replace(/"/g, '\\"')}"`;
  }
  return `'${str}'`;
}

async function main() {
  const filePath = Deno.args[0] || "old/hashrock.hatenablog.com.export.txt";
  const content = await Deno.readTextFile(filePath);
  const entries = parseMT(content);

  // 既存のexampleファイルを削除
  console.log("Removing existing example files...");
  for await (const entry of Deno.readDir(OUTPUT_DIR)) {
    if (entry.isFile && (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))) {
      const path = `${OUTPUT_DIR}/${entry.name}`;
      await Deno.remove(path);
      console.log(`  Removed: ${path}`);
    }
  }

  // Publishedのエントリーのみ変換
  const publishedEntries = entries.filter(e => e.status === "Publish");
  console.log(`\nConverting ${publishedEntries.length} published entries...`);

  for (const entry of publishedEntries) {
    const slug = slugify(entry.basename);
    const filename = `${slug}.md`;
    const filepath = `${OUTPUT_DIR}/${filename}`;

    const frontmatter = [
      "---",
      `title: ${escapeYaml(entry.title)}`,
      `description: ''`,
      `pubDate: '${formatDate(entry.date)}'`,
    ];

    if (entry.image) {
      frontmatter.push(`heroImage: '${entry.image}'`);
    }

    frontmatter.push("---");

    const markdown = `${frontmatter.join("\n")}\n\n${entry.body}\n`;

    await Deno.writeTextFile(filepath, markdown);
    console.log(`  Created: ${filename}`);
  }

  console.log(`\nDone! Created ${publishedEntries.length} blog posts.`);
}

main();
