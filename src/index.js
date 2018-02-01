import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
// import AppContainer from 'react-hot-loader/lib/AppContainer';
import BrowserProtocol from 'farce/lib/BrowserProtocol';
import createInitialFarceRouter from 'found/lib/createInitialFarceRouter';
import { hot } from 'react-hot-loader';

import { ClientFetcher } from './routing/fetcher';
import {
  createResolver,
  historyMiddlewares,
  render,
  routeConfig,
} from './routing/router';

import App from './components/App';
import './assets/learn.json';

async function renderApp() {
  const fetcher = new ClientFetcher('/graphql', window.__RELAY_PAYLOADS__);
  const resolver = createResolver(fetcher);

  const farceRouter = await createInitialFarceRouter({
    historyProtocol: new BrowserProtocol(),
    historyMiddlewares,
    routeConfig,
    resolver,
    render,
    renderError: (
      { error } // eslint-disable-line react/prop-types
    ) => <div>{error.status === 404 ? 'Not found' : 'Error'}</div>,
  });

  const HotRouter = hot(module)(farceRouter);

  ReactDOM.hydrate(<HotRouter resolver={resolver} />, document.getElementById('root'));
}

renderApp();
