import {
  START_LOADING,
  STOP_LOADING_ERROR,
  STOP_LOADING_SUCCESS,
} from "../constants/loadingConstants";

export const startLoading = () => ({ type: START_LOADING });

export const stopLoadingSuccess = () => ({ type: STOP_LOADING_SUCCESS });

export const stopLoadingError = () => ({ type: STOP_LOADING_ERROR });
