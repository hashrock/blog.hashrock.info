import { defineHandler, type InferProps } from 'void';
import { createDraft, listAllPosts } from '../../src/lib/admin-posts';
import { requireAdmin } from '../../src/lib/admin';

export type Props = InferProps<typeof loader>;

export const loader = defineHandler(async () => {
	requireAdmin();
	return { posts: await listAllPosts() };
});

export const head = () => ({ title: '記事一覧 - CMS' });

export const actions = {
	create: defineHandler(async (c) => {
		requireAdmin();
		const id = await createDraft();
		return c.redirect(`/admin/posts/${id}`);
	}),
};
