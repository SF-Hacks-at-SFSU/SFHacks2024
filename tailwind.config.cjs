/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'event' : "url('/sfhacks/event.jpg')"
			},
			colors: {
				sfGreyBlue : '#838FBA',
				sfDarkBlue : '#132A3E',
				sfDarkerBlue: '#132330',
				sfPink: '#FFD6EC',
				sfLightBlue: '#2b455c'
			}
		},
		fontFamily: {
			sen: ['Sen']
			
		}
	},
	plugins: [],
}