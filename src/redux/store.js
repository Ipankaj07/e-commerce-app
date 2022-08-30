import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
