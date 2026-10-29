import 'normalize.css';
import '../src/styles/global.css';
import '../src/styles/site.css';
import { SiteFooter } from '../src/components/SiteFooter';
import { SiteHeader } from '../src/components/SiteHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="site-root">
			<SiteHeader />
			{children}
			<SiteFooter />
		</div>
	);
}
