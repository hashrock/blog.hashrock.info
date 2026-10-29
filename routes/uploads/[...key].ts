import { defineHandler } from 'void';
import { storage } from 'void/storage';

export const GET = defineHandler(async (c) => {
	const object = await storage.get(`uploads/${c.req.param('key')}`);
	if (!object) return c.notFound();

	const headers = new Headers();
	object.writeHttpMetadata(headers);
	headers.set('ETag', object.httpEtag);
	headers.set('X-Content-Type-Options', 'nosniff');
	// キーは UUID なので中身は変わらない
	headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	return new Response(object.body, { headers });
});
