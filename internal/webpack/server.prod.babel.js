import ExtractTextPlugin from 'extract-text-webpack-plugin';

const path = require('path');
const webpack = require('webpack');

const res = p => path.resolve(__dirname, p);

const entry = res('../../server/render.js');
const output = res('../../build/server');

module.exports = {
  name: 'server',
  target: 'node',
  devtool: 'hidden-source-map',
  entry: ['regenerator-runtime/runtime', entry],
  output: {
    path: output,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      { test: /learn\.json$/, use: 'file-loader?name=[name].[ext]' },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'stylus-loader',
          }
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.styl'],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    })
  ],
};
