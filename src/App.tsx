import * as React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { ApolloProvider } from "@apollo/react-hooks";
import "antd/dist/antd.css";
import "./App.css";
import SearchBar from "./SearchBar";
import TodoDetail from "./TodoDetail";
import { client } from "./config/db";
import TodoList from "./TodoList";
import EditTodo from "./EditTodo";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Router>
          <TodoList path="/" />
          <SearchBar path="/todos/new" />
          <TodoDetail path="/todos/:id" />
          <EditTodo path="/todos/edit/:id" />
        </Router>
      </div>
    </ApolloProvider>
  );
};

render(<App />, document.getElementById("root"));
