import { defineHandler } from 'void';
import { HTTPException } from 'hono/http-exception';
import { storage } from 'void/storage';
import { requireAdmin } from '../../../src/lib/admin';

const EXTENSIONS: Record<string, string> = {
	'image/png': 'png',
	'image/jpeg': 'jpg',
	'image/gif': 'gif',
	'image/webp': 'webp',
	'image/avif': 'avif',
};

/** 画像を R2 に保存して、本文に貼る URL を返す */
export const POST = defineHandler(async (c) => {
	requireAdmin();
	const form = await c.req.formData();
	const file = form.get('file');
	if (!(file instanceof File)) throw new HTTPException(400, { message: 'file がありません' });
	const ext = EXTENSIONS[file.type];
	if (!ext) throw new HTTPException(415, { message: `${file.type} はアップロードできません` });
	if (file.size > 20 * 1024 * 1024) throw new HTTPException(413, { message: '20MB までです' });

	const date = new Date().toISOString().slice(0, 7).replace('-', '/');
	const key = `${date}/${crypto.randomUUID()}.${ext}`;
	await storage.put(`uploads/${key}`, file.stream(), { httpMetadata: { contentType: file.type } });
	return { url: `/uploads/${key}` };
});
