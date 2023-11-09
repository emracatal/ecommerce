import axiosInstance from "../../api/api";
import axiosWithAuth from "../../api/axiosWithAuth";

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

export const getUserByVerify = () => (dispatch) => {
  axiosWithAuth()
    .get("/verify")
    .then(function (response) {
      dispatch(setUser(response.data));
    })
    .catch(function (error) {
      console.log(error);
      localStorage.setItem("token", "");
    });
};

// APP.JS'deki verify code
// useEffect(() => {
//   if (token) {
//     axiosWithAuth()
//       .get("/verify")
//       .then(function (response) {
//         dispatch(setUser(response.data));
//       })
//       .catch(function (error) {
//         console.log(error);
//         localStorage.setItem("token", "");
//       });
//   }
// }, []);
