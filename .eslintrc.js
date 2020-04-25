module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier', 'jest'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    es6: true,
    'jest/globals': true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
}
