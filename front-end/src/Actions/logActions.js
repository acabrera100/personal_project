import * as ActionTypes from "./actionTypes";

export const login = (email, password) => ({
  type: ActionTypes.LOGIN_REQUESTED,
  email,
  password,
});

export const logout = () => ({
  type: ActionTypes.LOGOUT_REQUESTED,
});
