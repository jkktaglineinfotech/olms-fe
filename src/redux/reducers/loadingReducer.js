import {
  START_LOADING,
  STOP_LOADING_ERROR,
  STOP_LOADING_SUCCESS,
} from "../constants/loadingConstants";

export const loadingReducer = (state = {}, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true, error: null };

    case STOP_LOADING_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case STOP_LOADING_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
