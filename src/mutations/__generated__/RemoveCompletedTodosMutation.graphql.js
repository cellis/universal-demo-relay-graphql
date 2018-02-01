/**
 * @flow
 * @relayHash 06b6f22a1e6d89569d91894316fb5ff5
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RemoveCompletedTodosMutationVariables = {|
  input: {
    clientMutationId?: ?string;
  };
|};
export type RemoveCompletedTodosMutationResponse = {|
  +removeCompletedTodos: ?{|
    +viewer: ?{|
      +numTodos: ?number;
      +numCompletedTodos: ?number;
    |};
    +deletedIds: ?$ReadOnlyArray<?string>;
  |};
|};
*/


/*
mutation RemoveCompletedTodosMutation(
  $input: RemoveCompletedTodosInput!
) {
  removeCompletedTodos(input: $input) {
    viewer {
      numTodos
      numCompletedTodos
      id
    }
    deletedIds
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveCompletedTodosInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RemoveCompletedTodosMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RemoveCompletedTodosInput!"
          }
        ],
        "concreteType": "RemoveCompletedTodosPayload",
        "name": "removeCompletedTodos",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedIds",
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
  "name": "RemoveCompletedTodosMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveCompletedTodosInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RemoveCompletedTodosMutation",
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
            "type": "RemoveCompletedTodosInput!"
          }
        ],
        "concreteType": "RemoveCompletedTodosPayload",
        "name": "removeCompletedTodos",
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
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedIds",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation RemoveCompletedTodosMutation(\n  $input: RemoveCompletedTodosInput!\n) {\n  removeCompletedTodos(input: $input) {\n    viewer {\n      numTodos\n      numCompletedTodos\n      id\n    }\n    deletedIds\n  }\n}\n"
};

module.exports = batch;
