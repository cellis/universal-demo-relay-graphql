/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type TodoList_viewer = {|
  +todos: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string;
        +complete: ?boolean;
      |};
    |}>;
  |};
  +id: string;
  +numTodos: ?number;
  +numCompletedTodos: ?number;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "status",
      "type": "String"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "todos"
        ]
      }
    ]
  },
  "name": "TodoList_viewer",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "todos",
      "args": [
        {
          "kind": "Variable",
          "name": "status",
          "variableName": "status",
          "type": "String"
        }
      ],
      "concreteType": "TodoConnection",
      "name": "__TodoList_todos_connection",
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
                },
                {
                  "kind": "FragmentSpread",
                  "name": "Todo_todo",
                  "args": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "__typename",
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
    },
    {
      "kind": "FragmentSpread",
      "name": "Todo_viewer",
      "args": null
    }
  ],
  "type": "User"
};

module.exports = fragment;
