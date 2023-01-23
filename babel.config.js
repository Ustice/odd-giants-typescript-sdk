// babel.config.js
module.exports = {
  presets: [
    ['@babel/env', { targets: { node: 'current' } }],
    '@babel/typescript',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    ['@babel/plugin-transform-runtime', { regenerator: true }],
  ],
  ignore: ['./node_modules', './dist'],
  overrides: [
    {
      test: '/node_modules/',
      compact: false,
    },
  ],
}
