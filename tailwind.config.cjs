/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				sfGreyBlue : '#838FBA',
				sfDarkBlue : '#132A3E',
			}
		},
		fontFamily: {
			sen: ['Sen']
			
		}
	},
	plugins: [],
}