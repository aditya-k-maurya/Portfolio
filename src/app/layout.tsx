// "use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StyleSwitch from "@/components/StyleSwitch";
import "@/components/css/style.css";
import "@/components/css/style-switcher.css";
import "@/components/css/animation.css";
import Head from "next/head";
import { ModeProvider, useMode } from "@/context/ModeContext";
import type { Metadata } from "next";
import ThemeSwitch from "@/components/ThemeSwitch";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";

export const metadata: Metadata = {
	title: "Aditya | Portfolio",
	description: "This is my personal profile website, I hope you like it :) ",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
		other: [
			{
				rel: "icon",
				url: "/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				rel: "icon",
				url: "/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
	},
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Content>{children}</Content>;
}

function Content({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Head>

				{/* Style Switcher */}
				<link rel="stylesheet" href="@/components/css/style-switcher.css" />



			</Head>
			<ModeProvider>
				<ActiveSectionProvider>
					<body className={`${inter.className}`}>
						<Navbar />
						{children}
						<StyleSwitch />
						<ThemeSwitch />
					</body>
				</ActiveSectionProvider>
			</ModeProvider>
		</html>
	);
}
