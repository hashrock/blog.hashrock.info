/**
 * MT (Movable Type) 形式のエクスポートファイルをパースするスクリプト
 */

interface MTEntry {
  author: string;
  title: string;
  basename: string;
  status: string;
  allowComments: boolean;
  convertBreaks: boolean;
  date: Date;
  image?: string;
  body: string;
}

function parseMTDate(dateStr: string): Date {
  // Format: MM/DD/YYYY HH:MM:SS
  const [datePart, timePart] = dateStr.split(" ");
  const [month, day, year] = datePart.split("/").map(Number);
  const [hours, minutes, seconds] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes, seconds);
}

function parseMTEntry(entryText: string): MTEntry | null {
  const sections = entryText.split("\n-----\n");
  if (sections.length < 2) return null;

  const headerSection = sections[0];
  const bodySection = sections.slice(1).join("\n-----\n");

  // Parse header
  const headers: Record<string, string> = {};
  for (const line of headerSection.split("\n")) {
    const colonIndex = line.indexOf(": ");
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex);
      const value = line.substring(colonIndex + 2);
      headers[key] = value;
    }
  }

  // Parse body
  let body = "";
  if (bodySection.startsWith("BODY:\n")) {
    body = bodySection.substring(6);
  } else if (bodySection.startsWith("BODY:")) {
    body = bodySection.substring(5);
  }

  if (!headers["TITLE"]) return null;

  return {
    author: headers["AUTHOR"] || "",
    title: headers["TITLE"],
    basename: headers["BASENAME"] || "",
    status: headers["STATUS"] || "Publish",
    allowComments: headers["ALLOW COMMENTS"] === "1",
    convertBreaks: headers["CONVERT BREAKS"] === "1",
    date: parseMTDate(headers["DATE"] || "01/01/2000 00:00:00"),
    image: headers["IMAGE"],
    body: body.trim(),
  };
}

export function parseMT(content: string): MTEntry[] {
  const entries: MTEntry[] = [];
  const rawEntries = content.split("\n--------\n");

  for (const rawEntry of rawEntries) {
    const trimmed = rawEntry.trim();
    if (!trimmed) continue;

    const entry = parseMTEntry(trimmed);
    if (entry) {
      entries.push(entry);
    }
  }

  return entries;
}

// CLI実行
if (import.meta.main) {
  const filePath = Deno.args[0] || "old/hashrock.hatenablog.com.export.txt";
  const content = await Deno.readTextFile(filePath);
  const entries = parseMT(content);

  console.log(`Parsed ${entries.length} entries\n`);

  for (const entry of entries) {
    console.log(`---`);
    console.log(`Title: ${entry.title}`);
    console.log(`Date: ${entry.date.toISOString()}`);
    console.log(`Status: ${entry.status}`);
    console.log(`Basename: ${entry.basename}`);
    console.log(`Body length: ${entry.body.length} chars`);
  }
}
