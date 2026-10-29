import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
import type { Element, Root } from 'hast';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { createHighlighterCore, type HighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import rehypeExternalFavicon from './rehype-external-favicon.ts';

// Worker のバンドルを小さく保つため、言語は使うものだけ読み込む
let highlighter: Promise<HighlighterCore> | undefined;
function getHighlighter() {
	highlighter ??= createHighlighterCore({
		themes: [import('shiki/themes/github-dark.mjs')],
		langs: [
			import('shiki/langs/html.mjs'),
			import('shiki/langs/css.mjs'),
			import('shiki/langs/javascript.mjs'),
			import('shiki/langs/typescript.mjs'),
			import('shiki/langs/jsx.mjs'),
			import('shiki/langs/tsx.mjs'),
			import('shiki/langs/json.mjs'),
			import('shiki/langs/shellscript.mjs'),
			import('shiki/langs/xml.mjs'),
			import('shiki/langs/vue.mjs'),
			import('shiki/langs/markdown.mjs'),
		],
		langAlias: { svg: 'xml' },
		engine: createJavaScriptRegexEngine(),
	});
	return highlighter;
}

/** 本文に埋め込まれた Twitter の widgets.js は描画側でまとめて読み込むので取り除く */
function rehypeStripTwitterScript() {
	return (tree: Root) => {
		visit(tree, 'element', (node: Element, index, parent) => {
			if (node.tagName !== 'script' || !parent || index === undefined) return;
			const src = String(node.properties?.src ?? '');
			if (src.includes('platform.twitter.com/widgets.js')) {
				parent.children.splice(index, 1);
				return index;
			}
		});
	};
}

export async function renderMarkdown(markdown: string): Promise<string> {
	const file = await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeRaw)
		.use(rehypeStripTwitterScript)
		.use(rehypeSlug)
		.use(rehypeExternalFavicon)
		.use(rehypeShikiFromHighlighter, await getHighlighter(), {
			theme: 'github-dark',
			defaultLanguage: 'text',
			fallbackLanguage: 'text',
		})
		.use(rehypeStringify)
		.process(markdown);
	return String(file);
}

/** 本文から説明文を作る（description が空のとき用） */
export function excerpt(markdown: string, length = 120): string {
	const text = markdown
		.replace(/```[\s\S]*?```/g, '')
		.replace(/<[^>]+>/g, '')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/[#>*_`~-]/g, '')
		.replace(/\s+/g, ' ')
		.trim();
	return text.length > length ? `${text.slice(0, length)}…` : text;
}
