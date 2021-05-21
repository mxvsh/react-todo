import { createStore, combineReducers } from "redux";

import { listsReducer } from "./lists/lists.reducer";

const reducers = combineReducers({
  lists: listsReducer,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
