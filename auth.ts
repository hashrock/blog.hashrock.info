import { defineAuth } from 'void/auth';
import { env } from 'void/env';

export default defineAuth(({ defaults }) => ({
	...defaults,
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
