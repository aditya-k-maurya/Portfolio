import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "@/components/css/style.css";
import "@/components/css/skins/color-1.css";
import "@/components/css/animation.css";


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

				<body className={inter.className}>
					
				<Navbar />
				{children}
			</body>
			</>
		
		</html>
	);
}
