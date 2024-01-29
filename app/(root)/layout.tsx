import { ReactNode } from "react";

import { getGlobal } from "@/lib/data/read/index";

import {
	NavigationFooterBlock,
	NavigationHeaderBlock,
} from "@/components/index";

type LayoutProps = {
	children: ReactNode;
};

type GlobalDataProps = {
	siteName: string;
	siteTagline: string;
	navigationHeader: { links: { label: string; url: string }[] };
	navigationFooter: { links: { label: string; url: string }[] };
};

const Layout = async ({ children }: LayoutProps) => {
	const {
		siteName,
		siteTagline,
		navigationHeader,
		navigationFooter,
	}: GlobalDataProps = await getGlobal();

	return (
		<div className="flex h-screen flex-col">
			<header>
				<NavigationHeaderBlock
					siteName={siteName}
					navigationHeader={navigationHeader}
				/>
			</header>

			<main>{children}</main>

			<footer className="mt-auto">
				<NavigationFooterBlock
					siteName={siteName}
					siteTagline={siteTagline}
					navigationFooter={navigationFooter}
				/>
			</footer>
		</div>
	);
};

export default Layout;
