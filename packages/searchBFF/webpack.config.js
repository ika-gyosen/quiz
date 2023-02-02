const nodeExternals = require('webpack-node-externals');
const NodemonWebpackPlugin = require('nodemon-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const path = require('path');
const { EnvironmentPlugin } = require('webpack');
const dotenv = require('dotenv');
const DotenvWebpackPlugin = require('dotenv-webpack');

// .env ファイルがあれば、そこから値を取得する
const env = dotenv.config().parsed;

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/index.ts',
  externals: [nodeExternals()],
  plugins: [
    new NodemonWebpackPlugin(),
    new CaseSensitivePathsPlugin(), // .env がないときは実行時の環境変数を使う
    // ある時はそれを使う
    !env
      ? new EnvironmentPlugin(Object.keys(process.env))
      : new DotenvWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
};
