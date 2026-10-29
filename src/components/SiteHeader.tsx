import { Link, useRouter } from '@void/react';

export function SiteHeader() {
	const router = useRouter();
	const isHome = router.path === '/';
	return (
		<header className={isHome ? 'site-header is-home' : 'site-header'}>
			<nav>
				<h2>
					<Link href="/">
						<img src="/logo.svg" alt="Logo" className="logo" />
					</Link>
				</h2>
			</nav>
		</header>
	);
}
