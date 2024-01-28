import { toast } from "react-toastify";
import axiosWithAuth from "../../api/axiosWithAuth";

export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_PRODUCT_COUNT = "UPDATE_PRODUCT_COUNT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: { product },
});

export const updateItemCount = (productId, newCount) => {
  return {
    type: UPDATE_PRODUCT_COUNT,
    payload: { productId, newCount },
  };
};

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: { productId },
});

export const fetchAddresses = () => (dispatch) => {
  axiosWithAuth()
    .get("user/address")
    .then(function (response) {
      console.log(response);
      dispatch(setAddress(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const setNewAddress = (formData) => (dispatch) => {
  axiosWithAuth()
    .post("user/address", formData)
    .then(function (response) {
      toast.success("New address saved");
    })
    .catch((err) => {
      console.error(err);
      toast.error("New address couldn't saved");
    });
};

export const setAddress = (address) => {
  return {
    type: SET_ADDRESS,
    payload: address,
  };
};

export const fetchPayment = () => (dispatch) => {
  axiosWithAuth()
    .get("user/card")
    .then(function (response) {
      console.log(response);
      dispatch(setPayment(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const setNewPayment = (formData) => (dispatch) => {
  axiosWithAuth()
    .post("user/card", formData)
    .then(function (response) {
      toast.success("New address saved");
    })
    .catch((err) => {
      console.error(err);
      toast.error("New address couldn't saved");
    });
};

export const setPayment = (payment) => {
  return {
    type: SET_PAYMENT,
    payload: payment,
  };
};
