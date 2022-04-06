import { useState, useEffect } from "react";

function Footer({ actionTodo, todos, actionFilteredTodo, filteredTodos }) {
  const [unCompletedTodoCount, setUnCompletedTodoCount] = useState(0);
  const [filterType, setFilterType] = useState(0);

  useEffect(() => {
    if (filterType === 1) {
      actionFilteredTodo(todos.filter((item) => item.isCompleted === false));
    } else if (filterType === 2) {
      actionFilteredTodo(todos.filter((item) => item.isCompleted));
    } else {
      actionFilteredTodo(todos);
    }
  }, [filterType, actionFilteredTodo, todos]);

  useEffect(() => {
    setUnCompletedTodoCount(filteredTodos.filter((x) => !x.isCompleted).length);
  }, [filteredTodos]);

  const clearCompleted = () =>
    actionTodo(todos.filter((item) => !item.isCompleted));
  return (
    <div>
      <footer className={todos.length === 0 ? "hidden" : "footer"}>
        <span className="todo-count">
          <strong>{unCompletedTodoCount}</strong>
          items left
        </span>
        <ul className="filters">
          <li>
            <button
              className={filterType === 0 ? "selected" : ""}
              onClick={() => setFilterType(0)}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={filterType === 1 ? "selected" : ""}
              onClick={() => setFilterType(1)}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className={filterType === 2 ? "selected" : ""}
              onClick={() => setFilterType(2)}
            >
              Completed
            </button>
          </li>
        </ul>
        <button
          onClick={clearCompleted}
          className={
            unCompletedTodoCount === todos.length ? "hidden" : "clear-completed"
          }
        >
          Clear Completed
        </button>
      </footer>
    </div>
  );
}

export default Footer;
