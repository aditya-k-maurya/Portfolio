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

export const metadata: Metadata = {
	title: "Aditya | Portfolio",
	description: "This is my personal profile website, I hope you like it :) ",
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
				{/* Favicons */}
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />

				{/* Style Switcher */}
				<link rel="stylesheet" href="@/components/css/style-switcher.css" />

				{/* Fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Clicker+Script&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<ModeProvider>
				<body className={`${inter.className}`}>
					<Navbar />
					{children}
					<StyleSwitch />
					<ThemeSwitch/>
				</body>
			</ModeProvider>
		</html>
	);
}
