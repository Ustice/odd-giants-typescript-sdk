module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  globals: {
    module: 'writable',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'sort-keys-fix'],
  root: true,
  rules: {
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    'sort-keys-fix/sort-keys-fix': ['error'],
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, minKeys: 2, natural: false },
    ],
  },
}
