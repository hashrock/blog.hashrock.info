import { defineEnv, email } from 'void/env';

export default defineEnv({
	/** 管理画面にログインできる唯一のメールアドレス */
	ADMIN_EMAIL: email(),
});
