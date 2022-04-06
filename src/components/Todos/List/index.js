import { useState } from "react";
import Footer from "../Footer";
function List({ todos, actionTodo }) {
  const [filteredTodo, setFilteredTodo] = useState(todos);

  const removeItem = (id) => actionTodo(todos.filter((x) => x.id !== id));

  const checkboxChange = (id) => {
    actionTodo(
      todos.map((item) => {
        if (id === item.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      })
    );
  };

  const todosCompleted = () => {
    if (todos.every((item) => item.isCompleted)) {
      actionTodo(
        todos.map((item) => {
          return { ...item, isCompleted: false };
        })
      );
    } else {
      actionTodo(
        todos.map((item) => {
          if (item.isCompleted !== true) {
            return { ...item, isCompleted: true };
          }
          return { ...item };
        })
      );
    }
  };

  return (
    <>
      <section className="main">
        <input
          onChange={() => todosCompleted()}
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
        />

        <label
          htmlFor="toggle-all"
          className={todos.length === 0 ? "hidden" : "show"}
        >
          Mark all as complete
        </label>

        <ul className="todo-list">
          {filteredTodo.map((todo, index) => (
            <li key={index} className={todo.isCompleted ? "completed" : ""}>
              <div className="view">
                <input
                  type="checkbox"
                  className="toggle"
                  checked={todo.isCompleted}
                  onChange={() => checkboxChange(todo.id)}
                />
                <label>{todo.todoText}</label>
                <button
                  onClick={() => removeItem(todo.id)}
                  className="destroy"
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <Footer
        actionTodo={actionTodo}
        todos={todos}
        actionFilteredTodo={setFilteredTodo}
        filteredTodos={filteredTodo}
      />
    </>
  );
}

export default List;
