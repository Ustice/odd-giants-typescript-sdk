const path = require('path')

const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const AwsSamPlugin = require("aws-sam-webpack-plugin")

const awsSamPlugin = new AwsSamPlugin()

module.exports = {
  devtool: 'source-map',
  entry: 'webpack/hot/poll?1000',
  externals: [
    nodeExternals({
      allowlist: ['webpack/hot/poll?1000'],
    }),
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    filename: 'api.ts',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() 

    // new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [ '.ts' ],
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  target: 'node',
  watch: true,
}
