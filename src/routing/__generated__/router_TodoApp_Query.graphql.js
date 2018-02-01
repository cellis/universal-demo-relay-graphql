/**
 * @flow
 * @relayHash 03e9b2ae3e46320878caf55cd10bf502
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type router_TodoApp_QueryResponse = {|
  +viewer: ?{| |};
|};
*/


/*
query router_TodoApp_Query {
  viewer {
    ...TodoApp_viewer
    id
  }
}

fragment TodoApp_viewer on User {
  id
  ...TodoListFooter_viewer
}

fragment TodoListFooter_viewer on User {
  todos(status: "completed", first: 2147483647) {
    edges {
      node {
        id
        complete
      }
    }
  }
  id
  numTodos
  numCompletedTodos
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "router_TodoApp_Query",
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
            "name": "TodoApp_viewer",
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
  "name": "router_TodoApp_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "router_TodoApp_Query",
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
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
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
                "kind": "Literal",
                "name": "status",
                "value": "completed",
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
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "complete",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "todos{\"first\":2147483647,\"status\":\"completed\"}"
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
  "text": "query router_TodoApp_Query {\n  viewer {\n    ...TodoApp_viewer\n    id\n  }\n}\n\nfragment TodoApp_viewer on User {\n  id\n  ...TodoListFooter_viewer\n}\n\nfragment TodoListFooter_viewer on User {\n  todos(status: \"completed\", first: 2147483647) {\n    edges {\n      node {\n        id\n        complete\n      }\n    }\n  }\n  id\n  numTodos\n  numCompletedTodos\n}\n"
};

module.exports = batch;
