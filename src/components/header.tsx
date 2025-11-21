import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const Header = () => {
	return (
		<header className="py-4">
			<nav>
				<ul className="flex items-center justify-center gap-x-2">
					<li>
						<Button asChild>
							<Link href="/">Home</Link>
						</Button>
					</li>
					<li>
						<Button asChild>
							<Link href="/pure-html">Pure HTML</Link>
						</Button>
					</li>
				</ul>
			</nav>
		</header>
	);
};
