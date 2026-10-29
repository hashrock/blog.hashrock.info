import { defineHandler } from 'void';
import { SITE_URL } from '../src/lib/site';

// 旧 Astro 版（@astrojs/sitemap）と同じ URL を維持する
export const GET = defineHandler((c) => {
	const xml =
		'<?xml version="1.0" encoding="UTF-8"?>' +
		'<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
		`<sitemap><loc>${SITE_URL}/sitemap-0.xml</loc></sitemap>` +
		'</sitemapindex>';
	return c.body(xml, 200, { 'Content-Type': 'application/xml; charset=utf-8' });
});
