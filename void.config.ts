import { defineConfig } from 'void/config';

export default defineConfig({
	worker: {
		compatibility_date: '2026-02-24',
	},
	cloudflare: {
		// 旧 Astro 版の Worker（blog）は切り戻し用に残すので別名にする
		name: 'hashrock-blog',
		// デプロイ時の readiness 確認に Version URL が必要
		workers_dev: true,
		preview_urls: true,
	},
	head: {
		htmlAttrs: { lang: 'ja' },
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
		link: [
			{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
			{ rel: 'sitemap', href: '/sitemap-index.xml' },
			{ rel: 'alternate', type: 'application/rss+xml', title: 'hashrock blog', href: '/rss.xml' },
		],
	},
	routing: {
		// 公開ページは保存時に revalidate() で消すまでキャッシュし続ける
		revalidate: {
			'/admin/*': 0,
			'*': 31536000,
		},
	},
});
