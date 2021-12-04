module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors'),
			primary: '#1A5CFF',
			success: '#46C93A',
		}),
		extend: {
			backgroundImage: {
				'login-bg': "url('/src/assets/background/login.png')",
			},
			width: {
				539: '539px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
