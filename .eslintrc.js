module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier', 'jest'],
  env: {
    es6: true,
    'jest/globals': true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    'prettier/prettier': 'error',
  },
}
