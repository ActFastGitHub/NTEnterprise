import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import "swiper/css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "NT Enterprise | Property Rentals & Management in Canada",
	description:
		"NT Enterprise offers fully furnished rental properties and expert property management services in Canada. Trusted by property owners and tenants alike.",
	authors: [{ name: "NT Enterprise", url: "https://www.ntenterprise.ca" }],
	creator: "NT Enterprise",
	keywords: [
		"NT Enterprise",
		"property rental",
		"property management",
		"furnished rentals",
		"rental services",
		"real estate",
		"Canada"
	],
	openGraph: {
		title: "NT Enterprise | Property Rentals & Management",
		description: "Explore fully furnished rental homes and professional property management with NT Enterprise.",
		url: "https://www.ntenterprise.ca",
		siteName: "NT Enterprise",
		images: [
			{
				url: "/hero/hero-1.jpg", // Replace with your actual OG image path
				width: 1200,
				height: 630,
				alt: "NT Enterprise - Fully Furnished Rentals"
			}
		],
		locale: "en_CA",
		type: "website"
	},
	themeColor: "#059669",
	manifest: "/site.webmanifest", // Optional if you're using PWA support
	// metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),

};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Toaster />
				{children}
			</body>
		</html>
	);
}
