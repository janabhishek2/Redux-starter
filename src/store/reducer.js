import * as actionTypes from "./actionTypes";

let lastId = 0;
export default function reduce(state = [], action) {
  if (action.type == actionTypes.BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        isResolved: false,
      },
    ];
  } else if (action.type == actionTypes.BUG_REMOVED) {
    --lastId;
    return state.filter((ele) => {
      return ele.id != action.payload.id;
    });
  } else if (action.type == actionTypes.BUG_RESOLVED) {
    return state.map((bug) =>
      bug.id != action.payload.id ? bug : { ...bug, isResolved: true }
    );
  } else if (action.type == actionTypes.BUG_UNRESOLVED) {
    return state.map((bug) => {
      return bug.id != action.payload.id ? bug : { ...bug, isResolved: false };
    });
  } else return state;
}
