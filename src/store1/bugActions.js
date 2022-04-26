import * as action_types from "./actionTypes";

let lastId = 0;
export const bugAdded = (desc) => {
  return {
    type: action_types.bugAdded,
    payload: {
      description: desc,
    },
  };
};
export const bugResolved = (id) => {
  return {
    type: action_types.bugResolved,
    payload: {
      id,
    },
  };
};
