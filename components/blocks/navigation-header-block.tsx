"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Container } from "@/components/container";
import {
	Button,
	Separator,
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/index";

type NavigationHeaderProps = {
	links: { label: string; url: string }[];
};

type NavigationHeaderBlockProps = {
	siteName: string;
	navigationHeader: NavigationHeaderProps;
};

export const NavigationHeaderBlock = ({
	siteName,
	navigationHeader,
}: NavigationHeaderBlockProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		/* navigation header start */
		<nav className="fixed top-0 z-30 flex w-full justify-between border-b bg-secondary py-3 dark:bg-background">
			{/* navigation header container start */}
			<Container>
				<div className="relative flex h-16 w-full items-center justify-between">
					<div className="flex items-center space-x-1">
						{/* navigation side bar toggle start */}
						<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
							<SheetTrigger asChild>
								<Menu className="h-8 w-8 cursor-pointer lg:hidden" />
							</SheetTrigger>

							<SheetContent side="left" className="overflow-y-auto">
								{/* sidebar header section start */}
								<SheetHeader>
									<SheetTitle className="m-2">
										<Link
											href="/"
											className="flex items-center space-x-1"
											onClick={() => setIsMenuOpen(false)}
										>
											<h2 className="font-medium">{siteName}</h2>
										</Link>
									</SheetTitle>
								</SheetHeader>
								{/* sidebar header section end */}

								{/* sidebar navigation menu section start */}
								<div className="flex flex-col text-center">
									<Separator className="my-2" />

									{navigationHeader.links.map((link, index) => (
										<Button key={index} variant="link" asChild className="mb-3">
											<Link
												href={link.url}
												className="text-lg font-semibold uppercase dark:text-white"
												onClick={() => setIsMenuOpen(false)}
											>
												{link.label}
											</Link>
										</Button>
									))}
								</div>
								{/* sidebar navigation menu section end */}
							</SheetContent>
						</Sheet>
						{/* navigation side bar toggle end */}

						{/* logo section start */}
						<Link href="/" className="flex items-center">
							<h2 className="hidden text-2xl font-semibold lg:block">
								{siteName}
							</h2>

							<h2 className="text-2xl font-semibold lg:hidden">{siteName}</h2>
						</Link>
						{/* logo section end */}
					</div>

					<div className="flex items-center justify-between">
						{/* navigation menu start */}
						<div className="hidden lg:flex lg:items-center lg:justify-between">
							{navigationHeader.links.map((link, index) => (
								<Button key={index} variant="link" asChild>
									<Link
										href={link.url}
										className="mx-2 transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
									>
										{link.label}
									</Link>
								</Button>
							))}
						</div>
						{/* navigation menu end */}
					</div>
				</div>
			</Container>
			{/* navigation header container end */}
		</nav>
		/* navigation header start */
	);
};
