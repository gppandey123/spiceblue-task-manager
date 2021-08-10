export const types = {
  add: "CREATE_TASK",
  delete: "DELETE_TASK",
  update: "UPDATE_TASK",
};
const initialState = {
  task: [],
};
export default function task(state = initialState, actions) {
  switch (actions.type) {
    case types.add:
      return {
        ...state,
        tasks: actions.payload,
      };
    default:
      return state;
  }
}
