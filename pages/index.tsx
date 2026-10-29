import { Link } from '@void/react';
import { formatDate, postPath, yearOf } from '../src/lib/site';
import type { Props } from './index.server';

export default function IndexPage({ posts }: Props) {
	const years = new Map<string, Props['posts']>();
	for (const post of posts) {
		const year = yearOf(post.pubDate);
		years.set(year, [...(years.get(year) ?? []), post]);
	}

	return (
		<main className="post-index">
			<div className="years">
				{[...years].map(([year, yearPosts]) => (
					<section key={year} className="year-group" aria-labelledby={`year-${year}`}>
						<h2 id={`year-${year}`} className="year-heading">
							{year}
						</h2>
						<ul className="post-list">
							{yearPosts.map((post) => (
								<li key={post.id} className="post-item">
									<Link className="post-link" href={postPath(post.slug)}>
										<span className="title">{post.title}</span>
										<span className="date">
											<time dateTime={post.pubDate}>{formatDate(post.pubDate)}</time>
										</span>
									</Link>
								</li>
							))}
						</ul>
					</section>
				))}
			</div>
		</main>
	);
}
