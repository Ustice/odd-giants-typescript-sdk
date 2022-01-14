module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    module: 'writable',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
  ],
  root: true,
  rules: {
    '@typescript-eslint/member-delimiter-style': [ 'error', { multiline: { delimiter: 'none', requireLast: false } } ],
    '@typescript-eslint/no-floating-promises': [ 'error', { ignoreVoid: true } ],
    '@typescript-eslint/no-misused-promises': [ 'error', { checksVoidReturn: false } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'eol-last': [ 'error', 'always' ],
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'quotes': [ 'error', 'single' ],
    'sort-keys': [ 'error', 'asc', { caseSensitive: true, minKeys: 2, natural: false } ],
    'template-curly-spacing': [ 'error', 'always' ],
  },
}
