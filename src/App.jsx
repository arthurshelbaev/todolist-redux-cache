import NewTodo from "./components/Newtodo";
import TodoList from "./components/Todolist";

import "./App.scss"
import Filters from "./components/Filters";
import Message from './components/Message';

export default function App() {
  return (
    <div className="app">
      <div className="header">Список задач</div>
      <NewTodo />
      <Filters />
      <TodoList />
      <Message />
      <div className="footer">Приложение создано на React с использованием Redux. Задачи сохраняются локально в кэше браузера.</div>
    </div>
  );
}
