import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todos/todosActions";

import "../App.scss";
import { selectVisibleTodos } from "../store/todos/todosSelectors";

const TodoList = () => {
  const activeFilter = useSelector(state => state.filters)

  const todos = useSelector(state => selectVisibleTodos(state, activeFilter))

  const dispatch = useDispatch();

  return (
    <div className="todos">
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <label className="checkcase" style={{backgroundColor: todo.completed ? "#FFD52E" : null}}>
            {todo.completed ? <div className="symbol">&#x2713;</div> : null}
          <input
            className="checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          </label>
          <div className="text" style={{textDecoration: todo.completed ? "line-through 2px #FFD52E" : null}}>{todo.title}</div>
          <div className="delete" onClick={() => dispatch(removeTodo(todo.id))}><div className="minus"></div></div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
