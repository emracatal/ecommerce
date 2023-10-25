import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import globalReducer from "./reducers/globalReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import storeReducer from "./reducers/storeReducer";


const reducer = combineReducers({
  global: globalReducer,
  product: productReducer,
  shopping: shoppingCartReducer,
  user: userReducer,
  stores: storeReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
