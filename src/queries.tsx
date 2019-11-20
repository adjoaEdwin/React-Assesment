import gql from "graphql-tag";

export const getTodos = gql`
  {
    todos {
      id
      type
    }
  }
`;

export const mutation = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export const getOneTodo = gql`
  query GetOneTodo($id: String!) {
    todo(id: $id) {
      id
      type
    }
  }
`;

export const updateOneTodo = gql`
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;
