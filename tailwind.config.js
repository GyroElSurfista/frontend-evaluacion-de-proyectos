/** @type {import('tailwindcss').Config} */
export default {
  important: '#root',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/primereact/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
}
