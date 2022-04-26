const ADDPROJECT = "add_project";

let lastId = 0;
export const addProject = (description) => {
  return {
    type: ADDPROJECT,
    payload: {
      description,
    },
  };
};

export default function projectReducer(state = [], action) {
  if (action.type == ADDPROJECT) {
    ++lastId;
    const newState = [...state];
    newState.push({
      id: lastId,
      name: action.payload.description,
    });
    return newState;
  } else return state;
}
