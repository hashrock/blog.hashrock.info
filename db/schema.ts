import { sql } from 'void/db';
import { index, integer, sqliteTable, text } from 'void/schema-d1';

export const posts = sqliteTable(
	'posts',
	{
		id: integer('id').primaryKey({ autoIncrement: true }),
		slug: text('slug').notNull().unique(),
		title: text('title').notNull().default(''),
		description: text('description').notNull().default(''),
		/** 編集用の Markdown */
		body: text('body').notNull().default(''),
		/** 保存時に描画した HTML。配信時はこれを返すだけ */
		html: text('html').notNull().default(''),
		status: text('status', { enum: ['draft', 'published'] }).notNull().default('draft'),
		heroImage: text('hero_image'),
		/** 初回公開時に入る。ISO 8601 */
		pubDate: text('pub_date'),
		updatedDate: text('updated_date'),
		createdAt: text('created_at').notNull().default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
		updatedAt: text('updated_at').notNull().default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`),
	},
	(t) => [index('posts_status_pub_date').on(t.status, t.pubDate)],
);

export type Post = typeof posts.$inferSelect;
