import { Link } from '@void/react';

export function NotFound() {
	return (
		<main className="not-found">
			<div>
				<h1>404</h1>
				<p>Page not found</p>
				<Link href="/">Back to home</Link>
			</div>
		</main>
	);
}
