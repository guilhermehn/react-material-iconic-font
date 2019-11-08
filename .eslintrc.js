module.exports = {
	extends: ['eslint:recommended', 'plugin:react/recommended'],

	env: {
		es6: true,
		node: true,
		browser: true,
		'jest/globals': true
	},

	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 6,
		ecmaFeatures: {
			jsx: true
		}
	},

	plugins: ['react', 'jest']
};
