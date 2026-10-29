// content/blog の Markdown を D1 に取り込むための SQL を db/import.sql に書き出す。
//   pnpm import-posts
//   pnpm void db execute --file db/import.sql            # ローカル
//   pnpm void db execute --remote --file db/import.sql   # 本番
// slug が既にある記事は上書きする。
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import { renderMarkdown } from '../src/lib/markdown.ts';

const CONTENT_DIR = 'content/blog';
const OUT = 'db/import.sql';
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** 'Jul 20 2018' や '2018-07-20' を 'YYYY-MM-DD' にする（タイムゾーンの影響を受けないよう手で解釈する） */
function toDate(value: unknown): string | null {
	if (value == null || value === '') return null;
	if (value instanceof Date) return value.toISOString().slice(0, 10);
	const s = String(value).trim();
	const m = s.match(/^([A-Z][a-z]{2}) (\d{1,2}) (\d{4})$/);
	if (m) {
		const month = MONTHS.indexOf(m[1]) + 1;
		if (month === 0) throw new Error(`unknown month: ${s}`);
		return `${m[3]}-${String(month).padStart(2, '0')}-${m[2].padStart(2, '0')}`;
	}
	if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
	throw new Error(`unknown date format: ${s}`);
}

/** MDX 記事の `<Image src={slideNNN} />` を画像リンクに置き換え、画像を public/images/<slug>/ にコピーする */
function convertMdx(slug: string, dir: string, body: string): string {
	const imports = new Map<string, string>();
	body = body.replace(/^import\s+(\w+)\s+from\s+["']\.\/([^"']+)["'];?\s*$/gm, (_, name, file) => {
		imports.set(name, file);
		return '';
	});
	body = body.replace(/^import\s+.*$/gm, '');
	const outDir = join('public/images', slug);
	mkdirSync(outDir, { recursive: true });
	// GIF はアニメーションを保つため <img src={name.src} /> で書かれている
	body = body.replace(/<(?:Image|img)\s+src=\{(\w+)(?:\.src)?\}\s+alt="([^"]*)"\s*\/>/g, (_, name, alt) => {
		const file = imports.get(name);
		if (!file) throw new Error(`${slug}: unknown image import ${name}`);
		copyFileSync(join(dir, file), join(outDir, file));
		return `![${alt}](/images/${slug}/${file})`;
	});
	if (/<[A-Z]\w*[\s/>]|=\{/.test(body)) throw new Error(`${slug}: unconverted JSX remains`);
	return body.trim() + '\n';
}

function sql(value: string | null): string {
	return value === null ? 'NULL' : `'${value.replaceAll("'", "''")}'`;
}

const entries: { slug: string; path: string; dir: string; mdx: boolean }[] = [];
for (const name of readdirSync(CONTENT_DIR)) {
	const path = join(CONTENT_DIR, name);
	if (statSync(path).isDirectory()) {
		for (const index of ['index.md', 'index.mdx']) {
			if (existsSync(join(path, index))) {
				entries.push({ slug: name, path: join(path, index), dir: path, mdx: index.endsWith('.mdx') });
			}
		}
	} else if (/\.mdx?$/.test(name)) {
		entries.push({ slug: name.replace(/\.mdx?$/, ''), path, dir: CONTENT_DIR, mdx: name.endsWith('.mdx') });
	}
}

const statements: string[] = [];
for (const entry of entries.sort((a, b) => a.slug.localeCompare(b.slug))) {
	const { data, content } = matter(readFileSync(entry.path, 'utf8'));
	const body = entry.mdx ? convertMdx(entry.slug, entry.dir, content) : content.trim() + '\n';
	const html = await renderMarkdown(body);
	const row = {
		slug: entry.slug,
		title: String(data.title ?? ''),
		description: String(data.description ?? ''),
		body,
		html,
		status: 'published',
		hero_image: data.heroImage ? String(data.heroImage) : null,
		pub_date: toDate(data.pubDate),
		updated_date: toDate(data.updatedDate),
	};
	const columns = Object.keys(row);
	const values = Object.values(row).map((v) => sql(v));
	const updates = columns.filter((c) => c !== 'slug').map((c) => `${c} = excluded.${c}`);
	statements.push(
		`INSERT INTO posts (${columns.join(', ')}) VALUES (${values.join(', ')})\n` +
			`  ON CONFLICT(slug) DO UPDATE SET ${updates.join(', ')}, updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now');`,
	);
}

writeFileSync(OUT, statements.join('\n') + '\n');
const largest = Math.max(...statements.map((s) => Buffer.byteLength(s)));
console.log(`${statements.length} posts -> ${OUT} (largest statement: ${(largest / 1024).toFixed(1)} KiB)`);
