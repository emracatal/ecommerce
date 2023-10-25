// - Global reducer:
//     - roles: {Object Array}
//     - categories: {Object Array}
//     - theme: {String}
//     - language: {String} //roller çekilecek thunk ile, store reducer yazılacak
import {
  SET_ROLES,
  SET_CATEGORIES,
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
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
export default globalReducer;
