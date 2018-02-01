/**
 * @flow
 * @relayHash 2deebf3a574e45bdd367715d45fe354b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type router_TodoList_QueryResponse = {|
  +viewer: ?{| |};
|};
*/


/*
query router_TodoList_Query(
  $status: String!
) {
  viewer {
    ...TodoList_viewer
    id
  }
}

fragment TodoList_viewer on User {
  todos(status: $status, first: 2147483647) {
    edges {
      node {
        __typename
        id
        complete
        ...Todo_todo
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
  numTodos
  numCompletedTodos
  ...Todo_viewer
}

fragment Todo_todo on Todo {
  id
  complete
  text
}

fragment Todo_viewer on User {
  id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "status",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "router_TodoList_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TodoList_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "router_TodoList_Query",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "status",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "router_TodoList_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 2147483647,
                "type": "Int"
              },
              {
                "kind": "Variable",
                "name": "status",
                "variableName": "status",
                "type": "String"
              }
            ],
            "concreteType": "TodoConnection",
            "name": "todos",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "TodoEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Todo",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "__typename",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "complete",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "text",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 2147483647,
                "type": "Int"
              },
              {
                "kind": "Variable",
                "name": "status",
                "variableName": "status",
                "type": "String"
              }
            ],
            "handle": "connection",
            "name": "todos",
            "key": "TodoList_todos",
            "filters": [
              "status"
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "numTodos",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "numCompletedTodos",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query router_TodoList_Query(\n  $status: String!\n) {\n  viewer {\n    ...TodoList_viewer\n    id\n  }\n}\n\nfragment TodoList_viewer on User {\n  todos(status: $status, first: 2147483647) {\n    edges {\n      node {\n        __typename\n        id\n        complete\n        ...Todo_todo\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n  numTodos\n  numCompletedTodos\n  ...Todo_viewer\n}\n\nfragment Todo_todo on Todo {\n  id\n  complete\n  text\n}\n\nfragment Todo_viewer on User {\n  id\n}\n"
};

module.exports = batch;
