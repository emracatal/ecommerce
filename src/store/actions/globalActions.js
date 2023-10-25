import { useDispatch } from "react-redux";
import axiosInstance from "../../api/api";

export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setRoles = () => (dispatch) => {
  return axiosInstance
  .get("/roles")
  .then((response) => {
    dispatch( {
      type: SET_ROLES,
      payload: response.data});
    console.log("roles data:", response.data);
  })
  .catch((error) => {
    console.error(error);
  });
  // return {
  //   type: SET_ROLES,
  //   payload: roles,
  // };
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