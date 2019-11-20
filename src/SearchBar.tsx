import * as React from "react";
import { Form, Input, Button } from "antd";
import { useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { useMutation } from "@apollo/react-hooks";
import { mutation } from "./queries";

const SearchBar: React.FC<RouteComponentProps> = props => {
  const [value, setValue] = useState<string>("");

  const [addTodo, { data }] = useMutation(mutation);
  console.log(data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    addTodo({ variables: { type: value } });

    setValue("");

    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="todoContainer">
      <Form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 20 }}></div>
        <label htmlFor="todos">
          Create Todo
          <div style={{ marginBottom: 20 }}></div>
          <Input
            type="text"
            placeholder="Add todos"
            value={value}
            onChange={handleChange}
          />
        </label>
        <div style={{ marginBottom: 20 }}></div>
        <div style={{ marginBottom: 20 }}></div>
        <Button htmlType="submit" type="primary" size="large">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
