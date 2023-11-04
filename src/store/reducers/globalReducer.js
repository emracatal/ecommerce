// - Global reducer:
//     - roles: {Object Array}
//     - categories: {Object Array}
//     - theme: {String}
//     - language: {String} //roller çekilecek thunk ile, store reducer yazılacak
import {
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
  SET_ROLES,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  SET_THEME,
  SET_LANGUAGE,
} from "../actions/globalActions";

const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        roles: action.payload,
      };
    case FETCH_ROLES_FAILURE:
      return state;
    case SET_ROLES:
      return { ...state, role: action.payload };
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
export default globalReducer;
