/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type TodoListFooter_viewer = {|
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoListFooter_viewer",
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
  "type": "User"
};

module.exports = fragment;
