import * as React from "react";
import { Form, Input, Button } from "antd";

const TodoForm: React.FC = ({ handleChange, handleSubmit }) => {
  const [value, setValue] = React.useState<string>("");

  return (
    <Form>
      <label htmlFor="todos">
        todos
        <Input
          type="text"
          placeholder="Add todos"
          value={value}
          onChange={handleChange}
        />
      </label>
      <Button
        htmlType="submit"
        type="primary"
        size="large"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Form>
  );
};

export default TodoForm;
