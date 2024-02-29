import { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { RecaptchaProvider } from "@/lib/providers/google-recaptcha-provider";
import { ToastProvider } from "@/lib/providers/toast-provider";

import "@/app/styles/globals.css";

export const revalidate = 3600;

/* get the url depending on the environment */
const absoluteUrl =
	process.env.NODE_ENV === "production"
		? process.env.NEXT_PUBLIC_PRODUCTION_URL!
		: process.env.NEXT_PUBLIC_DEVELOPMENT_URL!;

export const metadata: Metadata = {
	metadataBase: new URL(absoluteUrl),
	title: {
		default: "Orly Airpark",
		template: "%s | Orly Airpark",
	},
	description:
		"Orly Airpark: Where tranquility meets the sky. Immerse yourself in peaceful flying experiences amidst the natural wonders of Kenya's Rift Valley.",
};

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en">
			<body className="scroll-smooth font-sans antialiased">
				<RecaptchaProvider>
					{children}
					<Analytics />
					<SpeedInsights />
					<ToastProvider />
				</RecaptchaProvider>
			</body>
		</html>
	);
};

export default RootLayout;
