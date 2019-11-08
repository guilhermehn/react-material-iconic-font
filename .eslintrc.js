module.exports = {
	extends: ['eslint:recommended', 'plugin:react/recommended'],

	env: {
		node: true,
		browser: true,
		'jest/globals': true
	},

	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 11,
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		react: {
			version: 'detect'
		}
	},

	plugins: ['react', 'jest']
};
