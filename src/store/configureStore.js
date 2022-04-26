import { createStore } from "redux";

import reduce from "./bugs";

export default createStore(
  reduce,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
