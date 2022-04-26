import store from "./store/configureStore";
import * as actions from "./store/bugs";

store.subscribe(() => {
  console.log("Store Changed...");
});
store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 2"));
store.dispatch(actions.bugAdded("Bug 3"));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());
/* import store from "./store";
import * as actions from "./actions";
console.log(store);
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed : ", store.getState());
});
// UI elements subscribe to store
// We call dispatch method of store - action sfrom UI to update the store via reducer
store.dispatch(actions.bugAdded("Bug1"));

store.dispatch(actions.bugResolved(1));
store.dispatch(actions.bugAdded("Bug-2"));

store.dispatch(actions.bugResolved(2));
store.dispatch(actions.bugUnResolve(1));
store.dispatch(actions.bugResolved(1)); */
