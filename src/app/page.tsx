'use cilent'
import Head from "next/head";
import Hero from '@/components/Hero'

export default function Home() {
	return (
		<>
			<Head>
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

				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
					integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>

				{/* style switcher */}
				<link rel="stylesheet" href="css/style-switcher.css" />

				<link
					rel="stylesheet"
					href="css/skins/color-1.css"
					className="alternate-style"
					title="color-1"
				/>
				<link
					rel="stylesheet"
					href="css/skins/color-2.css"
					className="alternate-style"
					title="color-2"
				/>
				<link
					rel="stylesheet"
					href="css/skins/color-3.css"
					className="alternate-style"
					title="color-3"
				/>
				<link
					rel="stylesheet"
					href="css/skins/color-4.css"
					className="alternate-style"
					title="color-4"
				/>
				<link
					rel="stylesheet"
					href="css/skins/color-5.css"
					className="alternate-style"
					title="color-5"
				/>
			</Head>
			<main>
				<Hero />
			</main>
		</>
	);
}
