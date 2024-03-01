import { LOGIN_USER, LOGOUT_USER } from "../constants/authConstants";

export const setReduxUserState = (userCreated) => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
    payload: userCreated,
  });
};

export const logout = () => (dispatch) => {
  document.location.href = "/login";
  localStorage?.clear();

  dispatch({ type: LOGOUT_USER });
};
