import 'normalize.css';
import '../../src/styles/global.css';
import '../../src/styles/site.css';
import '../../src/styles/admin.css';
import { Link, useRouter, useShared } from '@void/react';
import { auth } from 'void/client';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	const { admin } = useShared();
	const router = useRouter();

	async function signOut() {
		await auth.signOut();
		router.visit('/admin/login');
	}

	return (
		<div className="admin">
			<header className="admin-bar">
				<Link href="/admin" className="admin-brand">
					<img src="/logo.svg" alt="" width={28} height={28} />
					hashrock blog CMS
				</Link>
				<nav>
					<a href="/" target="_blank" rel="noreferrer">
						サイトを見る
					</a>
					{admin && (
						<button type="button" className="link-button" onClick={signOut}>
							ログアウト
						</button>
					)}
				</nav>
			</header>
			{children}
		</div>
	);
}
