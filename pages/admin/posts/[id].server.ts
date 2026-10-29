import { defineHandler, type InferProps } from 'void';
import { HTTPException } from 'hono/http-exception';
import {
	deletePost,
	getPost,
	postInputSchema,
	publishPost,
	savePost,
	unpublishPost,
} from '../../../src/lib/admin-posts';
import { requireAdmin } from '../../../src/lib/admin';

export type Props = InferProps<typeof loader>;

function postId(c: { req: { param(name: string): string | undefined } }): number {
	const id = Number(c.req.param('id'));
	if (!Number.isInteger(id)) throw new HTTPException(404, { message: 'Not found' });
	return id;
}

export const loader = defineHandler(async (c) => {
	requireAdmin();
	const post = await getPost(postId(c));
	if (!post) throw new HTTPException(404, { message: '記事が見つかりません' });
	return { post };
});

export const head = () => ({ title: '編集 - CMS' });

export const actions = {
	save: defineHandler.withValidator({ body: postInputSchema })(async (c, { body }) => {
		requireAdmin();
		await savePost(postId(c), body);
	}),
	publish: defineHandler.withValidator({ body: postInputSchema })(async (c, { body }) => {
		requireAdmin();
		await publishPost(postId(c), body);
	}),
	unpublish: defineHandler(async (c) => {
		requireAdmin();
		await unpublishPost(postId(c));
	}),
	delete: defineHandler(async (c) => {
		requireAdmin();
		await deletePost(postId(c));
		return c.redirect('/admin');
	}),
};
