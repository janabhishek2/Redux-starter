import { createAction } from "@reduxjs/toolkit";

const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";
const BUG_UNRESOLVED = "bugUnresolved";

const bugResolvedActionCreator = createAction(BUG_RESOLVED);
const bugResolvedAction = bugResolvedActionCreator({ id: 1 });
console.log(bugResolvedActionCreator);

export const bugAdded = (description) => {
  return {
    type: BUG_ADDED,
    payload: {
      description,
    },
  };
};

export const bugRemoved = (id) => {
  return {
    type: BUG_REMOVED,
    payload: {
      id,
    },
  };
};

export const bugResolved = (id) => {
  return {
    type: BUG_RESOLVED,
    payload: {
      id,
    },
  };
};
export const bugUnResolve = (id) => {
  return {
    type: BUG_UNRESOLVED,
    payload: {
      id,
    },
  };
};

let lastId = 0;
export default function bugsReducer(state = [], action) {
  if (action.type == BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        isResolved: false,
      },
    ];
  } else if (action.type == BUG_REMOVED) {
    --lastId;
    return state.filter((ele) => {
      return ele.id != action.payload.id;
    });
  } else if (action.type == BUG_RESOLVED) {
    return state.map((bug) =>
      bug.id != action.payload.id ? bug : { ...bug, isResolved: true }
    );
  } else if (action.type == BUG_UNRESOLVED) {
    return state.map((bug) => {
      return bug.id != action.payload.id ? bug : { ...bug, isResolved: false };
    });
  } else return state;
}