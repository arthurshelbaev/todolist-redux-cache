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
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <div className="text" style={{textDecoration: todo.completed ? "line-through" : null}}>{todo.title}</div>
          <button className="delete" onClick={() => dispatch(removeTodo(todo.id))}>&times;</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
