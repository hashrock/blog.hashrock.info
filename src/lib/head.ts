import { DEFAULT_OG_IMAGE, SITE_URL } from './site';

export function ogMeta({
	title,
	description,
	path,
	image = DEFAULT_OG_IMAGE,
}: {
	title: string;
	description: string;
	path: string;
	image?: string | null;
}) {
	const url = new URL(path, SITE_URL).href;
	const imageUrl = new URL(image || DEFAULT_OG_IMAGE, SITE_URL).href;
	return [
		{ name: 'description', content: description },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:url', content: url },
		{ property: 'og:title', content: title },
		{ property: 'og:description', content: description },
		{ property: 'og:image', content: imageUrl },
		{ property: 'twitter:card', content: 'summary_large_image' },
		{ property: 'twitter:url', content: url },
		{ property: 'twitter:title', content: title },
		{ property: 'twitter:description', content: description },
		{ property: 'twitter:image', content: imageUrl },
	];
}
