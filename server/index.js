import express from 'express';
import graphQLHTTP from 'express-graphql';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import schema from '../src/data/schema';

require('colors');

const noFavicon = require('express-no-favicons');
// const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const clientConfig = require('../internal/webpack/client.dev');
const serverConfig = require('../internal/webpack/server.dev');
const clientConfigProd = require('../internal/webpack/client.prod.babel');
const serverConfigProd = require('../internal/webpack/server.prod.babel');

const { publicPath } = clientConfig.output;
const outputPath = clientConfig.output.path;
const DEV = process.env.NODE_ENV === 'development';
const app = express();
app.use(noFavicon());

let isBuilt = false;

app.use('/graphql', graphQLHTTP({ schema }));

const done = () =>
  !isBuilt &&
  app.listen(3000, () => {
    isBuilt = true;
    console.log('BUILD COMPLETE -- Listening @ http://localhost:3000'.magenta);
  });

if (DEV) {
  const compiler = webpack([clientConfig, serverConfig]);
  const clientCompiler = compiler.compilers[0];
  const options = { publicPath, stats: { colors: true } };

  app.use(webpackDevMiddleware(compiler, options));
  app.use(webpackHotMiddleware(clientCompiler));
  app.use(webpackHotServerMiddleware(compiler));

  compiler.plugin('done', done);
}
else {
  webpack([clientConfigProd, serverConfigProd]).run((err, stats) => {
    const clientStats = stats.toJson().children[0];
    const serverRender = require('../build/server/main.js').default;

    app.use(publicPath, express.static(outputPath));
    app.use(serverRender({ clientStats }));

    done();
  });
}
