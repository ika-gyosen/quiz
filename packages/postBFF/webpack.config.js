const nodeExternals = require('webpack-node-externals');
const NodemonWebpackPlugin = require('nodemon-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/index.ts',
  externals: [nodeExternals()],
  plugins: [new NodemonWebpackPlugin(), new CaseSensitivePathsPlugin()],
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
