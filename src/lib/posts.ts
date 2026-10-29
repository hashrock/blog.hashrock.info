import { posts } from '@schema';
import { and, desc, eq } from 'void/db';
import { db } from 'void/db';

/** 一覧に出す列（本文は含めない） */
const summaryColumns = {
	id: posts.id,
	slug: posts.slug,
	title: posts.title,
	description: posts.description,
	pubDate: posts.pubDate,
	updatedDate: posts.updatedDate,
	heroImage: posts.heroImage,
};

export async function listPublishedPosts() {
	const rows = await db
		.select(summaryColumns)
		.from(posts)
		.where(eq(posts.status, 'published'))
		.orderBy(desc(posts.pubDate), desc(posts.id));
	return rows.map((row) => ({ ...row, pubDate: row.pubDate ?? '' }));
}

export async function findPublishedPost(slug: string) {
	const [row] = await db
		.select()
		.from(posts)
		.where(and(eq(posts.slug, slug), eq(posts.status, 'published')))
		.limit(1);
	return row;
}
