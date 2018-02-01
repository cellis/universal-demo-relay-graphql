/**
 * @flow
 * @relayHash b147bfe699682caa98893d91a5ce6c56
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type MarkAllTodosMutationVariables = {|
  input: {
    complete: boolean;
    clientMutationId?: ?string;
  };
  status: string;
|};
export type MarkAllTodosMutationResponse = {|
  +markAllTodos: ?{|
    +viewer: ?{|
      +todos: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string;
            +complete: ?boolean;
            +text: ?string;
          |};
        |}>;
      |};
      +id: string;
      +numCompletedTodos: ?number;
    |};
    +changedTodos: ?$ReadOnlyArray<?{|
      +id: string;
      +complete: ?boolean;
    |}>;
  |};
|};
*/


/*
mutation MarkAllTodosMutation(
  $input: MarkAllTodosInput!
  $status: String!
) {
  markAllTodos(input: $input) {
    viewer {
      todos(status: $status) {
        edges {
          node {
            id
            complete
            text
          }
        }
      }
      id
      numCompletedTodos
    }
    changedTodos {
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
        "type": "MarkAllTodosInput!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "status",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MarkAllTodosMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "MarkAllTodosInput!"
          }
        ],
        "concreteType": "MarkAllTodosPayload",
        "name": "markAllTodos",
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
                "kind": "LinkedField",
                "alias": null,
                "args": [
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
            "name": "changedTodos",
            "plural": true,
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
  "name": "MarkAllTodosMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "MarkAllTodosInput!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "status",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "MarkAllTodosMutation",
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
            "type": "MarkAllTodosInput!"
          }
        ],
        "concreteType": "MarkAllTodosPayload",
        "name": "markAllTodos",
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
                "kind": "LinkedField",
                "alias": null,
                "args": [
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
            "name": "changedTodos",
            "plural": true,
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
  "text": "mutation MarkAllTodosMutation(\n  $input: MarkAllTodosInput!\n  $status: String!\n) {\n  markAllTodos(input: $input) {\n    viewer {\n      todos(status: $status) {\n        edges {\n          node {\n            id\n            complete\n            text\n          }\n        }\n      }\n      id\n      numCompletedTodos\n    }\n    changedTodos {\n      id\n      complete\n    }\n  }\n}\n"
};

module.exports = batch;
