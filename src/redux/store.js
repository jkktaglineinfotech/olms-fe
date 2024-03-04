import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userRegisterLoginReducer } from "./reducers/authReducer";
import { loadingReducer } from "./reducers/loadingReducer";
const reducer = combineReducers({
  userRegisterLogin: userRegisterLoginReducer,
  loading: loadingReducer,
});

const userInfoInLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

const INITIAL_STATE = {
  userRegisterLogin: { userInfo: userInfoInLocalStorage },
  loading: { isLoading: false, error: null },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

//const store = createStore(reducer, INITIAL_STATE, applyMiddleware(thunk));

export default store;
