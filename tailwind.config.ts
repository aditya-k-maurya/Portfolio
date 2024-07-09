import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 2.4s linear infinite", // Adjust duration as needed
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				clicker: ['"Clicker Script"', "cursive"],
			},
		},
	},
	plugins: [],
};
export default config;
