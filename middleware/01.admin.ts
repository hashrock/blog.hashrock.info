import { defineMiddleware } from 'void';
import { getUser } from 'void/auth';
import { isAdmin } from '../src/lib/admin';

declare module 'void' {
	interface CloudContextVariables {
		shared: { admin: { email: string } | null };
	}
}

const PUBLIC_ADMIN_PATHS = new Set(['/admin/login']);

export default defineMiddleware(async (c, next) => {
	const user = getUser();
	const admin = isAdmin(user) ? { email: user!.email } : null;
	c.set('shared', { admin });

	const path = c.req.path;
	const isAdminArea = path === '/admin' || path.startsWith('/admin/') || path.startsWith('/api/admin/');
	if (isAdminArea && !PUBLIC_ADMIN_PATHS.has(path) && !admin) {
		if (path.startsWith('/api/')) return c.json({ error: 'Forbidden' }, 403);
		return c.redirect('/admin/login');
	}
	await next();
});
