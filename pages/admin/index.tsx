import { action, Link } from '@void/react';
import { formatDate } from '../../src/lib/site';
import type { Props } from './index.server';

export const layout = '!admin';

export default function AdminIndexPage({ posts }: Props) {
	const drafts = posts.filter((p) => p.status === 'draft');
	const published = posts.filter((p) => p.status === 'published');

	return (
		<main className="admin-main">
			<div className="admin-heading">
				<h1>記事</h1>
				<button type="button" className="primary" onClick={() => void action('/admin?create')}>
					新規作成
				</button>
			</div>
			<PostTable title={`下書き (${drafts.length})`} posts={drafts} />
			<PostTable title={`公開中 (${published.length})`} posts={published} />
		</main>
	);
}

function PostTable({ title, posts }: { title: string; posts: Props['posts'] }) {
	if (posts.length === 0) return null;
	return (
		<section className="admin-section">
			<h2>{title}</h2>
			<table className="post-table">
				<thead>
					<tr>
						<th>タイトル</th>
						<th>slug</th>
						<th>公開日</th>
						<th>更新</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((post) => (
						<tr key={post.id}>
							<td>
								<Link href={`/admin/posts/${post.id}`}>{post.title || '(無題)'}</Link>
							</td>
							<td className="mono">{post.slug}</td>
							<td>{post.pubDate ? formatDate(post.pubDate) : '—'}</td>
							<td>{formatDate(post.updatedAt)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}
