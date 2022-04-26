import { createStore } from "redux";

import reduce from "./bugReducer";

export default function () {
  return createStore(reduce);
}
