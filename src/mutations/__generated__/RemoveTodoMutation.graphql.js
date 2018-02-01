/**
 * @flow
 * @relayHash 46d3e43a68a8a72c29d299312a4a5949
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RemoveTodoMutationVariables = {|
  input: {
    id: string;
    clientMutationId?: ?string;
  };
|};
export type RemoveTodoMutationResponse = {|
  +removeTodo: ?{|
    +viewer: ?{|
      +numTodos: ?number;
      +numCompletedTodos: ?number;
    |};
    +deletedId: ?string;
  |};
|};
*/


/*
mutation RemoveTodoMutation(
  $input: RemoveTodoInput!
) {
  removeTodo(input: $input) {
    viewer {
      numTodos
      numCompletedTodos
      id
    }
    deletedId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveTodoInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RemoveTodoMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RemoveTodoInput!"
          }
        ],
        "concreteType": "RemoveTodoPayload",
        "name": "removeTodo",
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
            "name": "deletedId",
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
  "name": "RemoveTodoMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveTodoInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "RemoveTodoMutation",
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
            "type": "RemoveTodoInput!"
          }
        ],
        "concreteType": "RemoveTodoPayload",
        "name": "removeTodo",
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
            "name": "deletedId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation RemoveTodoMutation(\n  $input: RemoveTodoInput!\n) {\n  removeTodo(input: $input) {\n    viewer {\n      numTodos\n      numCompletedTodos\n      id\n    }\n    deletedId\n  }\n}\n"
};

module.exports = batch;
