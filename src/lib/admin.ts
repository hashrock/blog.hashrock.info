import type { CloudContext } from 'void';
import { getUser } from 'void/auth';
import { env } from 'void/env';
import { HTTPException } from 'hono/http-exception';

export function isAdmin(user: { email: string } | null): boolean {
	return !!user && user.email.toLowerCase() === env.ADMIN_EMAIL.toLowerCase();
}

/** 管理者でなければ 403。middleware で弾いているが、API では念のためもう一度確認する */
export function requireAdmin(_c?: CloudContext) {
	const user = getUser();
	if (!isAdmin(user)) throw new HTTPException(403, { message: 'Forbidden' });
	return user!;
}
