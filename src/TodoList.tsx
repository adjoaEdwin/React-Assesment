import * as React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import Todo from "./Todo";
import { useQuery } from "@apollo/react-hooks";
import { List, Button, Spin } from "antd";
import { getTodos } from "./queries";

interface TodoListProps {
  todos: Todos[];
}

const TodoList: React.FC<RouteComponentProps> = () => {
  const { loading, error, data } = useQuery(getTodos);

  if (loading) return <Spin style={{ textAlign: "center" }} />;
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Link to="/todos/new">
        <Button type="primary">Add Todo</Button>
      </Link>
      <h1>All todos</h1>
      <List
        locale={{ emptyText: "No todo items" }}
        dataSource={data.todos}
        renderItem={item => (
          <Todo name={item.type} id={item.id} key={item.id} />
        )}
      />
    </div>
  );
};

export default TodoList;
