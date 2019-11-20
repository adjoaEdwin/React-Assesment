import * as React from "react";
import { Form, Input, Button, Spin } from "antd";
import { useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { mutation, getOneTodo, updateOneTodo } from "./queries";

const EditTodo: React.FC<RouteComponentProps> = ({ id }) => {
  const [value, setValue] = useState<string>("");

  const { loading, error, data } = useQuery(getOneTodo, {
    variables: { id }
  });

  console.log(data);
  const [updateTodo] = useMutation(updateOneTodo);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { type } = data.todo;

  return (
    <div key={id}>
      <p>{type}</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateTodo({ variables: { id, type: value } });

          setValue("");
        }}
      >
        <Input value={value} onChange={e => setValue(e.target.value)} />
        <button type="submit">Update Todo</button>
      </form>
    </div>
  );
};

export default EditTodo;
