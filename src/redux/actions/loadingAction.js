import {
  START_LOADING,
  STOP_LOADING_ERROR,
  STOP_LOADING_SUCCESS,
} from "../constants/loadingConstants";

export const startLoading = () => (dispatch) => {
  dispatch({ type: START_LOADING });
};

export const stopLoadingSuccess = () => (dispatch) =>
  dispatch({
    type: STOP_LOADING_SUCCESS,
  });

export const stopLoadingError = () => (dispatch) =>
  dispatch({
    type: STOP_LOADING_ERROR,
  });
