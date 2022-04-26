import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import bugsReducer from "./bugs";

export default function () {
  return createStore(bugsReducer, devToolsEnhancer);
}
