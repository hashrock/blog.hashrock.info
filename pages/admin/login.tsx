import { useRouter } from '@void/react';
import { auth } from 'void/client';
import { useState } from 'react';

export const layout = '!admin';

export default function LoginPage() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [pending, setPending] = useState(false);

	async function submit(mode: 'signIn' | 'signUp') {
		setPending(true);
		setError(null);
		const result =
			mode === 'signIn'
				? await auth.signIn.email({ email, password })
				: await auth.signUp.email({ email, password, name: 'hashrock' });
		setPending(false);
		if (result.error) {
			setError(result.error.message ?? 'ログインできませんでした');
			return;
		}
		// セッション Cookie を反映させるため、クライアント遷移ではなく再読み込みする
		window.location.href = '/admin';
	}

	return (
		<main className="admin-login">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					void submit('signIn');
				}}
			>
				<h1>ログイン</h1>
				<label>
					メールアドレス
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
				</label>
				<label>
					パスワード
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						minLength={8}
						autoComplete="current-password"
					/>
				</label>
				{error && <p className="error">{error}</p>}
				<div className="actions">
					<button type="submit" className="primary" disabled={pending}>
						ログイン
					</button>
					<button type="button" disabled={pending} onClick={() => void submit('signUp')}>
						初回登録
					</button>
				</div>
				<p className="hint">初回登録は ADMIN_EMAIL に設定したアドレスでのみ行えます。</p>
			</form>
		</main>
	);
}
