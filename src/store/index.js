import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle"

import {rootReducer} from './rootReducer';

export const configureStore = () => {
  const persistedState = loadState()

  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos,
      message: store.getState().message,
    })
  }, 500))

  return store
}
