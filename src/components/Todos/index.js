import { useState } from "react";
import Form from "./Form";
import List from "./List";

function Todo() {
  const [todo, setTodo] = useState([]);
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <Form todos={todo} actionTodo={setTodo} />
      <List todos={todo} actionTodo={setTodo} />
    </section>
  );
}

export default Todo;
