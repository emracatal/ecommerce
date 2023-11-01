import axiosInstance from "../../api/api";

export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILURE = "FETCH_ROLES_FAILURE";

export const fetchRoles = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/roles");
    dispatch({ type: "FETCH_ROLES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_ROLES_FAILURE" });
  }
};

export const setRoles = (roles) => {
  return {
    type: SET_ROLES,
    payload: roles,
  };
};




export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/categories");
    dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_CATEGORIES_FAILURE" });
  }
};

export const setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
};

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};
