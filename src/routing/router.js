import queryMiddleware from 'farce/lib/queryMiddleware';
import { createRender, makeRouteConfig, hotRouteConfig, Route } from 'found';
import { Resolver } from 'found-relay';
import React from 'react';
import { graphql } from 'react-relay';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import TodoApp from '../components/TodoApp';
import TodoList from '../components/TodoList';

export const historyMiddlewares = [queryMiddleware];

export function createResolver(fetcher) {
  const environment = new Environment({
    network: Network.create((...args) => fetcher.fetch(...args)),
    store: new Store(new RecordSource()),
  });

  return new Resolver(environment);
}

const TodoListQuery = graphql`
  query router_TodoList_Query($status: String!) {
    viewer {
      ...TodoList_viewer
    }
  }
`;

const routes = makeRouteConfig(
  <Route
    path='/'
    Component={TodoApp}
    query={graphql`
      query router_TodoApp_Query {
        viewer {
          ...TodoApp_viewer
        }
      }
    `}
  >
    <Route
      Component={TodoList}
      query={TodoListQuery}
      prepareVariables={params => ({ ...params, status: 'any' })}
    />
    <Route
      path='faceySpacey'
      getComponent={() =>
        System.import('../components/FaceySpacey').then(
          module => module.default
        )}
      render={({ Component, props }) =>
        Component && props ? (
          <Component {...props} />
        ) : (
          <div>
            <small>Loading</small>
          </div>
        )}
    />
    <Route path=':status' Component={TodoList} query={TodoListQuery} />
  </Route>
);

export const routeConfig = hotRouteConfig(routes);

export const render = createRender({});
