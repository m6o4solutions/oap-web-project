import { ReactNode } from 'react';

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<div className="flex h-screen flex-col">
			<header>Header Section</header>

			<main>{children}</main>

			<footer className="mt-auto">Footer Section</footer>
		</div>
	);
};

export default RootLayout;
