/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx', './src/components/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Roboto, sans-serif',
			},
			colors: {
				product: {
					greenDark: '#015F43',
					green: '#00875F',
					greenLight: '#00B37E',
					blue: '#81D8F7',
					warning: '#FBA94C',
					error: '#F75A68',
				},
				base: {
					background: '#09090A',
					elements: '#121214',
					bars: '#121214',
					strokeDivider: '#323238',
					title: '#E1E1E6',
					text: '#C4C4CC',
					subtext: '#8D8D99',
					white: '#FFFFFF',
				},
			},
		},
	},
	plugins: [],
};
