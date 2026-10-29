import { defineAuth } from 'void/auth';
import { env } from 'void/env';

export default defineAuth(({ defaults, request }) => ({
	...defaults,
	emailAndPassword: {
		enabled: true,
		...defaults.emailAndPassword,
		// 本番の管理者アカウントは登録済み。ローカルでは DB を作り直すので登録できるようにしておく
		disableSignUp: new URL(request.url).hostname !== 'localhost',
	},
	databaseHooks: {
		user: {
			create: {
				// 個人ブログなので ADMIN_EMAIL 以外のアカウントは作らせない
				before: async (user: { email: string }) => {
					if (user.email.toLowerCase() !== env.ADMIN_EMAIL.toLowerCase()) return false;
				},
			},
		},
	},
}));
