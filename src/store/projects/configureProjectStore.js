import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import projectReducer from "./projects";
export default function () {
  return createStore(projectReducer, devToolsEnhancer());
}
