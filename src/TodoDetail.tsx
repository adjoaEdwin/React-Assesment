import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "@reach/router";
import { getOneTodo } from "./queries";
import { Spin } from "antd";

const TodoDetail: React.FC = ({ id }) => {
  const { loading, error, data } = useQuery(getOneTodo, {
    variables: { id }
  });

  if (loading) return <Spin />;
  if (error) return <p>Error :(</p>;

  const { type } = data.todo;

  return (
    <div>
      <Link to="/">Back</Link>
      <h3 style={{ margin: "16px 0" }}>Todo</h3>
      <h1>{type}</h1>
    </div>
  );
};

export default TodoDetail;
