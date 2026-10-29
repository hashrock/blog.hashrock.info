import { defineHandler, defineHead, type InferProps } from 'void';
import { ogMeta } from '../src/lib/head';
import { findPublishedPost } from '../src/lib/posts';
import { postPath, SITE_TITLE, SITE_URL } from '../src/lib/site';

export type Props = InferProps<typeof loader>;

export const loader = defineHandler(async (c) => {
	const post = await findPublishedPost(c.req.param('slug') ?? '');
	if (!post) {
		// loader からはステータスを変えられないので、middleware/02.not-found.ts で 404 にする
		c.set('notFound', true);
		return { post: null };
	}
	return {
		post: {
			title: post.title,
			description: post.description,
			html: post.html,
			pubDate: post.pubDate ?? '',
			updatedDate: post.updatedDate,
			heroImage: post.heroImage,
			slug: post.slug,
		},
	};
});

export const head = defineHead<Props>((_c, { post }) =>
	post
		? {
				title: post.title,
				meta: ogMeta({ title: post.title, description: post.description, path: postPath(post.slug), image: post.heroImage }),
				link: [{ rel: 'canonical', href: new URL(postPath(post.slug), SITE_URL).href }],
			}
		: { title: `404 - ${SITE_TITLE}`, meta: [{ name: 'description', content: 'Page not found' }] },
);
