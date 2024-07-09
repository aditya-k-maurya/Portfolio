import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "@/components/css/style.css";
import "@/components/css/skins/color-1.css";
import "@/components/css/animation.css";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Aditya | Portfolio",
	description: "This is my personal portfolio website. I hope you like it :) ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<>
				<Head>
					<Head>
						<link
							rel="stylesheet"
							href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
							integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
							crossOrigin="anonymous"
							referrerPolicy="no-referrer"
						/>
						{/* favicon */}

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

						{/* style switcher */}
						<link rel="stylesheet" href="@/components/css/style-switcher.css" />
					</Head>
				</Head>
				<body className={inter.className}>
					<Navbar />
					{children}
				</body>
			</>
		</html>
	);
}
