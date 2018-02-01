/**
 * @flow
 * @relayHash 4968e51fbf84464f6011c98934a69a7a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ChangeTodoStatusMutationVariables = {|
  input: {
    id: string;
    complete: boolean;
    clientMutationId?: ?string;
  };
|};
export type ChangeTodoStatusMutationResponse = {|
  +changeTodoStatus: ?{|
    +viewer: ?{|
      +id: string;
      +numCompletedTodos: ?number;
    |};
    +todo: ?{|
      +id: string;
      +complete: ?boolean;
    |};
  |};
|};
*/


/*
mutation ChangeTodoStatusMutation(
  $input: ChangeTodoStatusInput!
) {
  changeTodoStatus(input: $input) {
    viewer {
      id
      numCompletedTodos
    }
    todo {
      id
      complete
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
        "type": "ChangeTodoStatusInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ChangeTodoStatusMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ChangeTodoStatusInput!"
          }
        ],
        "concreteType": "ChangeTodoStatusPayload",
        "name": "changeTodoStatus",
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
                "name": "numCompletedTodos",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "name": "todo",
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
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "ChangeTodoStatusMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "ChangeTodoStatusInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ChangeTodoStatusMutation",
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
            "type": "ChangeTodoStatusInput!"
          }
        ],
        "concreteType": "ChangeTodoStatusPayload",
        "name": "changeTodoStatus",
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
                "name": "numCompletedTodos",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "name": "todo",
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
    ]
  },
  "text": "mutation ChangeTodoStatusMutation(\n  $input: ChangeTodoStatusInput!\n) {\n  changeTodoStatus(input: $input) {\n    viewer {\n      id\n      numCompletedTodos\n    }\n    todo {\n      id\n      complete\n    }\n  }\n}\n"
};

module.exports = batch;
