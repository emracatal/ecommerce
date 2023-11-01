import axiosInstance from "../../api/api";

export const SET_USER = "SET_USER";

export const login = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post("/login", formData);
      dispatch(setUser(response.data));
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
};

export const setUser = (userObj) => {
  return {
    type: SET_USER,
    payload: userObj,
  };
};
