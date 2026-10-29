import { defineHandler } from 'void';
import { z } from 'zod';
import { requireAdmin } from '../../../src/lib/admin';
import { renderMarkdown } from '../../../src/lib/markdown';

/** エディタのプレビュー用に Markdown を本番と同じ処理で HTML にする */
export const POST = defineHandler.withValidator({ body: z.object({ body: z.string().max(500_000) }) })(
	async (_c, { body }) => {
		requireAdmin();
		return { html: await renderMarkdown(body.body) };
	},
);
