import {combineReducers} from 'redux';
import { filters } from './filters/filterReducer';

import {todos} from './todos/todosReducer';

export const rootReducer = combineReducers({
  todos,
  filters
});