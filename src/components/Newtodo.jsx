import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todosActions";

import "../App.scss"

const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.title.value) dispatch(addTodo(event.target.title.value))
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input" type="text" name="title" placeholder="Нажмите Enter, чтобы добавить задачу." />
      <input className="input" type="text" name="title" placeholder="Нажмите Enter, чтобы добавить задачу." />
      <input className="input" type="date" name="title" placeholder="Нажмите Enter, чтобы добавить задачу." />
      <input type="text" name="title" placeholder="Нажмите Enter, чтобы добавить задачу." />
    </form>
  );
};

export default NewTodo;
