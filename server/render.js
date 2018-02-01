import React from 'react';
import ReactDOM from 'react-dom/server';
import createHistory from 'history/createMemoryHistory';
import { flushChunkNames } from 'react-universal-component/server';
import serialize from 'serialize-javascript';
import flushChunks from 'webpack-flush-chunks';
import { getFarceResult } from 'found/lib/server';

import App from '../src/components/App';
import { ServerFetcher } from '../src/routing/fetcher';
import {
  createResolver,
  historyMiddlewares,
  render,
  routeConfig,
} from '../src/routing/router';

export default ({ clientStats }) => async (req, res) => {
  const history = createHistory({ initialEntries: [req.path] });
  const app = ReactDOM.renderToString(<App history={history} />);
  const chunkNames = flushChunkNames();
  const fetcher = new ServerFetcher('http://localhost:3000/graphql');
  const { redirect, status, element } = await getFarceResult({
    url: req.url,
    historyMiddlewares,
    routeConfig,
    resolver: createResolver(fetcher),
    render,
  });

  const todoApp = ReactDOM.renderToString(element);

  const {
    js,
    styles,
    cssHash,
    scripts,
    stylesheets,
  } = flushChunks(clientStats, { chunkNames });

  console.log('PATH', req.path);
  console.log('DYNAMIC CHUNK NAMES RENDERED', chunkNames);
  console.log('SCRIPTS SERVED', scripts);
  console.log('STYLESHEETS SERVED', stylesheets);

  if (redirect) {
    res.redirect(302, redirect.url);
    return;
  }

  res.status(status).send(
    `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>react-universal-component-boilerplate</title>
          ${styles}
        </head>
        <body>
          <script>
            window.__RELAY_PAYLOADS__ = ${serialize(fetcher, { isJSON: true })};
          </script>

          <div id="root">${todoApp}</div>
          ${cssHash}
          ${js}
        </body>
      </html>`
  );
};
