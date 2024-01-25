import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { ToastProvider } from '@/lib/providers/toast-provider';

import '@/app/styles/globals.css';

type LayoutProps = {
	children: ReactNode;
};

export const metadata: Metadata = {
	title: {
		default: 'Orly Airpark',
		template: '%s | Orly Airpark',
	},
	description:
		"Explore top-notch aviation at Orly Airpark in Kenya's Rift Valley. Soar, train, and network with pilots in a stunning location. Join us today!",
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<html lang="en">
			<body className="scroll-smooth font-sans antialiased">
				{children}
				<Analytics />
				<SpeedInsights />
				<ToastProvider />
			</body>
		</html>
	);
};

export default Layout;
