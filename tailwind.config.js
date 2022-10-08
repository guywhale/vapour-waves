/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'x-',
	content: [
		'./layout/*.liquid',
		'./templates/*.liquid',
		'./sections/*.liquid',
		'./snippets/*.liquid',
		'./assets/*.{css,js}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
