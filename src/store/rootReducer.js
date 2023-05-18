import { combineReducers } from "redux";

import { todos } from "./todos/todosReducer";
import { filters } from "./filters/filterReducer";
import { message } from "./message/messageReducer";

export const rootReducer = combineReducers({
  todos,
  filters,
  message
});
