import configureStore from "./store1/configStore";
import * as actions from "./store1/bugActions";

const store = configureStore();
store.subscribe(() => {
  console.log("State Changed.. :(");
});
store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 2"));
store.dispatch(actions.bugAdded("Bug 3"));
store.dispatch(actions.bugResolved(2));
store.dispatch(actions.bugAdded("Bug 4"));
console.log(store.getState());
