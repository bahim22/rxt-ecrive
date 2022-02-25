module.exports = {
	content: [
		// './pages/**/*.{html,js}',
		'./components/**/*.{html,js}',
		//'./compos/**/*.{html,js}',
		'./src/**/*.{js,jsx,ts,tsx}',
		'./index.html',
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')
	]
}
