import { defineHandler } from 'void';
import { listPublishedPosts } from '../src/lib/posts';
import { postPath, SITE_URL } from '../src/lib/site';

export const GET = defineHandler(async (c) => {
	const posts = await listPublishedPosts();
	const urls = ['/', ...posts.map((post) => postPath(post.slug))]
		.map((path) => `<url><loc>${new URL(path, SITE_URL).href}</loc></url>`)
		.join('');
	const xml =
		'<?xml version="1.0" encoding="UTF-8"?>' +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
	return c.body(xml, 200, { 'Content-Type': 'application/xml; charset=utf-8' });
});
