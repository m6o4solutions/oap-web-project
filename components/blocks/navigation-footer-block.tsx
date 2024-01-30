import Link from "next/link";

import { Container } from "@/components/container";
import { Button, Separator } from "@/components/index";

type NavigationFooterBlockProps = {
	siteName: string;
	siteTagline: string;
	navigationFooter: { links: { label: string; url: string }[] };
};

export const NavigationFooterBlock = ({
	siteName,
	siteTagline,
	navigationFooter,
}: NavigationFooterBlockProps) => {
	const currentYear = new Date().getFullYear();

	return (
		/* navigation footer start */
		<div className="bg-secondary py-8 dark:bg-transparent">
			{/* navigation footer container start */}
			<Container>
				{/* basement section start */}
				<div className="flex flex-col items-center text-center">
					<div className="space-y-2">
						{/* site name start */}
						<Link href="/" className="text-lg font-semibold lg:text-2xl">
							{siteName}
						</Link>
						{/* site name end */}

						{/* site tagline start */}
						<p className="text-sm font-medium">{siteTagline}</p>
						{/* site tagline end */}
					</div>

					{/* navigation links start */}
					<div className="-mx-2 mt-5 flex flex-wrap justify-center">
						{navigationFooter.links.map((link, index) => (
							<Button
								key={index}
								variant="link"
								asChild
								className="text-sm lg:text-base"
							>
								<Link
									href={link.url}
									className="mx-2 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
								>
									{link.label}
								</Link>
							</Button>
						))}
					</div>
					{/* navigation links end */}
				</div>
				{/* basement section end */}

				<Separator className="my-5 lg:my-8" />

				{/* sub-basement section start */}
				<div className="flex flex-col items-center">
					<p className="text-sm font-medium">
						© Copyright {currentYear} {siteName}.
					</p>
				</div>
				{/* sub-basement section end */}
			</Container>
			{/* navigation footer container end */}
		</div>
		/* navigation footer end */
	);
};
