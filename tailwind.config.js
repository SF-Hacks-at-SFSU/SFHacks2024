/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs':'300px', // Added an extra small screen variant
      },
      backgroundImage: {
        "event" : "url(/brand-assets/eventPink.jpg)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      

      colors: {
				sfGreyBlue : '#838FBA',
				sfDarkBlue : '#132A3E',
				sfDarkerBlue: '#132330',
				sfPink: '#FFD6EC',
				sfLightBlue: '#2b455c',
        sfTan: "#FFF5D9",
        sfBloo: "#254d70"
			},
    },
  },
  plugins: [],
};
