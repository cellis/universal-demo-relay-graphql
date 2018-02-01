/**
 * @flow
 * @relayHash a9c2db4fe7a73201416eb596d5bbd39e
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AddTodoMutationVariables = {|
  input: {
    text: string;
    clientMutationId?: ?string;
  };
|};
export type AddTodoMutationResponse = {|
  +addTodo: ?{|
    +viewer: ?{|
      +id: string;
      +numTodos: ?number;
    |};
    +todoEdge: ?{|
      +cursor: string;
      +node: ?{|
        +id: string;
        +complete: ?boolean;
        +text: ?string;
      |};
    |};
  |};
|};
*/


/*
mutation AddTodoMutation(
  $input: AddTodoInput!
) {
  addTodo(input: $input) {
    viewer {
      id
      numTodos
    }
    todoEdge {
      cursor
      node {
        id
        complete
        text
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddTodoInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddTodoMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddTodoInput!"
          }
        ],
        "concreteType": "AddTodoPayload",
        "name": "addTodo",
        "plural": false,
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
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "numTodos",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "TodoEdge",
            "name": "todoEdge",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
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
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "text",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AddTodoMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "AddTodoInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "AddTodoMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "AddTodoInput!"
          }
        ],
        "concreteType": "AddTodoPayload",
        "name": "addTodo",
        "plural": false,
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
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "numTodos",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "TodoEdge",
            "name": "todoEdge",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
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
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "text",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation AddTodoMutation(\n  $input: AddTodoInput!\n) {\n  addTodo(input: $input) {\n    viewer {\n      id\n      numTodos\n    }\n    todoEdge {\n      cursor\n      node {\n        id\n        complete\n        text\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
