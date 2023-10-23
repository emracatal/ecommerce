import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import globalReducer from "../reducers/globalReducer"
import productReducer from "../reducers/productReducer"
import shoppingCartReducer from "../reducers/shoppingCartReducer"
import userReducer from "../reducers/userReducer"
import storeReducer from "../reducers/storeReducer"
import { composeWithDevTools } from "@redux-devtools/extension";


const reducer =  combineReducers({global:globalReducer,product:productReducer,shopping:shoppingCartReducer,user:userReducer,stores:storeReducer})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
  );
  
  export default store;