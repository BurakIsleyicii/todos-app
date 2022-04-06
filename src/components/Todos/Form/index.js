import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const initialFormValues = { id: uuidv4(), todoText: "", isCompleted: false };

function Form({ actionTodo, todos }) {
  const [input, setInput] = useState(initialFormValues);

  useEffect(() => {
    setInput(initialFormValues);
  }, [todos]);

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (input.todoText === "") {
      return false;
    }
    input.id = uuidv4();
    actionTodo([...todos, input]);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        name="todoText"
        value={input.todoText}
        onChange={onChangeInput}
      />
    </form>
  );
}

export default Form;
