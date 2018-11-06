module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],

  settings: {
    react: {
      version: '16'
    }
  },

  env: {
    'jest/globals': true,
    es6: true,
    node: true,
    browser: true
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ['react', 'jest', 'prettier']
};
