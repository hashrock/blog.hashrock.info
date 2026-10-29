import { action, Link } from '@void/react';
import { useEffect, useRef, useState } from 'react';
import { PostArticle } from '../../../src/components/PostArticle';
import { postPath } from '../../../src/lib/site';
import type { Props } from './[id].server';

export const layout = '!admin';

type Fields = { slug: string; title: string; description: string; body: string; heroImage: string };
type Command = 'save' | 'publish' | 'unpublish' | 'delete';

function toFields(post: Props['post']): Fields {
	return {
		slug: post.slug,
		title: post.title,
		description: post.description,
		body: post.body,
		heroImage: post.heroImage ?? '',
	};
}

/** action() のエラーから、フィールドごとのメッセージと全体メッセージを取り出す */
function readErrors(error: { message: string; body: unknown }) {
	const body = error.body as { errors?: Record<string, string | string[]>; message?: string } | null;
	const fields: Record<string, string> = {};
	for (const [key, value] of Object.entries(body?.errors ?? {})) {
		fields[key] = Array.isArray(value) ? value.join(' ') : String(value);
	}
	return { fields, message: Object.keys(fields).length ? null : (body?.message ?? error.message) };
}

export default function EditPostPage({ post }: Props) {
	const [fields, setFields] = useState<Fields>(() => toFields(post));
	const [saved, setSaved] = useState<Fields>(() => toFields(post));
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [message, setMessage] = useState<{ kind: 'ok' | 'error'; text: string } | null>(null);
	const [pending, setPending] = useState<Command | null>(null);
	const [previewHtml, setPreviewHtml] = useState(post.html);
	const [uploading, setUploading] = useState(0);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const dirty = (Object.keys(fields) as (keyof Fields)[]).some((k) => fields[k] !== saved[k]);
	const isPublished = post.status === 'published';

	// 保存が成功してサーバー側の記事が更新されたら、手元の状態を合わせる。
	// 失敗時も props は再取得されるので、post 自体を依存にすると入力が巻き戻ってしまう
	useEffect(() => {
		setSaved(toFields(post));
		setFields(toFields(post));
	}, [post.updatedAt, post.status]);

	// 本文のプレビューは本番と同じ描画処理をサーバーで走らせる
	useEffect(() => {
		const controller = new AbortController();
		const timer = setTimeout(async () => {
			const res = await fetch('/api/admin/preview', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ body: fields.body }),
				signal: controller.signal,
			}).catch(() => null);
			if (res?.ok) setPreviewHtml(((await res.json()) as { html: string }).html);
		}, 400);
		return () => {
			clearTimeout(timer);
			controller.abort();
		};
	}, [fields.body]);

	// 未保存のまま離れようとしたら止める
	useEffect(() => {
		if (!dirty) return;
		const onBeforeUnload = (e: BeforeUnloadEvent) => e.preventDefault();
		window.addEventListener('beforeunload', onBeforeUnload);
		return () => window.removeEventListener('beforeunload', onBeforeUnload);
	}, [dirty]);

	async function run(command: Command) {
		if (command === 'delete' && !window.confirm('この記事を削除します。元に戻せません。')) return;
		if (command === 'unpublish' && !window.confirm('公開を取り消して下書きに戻します。')) return;
		setPending(command);
		setErrors({});
		setMessage(null);
		const result = await action(`/admin/posts/:id?${command}`, {
			params: { id: String(post.id) },
			data: command === 'save' || command === 'publish' ? fields : {},
		});
		setPending(null);
		if (!result.ok) {
			const { fields: fieldErrors, message: text } = readErrors(result.error);
			setErrors(fieldErrors);
			setMessage({ kind: 'error', text: text ?? '入力内容を確認してください' });
			return;
		}
		const done = { save: '保存しました', publish: '公開しました', unpublish: '下書きに戻しました', delete: '' };
		if (done[command]) setMessage({ kind: 'ok', text: done[command] });
	}

	// ⌘S / Ctrl+S で保存（公開中なら即反映される）
	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 's') {
				e.preventDefault();
				if (!pending) void run('save');
			}
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	});

	function set<K extends keyof Fields>(key: K, value: Fields[K]) {
		setFields((f) => ({ ...f, [key]: value }));
		setErrors(({ [key]: _, ...rest }) => rest);
	}

	function insertAtCursor(text: string) {
		const el = textareaRef.current;
		if (!el) return set('body', fields.body + text);
		const { selectionStart: start, selectionEnd: end } = el;
		setFields((f) => ({ ...f, body: f.body.slice(0, start) + text + f.body.slice(end) }));
		requestAnimationFrame(() => {
			el.focus();
			el.selectionStart = el.selectionEnd = start + text.length;
		});
	}

	async function upload(files: Iterable<File>) {
		for (const file of files) {
			if (!file.type.startsWith('image/')) continue;
			setUploading((n) => n + 1);
			try {
				const form = new FormData();
				form.append('file', file);
				const res = await fetch('/api/admin/upload', { method: 'POST', body: form });
				const json = (await res.json()) as { url?: string; message?: string; error?: string };
				if (!res.ok || !json.url) throw new Error(json.message ?? json.error ?? res.statusText);
				insertAtCursor(`![](${json.url})\n`);
			} catch (e) {
				setMessage({ kind: 'error', text: `アップロードに失敗しました: ${(e as Error).message}` });
			} finally {
				setUploading((n) => n - 1);
			}
		}
	}

	return (
		<main className="editor">
			<div className="editor-toolbar">
				<Link href="/admin">← 一覧</Link>
				<span className={`status status-${post.status}`}>{isPublished ? '公開中' : '下書き'}</span>
				{dirty && <span className="dirty">未保存の変更</span>}
				{uploading > 0 && <span className="dirty">アップロード中…</span>}
				{message && <span className={`message message-${message.kind}`}>{message.text}</span>}
				<div className="spacer" />
				{isPublished && (
					<a href={postPath(post.slug)} target="_blank" rel="noreferrer">
						公開ページ
					</a>
				)}
				<button type="button" onClick={() => void run('save')} disabled={!!pending}>
					{pending === 'save' ? '保存中…' : isPublished ? '保存して反映' : '下書き保存'}
				</button>
				{isPublished ? (
					<button type="button" onClick={() => void run('unpublish')} disabled={!!pending}>
						下書きに戻す
					</button>
				) : (
					<button type="button" className="primary" onClick={() => void run('publish')} disabled={!!pending}>
						{pending === 'publish' ? '公開中…' : '公開する'}
					</button>
				)}
			</div>

			<div className="editor-panes">
				<section className="editor-form">
					<Field label="タイトル" error={errors.title}>
						<input value={fields.title} onChange={(e) => set('title', e.target.value)} />
					</Field>
					<Field label="slug" error={errors.slug}>
						<input className="mono" value={fields.slug} onChange={(e) => set('slug', e.target.value)} />
					</Field>
					<Field label="説明" error={errors.description}>
						<textarea rows={2} value={fields.description} onChange={(e) => set('description', e.target.value)} />
					</Field>
					<Field label="OGP 画像" error={errors.heroImage}>
						<input
							className="mono"
							value={fields.heroImage}
							placeholder="/images/... または /uploads/..."
							onChange={(e) => set('heroImage', e.target.value)}
						/>
					</Field>
					<Field label="本文（Markdown。画像は貼り付け・ドロップでアップロード）" error={errors.body} grow>
						<textarea
							ref={textareaRef}
							className="body-input mono"
							value={fields.body}
							onChange={(e) => set('body', e.target.value)}
							onPaste={(e) => {
								if (e.clipboardData.files.length) {
									e.preventDefault();
									void upload(e.clipboardData.files);
								}
							}}
							onDragOver={(e) => e.preventDefault()}
							onDrop={(e) => {
								if (e.dataTransfer.files.length) {
									e.preventDefault();
									void upload(e.dataTransfer.files);
								}
							}}
						/>
					</Field>
					<div className="danger-zone">
						<button type="button" className="danger" onClick={() => void run('delete')} disabled={!!pending}>
							記事を削除
						</button>
					</div>
				</section>
				<section className="editor-preview">
					<PostArticle
						title={fields.title || '(無題)'}
						html={previewHtml}
						pubDate={post.pubDate}
						updatedDate={post.updatedDate}
					/>
				</section>
			</div>
		</main>
	);
}

function Field({
	label,
	error,
	grow,
	children,
}: {
	label: string;
	error?: string;
	grow?: boolean;
	children: React.ReactNode;
}) {
	return (
		<label className={grow ? 'field grow' : 'field'}>
			<span className="field-label">{label}</span>
			{children}
			{error && <span className="field-error">{error}</span>}
		</label>
	);
}
