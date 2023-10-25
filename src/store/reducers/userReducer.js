// User reducer: {Object} all about user

import {
  SET_USER,
} from "../actions/userActions";

const initialState = {
 userObj:{}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, userObj: action.payload };
    default:
      return state;
  }
};

export default userReducer;
