import { type Post, posts } from '@schema';
import { db, desc, eq } from 'void/db';
import { ValidationError } from 'void/handler';
import { revalidate } from 'void/isr';
import { z } from 'zod';
import { renderMarkdown } from './markdown';
import { postPath } from './site';

/** 記事 URL と衝突させないパス */
const RESERVED_SLUGS = new Set(['admin', 'api', 'uploads', 'images', 'rss.xml', 'sitemap-index.xml', 'sitemap-0.xml']);

export const postInputSchema = z.object({
	slug: z
		.string()
		.trim()
		.min(1, 'slug を入力してください')
		.max(100)
		.regex(/^[a-z0-9][a-z0-9-]*$/, '英小文字・数字・ハイフンのみ使えます')
		.refine((s) => !RESERVED_SLUGS.has(s), 'この slug は予約されています'),
	title: z.string().trim().max(200),
	description: z.string().trim().max(500),
	body: z.string().max(500_000),
	heroImage: z.string().trim().max(500),
});

export type PostInput = z.infer<typeof postInputSchema>;

const now = () => new Date().toISOString();

export async function listAllPosts() {
	return db
		.select({
			id: posts.id,
			slug: posts.slug,
			title: posts.title,
			status: posts.status,
			pubDate: posts.pubDate,
			updatedAt: posts.updatedAt,
		})
		.from(posts)
		.orderBy(desc(posts.pubDate), desc(posts.updatedAt));
}

export async function getPost(id: number): Promise<Post | undefined> {
	const [row] = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
	return row;
}

async function assertSlugAvailable(slug: string, id: number) {
	const [other] = await db.select({ id: posts.id }).from(posts).where(eq(posts.slug, slug)).limit(1);
	if (other && other.id !== id) throw new ValidationError({ slug: 'この slug は別の記事で使われています' });
}

/** 公開中の記事が変わったときに、キャッシュされている公開ページを消す */
async function purge(...slugs: string[]) {
	await revalidate({
		paths: ['/', '/rss.xml', '/sitemap-0.xml', ...new Set(slugs.map(postPath))],
	});
}

export async function createDraft(): Promise<number> {
	const today = new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Tokyo' });
	const slug = `${today}-${crypto.randomUUID().slice(0, 6)}`;
	const [row] = await db.insert(posts).values({ slug, status: 'draft' }).returning({ id: posts.id });
	return row.id;
}

export async function savePost(id: number, input: PostInput): Promise<Post> {
	const current = await getPost(id);
	if (!current) throw new ValidationError({ slug: '記事が見つかりません' });
	await assertSlugAvailable(input.slug, id);

	const html = await renderMarkdown(input.body);
	const [row] = await db
		.update(posts)
		.set({
			slug: input.slug,
			title: input.title,
			description: input.description,
			body: input.body,
			html,
			heroImage: input.heroImage || null,
			updatedAt: now(),
		})
		.where(eq(posts.id, id))
		.returning();

	if (current.status === 'published') await purge(current.slug, row.slug);
	return row;
}

export async function publishPost(id: number, input: PostInput): Promise<Post> {
	const saved = await savePost(id, input);
	if (!saved.title) throw new ValidationError({ title: '公開するにはタイトルが必要です' });
	const [row] = await db
		.update(posts)
		.set({ status: 'published', pubDate: saved.pubDate ?? now() })
		.where(eq(posts.id, id))
		.returning();
	await purge(row.slug);
	return row;
}

export async function unpublishPost(id: number): Promise<void> {
	const [row] = await db.update(posts).set({ status: 'draft', updatedAt: now() }).where(eq(posts.id, id)).returning();
	if (row) await purge(row.slug);
}

export async function deletePost(id: number): Promise<void> {
	const [row] = await db.delete(posts).where(eq(posts.id, id)).returning();
	if (row?.status === 'published') await purge(row.slug);
}
