import { useEffect, useRef } from 'react';
import { formatDate } from '../lib/site';

declare global {
	interface Window {
		twttr?: { widgets?: { load(el?: HTMLElement): void } };
	}
}

export interface PostArticleProps {
	title: string;
	html: string;
	pubDate: string | null;
	updatedDate: string | null;
}

/** 記事本文。公開ページと管理画面のプレビューで共用する */
export function PostArticle({ title, html, pubDate, updatedDate }: PostArticleProps) {
	const bodyRef = useRef<HTMLDivElement>(null);

	// 埋め込みツイートは本文を差し込んだ後に widgets.js で描画する
	useEffect(() => {
		const el = bodyRef.current;
		if (!el?.querySelector('.twitter-tweet')) return;
		if (window.twttr?.widgets) {
			window.twttr.widgets.load(el);
			return;
		}
		const script = document.createElement('script');
		script.src = 'https://platform.twitter.com/widgets.js';
		script.async = true;
		document.body.appendChild(script);
	}, [html]);

	return (
		<main className="post">
			<article>
				<div className="prose">
					<div className="title">
						<div className="date">
							{pubDate ? <time dateTime={pubDate}>{formatDate(pubDate)}</time> : <span>下書き</span>}
							{updatedDate && (
								<div className="last-updated-on">
									Last updated on <time dateTime={updatedDate}>{formatDate(updatedDate)}</time>
								</div>
							)}
						</div>
						<h1>{title}</h1>
						<hr />
					</div>
					<div ref={bodyRef} dangerouslySetInnerHTML={{ __html: html }} />
				</div>
			</article>
		</main>
	);
}
