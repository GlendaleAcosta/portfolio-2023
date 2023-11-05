/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// fontFamily: {
			// sans: ["Geist", "Geist-sans"],
			// sans: ['var(--font-geist-sans)'],
			// 	mono: ['var(--font-geist-mono)'],
			// },
			colors: {
				'ass-black': '#141517',
				'ass-black-400': '#23262d',
				'ass-rgba-10p': 'rgba(255, 255, 255, 0.1)'
			}
		},
	},
	plugins: [],
}
