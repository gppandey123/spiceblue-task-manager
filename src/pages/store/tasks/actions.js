import { types } from "../../../store/reducers/tasks";

export const setTasks = (payload) => ({ type: types.add, payload });
