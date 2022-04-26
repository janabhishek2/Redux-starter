import getStore from "./store/configureStore";
import * as actionsProjects from "./store/projects/projects";
import { bugAdded, bugResolved, getUnresolvedbugs } from "./store/bugs/bugs";

const store = getStore();
store.subscribe(() => {
  console.log("Project store state change detected .. ");
});

store.dispatch(actionsProjects.addProject("Project1"));
store.dispatch(actionsProjects.addProject("Project2"));

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 2"));
store.dispatch(bugAdded("Bug 3"));
store.dispatch(bugResolved(2));

const x = getUnresolvedbugs(store.getState());
const y = getUnresolvedbugs(store.getState());
console.log(x, y, 1);

console.log(store.getState());
