import { defineMiddleware } from 'void';

declare module 'void' {
	interface CloudContextVariables {
		/** ページの loader が「該当なし」を示すために立てる */
		notFound?: boolean;
	}
}

/** loader が notFound を立てたら、描画済みのページはそのままにステータスだけ 404 にする */
export default defineMiddleware(async (c, next) => {
	await next();
	if (!c.get('notFound')) return;
	const headers = new Headers(c.res.headers);
	headers.set('x-revalidate', '0');
	headers.set('Cache-Control', 'no-store');
	c.res = new Response(c.res.body, { status: 404, headers });
});
