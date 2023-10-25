// Store Reducer - for store owners - will be held later 
// Store reducer: {Object} all about user

import {
    SET_STORE,
  } from "../actions/storeActions";
  
  const initialState = {
   storeObj:{}
  };
  
  const storeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_STORE:
        return { ...state, const: action.payload };
      default:
        return state;
    }
  };
  
  export default storeReducer;
