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
	siteMetaDescription: string;
	siteLogo: string;
	siteTagline: string;
	siteContactDetails: { list: string[] };
	navigationHeader: { links: { label: string; url: string }[] };
	navigationFooter: { links: { label: string; url: string }[] };
};

const Layout = async ({ children }: LayoutProps) => {
	const {
		siteName,
		siteMetaDescription,
		siteLogo,
		siteTagline,
		siteContactDetails,
		navigationHeader,
		navigationFooter,
	}: GlobalDataProps = await getGlobal();

	return (
		<div className="flex h-screen flex-col">
			<header>
				<NavigationHeaderBlock />
			</header>

			<main>{children}</main>

			<footer className="mt-auto">
				<NavigationFooterBlock
					siteName={siteName}
					navigationFooter={navigationFooter}
				/>
			</footer>
		</div>
	);
};

export default Layout;
