import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todos/todosActions";

import "../App.scss";
import { selectVisibleTodos } from "../store/todos/todosSelectors";

const TodoList = () => {
  const activeFilter = useSelector(state => state.filters)

  const todos = useSelector(state => selectVisibleTodos(state, activeFilter))
  const message = useSelector(state => state.message)

  const dispatch = useDispatch();

  const [showDel, setShowDel] = useState(false)

  let timeout

  function down() {
    timeout = setTimeout(() => {
      setShowDel(!showDel)
    }, 600)
  }

  function up() {
    clearTimeout(timeout)
  }

  return (
    <div className="todos" style={{paddingBottom: message ? "30vh" : "13vh"}}>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <label className="checkcase" style={{ backgroundColor: todo.completed ? "#FFD52E" : null, border: todo.completed ? "1px solid #FFD52E" : "1px solid #b7b7b7" }}>
            {todo.completed ? <div className="symbol"><svg viewBox="0 0 36 36"><path fill="#31373D" d="M34.459 1.375c-1.391-.902-3.248-.506-4.149.884L13.5 28.17l-8.198-7.58c-1.217-1.125-3.114-1.051-4.239.166-1.125 1.216-1.051 3.115.166 4.239l10.764 9.952s.309.266.452.359c.504.328 1.07.484 1.63.484.982 0 1.945-.482 2.52-1.368L35.343 5.524c.902-1.39.506-3.248-.884-4.149z" /></svg></div> : null}
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
          </label>
          <div className="text"
            onTouchStart={() => down()}
            onTouchEnd={() => up()}
            onMouseDown={() => down()}
            onMouseUp={() => up()}
            style={{ textDecoration: todo.completed ? "line-through 2px #FFD52E" : null }}>{todo.title}
          </div>
          {showDel ? <div className="delete" onClick={() => dispatch(removeTodo(todo.id))}><div className="minus"></div></div> : null}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
