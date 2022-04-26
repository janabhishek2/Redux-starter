let lastId = 0;

import { indexOf } from "lodash";
import * as actionTypes from "./actionTypes";
export default function bugReducer(state = [], action) {
  if (action.type == actionTypes.bugAdded) {
    const newState = [...state];
    const bug = {
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    };
    newState.push(bug);
    return newState;
  } else if (action.type == actionTypes.bugResolved) {
    const newState = [...state];
    const element = newState.find((ele) => {
      return ele.id == action.payload.id;
    });
    if (element != undefined) {
      newState[indexOf(newState, element)].resolved = true;
    }
    return newState;
  } else return [...state];
}
