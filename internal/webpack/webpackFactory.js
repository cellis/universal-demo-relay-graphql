import webpack from 'webpack';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin'; // here so you can see what chunks are built
import path from 'path';
import { removeEmpty, ifElse, merge, happyPackPlugin } from './utils';

const productionEnvironments = ['production', 'staging'];

export default function getWebpackConfig(configType, env) {
  const isDev = productionEnvironments.indexOf(env) === -1;
  const isProd = !isDev;
  const isClient = configType === 'client';
  const isServer = configType === 'server';
  const target = isClient ? 'web' : 'node';
  const name = configType;

  const ifDev = ifElse(isDev);
  const ifProd = ifElse(isProd); // eslint-disable-line no-unused-vars
  const ifClient = ifElse(isClient);
  const ifServer = ifElse(isServer);
  const ifDevServer = ifElse(isDev && isServer);
  const ifDevClient = ifElse(isDev && isClient);
  const ifProdClient = ifElse(isProd && isClient);
  const ifProdServer = ifElse(isProd && isServer);
  const entryPath = isClient ? '../../src/index.js' : '../../server/render.js';
  const entry = path.resolve(__dirname, entryPath);

  return {
    name,
    target,
    devtool: ifDev('eval', 'hidden-source-map'),
    entry: removeEmpty([
      ifDevClient('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false'),
      ifDevClient('react-hot-loader/patch'),
      'regenerator-runtime/runtime',
      entry
    ]),
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, `../../build/${name}`),
      publicPath: '/static/',
    },
    module: {
      rules: removeEmpty([
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        ifClient({
          test: /\.styl$/,
          use: ExtractCssChunks.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[name]__[local]--[hash:base64:5]',
                },
              },
              {
                loader: 'stylus-loader',
              }
            ],
          }),
        }),
        ifServer({ test: /learn\.json$/, use: 'file-loader?name=[name].[ext]' }),
        ifServer({
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
        })
      ]),
    },
    resolve: {
      extensions: ['.js', '.css', '.styl'],
    },
    plugins: removeEmpty([
      ifDevClient(new WriteFilePlugin()),
      ifProdServer(new WriteFilePlugin()),

      ifServer(new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })),

      ifClient(new ExtractCssChunks()),

      ifClient(new webpack.optimize.CommonsChunkPlugin({
        names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
        filename: isProd ? '[name].[chunkhash].js' : '[name].js',
        minChunks: Infinity,
      })),

      ifDevClient(new webpack.HotModuleReplacementPlugin()),

      ifDevClient(new webpack.NoEmitOnErrorsPlugin()),

      ifDevClient(new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      })),

      // always use the define plugin
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(target),
        },
      }),

      ifProdClient(new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
        },
        mangle: {
          screw_ie8: true,
        },
        output: {
          screw_ie8: true,
          comments: false,
        },
        sourceMap: false, // true,
      })),

      ifProdClient(new webpack.HashedModuleIdsPlugin())
    ]),
  };
}
