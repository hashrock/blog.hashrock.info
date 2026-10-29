import { defineHandler } from 'void';
import { listPublishedPosts } from '../src/lib/posts';
import { legacyPostUrl, parseDate, postPath, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '../src/lib/site';

function escapeXml(s: string): string {
	return s.replace(/[<>&'"]/g, (ch) => `&${{ '<': 'lt', '>': 'gt', '&': 'amp', "'": 'apos', '"': 'quot' }[ch]};`);
}

export const GET = defineHandler(async (c) => {
	const posts = await listPublishedPosts();
	const items = posts
		.map((post) => {
			const link = new URL(postPath(post.slug), SITE_URL).href;
			return [
				'<item>',
				`<title>${escapeXml(post.title)}</title>`,
				`<link>${link}</link>`,
				`<guid isPermaLink="false">${legacyPostUrl(post.slug)}</guid>`,
				`<description>${escapeXml(post.description)}</description>`,
				`<pubDate>${parseDate(post.pubDate).toUTCString()}</pubDate>`,
				'</item>',
			].join('');
		})
		.join('');
	const xml =
		'<?xml version="1.0" encoding="UTF-8"?>' +
		'<rss version="2.0"><channel>' +
		`<title>${escapeXml(SITE_TITLE)}</title>` +
		`<description>${escapeXml(SITE_DESCRIPTION)}</description>` +
		`<link>${SITE_URL}/</link>` +
		items +
		'</channel></rss>';
	return c.body(xml, 200, { 'Content-Type': 'application/xml; charset=utf-8' });
});
