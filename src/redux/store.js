import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userRegisterLoginReducer } from "./reducers/authReducer";
import loadingReducer from "./reducers/loadingReducer";

const reducer = combineReducers({
  userRegisterLogin: userRegisterLoginReducer,
});

const userInfoInLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

const loadingInfo = {
  isLoading: false,
  error: null,
};

const INITIAL_STATE = {
  userRegisterLogin: { userInfo: userInfoInLocalStorage },
};

const store = createStore(reducer, INITIAL_STATE, applyMiddleware(thunk));

export default store;
