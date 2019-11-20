import * as React from "react";
import { Form, Input, Button, Spin } from "antd";
import { useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { getOneTodo, updateOneTodo } from "./queries";

const EditTodo: React.FC<RouteComponentProps> = ({ id }) => {
  const [value, setValue] = useState<string>("");

  const { loading, error, data } = useQuery(getOneTodo, {
    variables: { id }
  });

  const [updateTodo] = useMutation(updateOneTodo);

  if (loading) return <Spin />;
  if (error) return <p>Error :(</p>;

  const { type } = data.todo;

  return (
    <div key={id}>
      <div style={{ marginBottom: 20 }}></div>
      <p>{type}</p>
      <div style={{ marginBottom: 20 }}></div>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateTodo({ variables: { id, type: value } });

          setValue("");
          navigate("/");
        }}
      >
        <Input value={value} onChange={e => setValue(e.target.value)} />
        <div style={{ marginBottom: 20 }}></div>
        <div style={{ marginBottom: 20 }}></div>
        <Button type="primary" htmlType="submit">
          Update Todo
        </Button>
      </form>
    </div>
  );
};

export default EditTodo;
