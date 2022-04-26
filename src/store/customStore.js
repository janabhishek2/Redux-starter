import reduce from "./reducer";

function createStore(reduce) {
  let state = [];
  let listeners = [];
  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reduce(state, action);

    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }
  function subscribe(listener) {
    listeners.push(listener);
  }
  return {
    getState,
    dispatch,
    subscribe,
  };
}
export default createStore(reduce);
