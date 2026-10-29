export const SITE_URL = 'https://blog.hashrock.info';
export const SITE_TITLE = 'hashrock blog';
export const SITE_DESCRIPTION = 'hashrockのブログ。フロントエンド、SVG、Deno、GUI開発などについて書いています。';
export const DEFAULT_OG_IMAGE = '/og-image.png';

/** 記事の公開 URL。Void は末尾スラッシュ付きを 301 で外すので、旧 Astro 版の `/slug/` もここに転送される */
export function postPath(slug: string): string {
	return `/${slug}`;
}

/** 旧 Astro 版の URL。RSS の guid を変えると購読者側で全記事が未読に戻るので、guid にはこちらを使い続ける */
export function legacyPostUrl(slug: string): string {
	return `${SITE_URL}/${slug}/`;
}

/** 'YYYY-MM-DD' または ISO 文字列を Date にする */
export function parseDate(value: string): Date {
	return new Date(/^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T00:00:00+09:00` : value);
}

export function formatDate(value: string): string {
	return parseDate(value).toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timeZone: 'Asia/Tokyo',
	});
}

export function yearOf(value: string): string {
	return parseDate(value).toLocaleDateString('en-us', { year: 'numeric', timeZone: 'Asia/Tokyo' });
}
