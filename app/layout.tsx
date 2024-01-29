import { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { RecaptchaProvider } from "@/lib/providers/google-recaptcha-provider";
import { ToastProvider } from "@/lib/providers/toast-provider";

import "@/app/styles/globals.css";

type RootLayoutProps = {
	children: ReactNode;
};

export const metadata: Metadata = {
	title: {
		default: "Orly Airpark",
		template: "%s | Orly Airpark",
	},
	description:
		"Orly Airpark: Where tranquility meets the sky. Immerse yourself in peaceful flying experiences amidst the natural wonders of Kenya's Rift Valley.",
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
