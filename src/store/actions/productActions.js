import axiosInstance from "../../api/api";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCT_COUNT = "SET_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_TOTALPRODUCTS = "SET_TOTALPRODUCTS ";

export const fetchProducts = (params) => {
  return (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    axiosInstance
      .get("products", { params })
      .then((res) => {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: res.data.products,
        });
        dispatch({ type: SET_TOTALPRODUCTS, payload: res.data.total });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PRODUCTS_FAILURE,
          error: error.message,
        });
      });
  };
};

export const setProducts = (product) => {
  return {
    type: SET_PRODUCTS,
    payload: product,
  };
};

export const setProductCount = () => {
  return {
    type: SET_PRODUCT_COUNT,
  };
};

export const setPageCount = (count) => {
  return {
    type: SET_PAGE_COUNT,
    payload: count,
  };
};

export const setActivePage = (page) => {
  return {
    type: SET_ACTIVE_PAGE,
    payload: page,
  };
};

export const setFetchState = (fetchState) => {
  return {
    type: SET_FETCH_STATE,
    payload: fetchState,
  };
};
