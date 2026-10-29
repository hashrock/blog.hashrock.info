import { defineHandler, defineHead, type InferProps } from 'void';
import { listPublishedPosts } from '../src/lib/posts';
import { ogMeta } from '../src/lib/head';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '../src/lib/site';

export type Props = InferProps<typeof loader>;

export const loader = defineHandler(async () => {
	return { posts: await listPublishedPosts() };
});

export const head = defineHead<Props>(() => ({
	title: SITE_TITLE,
	meta: ogMeta({ title: SITE_TITLE, description: SITE_DESCRIPTION, path: '/' }),
	link: [{ rel: 'canonical', href: `${SITE_URL}/` }],
}));
