module.exports = {
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:node/recommended'],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: ['node'],
    ignorePatterns: ['README.md', 'LICENSE'],
    rules: {},
  };
  