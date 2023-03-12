import { TOGGLE_TODO, ADD_TODO, REMOVE_TODO } from './todosConst';

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        {
          id: Date.now(),
          title: action.title,
          completed: false
        },
        ...state
      ];
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    }
    default: {
      return state;
    }
  }
};