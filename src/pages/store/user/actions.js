import { types } from "../../../store/reducers/user";

export const setUserLogin = (payload) => ({ type: types.login, payload });
export const setUserDetails = (payload) => ({ type: types.details, payload });
export const deleteUser = () => ({ type: types.logout });
