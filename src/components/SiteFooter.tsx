export function SiteFooter() {
	return (
		<footer className="site-footer">
			&copy; {new Date().getFullYear()} hashrock{" "}
			<a href="/admin" className="site-footer-admin" aria-label="Admin" rel="nofollow">
				·
			</a>
		</footer>
	);
}
