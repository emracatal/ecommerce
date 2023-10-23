// - Global reducer:
//     - roles: {Object Array}
//     - categories: {Object Array}
//     - theme: {String}
//     - language: {String}
const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ROLES":
      return { ...state, roles: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
export default globalReducer