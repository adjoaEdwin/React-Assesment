import * as React from "react";
import { Link } from "@reach/router";
import { Button, List } from "antd";

const Todo: React.FC = ({ name, id }) => {
  return (
    <List.Item
      actions={[
        <Link to={`/todos/edit/${id}`}>
          <Button type="primary">Edit Todo</Button>
        </Link>,
        <Link to={`/todos/${id}`}>
          <Button>View</Button>
        </Link>
      ]}
    >
      {name}
    </List.Item>
  );
};

export default Todo;
