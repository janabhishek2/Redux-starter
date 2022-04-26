import { combineReducers } from "redux";
import bugsReducer from "./bugs/bugs";
import projectReducer from "./projects/projects";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectReducer,
});
