import getProjectStore from "./store/projects/configureProjectStore";
import * as actions from "./store/projects/projects";
const store = getProjectStore();
store.subscribe(() => {
  console.log("Project store state change detected .. ");
});

store.dispatch(actions.addProject("Project1"));
store.dispatch(actions.addProject("Project2"));

console.log(store.getState());
